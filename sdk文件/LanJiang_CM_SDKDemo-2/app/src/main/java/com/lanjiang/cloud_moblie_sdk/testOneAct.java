package com.lanjiang.cloud_moblie_sdk;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.media.Image;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.Interface.WebSocketCallback;
import com.domain.Define;
import com.domain.WsVideoInfo;
import com.example.nopermisstionad_sdk.SdkMain;
import com.net.Utils.JsonUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;


public class testOneAct extends Activity implements WebSocketCallback {

    private Button btn, btn2, btn3, btn4, btn5, btn6, btn7, btn8;
    private ImageView iv;
    private SdkMain sdk = null;
    private WsVideoInfo wsVideoInfo;
    private Handler handler;
    private EditText logname;
    private EditText password;
    private String hostName = "http://test.91lanjiang.com/tcss-api/";       //测试
//    private String hostName = "http://91lanjiang.com/tcss-api/";       //生产
    private String ptoken;
    private String ts;
    private String devid;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.oneact);

        logname = findViewById(R.id.logname);
        password = findViewById(R.id.password);
        logname.setText("15210810312");
        password.setText("AD821008");
        devid = "1894";

        handler = new Handler(new Handler.Callback() {
            @Override
            public boolean handleMessage(Message msg) {
                if (msg.what == 0x01) {
                    Bitmap bmp = (Bitmap) msg.obj;
                    iv.setImageBitmap(bmp);
                }
                return false;
            }
        });
        btn = findViewById(R.id.button1);
        btn2 = findViewById(R.id.button2);
        btn3 = findViewById(R.id.button3);
        btn4 = findViewById(R.id.button4);
        btn6 = findViewById(R.id.button6);
        btn7 = findViewById(R.id.login);
        btn8 = findViewById(R.id.restart);
        btn5 = findViewById(R.id.button5);
        iv = findViewById(R.id.iv);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //启动websocket线程
                sdk = SdkMain.getInstance();
                sdk.setToken(ptoken);
//                sdk.setToken("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjpudWxsLCJsYXN0SXAiOiIyNy4xODkuMjIzLjgxIiwibG9naW5UeXBlIjpudWxsLCJjb21wYW55TmFtZSI6IjE1MjEwODEwMzEy6buY6K6k5YWs5Y-4IiwiaXNzIjoidGNzc0FwaVNlcnZlciIsInR5cGUiOiIxIiwiZW5hYmxlVG9rZW4iOnRydWUsImRlbGV0ZUZsYWciOjAsImxhc3RJcEFkZHIiOiLmnKrnn6UiLCJwYXNzd29yZCI6IjM2OGZlMzcyNTA2Yjg3YjMxMTM4YmZhMjA4OGFjNjU4IiwiZGV2aWNlU3VtIjpudWxsLCJlbmFibGUiOnRydWUsImxvZ2luTmFtZSI6IjE1MjEwODEwMzEyIiwiaWQiOjQsImV4cCI6IjIwMjAtMDMtMTIgMTg6NTk6MTMiLCJpYXQiOiIyMDIwLTAzLTEyIDE0OjU5OjEzIiwiY3JlYXRlVGltZVN0ciI6IjIwMjAtMDItMjcgMTI6MTg6MzkiLCJlbWFpbCI6bnVsbCwicm9sZUlkIjpudWxsLCJtb2JpbGUiOiIxNTIxMDgxMDMxMiIsInVwZGF0ZVRpbWUiOiJUdWUgTWFyIDEwIDEwOjE4OjIwIEdNVCswODowMCAyMDIwIiwiaG91ckFkIjpudWxsLCJ1c2VyTmFtZSI6IjE1MjEwODEwMzEyIiwidHlwZVN0ciI6IuaZrumAmueUqOaItyIsImNvbXBhbnlJZCI6NCwiY3JlYXRlVGltZSI6IlRodSBGZWIgMjcgMTI6MTg6MzkgR01UKzA4OjAwIDIwMjAiLCJ3eE5vIjpudWxsLCJlbmFibGVTdHIiOiLlkK_nlKgiLCJjb250YWN0VXNlciI6bnVsbCwiY29udGFjdFBob25lIjpudWxsLCJsb2dpblBsYXRGb3JtIjpudWxsLCJzZWFyY2hWYWx1ZSI6bnVsbH0.Vg7dqt4Mh6XwvKBTwBvwwGaV7TTUt2x_eitreVjFjfY");
                sdk.startWebsocketConnection(testOneAct.this);
            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //发送一个websocket请求
                if (sdk == null) {
                    Toast.makeText(testOneAct.this, "请先点击启动weboscket线程", Toast.LENGTH_SHORT).show();
                }
                sdk.sendWebsocketData(Define.cloudApplyJson1 + devid + Define.cloudApplyJson2);
            }
        });
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //打开视频流请求
                //获取了启动视频流所需要的参数 WsVideoInfo
                //此处testOneAct.this 是为回调websocket的数据，传参 ,是为了获取屏幕的宽高值计算比例
                wsVideoInfo = sdk.sendGetDevicePermise(devid, testOneAct.this);
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
                sdk.startDumpScreenAct(wsVideoInfo, com.lanjiang.cloud_moblie_sdk.testtwoAct.class, testOneAct.this);
            }
        });
        btn6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        OkHttpClient osclient = new OkHttpClient();
                        RequestBody osrequestBody = new FormBody.Builder()
                                .add("token", ptoken)
                                .add("screenStatus", "2")
                                .add("height", "720")
                                .add("width", "344")
                                .add("deviceId", devid)
                                .build();
                        Request osrequest = new Request.Builder()
                                .url(hostName + "cloudPhone/phone/screenshotCloudphone")
                                .post(osrequestBody)
                                .build();
                        Response osresponse = null;
                        try {
                            osresponse = osclient.newCall(osrequest).execute();
                            String osresponseData = osresponse.body().string();

                            Log.d("TAG", "obtainScreenshot: " + osresponseData);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }).start();
            }
        });
        btn8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        OkHttpClient osclient = new OkHttpClient();
                        RequestBody osrequestBody = new FormBody.Builder()
                                .add("token", ptoken)
                                .add("deviceIds", devid)
                                .add("selectAll", "")
                                .add("searchGroupId", "")
                                .add("status", "")
                                .add("type", "2")
                                .build();
                        Request osrequest = new Request.Builder()
                                .url(hostName + "cloudPhone/phone/resetDevice")
                                .post(osrequestBody)
                                .build();
                        Response osresponse = null;
                        try {
                            osresponse = osclient.newCall(osrequest).execute();
                            String osresponseData = osresponse.body().string();

                            Log.d("TAG", "obtain_resetDevice: " + osresponseData);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }).start();
            }
        });
        btn7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //点击登录获取必要参数
                sendRequestWithOkHttp();
            }
        });
    }

    private void sendRequestWithOkHttp() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    long timestamp = System.currentTimeMillis();
                    ts = String.valueOf(timestamp);
                    //get请求
                    OkHttpClient gclient = new OkHttpClient();
                    Request request = new Request.Builder()
                            .url(hostName + "tcssPlatform/user/getTempToken?timestamp=" + ts)
                            .build();
                    Response gresponse = gclient.newCall(request).execute();
                    String gresponseData = gresponse.body().string();
//                    Log.i("TAG", "临时令牌日志: " + gresponseData);
                    String token = parseJsonToken(gresponseData);
//                    Log.d("TAG", "token: " + token);
                    String name = logname.getText().toString();
                    String ps = password.getText().toString();
                    //post请求
                    OkHttpClient pclient = new OkHttpClient();
                    RequestBody prequestBody = new FormBody.Builder()
                            .add("token", token)
                            .add("mobile", name)
                            .add("password", ps)
                            .add("from", "1")
                            .add("loginType", "0")
                            .add("timestamp", ts)
                            .build();
                    Request prequest = new Request.Builder()
                            .url(hostName + "tcssPlatform/user/loginApp")
                            .post(prequestBody)
                            .build();
                    Response presponse = pclient.newCall(prequest).execute();
                    String presponseData = presponse.body().string();
//                    Log.i("TAG", "权限令牌日志: " + presponseData);
                    ptoken = parseJsonToken(presponseData);
                    Log.d("TAG", "ptoken: " + ptoken);
                    if (ptoken == null) {
                        String nmes = parseJsonMessage(presponseData);
                        Log.i("TAG", nmes);
                    }
                    obtainList(ptoken);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }

    private String parseJsonToken(String jsondata) {
        JSONObject jsonObject = null;
        String token = null;
        try {
            jsonObject = new JSONObject(jsondata).getJSONObject("data");
            token = jsonObject.getString("token");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return token;
    }

    private String parseJsonMessage(String jsondata) throws JSONException {
        JSONObject jsonObject = new JSONObject(jsondata);
        String message;
        message = jsonObject.getString("message");
        Log.d("TAG", "message: " + message);
        return message;
    }

    private void obtainList(String pto) {
        OkHttpClient oclient = new OkHttpClient();
        RequestBody orequestBody = new FormBody.Builder()
                .add("token", pto)
                .add("page", "1")
                .add("status", "")
                .add("pageSize", "10")
                .add("groupId", "")
                .add("id", "")
                .build();
        Request orequest = new Request.Builder()
                .url(hostName + "cloudPhone/phone/list")
                .post(orequestBody)
                .build();
        Response oresponse = null;
        try {
            oresponse = oclient.newCall(orequest).execute();
            String oresponseData = oresponse.body().string();
            Log.i("TAG", "设备列表日志: " + oresponseData);
//            obtaindevId(oresponseData);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void obtaindevId(String oj) {
        try {
            JSONObject json = new JSONObject(oj);
            JSONObject jdata = json.getJSONObject("data");
            JSONArray jlist = jdata.getJSONArray("list");
            if (jlist.length() == 0) {
                Log.i("TAG", "没有设备");
            }
            for (int i = 0; i < jlist.length(); i++) {
                JSONObject value = jlist.getJSONObject(i);
                String deviceId = value.getString("deviceId");
                Log.d("TAG", "deviceId: " + deviceId);
                devid = deviceId;
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
//        sdk.shutdownWebsocketConnect();
    }

    @Override
    public void webSocketOnOpen(short code, String message) {
        Log.i("TAG", "testOneAct ----- code:  " + code + " ; message : " + message);
    }

    @Override
    public void webSocektOnClose(int code, String reason, boolean remote) {
        Log.i("TAG", "testOneAct ----- code:  " + code + " ; reason : " + reason);
    }

    @Override
    public void webSocektOnError(Exception ex) {
        Log.i("TAG", "testOneAct ----- ex:  " + ex);
    }

    @Override
    public void webSocektMessage(String code, String message, String params) {
        Log.i("TAG", "testOneAct ----- code:  " + code + " ; message : " + message + " params :" + params);
        if (code.equals("5000")) {
            Bitmap bitmap = JsonUtils.base64ToBitmap(message);
            Message msg = new Message();
            msg.what = 0x01;
            msg.obj = bitmap;
            handler.sendMessage(msg);
        }
    }
}
