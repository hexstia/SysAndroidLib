

import { BaseWebView, createTabNavigator, createTabRoute } from 'dl-kit';
/**
*  云手机页面
*/
import CloudPhone from '../view/cloudPhone/cloudPhone';
/**
*  购买云手机
*/
import PayCloudPhone from '../view/cloudPhone/payCloudPhone';
/**
*  支付结果
*/
import PayResult from '../view/cloudPhone/payResult';
/**
*  客服页面
*/
import CustomerService from '../view/customerService/customerService';
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
/**
*  修改手机号
*/
import ChangePhoneNum from '../view/mine/changePhoneNum';
/**
*  设备列表
*/
import DeviceList from '../view/mine/deviceList';
/**
*  消息列表
*/
import MessageList from '../view/mine/messageList';
/**
*  我的页面
*/
import Mine from '../view/mine/mine';
/**
*  订单详情
*/
import OrderDetail from '../view/mine/orderDetail';
/**
*  我的订单
*/
import OrderList from '../view/mine/orderList';
/**
*  系统设置
*/
import SysSetting from '../view/mine/sysSetting';



let tabRoutes = createTabRoute([
  {
    routeName: 'CustomerService',
    tabComponent: CustomerService,
    tabBarLabel: '客服',
    tabBarIcon_default: require('#/tabImg/server_select.png'),
    tabBarIcon_select: require('#/tabImg/server_select.png'),
  },
  {
    routeName: 'CloudPhone',
    tabComponent: CloudPhone,
    tabBarLabel: '云手机',
    tabBarIcon_default: require('#/tabImg/cloudPhone_select.png'),
    tabBarIcon_select: require('#/tabImg/cloudPhone_select.png'),
  },
  {
    routeName: 'Mine',
    tabComponent: Mine,
    tabBarLabel: '我的',
    tabBarIcon_default: require('#/tabImg/mine_select.png'),
    tabBarIcon_select: require('#/tabImg/mine_select.png'),
  }
])

const TabNavigator = createTabNavigator(tabRoutes);




export default {
  Login: { screen: Login },
  RegisterOrFindAccount: { screen: RegisterOrFindAccount },
  BindAccount: { screen: BindAccount },
  TabNavigator: { screen: TabNavigator, navigationOptions: { header: null } },
  PayCloudPhone: { screen: PayCloudPhone },
  PayResult: { screen: PayResult },
  MessageList: { screen: MessageList },
  BaseWebView: { screen: BaseWebView },
  OrderList: { screen: OrderList },
  DeviceList: { screen: DeviceList },
  ChangePhoneNum: { screen: ChangePhoneNum },
  SysSetting: { screen: SysSetting },
  OrderDetail: { screen: OrderDetail },
}