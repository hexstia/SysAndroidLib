
import { configs } from 'dl-kit';
import { CloudPhoneModal, SocketMessage } from 'global';
import { NativeEventEmitter, NativeModules } from 'react-native';

let CloudPhoneModule = NativeModules.CloudPhoneModule
const eventEmitter = new NativeEventEmitter(CloudPhoneModule);

type PhoneEventCallback = (eventName: 'cloudPhoneRestart' | 'cloudUploadFile' | 'cloudUploadApk' | 'cloudPhoneRenew' | 'cloudPhoneBack' | 'cloudPhoneHome' | 'cloudPhoneClose', phone: CloudPhoneModal) => void
type SocketEventCallback = (eventName: 'webSocketOnOpen' | 'webSocektOnClose' | 'webSocektOnError' | 'webSocektMessage', socketMessage: SocketMessage) => void

let globalPhoneEventCallback: PhoneEventCallback | null = null
let globalSocketEventCallback: SocketEventCallback | null = null


/**
*  监听云手机事件
*/
eventEmitter.addListener('cloudPhoneEvent', (phone) => {
    globalPhoneEventCallback && globalPhoneEventCallback(phone.eventName, phone)
})

/**
*  监听Socket事件
*/
eventEmitter.addListener('webSocketEvent', (event) => {
    globalSocketEventCallback && globalSocketEventCallback(event.eventName, event)
})



/**
*  添加云手机事件 监听
*/
export function addCloudPhoneEventListener(eventCallback: PhoneEventCallback) {
    globalPhoneEventCallback = eventCallback;
}

/**
*  添加Socket事件 监听
*/
export function addSocketEventListener(eventCallback: SocketEventCallback) {
    globalSocketEventCallback = eventCallback;
}



/**
*  启动websocket线程
*/
export function startWebsocketConnection() {

    if (configs.token) {
        return CloudPhoneModule.startWebsocketConnection({ token: configs.token }) as Promise<any>
    } else {
        return Promise.reject('缺少token信息，不能启动socket链接')
    }
}

/**
*  检查websocket是否连接
*/
export function checkSocketConnect() {
    return CloudPhoneModule.checkSocketConnect() as Promise<string>
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
            }).catch((err: { code: string }) => {
                reject(err)
            })
        }).catch((err: { code: string }) => {
            reject(err)
        })
    })
}

/**
*  关闭云手机
*/
export function closeCloudPhone() {
    CloudPhoneModule.closeCloudPhone();
}

/**
*  发送socket消息
*/
export function sendWebsocketData(data: string) {

    return new Promise((resolve, reject) => {

        // 1.发送socket消息
        CloudPhoneModule.sendWebsocketData(data).then(() => {
            resolve()
        }).catch((err: { code: string }) => {
            // if (err.code == '未启动websocket线程') {
            //     CloudPhoneModule.startWebsocketConnection({ token: configs.token })
            // }
            reject(err)
        })
    })
}