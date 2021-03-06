/**
 * 服务请求，业务相关
 *
 * Created by apple on 2017/1/3.
 */



import { getFileType, refreshToken } from '../../../apps/src/module/publicFunc';
import Config from '../../configs';
import msg from '../msg';
import tips from '../tip';
/**
*  请求参数
*/
interface Param {
	[keys: string]: any
}

// 请求体
interface Request {
	method: string;
	headers: { Accept: string, 'Content-Type': string, Authorization: string, [other: string]: string };
	body?: any
}
// 响应体
interface Response {
	/**
	*  响应码   200：成功  
	*/
	status: number,
	/**
	*  响应数据
	*/
	data: any,
	/**
	*  服务端返回的消息
	*/
	message: string
}

type ApiCallback = (data: Param, success: boolean) => void

// callback 回调函数有两个返回值，第一个返回值返回结果数据或错误信息，第二个返回值返回请求是否成功
export default class request {

	static buildUrl(url: string, params: Param) {
		if (!params) return url;
		let result = request.getParamsArray(params);
		if (result.length == 0) { return url }
		let prefix = '?';
		if (url.indexOf('?') > -1) {
			prefix = '&';
		}
		return url + prefix + result.join('&');
	}

	static getParamsArray(params: Param) {
		let result: string[] = [];
		if (!params) return result;
		Object.keys(params).forEach(key => {
			if (params.hasOwnProperty(key)) {
				let value = params[key];
				if (value != undefined && value != null) {
					result.push(key + '=' + encodeURIComponent(value));
				}
			}
		});
		return result;
	}

	/**
	*  http 请求封装
	*/
	static http(url: string, req: Request) {

		return new Promise((resolve, reject) => {
			fetch(url, req)
				.then(res => {
					return res.json()
				})
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				})
		});
	};

	static requestUrlArr: string[] = []

	/**
	*  http请求参以及响应处理
	uri:接口
	method:请求方法
	params：请求参数
	loding：是否显示转动指示器
	rreprocessing：对象应是否预处理
	*/
	static requestTask(url: string, method: 'POST' | 'GET', params: Param = {}, loding: boolean = false, rreprocessing: boolean = true) {

		if (loding) {
			if (this.requestUrlArr.indexOf(url) != -1) {
				return Promise.reject({ message: '请不要频繁触发' });
			} else {
				this.requestUrlArr.push(url);
			}
		}


		/* 处理url */
		let finalUrl = url;
		if (finalUrl.substring(0, 4) != "http") {
			finalUrl = Config.apiHost + finalUrl
		}

		/* 没有token 就给加一个 */
		if (!params.token && Config.token) {
			params.token = Config.token || ''
		}

		if (method == 'GET') {
			finalUrl = finalUrl + '?' + this.getParamsArray(params).join('&');
		}

		var requestData = {
			method,
			headers: {
				Accept: 'application/json',
				'Content-Type': method == 'GET' ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/x-www-form-urlencoded;charset=UTF-8',
				Authorization: Config.token || ''
			},
			body: method == 'GET' ? this.getParamsArray(params).join('&') : this.getParamsArray(params).join('&'),
		};

		if (loding) {
			tips.showLoading()
		}

		return new Promise<any>((resolve, reject) => {
			this.http(finalUrl, requestData).then(
				(res: any) => {

					let response = res as Response
					// 测试环境打印访问结果
					if (__DEV__) {
						console.log('访问接口:' + method + '==>' + finalUrl)
						console.log('访问参数:', params)
						console.log('响应数据', response)
					}
					if (loding) {
						tips.hideLoading()
						// 移除url缓存
						let index = this.requestUrlArr.indexOf(url)
						if (index != -1) {
							this.requestUrlArr.splice(index, 1)
						}
					}

					if (rreprocessing) {

						if (response.status == 200) { // 成功
							resolve(response.data)

						} else if (response.status == 40001) {

							// token过时 刷新一下
							let refreshPromise = refreshToken().then(res => {
								params.token = res.token
								return this.post(finalUrl, params, loding)
							})
							resolve(refreshPromise)

						} else if (response.status == 40002) {

							reject('token 失效');
							msg.emit('logout', { code: 40002, message: response.message })
						} else if (response.status == 400001005) {
							// 该请求未通过身份认证
							msg.emit('logout', { code: 40002, message: response.message })

						} else { // 其他错误
							if (loding) {
								tips.showTips(response.message);
							}
							reject({ message: response.message, status: response.status });
						}

					} else {
						resolve(response)
					}

				},
				(error: any) => {
					if (__DEV__) {
						console.log(error);
					}
					if (loding) { //  关闭转圈
						tips.hideLoading()
						// 网络错误 提示，并回调
						tips.showTips('网络差，请稍后再试。');

						// 移除url缓存
						let index = this.requestUrlArr.indexOf(url)
						if (index != -1) {
							this.requestUrlArr.splice(index, 1)
						}
					}
					reject({ message: '网络差，请稍后再试。' });
				}
			);
		});
	}


	/**
	*  POST 请求
	*/
	static post(url: string, params: Param = {}, loding: boolean = false) {
		return this.requestTask(url, 'POST', params, loding, true);
	}

	/**
	*  GET 请求
	*/
	static get(url: string, params: Param = {}, loding: boolean = false) {
		return this.requestTask(url, 'GET', params, loding, true);
	}

	/**
	*  http请求 不处理响应型
	*/
	static postDefault(url: string, params: Param = {}, loding: boolean = false) {
		return this.requestTask(url, 'POST', params, loding, false);
	}

	/**
	*  上传
	*/
	static upload(url: string, params: any, loding: boolean = false) {

		/* 处理url */
		if (url.substring(0, 4) != "http") {
			url = Config.apiHost + (url.substring(0, 1) == "/" ? "" : "/") + url
		}

		let formData = new FormData();
		let paths: string[] = params.paths;
		paths.forEach((path, index) => {
			let file = this.getFileData(path)
			formData.append('file', file);
		})

		formData.append('token', Config.token || '')

		Object.keys(params).forEach(key => {
			if (key != 'paths') {
				formData.append(key, params[key])
			}
		})

		let requestData = {
			method: "POST",
			headers: {
				Accept: 'application/json',
				'Content-Type': 'Multipart/form-data',
				Authorization: Config.token || ''
			},
			body: formData
		}

		if (loding) {
			tips.showLoading('上传中...', 60000)
		}

		// 测试环境打印访问结果
		if (__DEV__) {
			console.log('访问接口:UPLOAD' + '==>' + url)
			console.log('访问参数', requestData)
		}

		return new Promise<any>((resolve, reject) => {

			this.http(url, requestData).then(
				(res: any) => {
					let response = res as Response
					// 测试环境打印访问结果
					if (__DEV__) {
						console.log('访问接口:UPLOAD' + '==>' + url)
						console.log('访问参数', requestData)
						console.log('响应数据', response)
					}

					if (loding) {
						tips.hideLoading()
					}
					if (response.status == 200) { // 成功
						resolve(response.data)

					} else if (response.status == 40001) {
						reject('token 需要刷新');

					} else if (response.status == 40002) {

						reject('token 失效');
						msg.emit('logout', { code: 201, msg: 'token 失效' })
					} else { // 其他错误
						if (loding) {
							tips.showTips(response.message);
						}
						reject({ message: '网络差，请稍后再试。' })
					}
				}, (error: any) => {

					if (__DEV__) {
						console.log(error);
					}
					if (loding) { //  关闭转圈
						tips.hideLoading()
						// 网络错误 提示，并回调
						tips.showTips('网络差，请稍后再试。');
					}
					reject({ message: error.message })
				});

		});


	}

	static makeFormData(data: Param) {
		let formData = new FormData();
		for (let key in data) {
			formData.append(key, data[key])
		}
		return formData;
	}

	static hasChina(str: string) {
		if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
			return true
		}
		return false
	}

	/**
	*  从路径中获取文件信息
	*/
	static getFileData(path: string) {

		var arr = path.split('/');
		let tempName = arr[arr.length - 1]
		let type = getFileType(tempName);

		if (this.hasChina(tempName)) {
			tempName = tempName.replace(/[ ]/g, "");//去空格
			tempName = tempName.replace(/[\u4e00-\u9fa5]/g, "");//去除中文
		}
		let file = { uri: path, type, name: tempName };

		return file
	}


}
