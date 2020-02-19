import React from 'react';
import { Text, TextStyle } from 'react-native';

interface TextProps {

  /**
   * 字体样式
   */
  style?: TextStyle;

  /**
  *  点击事件
  */
  onPress?: () => void

  /**
   * 其他参数
   */
  [propNames: string]: any;
}

/**
 * 字体
 * @param props 
 */
export default function text(props: TextProps) {

  let { style = {}, children, ...others } = props;

  style.fontFamily = 'PingFangSC-Medium'

  return (
    <Text style={style} {...others}>
      {children}
    </Text>
  )
}

