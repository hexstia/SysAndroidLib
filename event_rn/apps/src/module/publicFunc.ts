
/**
*  ===========   公共方法  =============
*/


import dayjs from 'dayjs';
import { configs, msg, request, tips, validator } from 'dl-kit';
import constact from 'dl-kit/configs/constant';
import { UserModel } from 'global';
import { AsyncStorage } from 'react-native';
import { startWebsocketConnection } from './CloudPhoneModule';

type getTempTokenCallback = (token: string, timestamp: number) => void;


/**
*  获得临时token
*/
let getTempToken = (callBack?: getTempTokenCallback) => {

  if (configs.tempToken && configs.timestamp) {
    callBack && callBack(configs.tempToken, configs.timestamp)
    return;
  }

  let timestamp = dayjs().valueOf()
  request.post('/tcssPlatform/user/getTempToken', { timestamp }, true).then(result => {
    configs.tempToken = result.token;
    configs.timestamp = timestamp
    callBack && callBack(result.token, timestamp)
  }).catch(err => {
    tips.showTips('获取获得临时token失败，请重试')
  })
}


/**
*  检查手机号
*/
let isPhoneNum = (phoneNum: any) => {
  let isPhone = validator.isMobilePhone(phoneNum, 'zh-CN')
  if (!isPhone) {
    tips.showTips('请填写正确的手机号')
  }
  return isPhone;
}


/**
*  获取文件类型
*/
function getFileType(name: string) {
  if (!name) return '*/*';
  var imgType = ["gif", "jpeg", "jpg", "bmp", "png"];
  var videoType = ["avi", "wmv", "mkv", "mp4", "mov", "rm", "3gp", "flv", "mpg", "rmvb"];
  if (RegExp("\.(" + imgType.join("|") + ")$", "i").test(name.toLowerCase())) {
    return 'image/*';
  } else if (RegExp("\.(" + videoType.join("|") + ")$", "i").test(name.toLowerCase())) {
    return 'video/*';
  } else {
    return 'file/*';
  }
}

/**
*  刷新token
*/
let refreshToken = () => {

  let refreshPromise = new Promise<any>((resolve, reject) => {

    if (configs.refreshToken) {

      getTempToken((tempToken, timestamp) => {
        let refreshParam = { token: tempToken, timestamp: timestamp, refreshToken: configs.refreshToken }
        request.postDefault('/tcssPlatform/user/refreshToken', refreshParam, true).then(response => {
          console.log('刷新token', response)
          if (response.status == 200) {
            saveLoginInfo(response.data);
            resolve(response.data)
          } else {
            msg.emit('logout', { code: 40001, message: '刷新token失败，请重新登录' });
            reject({ message: '刷新token失败，请重新登录' })
          }

        }).catch(err => {
          msg.emit('logout', { code: 40001, message: '无法刷新token，请重新登录' });
          reject({ message: '无法刷新token，请重新登录' })
        })
      })

    } else {

      reject({ message: '身份信息缺失，请重新登录' });
      msg.emit('logout', { code: 40001, message: '身份信息缺失，请重新登录' });

    }

  })

  return refreshPromise
}

/**
*  保存登录信息
*/
let saveLoginInfo = (loginResult: { refreshToken: string, token: string, userInfo: UserModel }) => {
  try {
    let userInfoStr = JSON.stringify(loginResult.userInfo)
    configs.refreshToken = loginResult.refreshToken
    configs.token = loginResult.token
    configs.userInfo = loginResult.userInfo

    AsyncStorage.setItem(constact.locationSaveKey.refreshToken, loginResult.refreshToken)
    AsyncStorage.setItem(constact.locationSaveKey.token, loginResult.token)
    AsyncStorage.setItem(constact.locationSaveKey.userInfo, userInfoStr)

    //启动websocket
    startWebsocket()
  } catch (error) {
  }
}

/**
*  保存用户信息
*/
let saveUserInfo = (userInfo: UserModel) => {
  let userInfoStr = JSON.stringify(userInfo)
  configs.userInfo = userInfo
  AsyncStorage.setItem(constact.locationSaveKey.userInfo, userInfoStr)
}

/**
*  从本地获取登录信息
*/
let loadLoginInfoFromLocal = async (callBack: (success: boolean) => void) => {
  let refreshToken = await AsyncStorage.getItem(constact.locationSaveKey.refreshToken)
  let token = await AsyncStorage.getItem(constact.locationSaveKey.token)
  let userInfoStr = await AsyncStorage.getItem(constact.locationSaveKey.userInfo)

  if (refreshToken && token && userInfoStr) {

    try {
      let userInfo = JSON.parse(userInfoStr) as UserModel
      configs.userInfo = userInfo
      configs.refreshToken = refreshToken
      configs.token = token
      callBack(true)

      startWebsocket()
      console.log('从本地获取了用户信息', userInfo);
      console.log('本地token：', token);
      console.log('本地刷新token：', refreshToken);
    } catch (error) {
      callBack(false)
    }

  } else {
    callBack(false)
    console.log('本地没有存储登录信息');
  }
}

/**
*  开启socket连接
*/
let startWebsocket = () => {
  if (configs.token) {
    //启动websocket
    startWebsocketConnection().then((msg: string) => {

    }).catch((err: { code: string }) => {
      setTimeout(() => {
        startWebsocket();
      }, 3000);
    })
  } else {
    tips.showTips('未登录，不能开启socket')
  }
}


/**
*  退出登陆 并清除数据
*/
let logoutAndClear = () => {
  configs.refreshToken = undefined
  configs.token = undefined
  configs.userInfo = undefined

  AsyncStorage.removeItem(constact.locationSaveKey.refreshToken)
  AsyncStorage.removeItem(constact.locationSaveKey.token)
  AsyncStorage.removeItem(constact.locationSaveKey.userInfo)
}

/**
*  获取支付状态文字
*/
let getOrderStatusStr = (orderStatu: number) => {
  // '10 下单 15支付中 20 支付完成 30 订单完成',
  switch (orderStatu) {
    case 0:
      return '支付失败'
      break;

    case 10:
      return '已下单'
      break;

    case 15:
      return '未支付'
      break;

    case 20:
      return '支付完成'
      break;

    case 30:
      return '订单完成'
      break;
  }

}

/**
*  检查用户是否有操作权限，
  用户哪些需要操作权限的地方，拦截用
*/
let checkAuthor = () => {
  if (configs.token) {
    return true
  } else {
    msg.emit('logout', { code: 40002, message: '账号未登录，无法获取' })
    return false
  }
}


export { getTempToken, isPhoneNum, saveLoginInfo, loadLoginInfoFromLocal, logoutAndClear, refreshToken, getOrderStatusStr, getFileType, saveUserInfo, checkAuthor };

