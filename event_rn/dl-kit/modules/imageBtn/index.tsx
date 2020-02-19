import React from 'react';
import { Image, TouchableOpacity, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';

interface Props {
  style?: ViewStyle,
  image: any,
  onPress: () => void

}

export default class ImageBtn extends BaseComponent<Props> {
  state = {
  }
  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <TouchableOpacity style={{ ...this.props.style }} onPress={this.props.onPress}>
        <Image
          style={{ flex: 1 }}
          resizeMode='contain'
          source={this.props.image} />
      </TouchableOpacity>
    );
  }
}