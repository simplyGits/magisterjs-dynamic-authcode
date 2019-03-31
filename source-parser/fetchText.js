const fetch = require('node-fetch')

const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:67.0) Gecko/20100101 Firefox/67.0'

async function fetchText(url, signal) {
	const opts = {
		'headers': { 'User-Agent': userAgent },
		'signal': signal,
	}
	return await (await fetch(url, opts)).text()
}

module.exports = fetchText
