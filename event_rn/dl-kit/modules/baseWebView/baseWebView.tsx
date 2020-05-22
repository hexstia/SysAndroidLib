
import React from 'react';
import { Platform, View, WebView } from 'react-native';
import BaseNavNavgator from '../../base/baseNavNavgator';


interface State {
}
/**
*  基础webView 展示
  uri:网页地址
  htmlStr:H5字符串
*/
export default class BaseWebView extends BaseNavNavgator {
  state: State = {
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    let { uri, htmlStr } = this.data
    let source: any = {}
    if (uri) {

      if (uri.substring(0, 4) != 'http') {
        source = { uri: `http://${uri}` }
      } else {
        source = { uri }

      }
    } else if (htmlStr) {

      source = { html: htmlStr }
      if (Platform.OS == 'android') {
        source.baseUrl = 's'
      }

    }

    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          source={source}
        />
      </View>
    );
  }
}