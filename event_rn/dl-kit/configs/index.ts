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
  refreshToken?:string,
  /**
  *   临时token
  */
  tempToken?: string,
  /**
  *  时间戳
  */
  timestamp?: number
}


const Config: ConfigStyle = {
  apiHost: 'http://test.91lanjiang.com/tcss-api',
};


export default Config
