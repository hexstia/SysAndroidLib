import React from 'react';
import { Modal, TouchableOpacity, View, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';

interface Props {
    /**
    *  样式
    */
    style?: ViewStyle,
    /**
    *  点击空白处是否隐藏model
    */
    hideByClickingOnTheBlank?: boolean,

    /**
    *  内容加载函数
    */
    loadContentView: () => React.ReactElement

    /**
    *  其他相关数据
    */
    extraData?: any,
}

export default class DefaultModal extends BaseComponent<Props> {

    static defaultProps = {
        hideByClickingOnTheBlank: true,
    }
    state = {
        visible: false
    }
    constructor(props: Props) {
        super(props)

    }
    render() {

        return (
            <Modal visible={this.state.visible}
                transparent={true}
                animationType='none'
                onShow={this.onShow}
                onDismiss={this.onDismiss}>

                {
                    this.props.hideByClickingOnTheBlank ? (
                        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', ...this.props.style }} activeOpacity={1} onPress={this.showOrHidden}>
                            {this.props.loadContentView()}
                        </TouchableOpacity>
                    ) : (
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', ...this.props.style }}>
                                {this.props.loadContentView()}
                            </View>
                        )
                }

            </Modal>
        );
    }

    onShow = () => {

    }

    onDismiss = () => {

    }

    /**
    *  显示或隐藏
    */
    showOrHidden = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    /**
    *  隐藏
    */
    hidden = () => {
        this.setState({
            visible: false
        })
    }

    /**
    *  显示
    */
    show = () => {
        this.setState({
            visible: true
        })
    }


}