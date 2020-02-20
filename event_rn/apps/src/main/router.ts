

/**
*  绑定账号
*/
import BindAccount from '../view/login/bindAccount';
/**
*  登录页面
*/
import Login from '../view/login/login';
/**
*  快速注册 或者找回密码
*/
import RegisterOrFindAccount from '../view/login/registerOrFindAccount';

export default {
  Login: { screen: Login },
  RegisterOrFindAccount: { screen: RegisterOrFindAccount },
  BindAccount: { screen: BindAccount },
}