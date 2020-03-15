package com.event_rn;

import android.net.Uri;
import android.util.Log;

import com.Interface.WebSocketCallback;
import com.domain.WsVideoInfo;
import com.example.nopermisstionad_sdk.SdkMain;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nonnull;

public class CloudPhoneModule extends ReactContextBaseJavaModule implements WebSocketCallback {

    private static ReactApplicationContext reactContext;

    private static SdkMain sdk = null;

    private Promise connectSocketPromise = null;

    private WsVideoInfo wsVideoInfo;

    private PhoneModal phoneModal;

    public static CloudPhoneModule instance;

    private String ptoken;


    public CloudPhoneModule(@Nonnull ReactApplicationContext context) {
        super(reactContext);
        reactContext = context;
        instance = this;
    }

    public static CloudPhoneModule instance(){
        return instance;
    }


    @Nonnull
    @Override
    public String getName() {
        return "CloudPhoneModule";
    }

    /*
    * 启动websocket线程
    * */
    @ReactMethod
    public void startWebsocketConnection(ReadableMap data, Promise callback){
        this.connectSocketPromise = callback;

        ptoken = data.getString("token");

        if (ptoken == null){
            callback.reject("缺少token参数","缺少token参数");
            return;
        }

        if (sdk == null){
            sdk = SdkMain.getInstance();
            sdk.setToken(ptoken);
            sdk.startWebsocketConnection(this);
        }else {
            callback.reject("socket已存在","socket已存在");
        }
    }

    /*
    * 发送一个websocket请求
    * */
    @ReactMethod
    public void sendWebsocketData(String data,Promise callback){

        if (data == null){
            callback.reject("缺少参数","缺少参数");
            return;
        }

        if (sdk == null){
            callback.reject("请先启动websocket线程","请先启动websocket线程");
            return;
        }

        sdk.sendWebsocketData(data);
        callback.resolve("发送消息成功");
    }


    /*
    * 关闭websocket通信
    * */
    @ReactMethod
    public void shutdownWebsocketConnect(){
        if (sdk != null){
            //关闭websocket通信
            sdk.shutdownWebsocketConnect();
        }
    }


    /*
    * 打开视频流
     */
    @ReactMethod
    public void getDevicePermise(String devId,Promise callback){
        if (sdk == null){
            callback.reject("未启动websocket线程","未启动websocket线程");
        }else {
            //打开视频流请求
            //获取了启动视频流所需要的参数 WsVideoInfo
            //此处testOneAct.this 是为回调websocket的数据，传参 ,是为了获取屏幕的宽高值计算比例
            wsVideoInfo = sdk.sendGetDevicePermise(devId, MainActivity.instance());
            if (wsVideoInfo == null){
                callback.reject("打开视频流请求失败","打开视频流请求失败");
            }else {
                callback.resolve("打开成功");
            }
        }
    }

    /*
    * 跳转与启动视频流页面
    *
    * */
    @ReactMethod
    public void startDumpScreen(ReadableMap data,Promise callback){

        if (sdk == null){
            callback.reject("未启动websocket线程","未启动websocket线程");
        }else if(wsVideoInfo == null){
            callback.reject("未打开视频流","未打开视频流");
        }else {
            callback.resolve("成功打开视频页面");
            phoneModal = new PhoneModal(data);
            sdk.startDumpScreenAct(wsVideoInfo, ActActivity.class, MainActivity.instance());
        }
    }

    /*
    * 发送云手机消息
    * */
    public void sendCloudPhoneEvent(String eventName){
        System.out.println("发送云手机消息" + eventName);

        WritableMap phoneMap = phoneModal.getWriteMap();
        phoneMap.putString("eventName",eventName);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("cloudPhoneEvent", phoneMap);
    }


    /*
    * 发送webSocket 事件
    * */

    public void sendWebSocketEvent(String eventName,String code,String message,String params){

//        if(this.phoneModal == null)return;

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("eventName",eventName);
        writableMap.putString("code",code);
        writableMap.putString("message",message);
        writableMap.putString("params",params);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("webSocketEvent", writableMap);
    }





//    ============   Socket   事件的回调   ==============
    @Override
    public void webSocketOnOpen(short code, String message) {
        if (connectSocketPromise != null){
            this.connectSocketPromise.resolve("socket链接打开");
        }
        Log.i("socket链接打开", "testOneAct ----- code:  " + code + " ; message : " + message);
        sendWebSocketEvent("webSocketOnOpen","200",message,"");
    }


    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        Log.i("socket链接关闭", "testOneAct ----- code:  " + code + " ; reason : " + reason);
        sdk = null;
        sendWebSocketEvent("webSocektOnClose","404","","");

    }

    @Override
    public void webSocektOnError(Exception ex) {
        Log.i("socket链接报错", "testOneAct ----- ex:  " + ex);
        sendWebSocketEvent("webSocektOnError","400","","");

    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        Log.i("socket链接收到消息", "testOneAct ----- code:  " + code + " ; message : " + message + " params :" + params);
        sendWebSocketEvent("webSocektMessage",code,message,params);
    }
}
