import React from 'react';
import { Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';
import Icon from '../icon';

interface Props {
    /**
    *  风格
    */
    styleful: 'dark' | 'light',
    /**
    *  背景的样式
    */
    style?: ViewStyle,
    /**
    *  搜索框的样式
    */
    searBarStyle?: ViewStyle,
    /**
    *  搜索输入的文字的样式
    */
    searchTextInputStyle?: TextStyle,
    /**
    *  站位文字
    */
    placeholder: string,
    /**
    *  左侧文字
    */
    leftText?: string,
    /**
    *  左侧文字样式
    */
    leftTextStyle?: TextStyle,
    /**
    *  右侧文字
    */
    rightText?: string,
    /**
    *  右侧文字样式
    */
    rightTextStyle?: TextStyle,
    /**
    *  文字改变事件
    */
    textChangeAction?: (text: string) => void,
    /**
    *  搜索事件
    */
    searchAction?: (text: string) => void,
    /**
    *  当不可编辑的时候，可以监听搜索框的点击事件
    */
    onSearchBarClick?: () => void,
}


export default class SearchBar extends BaseComponent<Props> {
    static defaultProps = {
        placeholder: '请输入搜索内容', //提示词
        styleful: 'light',
    };

    input: TextInput | null = null;

    render() {
        return (
            <TouchableOpacity style={{ height: 44, flexDirection: 'row', alignItems: 'center', paddingVertical: 7, backgroundColor: this.props.styleful == 'dark' ? '#333' : '#fff', ...this.props.style }}
                activeOpacity={1}
                onPress={this.props.onSearchBarClick}>
                {/* 搜索框左侧文字 */}
                {
                    this.props.leftText && (
                        <Text style={{ color: '#333', fontSize: 16, marginRight: 5, ...this.props.leftTextStyle }}>{this.props.leftText}</Text>
                    )
                }
                {/* 搜索框 */}
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', backgroundColor: this.props.styleful == 'dark' ? '#f0f0f0' : '#f1f1f1', borderRadius: 15, ...this.props.searBarStyle }}>
                    <Icon iconCode={0xe64b} style={{ color: this.props.styleful == 'dark' ? '#333' : '#999', fontSize: 16, marginHorizontal: 10 }} />
                    <TextInput ref={input => this.input = input}
                        style={{ flex: 1, padding: 0, fontSize: 16, color: this.props.styleful == 'dark' ? '#fff' : '#333', ...this.props.searchTextInputStyle }}
                        placeholder={this.props.placeholder}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor={this.props.styleful == 'dark' ? '#999' : '#999'}
                        clearButtonMode='while-editing'
                        onChangeText={this.onChangeText}
                        maxLength={20}
                        onSubmitEditing={this.onSubmitEditing}
                        returnKeyType="search"
                        selectTextOnFocus={true}
                        allowFontScaling={false}
                        editable={this.props.onSearchBarClick == undefined}
                    />
                    {
                        this.props.onSearchBarClick && (<TouchableOpacity style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} onPress={this.props.onSearchBarClick} />)
                    }
                </View>

                {/* 搜索框右侧文字 */}
                {
                    this.props.rightText && (
                        <Text style={{ color: '#333', fontSize: 16, marginRight: 5, ...this.props.rightTextStyle }}>{this.props.rightText}</Text>
                    )
                }
            </TouchableOpacity>
        );
    }

    onChangeText = (text: string) => {
        if (text.length == 0) {
            this.props.searchAction && this.props.searchAction(text);
        }
        this.props.textChangeAction && this.props.textChangeAction(text)
    }


    onSubmitEditing = ({ nativeEvent: { text } }: { nativeEvent: { text: string } }) => {
        this.props.searchAction && this.props.searchAction(text);
    }

}