

import React from 'react';
import { KeyboardType, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import BaseComponent from '../../../base/baseComponent';


interface PickerProps {
	/**
	*  当前组件所属的form字段，form获取值时使用
	*/
	property?: string,
	/**
	*  样式
	*/
	style?: ViewStyle,
	/**
	*  提示文字样式
	*/
	tipTextStyle?: TextStyle,
	/**
	*  默认值
	*/
	value?: string,
	/**
	*  是否可编辑
	*/
	editable?: boolean,
	/**
	*  文字数量上线
	*/
	maxLength?: number,
	/**
	*  输入文字样式
	*/
	valueStyle?: TextStyle,
	/**
	*  占位字符
	*/
	placeholder?: string,
	/**
	*  键盘样式
	*/
	keyboardType?: KeyboardType,
	/**
	*  文档改变 回调
	*/
	onChange?: (text: string) => void;
}


export default class InputArea extends BaseComponent<PickerProps> {
	static defaultProps = {
		editable: true,
		maxLength: 140,
		valueStyle: {}
	};

	state = {
		count: (this.props.value || '').length,
		maxLength: this.props.maxLength,
		placeholder: this.props.placeholder,
		editable: this.props.editable,
		inputVal: this.props.value
	};

	componentWillReceiveProps(nextProps: PickerProps) {
		this.setState({
			inputVal: nextProps.value,
			count: (nextProps.value || '').length
		});
	}

	render() {
		let inputVal = this.state.inputVal;

		return (
			<View style={[styles.container, this.props.style]}>
				<TextInput
					underlineColorAndroid="transparent"
					placeholder={this.props.placeholder}

					multiline={true}
					onChangeText={this.onTextChange}
					placeholderTextColor={'#999'}
					value={inputVal}
					maxLength={this.state.maxLength}
					editable={this.state.editable}
					keyboardType={this.props.keyboardType}
					style={[styles.input, this.props.valueStyle]}
					allowFontScaling={false}
				/>
				<View style={{ alignItems: 'flex-end' }}>
					<Text style={[styles.tipTextStyle, this.props.tipTextStyle]} allowFontScaling={false}>
						{this.state.count}/{this.state.maxLength}
					</Text>
				</View>
			</View>
		);
	}

	onTextChange = (text: string) => {
		this.setState({
			count: text.length,
			inputVal: text
		});

		if (this.props.onChange) {
			this.props.onChange(text);
		}
	}

	getValue() {
		return this.state.inputVal;
	}

	setValue(text: string) {
		this.setState({
			count: text.length,
			inputVal: text
		});

		if (this.props.onChange) {
			this.props.onChange(text);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},

	input: {
		paddingHorizontal: 10,
		paddingTop: 10,
		fontSize: 16,
		color: '#333',
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		textAlignVertical: 'top'
	},
	tipTextStyle: {
		marginRight: 10,
		marginBottom: 4,
		fontSize: 16,
		color: '#666'
	}
});
