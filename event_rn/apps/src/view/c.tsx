import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { Text, View } from 'react-native';


export default class C extends BaseNavNavgator {

  constructor(props: any) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text onPress={() => this.goBack()} >3</Text>
        <Text onPress={() => this.navigate('B')} >replace</Text>

      </View>
    );
  }
}