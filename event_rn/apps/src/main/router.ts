

/**
*  绑定账号
*/
import BindAccount from '../view/login/bindAccount';
/**
*  登录页面
*/
import Login from '../view/login/login';
/**
*  快速注册
*/
import Register from '../view/login/register';
/**
*  找回密码
*/
import RetrievePassword from '../view/login/retrievePassword';

export default {
  Login: { screen: Login },
  RetrievePassword: { screen: RetrievePassword },
  Register: { screen: Register },
  BindAccount: { screen: BindAccount },

}