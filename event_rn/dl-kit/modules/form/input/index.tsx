/**
 * 表单项目
 *
 * Created by chenyunjie on 2017/1/17.
 */

import React from 'react';
import { StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import BaseComponent from '../../../base/baseComponent';


interface InputProps {

	/**
	*  当前组件所属的form字段，form获取值时使用
	*/
	property?: string,

	/**
	*  是否必填
	*/
	required?: boolean,

	/**
	*  样式
	*/
	style?: ViewStyle;

	/**
	*  左侧文本
	*/
	labelText?: string;

	/**
	*  左侧文本样式
	*/
	labelStyle?: TextStyle;

	/**
	*  输入值
	*/
	value?: string;

	/**
	*  输入值的样式
	*/
	valueStyle?: TextStyle;

	/**
	*  单位
	*/
	unit?: string;
	/**
	*  单位样式
	*/
	unitStyle?: TextStyle;

	/**
	*  是否可以编辑
	*/
	editable?: boolean;

	/**
	*  是否可输入多行文字
	*/
	multiline?: boolean,

	/**
	*  如果为true，在componentDidMount后会获得焦点。默认值为false。
	*/
	autoFocus?: boolean,

	/**
	*  占位符
	*/
	placeholder?: string;

	/**
	*  返回键类型
	*/
	returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'

	/**
	*  最大文本输入数量
	*/
	maxLength?: number;

	/**
	*  键盘类型
	*/
	keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search";

	/**
	*  文档改变
	*/
	onChange?: (text: string) => void;

	/**
	*  右侧小图标
	*/
	rightIconRender?: () => Element

	/**
	*  Form 组件获取数据方法
	*/
	valueFunction?: (data: string) => any,

	/**
	*  当文本框失去焦点的时候调用此回调函数。
	*/
	onBlur?: () => void,

	/**
	*  当文本框获得焦点的时候调用此回调函数
	*/
	onFocus?: () => void

	/**
	*  此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数
	*/
	onSubmitEditing?: () => void
}

export default class Input extends BaseComponent<InputProps> {
	static defaultProps = {
		editable: true,
		maxLength: 200,
		multiline: false,
		placeholder: '',
		keyboardType: 'default',
		returnKeyType: 'done',
	};

	state = {
		inputVal: this.props.value || ''
	}

	constructor(props: InputProps) {
		super(props);
	}

	componentWillReceiveProps(nextProps: any) {
		if (nextProps.value != this.state.inputVal) {
			this.setState({
				inputVal: nextProps.value || ''
			});
		}
	}

	render() {

		return (
			<View style={[styles.container, this.props.style]}>
				{/* 左侧文本 */}
				{this.props.labelText && (
					<Text style={{ color: '#333', fontFamily: 'PingFang-SC-Regular', fontSize: 16, ...this.props.labelStyle }} allowFontScaling={false}>
						{this.props.labelText}
					</Text>
				)}
				{/* 必填标识 */}
				{this.props.required && (<Text style={{ color: '#f00', fontSize: 12, marginLeft: 3 }}>*</Text>)}
				<TextInput
					autoCapitalize='none'
					style={[styles.input, this.props.valueStyle]}
					underlineColorAndroid="transparent"
					value={this.state.inputVal}
					placeholder={this.props.placeholder}
					placeholderTextColor='#aaa'
					maxLength={this.props.maxLength}
					multiline={this.props.multiline}
					keyboardType={this.props.keyboardType}
					editable={this.props.editable}
					autoCorrect={false}
					autoFocus={this.props.autoFocus}
					clearButtonMode='while-editing'
					returnKeyType={this.props.returnKeyType}
					disableFullscreenUI={true}
					onBlur={this.props.onBlur}
					onChangeText={this.onTextChange}
					onFocus={this.props.onFocus}
					onSubmitEditing={this.props.onSubmitEditing}

				/>

				{/* 单位 */}
				{this.props.unit && (
					<Text style={{ marginLeft: 3, fontSize: 14, color: '#333', fontFamily: 'PingFang-SC-Regular', ...this.props.unitStyle }}>
						{this.props.unit}
					</Text>
				)}

				{/* 最右侧图标 */}
				{this.props.rightIconRender && this.props.rightIconRender()}
			</View>
		);
	}


	onTextChange = (text: string) => {

		this.setState({
			inputVal: text
		}, () => {
			this.props.onChange && this.props.onChange(text);
		});
	}

	getValue() {
		if (this.props.valueFunction) {
			return this.props.valueFunction(this.state.inputVal || '');
		} else {
			return this.state.inputVal || '';
		}
	}

	setValue(text: string) {

		this.setState({ inputVal: text });
		if (this.props.onChange) {
			this.props.onChange(text);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 44,
		backgroundColor: '#fff',
		paddingHorizontal: 15
	},

	input: {
		textAlign: 'right',
		textAlignVertical: 'center',
		padding: 0,
		marginLeft: 15,
		flex: 1
	},

});
