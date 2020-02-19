/**
 *
 * 上拉选择框
 *
 * Created by chenyunjie on 2017/1/17.
 */

import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BMIcon from '../../icon';
import { showDatePicker } from './dl-date-picker';


/**
 *  新的日期组件
 *  examples:
 *
 *  <DatePicker labelText="开始时间"
 property="beginTime"
 placeholder="请选择"
 timeMode='datetime'
 returnValueFormat='YYYY-MM-DD HH:mm'
 valueStyle={[styles.pickerValueStyle]}
 style={[styles.input, {
                        borderBottomColor: MainStyle.border.color.main,
                        borderBottomWidth: MainStyle.border.size.assit1
                    }, {paddingTop: 10, paddingBottom: 10}]}
 value={''}/>
 *
 */
export default class DatePicker extends React.Component {
	static defaultProps = {
		labelText: '', // 左侧标题
		placeholder: '请选择', //提示词
		style: {}, //自定义行样式
		placeholderStyle: {}, //提示样式
		valueStyle: {}, // 右侧值的样式
		value: '', // 值
		timeMode: 'datetime', //时间选择器的类型  time: HH:mm  datetime: YYYY-MM-DD HH:mm  date: YYYY-MM-DD  day: YYYY-MM-DD (0 上午/1 下午)
		returnValueFormat: 'YYYY-MM-DD HH:mm', //返回时间字符串样式
		editable: true,
		editableOnEmpty: true,
		startTime: undefined,
		lastTime: undefined
	};

	constructor(props) {
		super(props);

		this.showDatePicker = this.showDatePicker.bind(this);

		this.state = {
			selectedValue: this.props.value || ''
		};

		this.value = '';
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value != this.props.value) {
			this.value = nextProps.value;
			this.setState({
				selectedValue: nextProps.value
			});
			this.checkEditable();
		}
	}

	render() {
		let valueTextStyle = this.state.selectedValue
			? [styles.value, this.props.valueStyle]
			: { marginRight: 6, color: '#ccc' };
		let text = this.state.selectedValue ? this.state.selectedValue : this.props.placeholder;

		this.checkEditable();
		if (this.state.selectedValue && moment(text).isValid()) {
			if (this.props.timeMode == 'day') {
				if (moment(text).format('HH:mm') == '08:00') {
					text = moment(text).format('YYYY-MM-DD') + '上午';
				}
				if (moment(text).format('HH:mm') == '13:30') {
					text = moment(text).format('YYYY-MM-DD') + '下午';
				}
			}
		}

		return (
			<TouchableOpacity activeOpacity={1} onPress={this.showDatePicker} style={[styles.container, this.props.style]}>
				{/*左侧标题*/}
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={[
							{
								color: '#333',
								fontSize: 16
							},
							this.props.labelStyle
						]}
						allowFontScaling={false}
					>
						{this.props.labelText}
					</Text>
					{this.props.required ? (
						<Text
							style={{
								marginLeft: 5,
								fontSize: 16,
								color: '#EB5040'
							}}
						>
							*
            </Text>
					) : null}
				</View>

				<View style={styles.right}>
					{/*选择的内容*/}
					<Text
						style={[
							valueTextStyle,
							this.props.placeholder == text
								? {
									fontSize: 16,
									color: '#999',
									...this.props.placeholderStyle
								}
								: this.props.valueStyle
						]}
						allowFontScaling={false}
					>
						{text}
					</Text>
					{this.renderRight()}
				</View>
			</TouchableOpacity>
		);
	}

	renderRight() {
		let views = [];

		if (this.editable !== false) {
			if (this.props.rightRender) {
				views.push(this.props.rightRender());
			}
			if (this.props.iconRender) {
				views.push(this.props.iconRender());
			} else {
				views.push(
					<BMIcon
						iconCode={0xe649}
						style={{ fontSize: 14, color: '#999' }}
					/>
				);
			}
		}

		return <View style={{ flexDirection: 'row' }}>{views}</View>;
	}

  /**
   * 展示时间空间，自定义确定按钮的事件
   */
	showDatePicker() {
		if (this.editable === false) {
			return;
		}

		let that = this;
		showDatePicker({
			timeMode: that.props.timeMode,
			returnValueFormat: that.props.returnValueFormat,
			period: this.props.period,
			startTime: that.props.startTime,
			lastTime: that.props.lastTime,
			selectedTime: that.state.selectedValue || that._getTimeMode(this.props.timeMode, that.props.startTime),
			onSure: function (date, amfm) {
				let amfmString = '';
				if (that.props.timeMode == 'day') {
					amfmString = amfm === 1 ? '下午' : amfm === 0 ? '上午' : '';
				}

				if (amfm === 1) {
					that.value = date + ' 13:30';
				} else if (amfm === 0) {
					that.value = date + ' 08:00';
				} else {
					that.value = date;
				}

				if (that.props.timeMode == 'timePeriod') {
					that.props.onSelect(date, amfm);
				} else {
					that.setState({
						selectedValue: date + amfmString
					});
					that.props.onSelect(date);
				}
			}
		});
	}

	_getTimeMode = (modal, startTime) => {
		// time: HH:mm  datetime: YYYY-MM-DD HH:mm  date: YYYY-MM-DD  day: YYYY-MM-DD
		// moment().utcOffset(8).format('YYYY-MM-DD HH:mm')
		let momentDate = startTime ? moment(startTime) : moment();
		switch (modal) {
			case 'time':
				return momentDate.utcOffset(8).format('HH:mm');
				break;
			case 'datetime':
				return momentDate.utcOffset(8).format('YYYY-MM-DD HH:mm');
				break;
			case 'date':
				return momentDate.utcOffset(8).format('YYYY-MM-DD');
				break;
			case 'day':
				return momentDate.utcOffset(8).format('YYYY-MM-DD');
				break;
			case 'timePeriod':
				return '01:00-01:00';
			default:
				return momentDate.utcOffset(8).format('YYY-MM-DD HH:mm');
		}
	};

	checkEditable() {
		if (this.props.editable === false) {
			if (!this.value || this.value == '') {
				if (this.props.editableOnEmpty === false) {
					this.editable = false;
				} else {
					this.editable = true;
				}
			} else {
				this.editable = false;
			}
		}
	}

  /**
   * 给form调用的，获取此控件的值
   * @returns {String|string|*}
   */
	getValue() {
		return this.value;
	}

	setValue(v) {
		this.value = v;
		this.checkEditable();
		this.setState({ selectedValue: v });
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		height: 40,
		alignItems: 'center',
		paddingLeft: 16,
		paddingRight: 10
	},
	right: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	value: {
		fontSize: 16,
		color: '#666',
		marginRight: 6
	},

	placeholderStyle: {
		fontSize: 16,
		color: '#999'
	}
});
