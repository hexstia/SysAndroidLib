package com.lanjiang.cloud_moblie_sdk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.Interface.WebSocketCallback;
import com.domain.WsVideoInfo;
import com.example.nopermisstionad_sdk.SdkMain;

public class testOneAct extends Activity implements WebSocketCallback {

private Button btn,btn2,btn3,btn4,btn5;
private SdkMain sdk = null;
private WsVideoInfo wsVideoInfo;
    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(com.example.nopermisstionad_sdk.R.layout.oneact);
        btn = findViewById(com.example.nopermisstionad_sdk.R.id.button1);
        btn2 = findViewById(com.example.nopermisstionad_sdk.R.id.button2);
        btn3 = findViewById(com.example.nopermisstionad_sdk.R.id.button3);
        btn4 = findViewById(com.example.nopermisstionad_sdk.R.id.button4);
        btn5 = findViewById(com.example.nopermisstionad_sdk.R.id.button5);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            //启动websocket线程
                sdk = SdkMain.getInstance();
                sdk.setToken("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjpudWxsLCJsYXN0SXAiOiIyNy4xODkuMjIzLjgxIiwibG9naW5UeXBlIjpudWxsLCJjb21wYW55TmFtZSI6IjE1NjA1NDQwMzIx6buY6K6k5YWs5Y-4IiwiaXNzIjoidGNzc0FwaVNlcnZlciIsInR5cGUiOiIxIiwiZW5hYmxlVG9rZW4iOnRydWUsImRlbGV0ZUZsYWciOjAsImxhc3RJcEFkZHIiOiLmnKrnn6UiLCJwYXNzd29yZCI6Ijc4NzIyMmJjNDMyNTFjOWQ3MzRlYjQzNjViNTk1YmE2IiwiZGV2aWNlU3VtIjpudWxsLCJlbmFibGUiOnRydWUsImxvZ2luTmFtZSI6IjE1NjA1NDQwMzIxIiwiaWQiOjcsImV4cCI6IjIwMjAtMDMtMTEgMTk6NTg6MTciLCJpYXQiOiIyMDIwLTAzLTExIDE1OjU4OjE3IiwiY3JlYXRlVGltZVN0ciI6IjIwMjAtMDMtMDIgMTM6NDI6MDMiLCJlbWFpbCI6bnVsbCwicm9sZUlkIjpudWxsLCJtb2JpbGUiOiIxNTYwNTQ0MDMyMSIsInVwZGF0ZVRpbWUiOiJUdWUgTWFyIDEwIDA5OjEzOjUzIEdNVCswODowMCAyMDIwIiwiaG91ckFkIjpudWxsLCJ1c2VyTmFtZSI6IjE1NjA1NDQwMzIxIiwidHlwZVN0ciI6IuaZrumAmueUqOaItyIsImNvbXBhbnlJZCI6NywiY3JlYXRlVGltZSI6Ik1vbiBNYXIgMDIgMTM6NDI6MDMgR01UKzA4OjAwIDIwMjAiLCJ3eE5vIjpudWxsLCJlbmFibGVTdHIiOiLlkK_nlKgiLCJjb250YWN0VXNlciI6bnVsbCwiY29udGFjdFBob25lIjpudWxsLCJsb2dpblBsYXRGb3JtIjpudWxsLCJzZWFyY2hWYWx1ZSI6bnVsbH0.k91sGokTSvnmhFNvcExwL6xWKoTp0KWaIssCMq17rCk");
//                sdk.setToken("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjoiaHR0cDpcL1wvdGVzdC45MWxhbmppYW5nLmNvbVwvaW1hZ2VzXC9zZXJ2ZXJfZGlyXC91c2VyX2ltZ1wvYmExZTc2ZWRhZGNkNGNlZWEyNzVmNDExMTRkYzIyNDMucG5nIiwibGFzdElwIjoiMjcuMTg5LjIyMy44MSIsImxvZ2luVHlwZSI6bnVsbCwiY29tcGFueU5hbWUiOiLljJfkuqzok53lsIbnp5HmioAiLCJpc3MiOiJ0Y3NzQXBpU2VydmVyIiwidHlwZSI6IjEiLCJlbmFibGVUb2tlbiI6dHJ1ZSwiZGVsZXRlRmxhZyI6MCwibGFzdElwQWRkciI6IuS4reWbvS3msrPljJct5buK5Z2KIiwicGFzc3dvcmQiOiIyMmE3NGNiNTljNWY3YjFlZDM5NGQ3Mzg5ZjY1YmYwMSIsImRldmljZVN1bSI6bnVsbCwiZW5hYmxlIjp0cnVlLCJsb2dpbk5hbWUiOiIxMzU1MjgzMDMyMiIsImlkIjozLCJleHAiOiIyMDIwLTAzLTA2IDE3OjQwOjQ3IiwiaWF0IjoiMjAyMC0wMy0wNiAxMzo0MDo0NyIsImNyZWF0ZVRpbWVTdHIiOiIyMDIwLTAyLTI3IDExOjM3OjI4IiwiZW1haWwiOiIxMTFAMTExLjExMSIsInJvbGVJZCI6bnVsbCwibW9iaWxlIjoiMTM1NTI4MzAzMjIiLCJ1cGRhdGVUaW1lIjoiVGh1IE1hciAwNSAxNToxNzoyNyBHTVQrMDg6MDAgMjAyMCIsImhvdXJBZCI6bnVsbCwidXNlck5hbWUiOiIxMzU1MjgzMDMyMiIsInR5cGVTdHIiOiLmma7pgJrnlKjmiLciLCJjb21wYW55SWQiOjMsImNyZWF0ZVRpbWUiOiJUaHUgRmViIDI3IDExOjM3OjI4IEdNVCswODowMCAyMDIwIiwid3hObyI6IjExMSIsImVuYWJsZVN0ciI6IuWQr-eUqCIsImNvbnRhY3RVc2VyIjoicWluaGFvIiwiY29udGFjdFBob25lIjoiMTExMTExMTExMTEiLCJsb2dpblBsYXRGb3JtIjpudWxsLCJzZWFyY2hWYWx1ZSI6bnVsbH0.kdV16yjeCuToNJO2wGF5pwKWMukdQGWCKzEr6JxOZ2Y");
                sdk.startWebsocketConnection(testOneAct.this);
            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //发送一个websocket请求
                if(sdk == null){
                    Toast.makeText(testOneAct.this, "请先点击启动weboscket线程", Toast.LENGTH_SHORT).show();
                }
                 sdk.sendWebsocketData("");
            }
        });
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //打开视频流请求
                //获取了启动视频流所需要的参数 WsVideoInfo
                //此处testOneAct.this 是为回调websocket的数据，传参 ,是为了获取屏幕的宽高值计算比例
               wsVideoInfo=  sdk.sendGetDevicePermise("1651",testOneAct.this);
            }
        });
        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //关闭websocket通信
                sdk.shutdownWebsocketConnect();
            }
        });
        btn5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //跳转与启动视频流页面
//              sdk.shutdownWebsocketConnect();
                sdk.startDumpScreenAct(wsVideoInfo,testtwoAct.class,testOneAct.this);
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
//        sdk.shutdownWebsocketConnect();
    }

    @Override
    public void webSocketOnOpen(short code, String message) {
        Log.i("TAG","testOneAct ----- code:  "+code+" ; message : "+message);
    }

    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        Log.i("TAG","testOneAct ----- code:  "+code+" ; reason : "+reason);
    }

    @Override
    public void webSocektOnError(Exception ex) {
        Log.i("TAG","testOneAct ----- ex:  "+ex );
    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        Log.i("TAG","testOneAct ----- code:  "+code+" ; message : "+message +" params :"+params);
    }
}
