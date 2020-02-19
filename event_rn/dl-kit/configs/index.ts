import { UserModel } from 'global';
import { Dimensions, ScaledSize } from 'react-native';


interface ConfigStyle {
  /**
  *  基础url
  */
  apiHost: string,
  /**
  *  用户信息
  */
  userInfo: UserModel,
  /**
  *  window 尺寸
  */
  windowSize: ScaledSize
}

let windowSize = Dimensions.get('window')


const Config: ConfigStyle = {
  apiHost: 'http://wmt.flyinke.cn',
  userInfo: {} as UserModel,
  windowSize
};


export default Config
