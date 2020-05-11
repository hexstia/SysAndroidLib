package com.event_rn;

import android.os.Bundle;
import android.util.Log;

import com.example.nopermisstionad_sdk.LanJiangBaseActivity;
import com.example.nopermisstionad_sdk.SdkMain;

import java.net.InetSocketAddress;
import java.net.SocketAddress;

public class ActActivity extends LanJiangBaseActivity {



    private static final String TAG = "testtwoAct";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        /*
         * 设置预加载页面的布局，需要自己创建一个布局.xml文件；例如R.layout.test_pre_act
         * 注意 如果不使用自定义预加载页面，则不需要设置setContentView
         */
        setContentView(R.layout.activity_act);
        setfloatView(R.drawable.float_btn);
        //setfloatMessasgeView(R.layout.float_message,R.id.tv_update1,R.id.tv_download1,R.id.tv_time1,R.id.tv_title1,R.id.btn_exit1,R.id.btn_download1,R.id.btn_back1);
        Bundle bundle =  getIntent().getExtras();
        super.setCloudDesktopConfig(bundle.getString("action"), SdkMain.getInstance().getBunldData(bundle));
        super.onCreate(savedInstanceState);
    }

    @Override
    public void VideoSocketOpen(SocketAddress socketAddress) {
        Log.i(TAG, "VideoSocketOpen VideoSocketOpen : ");
        InetSocketAddress inetSocketAddress = (InetSocketAddress) socketAddress;
        Log.i(TAG, "VideoSocketOpen hostName : " + inetSocketAddress.getHostName());
        Log.i(TAG, "VideoSocketOpen port : " + inetSocketAddress.getPort());
        super.VideoSocketOpen(socketAddress);
        System.out.println("视频开始");

    }

    @Override
    public void VideoSocketClose(SocketAddress socketAddress) {
        super.VideoSocketClose(socketAddress);
        System.out.println("视频断开");
    }

    @Override
    public void VideoSocketError(SocketAddress socketAddress, Throwable throwable) {
        super.VideoSocketError(socketAddress,throwable);
        System.out.println("视频错误");

    }

    @Override
    public void webSocketOnOpen(short code, String message) {
        super.webSocketOnOpen(code,message);
        System.out.println("链接打开");

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
        System.out.println("链接关闭");

    }

    @Override
    public void webSocektOnError(Exception ex) {
        super.webSocektOnError(ex);
        System.out.println("链接报错");

    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        super.webSocektMessage(code,message,params);
        System.out.println("链接收到消息" + message + "code:" + code);
        System.out.println(params);

    }


}
