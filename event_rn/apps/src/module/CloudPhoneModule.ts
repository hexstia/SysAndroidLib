
import { CloudPhoneModal } from 'global';
import { NativeModules } from 'react-native';

let CloudPhoneModule = NativeModules.CloudPhoneModule


/**
*  启动websocket线程
*/
export function startWebsocketConnection(token: string) {

    // 先关闭websocket通信
    CloudPhoneModule.shutdownWebsocketConnect()
    // 再启动websocket线程
    return CloudPhoneModule.startWebsocketConnection({ token })
}

/**
*  进入云手机
*/
export function enterCloudPhone(phone: CloudPhoneModal) {

    return new Promise((resolve, reject) => {
        
        // 1.打开视频流
        CloudPhoneModule.getDevicePermise(phone.deviceId + '').then(() => {
            // 2.跳转与启动视频流页面
            CloudPhoneModule.startDumpScreen({}).then(() => {
                resolve()
            }).catch(() => {
                reject()
            })
        }).catch(() => {
            reject()
        })
    })




}