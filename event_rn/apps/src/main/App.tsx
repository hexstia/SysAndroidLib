/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import { configs, createNavNavigator, msg, tips } from 'dl-kit';
import { TRouterName } from 'global';
import React, { Component } from 'react';
import { View } from 'react-native';
import RNArenaPay from 'react-native-arena-pay';
import { loadLoginInfoFromLocal } from '../module/publicFunc';
import routes from './router';

interface Props {
  name: string
}

interface State {
  rootRoute?: TRouterName

}

class App extends Component<Props, {}> {

  state: State = {
  }

  constructor(props: Props) {
    super(props)

    // 注册微信appid
    RNArenaPay.wechatRegister(configs.wxAppKey);

    // 注册QQ的AppId
    RNArenaPay.QQRegister(configs.QQAppKey)

    loadLoginInfoFromLocal((success => {
      if (success) {
        this.setState({ rootRoute: 'TabNavigator' })
      } else {
        this.setState({ rootRoute: 'TabNavigator' })
      }
    }))

    console.disableYellowBox = true

    // 登出事件监听
    msg.on('logout', (e: any) => {
      this.setState({ rootRoute: 'Login' }, () => {
        tips.showTips(e.message)
      })
    })

    // 切换底层路由
    msg.on('changeRootRoute', (e: any) => {
      this.setState({ rootRoute: e.rootRoute })
    })

  }

  render() {

    let { rootRoute } = this.state;

    if (rootRoute) {
      let Nav = createNavNavigator(routes, this.state.rootRoute)
      return (
        <View style={{ flex: 1 }}>
          <Nav />
        </View>
      );
    } else {
      return (<View style={{ flex: 1, backgroundColor: '#fff' }} />)
    }
  }


}



// 这一行必须要写
export default App;