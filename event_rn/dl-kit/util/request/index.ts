/**
 * 服务请求，业务相关
 *
 * Created by apple on 2017/1/3.
 */


import { configs } from 'dl-kit';
import { saveLoginInfo } from '../../../apps/src/module/publicFunc';
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
				result.push(key + '=' + encodeURIComponent(value));
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

	/**
	*  http请求参以及响应处理
	uri:接口
	method:请求方法
	params：请求参数
	loding：是否显示转动指示器
	rreprocessing：对象应是否预处理
	*/
	static requestTask(url: string, method: 'POST' | 'GET', params: Param = {}, loding: boolean = false, rreprocessing: boolean = true) {

		/* 处理url */
		if (url.substring(0, 4) != "http") {
			url = Config.apiHost + url
		}

		if (method == 'GET') {
			url = url + '?' + this.getParamsArray(params).join('&');
		}

		var requestData = {
			method,
			headers: {
				Accept: 'application/json',
				'Content-Type': method == 'GET' ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/x-www-form-urlencoded;charset=UTF-8',
				Authorization: Config.token || ''
			},
			body: method != 'GET' && this.getParamsArray(params).join('&'),
		};

		if (loding) {
			tips.showLoading()
		}
		return new Promise<any>((resolve, reject) => {
			this.http(url, requestData).then(
				(res: any) => {

					let response = res as Response
					// 测试环境打印访问结果
					if (__DEV__) {
						console.log('访问接口:' + method + '==>' + url)
						console.log('访问参数:', params)
						console.log('响应数据', response)
					}
					if (loding) {
						tips.hideLoading()
					}

					if (rreprocessing) {
						if (response.status == 200) { // 成功
							resolve(response.data)

						} else if (response.status == 40001) {
							if (configs.refreshToken) {
								// token过时 刷新一下
								let refreshParam = { token: configs.tempToken, timestamp: configs.timestamp, refreshToken: configs.refreshToken }
								let refreshPromise = this.requestTask('/tcssPlatform/user/refreshToken', 'POST', refreshParam, true, true).then(result => {
									saveLoginInfo(result);
									return this.post(url, params, loding)
								})
								resolve(refreshPromise) 
							} else {
								reject('token 失效');
								msg.emit('logout', { code: 201, msg: 'token 失效' });
							}
						} else if (response.status == 40002) {

							reject('token 失效');
							msg.emit('logout', { code: 201, msg: 'token 失效' })
						} else { // 其他错误
							if (loding) {
								tips.showTips(response.message);
							}
							reject({ message: response.message });
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
	static upload(url: string, params: { paths: string[] }, loding: boolean = false) {

		/* 处理url */
		if (url.substring(0, 4) != "http") {
			url = Config.apiHost + (url.substring(0, 1) == "/" ? "" : "/") + url
		}

		let formData = new FormData();
		let paths: string[] = params.paths;
		paths.forEach((path, index) => {
			var arr = path.split('/');
			let file = { uri: path, type: 'image/jpeg', name: arr[arr.length - 1] };
			formData.append('file' + index, file);
		})

		formData.append('uploadType', 'moments')

		let requestData = {
			method: "POST",
			headers: {
				Accept: 'application/json',
				'Content-Type': 'Multipart/form-data',
				Authorization: Config.token ? Config.token : ''
			},
			body: formData
		}

		if (loding) {
			tips.showLoading('上传中...', 60000)
		}

		return new Promise((resolve, reject) => {
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
				},
				(error: any) => {
					if (__DEV__) {
						console.log(error);
					}
					if (loding) { //  关闭转圈
						tips.hideLoading()
						// 网络错误 提示，并回调
						tips.showTips('网络差，请稍后再试。');
					}
					reject({ message: error.message })
				}
			);
		});


	}

	static makeFormData(data: Param) {
		let formData = new FormData();
		for (let key in data) {
			formData.append(key, data[key])
		}
		return formData;
	}


	// static makeFormData(obj:any, form_data?:FormData) {
	// 	var data = [];
	// 	if (obj instanceof File) {
	// 		data.push({ key: "", value: obj });
	// 	}
	// 	else if (obj instanceof Array) {
	// 		for (var j = 0, len = obj.length; j < len; j++) {
	// 			var arr = this.makeFormData(obj[j]);
	// 			for (var k = 0, l = arr.length; k < l; k++) {
	// 				var key = !!form_data ? j + arr[k].key : "[" + j + "]" + arr[k].key;
	// 				data.push({ key: key, value: arr[k].value })
	// 			}
	// 		}
	// 	}
	// 	else if (typeof obj == 'object') {
	// 		for (var j in obj) {
	// 			var arr = makeFormData(obj[j]);
	// 			for (var k = 0, l = arr.length; k < l; k++) {
	// 				var key = !!form_data ? j + arr[k].key : "[" + j + "]" + arr[k].key;
	// 				data.push({ key: key, value: arr[k].value })
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		data.push({ key: "", value: obj });
	// 	}
	// 	if (!!form_data) {
	// 		// 封装
	// 		for (var i = 0, len = data.length; i < len; i++) {
	// 			form_data.append(data[i].key, data[i].value)
	// 		}
	// 	}
	// 	else {
	// 		return data;
	// 	}
	// }
}
