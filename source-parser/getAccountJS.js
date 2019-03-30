const htmlparser = require('htmlparser')
const fetchText = require('./fetchText.js')

const accountsUrl = 'https://accounts.magister.net'

function buildURL(base, params = {}) {
	const items = []
	for (const k in params) {
		items.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	}
	if (items.length > 0) {
		return base + '?' + items.join('&')
	} else {
		return base
	}
}

function generateID() {
	// Extracted and restyled from the Magister sources; had the following comment:
	// @preserve Copyright (c) Microsoft Open Technologies, Inc.
	// Not sure what exactly this is supposed to do, but it generates a random
	// string. It's fine.

	const template = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
	const alphabet = '0123456789abcdef'

	const n = 0
	let res = ''

	for (let i = 0; i < template.length; i++) {
		switch (template[i]) {
		case 'x': res += alphabet[16 * Math.random() | 0]; break
		case 'y': res += alphabet[((16 * Math.random()) & 3) | 8]; break
		default:  res += template[i]; break
		}
	}

	return res
}

async function openidConfiguration() {
	const url = accountsUrl + '/.well-known/openid-configuration'
	return JSON.parse(await fetchText(url))
}

async function getLoginHTML() {
	const config = await openidConfiguration()
	const authorizeEndpoint = config.authorization_endpoint

	const url = buildURL(authorizeEndpoint, {
		'client_id': 'iam-profile',
		'redirect_uri': 'https://accounts.magister.net/profile/oidc/redirect_callback.html',
		'response_type': 'id_token token',
		'scope': 'openid profile email magister.iam.profile',
		'state': generateID(),
		'nonce': generateID(),
	})

	return await fetchText(url)
}

async function getJSurl() {
	const html = await getLoginHTML()

	const handler = new htmlparser.DefaultHandler(function(err, dom) {
		if (err) {
			throw err
		}
	})
	const parser = new htmlparser.Parser(handler)
	parser.parseComplete(html)

	for (const elem of htmlparser.DomUtils.getElementsByTagName('script', handler.dom)) {
		if (elem.attribs && elem.attribs.src) {
			return accountsUrl + elem.attribs.src
		}
	}

	throw new Error('Script element not found in page')
}

async function getAccountJS() {
	return await fetchText(await getJSurl())
}

module.exports = getAccountJS

// getAuthcode().then(r => console.log(r));
