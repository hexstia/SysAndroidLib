package com.event_rn;

import android.util.Log;

import com.Interface.WebSocketCallback;
import com.domain.WsVideoInfo;
import com.example.nopermisstionad_sdk.SdkMain;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import javax.annotation.Nonnull;

public class CloudPhoneModule extends ReactContextBaseJavaModule implements WebSocketCallback {

    private static ReactApplicationContext reactContext;

    private static SdkMain sdk = null;

    private Promise connectSocketPromise = null;

    private WsVideoInfo wsVideoInfo;


    public CloudPhoneModule(@Nonnull ReactApplicationContext context) {
        super(reactContext);
        reactContext = context;
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

        String ptoken = data.getString("token");

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
            sdk.startDumpScreenAct(wsVideoInfo, ActActivity.class, MainActivity.instance());
        }
    }

    @Override
    public void webSocketOnOpen(short code, String message) {
        if (connectSocketPromise != null){
            this.connectSocketPromise.resolve("socket链接打开");
        }
        Log.i("socket链接打开", "testOneAct ----- code:  " + code + " ; message : " + message);
    }


    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        Log.i("socket链接关闭", "testOneAct ----- code:  " + code + " ; reason : " + reason);
    }

    @Override
    public void webSocektOnError(Exception ex) {
        Log.i("socket链接报错", "testOneAct ----- ex:  " + ex);
    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        Log.i("socket链接收到消息", "testOneAct ----- code:  " + code + " ; message : " + message + " params :" + params);
    }
}
