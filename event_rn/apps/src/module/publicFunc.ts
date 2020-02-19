
/**
*  ===========   公共方法  =============
*/


import dayjs from 'dayjs';
import { configs, request, tips, validator } from 'dl-kit';

type getTempTokenCallback = (token: string, timestamp: number) => void;


/**
*  获得临时token
*/
let getTempToken = (callBack?: getTempTokenCallback) => {

    if(configs.tempToken && configs.timestamp){
        callBack && callBack(configs.tempToken,configs.timestamp)
        return;
    }

    let timestamp = dayjs().valueOf()
    request.post('/tcssPlatform/user/getTempToken', { timestamp }, true).then(result => {
        configs.tempToken = result.token;
        configs.timestamp = timestamp
        callBack && callBack(result.token, timestamp)
    }).catch(err=>{
        tips.showTips('获取获得临时token失败，请重试')
    })
}

  /**
  *  检查手机号
  */
 let isPhoneNum = (phoneNum:any) => {
    let isPhone = validator.isMobilePhone(phoneNum, 'zh-CN')
    if (!isPhone) {
      tips.showTips('请填写正确的手机号')
    }
    return isPhone;
  }

export { getTempToken, isPhoneNum };

