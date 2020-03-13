
import { CloudPhoneEventName, CloudPhoneModal } from 'global';
import { NativeEventEmitter, NativeModules } from 'react-native';

let CloudPhoneModule = NativeModules.CloudPhoneModule
const eventEmitter = new NativeEventEmitter(CloudPhoneModule);

type EventCallback = (eventName: CloudPhoneEventName, phone: CloudPhoneModal) => void

let globalEventCallback: EventCallback | null = null


/**
*  监听云手机事件
*/
eventEmitter.addListener('cloudPhoneEvent', (phone) => {
    console.log('监听云手机事件', phone)
    globalEventCallback && globalEventCallback(phone.eventName, phone)
})



/**
*  添加云手机事件 监听
*/
export function addCloudPhoneEventListener(eventCallback: EventCallback) {
    globalEventCallback = eventCallback;
}


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
            CloudPhoneModule.startDumpScreen({ deviceName: phone.deviceName, deviceId: phone.deviceId, id: phone.id }).then(() => {
                resolve()
            }).catch(() => {
                reject()
            })
        }).catch(() => {
            reject()
        })
    })




}