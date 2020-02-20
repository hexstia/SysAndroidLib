
/**
*  ===========   公共方法  =============
*/


import dayjs from 'dayjs';
import { configs, request, tips, validator } from 'dl-kit';
import constact from 'dl-kit/configs/constant';
import { UserModel } from 'global';
import { AsyncStorage } from 'react-native';

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
*  保存登录信息
*/
let saveLoginInfo = (loginResult: { refreshToken: string, token: string, userInfo: UserModel }) => {
  configs.refreshToken = loginResult.refreshToken
  configs.token = loginResult.token
  configs.userInfo = loginResult.userInfo

  AsyncStorage.setItem(constact.locationSaveKey.refreshToken, loginResult.refreshToken)
  AsyncStorage.setItem(constact.locationSaveKey.token, loginResult.token)
  AsyncStorage.setItem(constact.locationSaveKey.userInfo, JSON.stringify(loginResult.userInfo))
}

/**
*  从本地获取登录信息
*/
let loadLoginInfoFromLocal = async (callBack:(success:boolean)=>void) => {
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
    } catch (error) {
      callBack(false)
    }

  } else {
    callBack(false)
    console.log('本地没有存储登录信息');
  }
}

export { getTempToken, isPhoneNum, saveLoginInfo, loadLoginInfoFromLocal };

