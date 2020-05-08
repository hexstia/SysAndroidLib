/**
 * Created by chenyunjie on 2017/6/28.
 */

import Toast from 'react-native-root-toast';
import { hidenHUDLoading, showHUDLoading } from './HUD';

// const positions = {
//     TOP: 20,
//     BOTTOM: -20,
//     CENTER: 0
// };
let nowToast: any = null

const tips = {

	showTips: (msg: string, duration: number = Toast.durations.SHORT, callBack?: () => void, position: number = Toast.positions.CENTER) => {
		if (!msg || msg.length == 0) {
			return;
		}

		Toast.hide(nowToast)

		nowToast = Toast.show(msg, {
			duration: duration, // toast显示时长
			position: position, // toast位置
			shadow: true, // toast是否出现阴影
			animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
			hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
			delay: 0, // toast显示的延时
			onShow: () => {
				// toast出现回调（动画开始时）
			},
			onShown: () => {
				// toast出现回调（动画结束时）
			},
			onHide: () => {
				// toast隐藏回调（动画开始时）
			},
			onHidden: callBack
		});
	},

	showLoading: (msg?: string, timeOut?: number) => {
		showHUDLoading(msg, {}, timeOut || 10000);
	},

	hideLoading: () => hidenHUDLoading()
};


export default tips