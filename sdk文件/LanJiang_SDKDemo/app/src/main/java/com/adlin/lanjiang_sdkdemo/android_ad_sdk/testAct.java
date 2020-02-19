package com.adlin.lanjiang_sdkdemo.android_ad_sdk;

import android.app.ActivityManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.example.nopermisstionad_sdk.LanJiangBaseActivity;

import java.net.InetSocketAddress;
import java.net.SocketAddress;

public class testAct extends LanJiangBaseActivity {
private static final String TAG = "testAct";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        /*
         * 设置预加载页面的布局，需要自己创建一个布局.xml文件；例如R.layout.test_pre_act
         * 注意 如果不使用自定义预加载页面，则不需要设置setContentView
         */
       // setContentView(R.layout.test_pre_act);
        //setfloatView(R.drawable.float_2,2);
        //setfloatMessageView(R.layout.float_message,R.id.tv_update1,R.id.tv_download1,R.id.tv_time1,R.id.tv_title1,R.id.btn_exit1,R.id.btn_download1,R.id.btn_back1);
        Bundle bundle =  getIntent().getExtras();
//        HomeActvity = getIntent().getComponent().getClassName();
          String HomeActvity  =  bundle.getString("action");
          String appPackageName = bundle.getString("appPackageName");
          String token = bundle.getString("token");
          String adName = bundle.getString("adName");
//        HomeActvity = getIntent().getStringExtra("action");
           super.setCloudDesktopConfig(HomeActvity,appPackageName,token,adName);
           super.onCreate(savedInstanceState);
    }

    @Override
    public void VideoSocketOpen(SocketAddress socketAddress) {
        Log.i(TAG, "VideoSocketOpen VideoSocketOpen : ");
        InetSocketAddress inetSocketAddress = (InetSocketAddress) socketAddress;
        Log.i(TAG, "VideoSocketOpen hostName : " + inetSocketAddress.getHostName());
        Log.i(TAG, "VideoSocketOpen port : " + inetSocketAddress.getPort());
        super.VideoSocketOpen(socketAddress);
    }

    @Override
    public void VideoSocketClose(SocketAddress socketAddress) {
        super.VideoSocketClose(socketAddress);
    }

    @Override
    public void VideoSocketError(SocketAddress socketAddress, Throwable throwable) {
        super.VideoSocketError(socketAddress,throwable);
    }

    @Override
    public void webSocketOnOpen(short code, String message) {
        super.webSocketOnOpen(code,message);
    }

    /**
     *  *
     *  * @param code 101为请求成功 -1为未联网
     *  * @param reason
     *  * @param remote
     *  
     */
    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        super.webSocektOnClose(code,reason,remote);
    }

    @Override
    public void webSocektOnError(Exception ex) {
        super.webSocektOnError(ex);
    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        super.webSocektMessage(code,message,params);
    }


}
