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
import CodePush from "react-native-code-push"; // 引入code-push
import { loadLoginInfoFromLocal } from '../module/publicFunc';
import routes from './router';

let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
};

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


  //如果有更新的提示
  syncImmediate() {
    CodePush.sync({
      //安装模式
      //ON_NEXT_RESUME 下次恢复到前台时
      //ON_NEXT_RESTART 下一次重启时
      //IMMEDIATE 马上更新
      installMode: CodePush.InstallMode.IMMEDIATE,
      //对话框
      updateDialog: {
        //是否显示更新描述
        appendReleaseDescription: true,
        //更新描述的前缀。 默认为"Description"
        descriptionPrefix: "更新内容：",
        //强制更新按钮文字，默认为continue
        mandatoryContinueButtonLabel: "立即更新",
        //强制更新时的信息. 默认为"An update is available that must be installed."
        mandatoryUpdateMessage: "必须更新后才能使用",
        //非强制更新时，按钮文字,默认为"ignore"
        optionalIgnoreButtonLabel: '稍后',
        //非强制更新时，确认按钮文字. 默认为"Install"
        optionalInstallButtonLabel: '后台更新',
        //非强制更新时，检查到更新的消息文本
        optionalUpdateMessage: '有新版本了，是否更新？',
        //Alert窗口的标题
        title: '更新提示'
      },
    } ,
    );
  }

  componentWillMount() {
    CodePush.disallowRestart();//禁止重启
    this.syncImmediate(); //开始检查更新
  }

  componentDidMount() {
    CodePush.allowRestart();//在加载完了，允许重启
  }

}



// 这一行必须要写
export default CodePush(codePushOptions)(App)