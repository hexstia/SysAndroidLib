

import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Picker from 'react-native-picker';
import BaseComponent from '../../../base/baseComponent';
import BMIcon from '../../icon';


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
	*   数据源 多维度数据请参考最底部注释部分
	*/
	dataSource: any[],
	/**
	*  当前值
	*/
	value?: any[],
	/**
	*  值样式
	*/
	valueStyle?: TextStyle,
	/**
	*  标签文字
	*/
	labelText?: string,
	/**
	*  标签文字样式
	*/
	labelStyle?: TextStyle,
	/**
	*  占位符
	*/
	placeholder?: string,
	/**
	*  是否可编辑
	*/
	editable?: boolean,
	/**
	*  选择器标题
	*/
	pickerTitle?: string,
	/**
	*  是否必选
	*/
	required?: boolean,

	/**
	*  最右侧图标
	*/
	iconRender?: () => Element,
	/**
	*  点击确定触发回调
	*/
	onChange?: (data: any[]) => void,
	/**
	*  选择过程中 触发回调
	*/
	onSelectChange?: (data: any[]) => void,
	/**
	*  Form 组件获取数据方法
	*/
	valueFunction?: (data: any[]) => any,
}

export default class DLPicker extends BaseComponent<PickerProps> {
	static defaultProps = {
		editable: true,
		required: false //是否必选
	};

	state = {
		selectedValue: this.props.value || []
	}

	componentWillReceiveProps(nextProps: PickerProps) {
		this.setState({ selectedValue: nextProps.value });
	}

	render() {
		let selectedValueText = this.state.selectedValue.length > 0 ? this.state.selectedValue.join(' ') : this.props.placeholder;

		return (
			<TouchableOpacity onPress={this.showPicker} style={[styles.container, this.props.style]}>
				{/*左侧标题*/}
				<View style={{ flexDirection: 'row' }}>
					<Text style={[{ marginLeft: 6, color: '#333', fontSize: 16 }, this.props.labelStyle]}
						allowFontScaling={false}>
						{this.props.labelText || ''}
					</Text>
					{this.props.required ? (
						<Text style={{ marginLeft: 5, fontSize: 16, color: '#EB5040' }}>
							*
						</Text>
					) : null}
				</View>

				<View style={[styles.right]}>
					{/*选择的内容*/}
					<Text style={[styles.value, this.props.valueStyle]}
						allowFontScaling={false}>
						{selectedValueText}
					</Text>
					{this.renderRight()}
				</View>
			</TouchableOpacity>
		)

	}

	renderRight() {
		if (this.props.iconRender) {
			return this.props.iconRender()

		} else {
			return <BMIcon iconCode={0xe649} style={{ fontSize: 14, color: '#999' }} key={'picker-right-img'} />
		}
	}

	showPicker = () => {
		if (!this.props.editable) {
			return
		}

		Picker.init({
			pickerTitleText: this.props.pickerTitle || '',
			pickerCancelBtnText: '取消',
			pickerConfirmBtnText: '确认',
			pickerData: this.props.dataSource,
			selectedValue: this.state.selectedValue,
			onPickerConfirm: data => {
				if (this.props.onChange) {
					this.props.onChange(data);
				}
				this.setState({ selectedValue: data });
			},
			onPickerCancel: data => { },
			onPickerSelect: data => {
				if (this.props.onSelectChange) {
					this.props.onSelectChange(data);
				}
			}
		});
		Picker.show();
	}
	componentWillUnmount() {
		Picker.hide();
	}

	getValue = () => {

		if (this.props.valueFunction) {
			return this.props.valueFunction(this.state.selectedValue);
		}
		return this.state.selectedValue;
	}

	setValue = (value: object[]) => {

		this.setState({ selectedValue: value });

		if (this.props.onChange) {
			this.props.onChange(value);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: '#fff',
		height: 40,
		alignItems: 'center'
	},
	right: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	value: {
		marginRight: 6
	},

	valueDisabled: {
		color: '#ccc',
		marginRight: 6
	},

	placeholderStyle: {
		fontSize: 16,
		color: '#999',
	}
});

/**
pickerData = [
	{
			a: [
					{
							a1: [1, 2, 3, 4]
					},
					{
							a2: [5, 6, 7, 8]
					},
					{
							a3: [9, 10, 11, 12]
					}
			]
	},
	{
			b: [
					{
							b1: [11, 22, 33, 44]
					},
					{
							b2: [55, 66, 77, 88]
					},
					{
							b3: [99, 1010, 1111, 1212]
					}
			]
	},
	{
			c: [
					{
							c1: ['a', 'b', 'c']
					},
					{
							c2: ['aa', 'bb', 'cc']
					},
					{
							c3: ['aaa', 'bbb', 'ccc']
					}
			]
	},
	...
]
*/