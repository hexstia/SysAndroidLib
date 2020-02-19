import React from 'react';
import { Text, TextStyle } from 'react-native';

interface IconProps {
    /**
     * 字体编码 类似0xe755
    */
    iconCode?: number;

    /**
     * 字体样式
     */
    style?: TextStyle;

    onPress?: () => void;


    /**
     * 其他参数
     */
    [propNames: string]: any;
}

/**
 * 字体图标
 * @param props 
 */
export default function Icon(props: IconProps) {

    let { iconCode = 0xe618, style = {}, ...others } = props;

    return (
        <Text style={{ ...style, fontFamily: 'iconfont' }} {...others}>
            {String.fromCharCode(iconCode || 0xe618)}
            {props.children}
        </Text>
    )
}

