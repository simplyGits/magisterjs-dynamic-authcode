const https = require('https')

const URL = 'https://raw.githubusercontent.com/simplyGits/magisterjs-authcode/master/code.json'

const req = function (timeout) {
	return new Promise((resolve, reject) => {
		const rej = msg => reject(new Error(msg))

		const request = https.get(URL, res => {
			const { statusCode } = res

			if (statusCode !== 200) {
				rej(`invalid statusCode: ${statusCode}`)
				res.resume()
				return
			}

			res.setEncoding('utf8')

			let buf = ''
			res.on('data', blob => buf += blob)
			res.on('end', () => {
				try {
					const parsed = JSON.parse(buf)
					resolve(parsed)
				} catch (e) {
					reject(e)
				}
			})
		})

		request.setTimeout(timeout, () => rej('timeout hit'))
	})
}

module.exports = async function (timeout = 1500) {
	try {
		return await req(timeout)
	} catch (e) {
		return require('@magisterjs/authcode')
	}
}
