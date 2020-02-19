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
  *   临时token
  */
  tempToken?: string,
  /**
  *  时间戳
  */
 timestamp?:number
}


const Config: ConfigStyle = {
  apiHost: 'http://test.91lanjiang.com/tcss-api',
  userInfo: {} as UserModel
};


export default Config
