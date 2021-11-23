import { getStorage } from '../util/baseFunction.js'
let baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : ''

class HttpClient {
	get(option) {
		option.method = 'get'
		return this.http(option)
	}
	post(option) {
		option.method = 'post'
		return this.http(option)
	}
	http(option) {
		return new Promise((resolve, rej) => {
			let token = getStorage('token') || ''
			uni.request({
				method: option.method,
				url: baseURL + option.url,
				data: option.data || {},
				header: { token },
				success: res => {
					console.log(res.data)
					let data = res.data
					console.log(res)
					if (data.code == 0) {
						if (option.message) {
							this.notice(option.message)
						}
						resolve(res)
					} else {
						if (option.message) {
							this.notice(data.msg, 'error')
						}
						rej(res)
					}
				},
				fail: err => {
					this.notice(err, 'error')
					rej(err)
				}
			})
		})
	}
	notice(message, type = 'success') {
		console.log(message)
	}
}


export default new HttpClient()
