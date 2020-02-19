import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { Text, View } from 'react-native';


export default class extends BaseNavNavgator {

  constructor(props: any) {
    super(props)
    this.state = {
    }

    // tips.showTips('BBC')

  }


  componentDidMount() {

  }
  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text onPress={() => this.navigate('C')} > 2</Text>

      </View>
    );
  }


}