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
import { Alert, Linking, Platform, View } from 'react-native';
import RNArenaPay from 'react-native-arena-pay';
import { CheckResult, checkUpdate, downloadAndInstallApk, downloadUpdate, ExpiredResult, isFirstTime, isRolledBack, markSuccess, switchVersion, switchVersionLater, UpdateAvailableResult } from 'react-native-update';
import { loadLoginInfoFromLocal } from '../module/publicFunc';
import routes from './router';


const appKey  = Platform.OS == 'ios' ? 'fGxYQ93XIiss3kt46LczUUgiqODDBwSK' : 'iZl7XXBhF5nAlpMT5ZLL_VMBWqukDs4z';

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


  /**
   *  热更新部分
   */

  componentDidMount() {
    // 检查热更新
    this.checkUpdate();
    
    if (isFirstTime) {
      // 必须调用此更新成功标记方法
      // 否则默认更新失败，下一次启动会自动回滚
      markSuccess();
      console.log('更新完成');
    } else if (isRolledBack) {
      console.log('刚刚更新失败了,版本被回滚.');
    }
  }

  checkUpdate = async () => {
    if (__DEV__) {
      // 开发模式不支持热更新，跳过检查
      return;
    }
    let info:CheckResult;
    try {
      info = await checkUpdate(appKey);
    } catch (err) {
      Alert.alert('更新检查失败', err.message);
      return;
    }
    if (info.expired) {
      let expiredInfo = info as ExpiredResult
      Alert.alert('提示', '您的应用版本已更新，点击确定下载安装新版本', [
        {
          text: '确定',
          onPress: () => {
            if ((info as ExpiredResult).downloadUrl) {
              // apk可直接下载安装
              if (
                Platform.OS === 'android' &&
                expiredInfo.downloadUrl.endsWith('.apk')
              ) {
                downloadAndInstallApk({
                  url: expiredInfo.downloadUrl,
                  onDownloadProgress: ({received, total}) => {
                    this.setState({
                      received,
                      total,
                    });
                  },
                });
              } else {
                Linking.openURL(expiredInfo.downloadUrl);
              }
            }
          },
        },
      ]);
    } else if (info.upToDate) {
      // Alert.alert('提示', '您的应用版本已是最新.');
    } else {
      Alert.alert('提示', '检查到新的版本' + info.name + ',是否更新?\n' + info.description, [
        {
          text: '是',
          onPress: () => {
            this.doUpdate(info as UpdateAvailableResult);
          },
        },
        { text: '否' },
      ]);
    }
  };


  doUpdate = async (info:UpdateAvailableResult) => {
    try {
      const hash:string | undefined = await downloadUpdate(info, {
        onDownloadProgress: ({ received, total }) => {
          this.setState({
            received,
            total,
          });
        },
      });

      if(hash){
        Alert.alert('提示', '下载完毕,是否重启应用?', [
          {
            text: '是',
            onPress: () => {
              switchVersion(hash);
            },
          },
          { text: '否' },
          {
            text: '下次启动时',
            onPress: () => {
              switchVersionLater(hash);
            },
          },
        ]);
      }else{
        Alert.alert('下载失败');
      }

    } catch (err) {
      Alert.alert('更新失败', err.message);
    }
  };



}



// 这一行必须要写
export default App;