
// 城市选择 组件


import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Picker from 'react-native-picker';
import BaseComponent from '../../../base/baseComponent';
import BMIcon from '../../icon';
import area from './region.json';

interface RegionProps {
	/**
	*  最外层view 的样式
	*/
	style?: ViewStyle,
	/**
	*  标签的文本样式
	*/
	labelStyle?: TextStyle,
	/**
	*  选中结果文字样式
	*/
	valueStyle?: TextStyle,
	/**
	*  值字段属性，用于表单集成数据
	*/
	property: string,
	/**
	*  标签文本内容
	*/
	labelText?: string,
	/**
	*  站稳文本内容
	*/
	placeholder?: string,
	/**
	*  给个默认值
	*/
	value?: string[],
	/**
	*  选择器的标题
	*/
	pickerTitle?: string,
	/**
	*  选择结束，向外回调数据
	*/
	onChange: (data: string[]) => void,
	/**
	*  选择过程中，向外回调数据
	*/
	onSelectChange?: (data: string[]) => void,
	/**
	*  from 收集数据时用来转换数据形态
	*/
	valueFunction?: (data: string[]) => any,
	/**
	*  是否显示区 
	*/
	showArea?: boolean,
	/**
	*  右侧小图标
	*/
	iconRender?: () => Element
}

export default class Region extends BaseComponent<RegionProps> {

	static defaultProps = {
		showArea: false
	}

	state = {
		selectedValue: this.props.value || []
	};

	regions: object[] = []

	constructor(props: RegionProps) {
		super(props);
		this.showPicker = this.showPicker.bind(this);

		this.regions = this.createAreaData();
	}

	componentWillReceiveProps(nextProps: RegionProps) {
		this.setState({
			selectedValue: nextProps.value || []
		});
	}

	render() {
		let showText = this.state.selectedValue.join(' ')

		return (
			<TouchableOpacity onPress={this.showPicker} style={[styles.container, this.props.style]}>
				{/*左侧标题*/}
				<View>
					<Text
						style={[
							{ color: '#333', fontSize: 16 },
							this.props.labelStyle
						]}
						allowFontScaling={false}>
						{this.props.labelText || ''}
					</Text>
				</View>

				<View style={styles.right}>
					{/*选择的内容*/}
					<Text style={[styles.value, showText != this.props.placeholder ? this.props.valueStyle : styles.placeholderStyle]}
						allowFontScaling={false}>
						{showText}
					</Text>
					{this.renderRight()}
				</View>
			</TouchableOpacity>
		);
	}

	componentWillUnmount() {
		Picker.hide();
	}

	showPicker() {
		let object = this.state.selectedValue;

		let selectedValues = [];

		if (!(object && typeof object === 'object' && Array == object.constructor)) {
			selectedValues = [object];
		} else {
			selectedValues = object;
		}
		Picker.init({
			pickerTitleText: this.props.pickerTitle || '请选择',
			pickerCancelBtnText: '取消',
			pickerConfirmBtnText: '确认',
			pickerData: this.regions,
			selectedValue: selectedValues,
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

	createAreaData() {
		let data = [];
		let len = area.length;
		for (let i = 0; i < len; i++) {
			let city = [];
			for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
				if (this.props.showArea) {
					//如果显示区域，把区域添加到picker里
					let _city: any = {};
					_city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
					city.push(_city);
				} else {
					//否则只显示省+市
					city.push(area[i]['city'][j]['name']);
				}
			}

			let _data: any = {};
			_data[area[i]['name']] = city;
			data.push(_data);
		}

		return data;
	}

	getValue() {
		if (this.props.valueFunction) {
			return this.props.valueFunction(this.state.selectedValue);
		}
		return this.state.selectedValue;
	}

	setValue(v: { province: string, city: string, district: string }) {
		if (!v) {
			return
		}

		let selectedValues = [];

		if (v.province) {
			selectedValues.push(v.province);
		}

		if (v.city) {
			selectedValues.push(v.city);
		}

		if (v.district) {
			selectedValues.push(v.district);
		}

		this.setState({ selectedValue: selectedValues });

		if (this.props.onChange) {
			this.props.onChange(selectedValues);
		}
	}

	renderRight() {
		var views = [];

		if (this.props.iconRender) {
			views.push(this.props.iconRender());
		} else {
			views.push(
				<BMIcon iconCode={0xe649} style={{ fontSize: 10, color: '#999' }} key={'region-right-img'} />
			);
		}

		return <View style={{ flexDirection: 'row' }}>{views}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		height: 40,
		alignItems: 'center',
		paddingLeft: 15,
		paddingRight: 15
	},
	right: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	value: {
		marginRight: 6,
		fontSize: 16,
		color: '#333'
	},
	placeholderStyle: {
		marginRight: 6,
		fontSize: 16,
		color: '#999'
	}
});
