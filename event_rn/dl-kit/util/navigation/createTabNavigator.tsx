import { createAppContainer, createBottomTabNavigator, NavigationRouteConfigMap } from 'react-navigation';
// import CustomTabBar from './createCustomTabBar';
/**
*  创建tab导航
*/
export default function createTabNavigator(routes: NavigationRouteConfigMap) {

  const TabNavigator = createBottomTabNavigator(routes, {
    tabBarOptions: {
      //当前选中的tab bar的文本颜色和图标颜色
      activeTintColor: '#F21E29',
      //当前未选中的tab bar的文本颜色和图标颜色
      inactiveTintColor: '#666',
      //是否显示tab bar的图标，默认是false
      showIcon: true,
      //showLabel - 是否显示tab bar的文本，默认是true
      showLabel: true,
      //是否将文本转换为大小，默认是true
      upperCaseLabel: false,
      //material design中的波纹颜色(仅支持Android >= 5.0)
      pressColor: '#788493',
      //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
      pressOpacity: 0.8,
      // 文本字体大小是否跟随系统缩放取决于该设置，默认为true。
      allowFontScaling: false,
      //tab bar的样式
      style: {
        backgroundColor: '#fff',
        paddingBottom: 1,
        borderTopWidth: 0.2,
        paddingTop: 1,
        borderTopColor: '#ccc',
      },
      //tab bar的文本样式
      labelStyle: {
        fontSize: 11,
        // margin: 1
      },
      //tab 页指示符的样式 (tab页下面的一条线).
      indicatorStyle: { height: 0 },

    },
    //tab bar的位置, 可选值： 'top' or 'bottom'
    tabBarPosition: 'bottom',
    //是否允许滑动切换tab页
    swipeEnabled: false,
    //是否在切换tab页时使用动画
    animationEnabled: false,
    //是否懒加载
    lazy: true,
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none',
    //通过释放非活动选项卡使用的资源来减少内存使用的优化
    removeClippedSubviews: false,

    // 自定义底部tabbar
    // tabBarComponent: props => <CustomTabBar {...props} />
  })


  return createAppContainer(TabNavigator)

}


/**
*  route 要像下面这样的，不仅要给定screen，还要指定navigationOptions，指定图片和文字
*/

  // {
  //   Home:{
  //     screen:HomeScreen,
  //     navigationOptions:({navigation}) => ({
  //       tabBarLabel:'首页',
  //       tabBarIcon:({focused,tintColor}) => (
  //         <TabBarItem
  //           tintColor={tintColor}
  //           focused={focused}
  //           normalImage={require('./imgs/nav_fav@2x.png')}
  //           selectedImage={require('./imgs/nav_fav_actived@3x.png')}
  //         />
  //       )
  //     }),
  //   },

  //   Mine:{
  //         screen:MineScreen,
  //         navigationOptions:({navigation}) => ({
  //         tabBarLabel:'我',
  //         tabBarIcon:({focused,tintColor}) => (
  //           <TabBarItem
  //            tintColor={tintColor}
  //             focused={focused}
  //             normalImage={require('./imgs/tab_me_nor@3x.png')}
  //             selectedImage={require('./imgs/tab_me_selected@2x.png')}
  //           />
  //         )
  //       }),
  //     },
  //   },
// 