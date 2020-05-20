/**
 * Created by zhou on 16/5/28.
 */

import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, TextStyle, View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;


let loadingView: RootSiblings | null = null;
let rotationAnim = new Animated.Value(0);

let _initializeRotationAnimation = () => {
	rotationAnim.setValue(0);

	Animated.timing(rotationAnim, {
		toValue: 1,
		duration: 1000,
		easing: Easing.linear
	}).start(() => {
		if (loadingView) {
			_initializeRotationAnimation();
		}
	});
};

/**
*  定时器
*/
let timer: any | null = null

/**
 * 弹出HUDLoading 挡住下面的控件交互
 * style : 文字样式
 */
export function showHUDLoading(text?: string, style?: TextStyle, timeout?: number) {
	const hud = (
		<View style={styles.maskView}>
			<View
				style={[
					styles.iconContainer,
					styles.shadowStyle,
					{
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}
				]}>
				<Animated.Image
					style={styles.iconStyle}
					source={require('#/other/loading.png')}
				/>
				{text && (
					<Text style={[{ color: '#fff', fontSize: 12 }, style]} allowFontScaling={false}>
						{text}
					</Text>
				)}
			</View>
		</View>
	);

	hidenHUDLoading()

	loadingView = new RootSiblings(hud);
	_initializeRotationAnimation();

	let t = timeout || 5000;
	timer = setTimeout(() => {
		hidenHUDLoading();
	}, t);
};

/**
 * 隐藏HUD
 */
export function hidenHUDLoading() {
	if (loadingView) {
		loadingView.destroy();
		loadingView = null;
	}
	if (timer) {
		clearTimeout(timer)
		timer = null
	}
};

exports.showHUDMessage = (message: string, timeout: number) => {
	if (typeof message !== 'string') {
		return;
	}

	const hud = (
		<View style={styles.maskView}>
			<View style={[styles.textContainer, styles.shadowStyle]}>
				<Text style={styles.textStyle} allowFontScaling={false}>
					{message}
				</Text>
			</View>
		</View>
	);

	if (loadingView) {
		loadingView.update(hud);
	} else {
		loadingView = new RootSiblings(hud);
	}

	let t = 2500;
	if (timeout) {
		t = timeout;
	}

	setTimeout(() => {
		if (loadingView) {
			loadingView.destroy();
			loadingView = null;
		}
	}, t);
};

const styles = StyleSheet.create({
	maskView: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 9999,
		position: 'absolute'
	},
	textContainer: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginHorizontal: 0.1 * WINDOW_WIDTH,
		backgroundColor: 'rgba(20,20,20,0.9)',
		borderRadius: 6
	},
	shadowStyle: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowOpacity: 0.7,
		shadowRadius: 0
	},
	textStyle: {
		fontSize: 14,
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 0.5,
		lineHeight: 18
	} as TextStyle,
	iconContainer: {
		padding: 15,
		backgroundColor: 'rgba(20,20,20,0.9)',
		borderRadius: 6
	},
	iconStyle: {
		width: 48,
		height: 48,
		tintColor: '#fcfcfc',
		transform: [
			{
				rotate: rotationAnim.interpolate({
					inputRange: [0, 1],

					outputRange: ['0deg', '360deg']
				})
			}
		]
	}
});
