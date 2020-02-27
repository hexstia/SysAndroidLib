
import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { View } from 'react-native';

interface State {
}
/**
*  消息列表
*/
export default class MessageList extends BaseNavNavgator {
  state: State = {
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      </View>
    );
  }
}