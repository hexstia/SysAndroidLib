package com.event_rn;

import android.content.Context;
import android.content.SharedPreferences;
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
import javax.annotation.Nullable;

public class CloudPhoneModule extends ReactContextBaseJavaModule implements WebSocketCallback {

    private static ReactApplicationContext reactContext;

    private static SdkMain sdk = null;

    private Promise connectSocketPromise = null;
    private Promise closeSocketPromise = null;

    private WsVideoInfo wsVideoInfo;

    private PhoneModal phoneModal;

    public static CloudPhoneModule instance;

    private String ptoken;

    private SharedPreferences sp;


    public CloudPhoneModule(@Nonnull ReactApplicationContext context) {
        super(reactContext);
        reactContext = context;
        instance = this;
        sp = context.getSharedPreferences("data", Context.MODE_PRIVATE);
    }

    public static CloudPhoneModule instance() {
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
    public void startWebsocketConnection(ReadableMap data, Promise callback) {

        this.connectSocketPromise = callback;

        ptoken = data.getString("token");

        if (ptoken == null) {
            callback.reject("缺少token参数", "缺少token参数");
            return;
        }

        if (sdk == null) {
            sdk = SdkMain.getInstance();
            sdk.setToken(ptoken);
            sdk.startWebsocketConnection(this);
        } else {
            callback.resolve("socket已存在");
        }
    }


    /*
     * 检查websocket是否连接
     * */
    @ReactMethod
    public void checkSocketConnect(Promise callback) {
        if(sdk != null){
            callback.resolve("socket连接");
        }else{
            callback.reject("socket未连接","socket未连接");
        }
    }

    /*
     * 发送一个websocket请求
     * */
    @ReactMethod
    public void sendWebsocketData(String data, Promise callback) {

        if (data == null) {
            callback.reject("缺少参数", "缺少参数");
            return;
        }

        if (sdk == null) {
            callback.reject("未启动websocket线程", "未启动websocket线程");
            return;
        }

        sdk.sendWebsocketData(data);
        callback.resolve("发送消息成功");
    }


    /*
     * 关闭websocket通信
     * */
    @ReactMethod
    public void shutdownWebsocketConnect(Promise callback) {
        if (sdk == null) {
            callback.resolve("socket 处于关闭中");

        } else {
            this.closeSocketPromise = callback;
            //关闭websocket通信
            sdk.shutdownWebsocketConnect();
        }
    }


    /*
     * 打开视频流
     */
    @ReactMethod
    public void getDevicePermise(String devId, Promise callback) {
        if (sdk == null) {
            callback.reject("未启动websocket线程", "未启动websocket线程");
        } else {
            //打开视频流请求
            //获取了启动视频流所需要的参数 WsVideoInfo
            //此处testOneAct.this 是为回调websocket的数据，传参 ,是为了获取屏幕的宽高值计算比例
            wsVideoInfo = sdk.sendGetDevicePermise(devId, MainActivity.instance());
            if (wsVideoInfo == null) {
                callback.reject("打开视频流请求失败", "打开视频流请求失败");
            } else {
                callback.resolve("打开成功");
            }
        }
    }

    /*
     * 跳转与启动视频流页面
     *
     * */
    @ReactMethod
    public void startDumpScreen(ReadableMap data, Promise callback) {

        if (sdk == null) {
            callback.reject("未启动websocket线程", "未启动websocket线程");
        } else if (wsVideoInfo == null) {
            callback.reject("未打开视频流", "未打开视频流");
        } else {
            callback.resolve("成功打开视频页面");
            phoneModal = new PhoneModal(data);
            sdk.startDumpScreenAct(wsVideoInfo, ActActivity.class, MainActivity.instance());

            //构造一个编辑器----笔
            SharedPreferences.Editor editor = sp.edit();
            //数据的存储---只能存储简单的数据
            editor.putString("deviceName", phoneModal.deviceName);
            //提交--保存
            editor.commit();
        }
    }

    /*
     * 发送云手机消息
     * */
    public void sendCloudPhoneEvent(String eventName) {
        System.out.println("发送云手机消息" + eventName);

        WritableMap phoneMap = phoneModal.getWriteMap();
        phoneMap.putString("eventName", eventName);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("cloudPhoneEvent", phoneMap);
    }


    /*
     * 发送webSocket 事件
     * */

    public void sendWebSocketEvent(String eventName, String code, String message, String params) {

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("eventName", eventName);
        writableMap.putString("code", code);
        writableMap.putString("message", message);
        writableMap.putString("params", params);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("webSocketEvent", writableMap);
    }


    //    ============   Socket   事件的回调   ==============
    @Override
    public void webSocketOnOpen(short code, String message) {
        if (connectSocketPromise != null) {
            connectSocketPromise.resolve("socket链接打开");
            connectSocketPromise = null;
        }
        Log.i("socket链接打开", "testOneAct ----- code:  " + code + " ; message : " + message);
        sendWebSocketEvent("webSocketOnOpen", "200", message, "");
    }


    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        Log.i("socket链接关闭", "testOneAct ----- code:  " + code + " ; reason : " + reason);
        if (closeSocketPromise != null) {
            closeSocketPromise.resolve("成功关闭socket");
            closeSocketPromise = null;
        }
        sdk = null;
        sendWebSocketEvent("webSocektOnClose", "404", "", "");
    }

    @Override
    public void webSocektOnError(Exception ex) {
        Log.i("socket链接报错", "testOneAct ----- ex:  " + ex);
        if (sdk != null) {
            sdk.shutdownWebsocketConnect();
        }

        if (connectSocketPromise != null) {
            connectSocketPromise.reject("链接失败", "链接失败");
            connectSocketPromise = null;
        }
        sdk = null;

        sendWebSocketEvent("webSocektOnError", "400", "", "");
    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        Log.i("socket链接收到消息", "testOneAct ----- code:  " + code + " ; message : " + message + " params :" + params);
        sendWebSocketEvent("webSocektMessage", code, message, params);
    }
}
