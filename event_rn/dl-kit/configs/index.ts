import { UserModel } from 'global';


interface ConfigStyle {
  /**
  *  基础url
  */
  apiHost: string,
  /**
  *  用户信息
  */
  userInfo?: UserModel,
  /**
  *  token
  */
  token?: string,
  /**
  *  刷新token
  */
  refreshToken?: string,
  /**
  *   临时token
  */
  tempToken?: string,
  /**
  *  时间戳
  */
  timestamp?: number,

  /**
  *  微信的Key
  */
  wxAppKey: string,

  /**
  *  QQ 的Key
  */
  QQAppKey: string,
}


const Config: ConfigStyle = {
  // apiHost: 'http://test.91lanjiang.com/tcss-api',
  apiHost: 'http://www.91lanjiang.com/tcss-api',
  wxAppKey: 'wx4da13368004666f5',
  QQAppKey: '101845112'
};


export default Config
