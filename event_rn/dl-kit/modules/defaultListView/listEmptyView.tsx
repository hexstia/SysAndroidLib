import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BaseComponent from '../../base/baseComponent';

interface Props {
    /**
    *  空占位页面的类型
    */
    emptyType: 'noData' | 'errorData'

    /**
    *  刷新事件
    */
    reloadDataAction?: () => void
}
export default class ListEmptyView extends BaseComponent<Props> {
    state = {
    }
    constructor(props: Props) {
        super(props)
    }
    render() {
        if (this.props.emptyType == 'noData') {
            return (
                <View style={{ flex: 1, alignItems: 'center', marginTop: 85 }}>
                    <Image style={{ width: 210, height: 185 }} source={require('#/other/empty_nodata.png')} />
                    <Text style={{ color: '#666', fontSize: 14, marginTop: 28 }}>暂无数据</Text>
                    <Text style={{ color: '#666', fontSize: 14, marginTop: 4 }}>下拉刷新试试！</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', marginTop: 85 }}>
                    <Image style={{ width: 210, height: 185 }} source={require('#/other/empty_error.png')} />

                    <Text style={{ color: '#666', fontSize: 14, marginTop: 28 }}>网络连接异常</Text>
                    <Text style={{ color: '#aaa', fontSize: 12, marginTop: 16 }}>别紧张，试试看刷新页面~</Text>
                    <TouchableOpacity style={{ marginTop: 36, width: 130, height: 40, backgroundColor: '#5DD9BA', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.props.reloadDataAction}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>刷新</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}