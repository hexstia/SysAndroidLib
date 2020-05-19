/**
 * Created by dingle on 2017/6/27.
 * static navigationOptions={
  title:'详情页',
  header:HeaderComponent,                       //自定义头部组件
  headerTitle:TitleComponent,                   //自定义标题组件
  headerLeft:LeftComponent,                     //自定义左边组件，会替换掉默认返回按钮
  headerRight:<Text>右边元素</Text>,            //自定义右边元素，注意这里不可以放组件
  headerBackImage:{uri:'mipmap/ic_launcher'},   //自定义返回按钮的图片
  headerStyle:{                                 //导航栏样式设置
    backgroundColor:'#8bc9ff',
  },
  headerTintColor:'#fff',                       //按钮、标题颜色设置
  headerTitleStyle:{                            //标题字体样式设置
    fontWeight:'bold',
  },
  headerTransparent:true,                       //使头部背景透明
  gesturesEnabled:true,                         //开启手势操作
  gestureDirection:'inverted',            //修改返回手势操作方向为从右到左，默认为从左到右
  gestureResponseDistance:{               //定义手势响应距离屏幕边界的距离
    horizontal:100,
    vertical:50
  }
};
 */

import { TRouterName } from 'global';
import { NavigationEventPayload, NavigationEventSubscription, NavigationNavigateAction, NavigationParams, NavigationScreenProp } from 'react-navigation';
import tips from '../util/tip';
import BaseComponent from './baseComponent';



type Navigation = NavigationScreenProp<any, any>

interface Props {
  navigation: Navigation
}

interface Data {
  [key: string]: any
}

export default class BaseNavNavgator extends BaseComponent<Props> {


  static navigationOptions: Function | Object = (nav: any) => {

    let navigation: Navigation = nav.navigation

    let params = navigation.state.params || {}

    let rightView = navigation.getParam('headerRight')
    let leftView = navigation.getParam('headerLeft')
    let title = navigation.getParam('title')
    let header = navigation.getParam('header')
    let headerTitle = navigation.getParam('headerTitle');

    return {

      headerStyle: {
        backgroundColor: '#fff',
        shadowOpacity: 0,
        elevation: 0,
      },
      title: title || params.title, // 这里navigation有bug， 首页第一次进来不能同时设定title和right
      headerTintColor: '#000',
      headerLeft: leftView,
      headerRight: rightView,
      header: header,
      headerTitle: headerTitle,
    };

  };

  haveFocus: boolean = false;

  data: Data = {}

  listeners: NavigationEventSubscription[] = []

  constructor(props: Props) {
    super(props);
    if (this.props.navigation) {

      // 嫁接路由参数
      if (this.props.navigation.state) {
        this.data = this.props.navigation.state.params || {};
      }

      // 监听页面焦点
      let willFocusListener = this.props.navigation.addListener('willFocus', this.viewWillFocus.bind(this))
      let didFocusListener = this.props.navigation.addListener('didFocus', this.viewDidFocus.bind(this))
      let willBlurListener = this.props.navigation.addListener('willBlur', this.viewWillBlur.bind(this))
      let didBlurListener = this.props.navigation.addListener('didBlur', this.viewDidBlur.bind(this))
      this.listeners = [willFocusListener, didFocusListener, willBlurListener, didBlurListener]

    } else {
      tips.showTips('此页面不在导航栈内！，请检查！')
    }
  }

  componentDidMount() {

  }


  componentWillUnmount() {
    // 移除监听
    this.listeners.filter((subscription) => {
      subscription && subscription.remove();
    })
  }

  /**
   * 页面跳转
   *
   * @param routeName   路由的名字
   * @param params      参数
   */
  navigate(routeName: TRouterName, params?: object) {
    this.props.navigation.navigate(routeName, params);
  }

  /**
  *  
  */
  push(routeName: TRouterName, params?: object) {
    this.props.navigation.push(routeName, params);
  }

  /**
  *  回退。如果您提供一个数字“n”，它将指定将回退几步
  */
  pop(n: number) {
    this.props.navigation.pop(n);
  }

  /**
  *  将其调用以跳回堆栈中的顶部路径，关闭所有其他屏幕
  */
  popToTop() {
    this.props.navigation.popToTop();
  }

  /**
  *  使用给定路径替换当前屏幕
  */
  replace(routeName: TRouterName, params?: NavigationParams, action?: NavigationNavigateAction) {
    this.props.navigation.replace(routeName, params, action)
  }

  /**
   * 返回到上一个页面
   */
  goBack() {
    this.props.navigation.goBack();
  }

  /**
   * 设置当前标题文字，仅在页面加载完成之后调用
   *
   * @param title
   */
  setTitle(title: string) {
    this.props.navigation.setParams({ title: title })
  }

  /**
   * 设置当前标题视图，仅在页面加载完成之后调用
   *
   * @param title
   */
  setHeaderTitleView(headerTitleView: Element) {
    this.props.navigation.setParams({ headerTitle: headerTitleView })
  }


  /**
  *  设置导航栏
  */
  setHeader(component: Element) {
    this.props.navigation.setParams({ header: component })
  }
  /**
  *  设置导航栏右侧按钮
  */
  setRight(component: Element) {
    this.props.navigation.setParams({ headerRight: component })
  }
  /**
  *  设置导航栏左侧按钮
  */
  setLeft(component: Element) {
    this.props.navigation.setParams({ headerLeft: component })
  }

  /**
  *  即将获取焦点
  */
  viewWillFocus(payload: NavigationEventPayload) {
    this.haveFocus = true;
  }

  /**
  *  已经获取焦点
  */
  viewDidFocus(payload: NavigationEventPayload) {

  }

  /**
    *  即将失去焦点
    */
  viewWillBlur(payload: NavigationEventPayload) {
    this.haveFocus = false;
  }

  /**
    *  已经失去焦点
    */
  viewDidBlur(payload: NavigationEventPayload) {

  }

  /**
  *  查询屏幕的聚焦状态
  */
  isFocused() {
    return this.props.navigation.isFocused();
  }

  /**
  *   屏幕的当前状态
  */
  getNavigationState() {
    return this.props.navigation.state
  }
}