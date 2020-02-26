import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';

interface Props {
  style?: ViewStyle,
  source: ImageSourcePropType,
  imgWidth: number,
  imgHeight: number,
  width?: number,
  height?: number,
  onPress: () => void,
}

export default class ImageBtn extends BaseComponent<Props> {
  state = {
  }
  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <TouchableOpacity style={{ ...this.props.style, width: this.props.width, height: this.props.height, justifyContent: 'center', alignItems: 'center' }} onPress={this.props.onPress}>
        <Image
          style={{ width: this.props.imgWidth, height: this.props.imgHeight }}
          resizeMode='contain'
          source={this.props.source} />
      </TouchableOpacity>
    );
  }
}