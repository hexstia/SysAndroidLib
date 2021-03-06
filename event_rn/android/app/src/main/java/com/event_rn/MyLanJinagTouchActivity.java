package com.event_rn;

import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;

import com.example.nopermisstionad_sdk.LanJinagTouchActivity;

public class MyLanJinagTouchActivity extends LanJinagTouchActivity implements View.OnClickListener {

    ActionDialog actionDialog;

    AlertDialog.Builder builder;

    Uri uri = Uri.parse("content://com.practise.contentprovider.mycontentprovider/");


    static NetWorkSpeedUtils netWorkSpeedUtils;

    private SharedPreferences sp;

    private Handler mHnadler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case 100:
                    actionDialog.speed.setText(msg.obj.toString());
                    break;
            }
            super.handleMessage(msg);
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        actionDialog = new ActionDialog(this, R.style.Dialog);
        actionDialog.btn_restart.setOnClickListener(this);
        actionDialog.btn_file.setOnClickListener(this);
        actionDialog.btn_apk.setOnClickListener(this);
        actionDialog.btn_renew.setOnClickListener(this);
        actionDialog.btn_back.setOnClickListener(this);
        actionDialog.btn_quit.setOnClickListener(this);
        actionDialog.btn_home.setOnClickListener(this);

        this.setDialog(actionDialog);

        if (netWorkSpeedUtils == null) {
            netWorkSpeedUtils = new NetWorkSpeedUtils(this, mHnadler);
            netWorkSpeedUtils.startShowNetSpeed();
        }

        sp = this.getSharedPreferences("data", Context.MODE_PRIVATE);
        String deviceName = "手机名称：" + sp.getString("deviceName", "xx");

        actionDialog.phoneName.setText(deviceName);



//2. 接收广播
        BroadcastReceiver mReceiverPhoneState = new BroadcastReceiver()
        {
            @Override
            public void onReceive(Context context, Intent intent)
            {
                if(intent.getAction().equals("PhoneState"))
                {
                    MyLanJinagTouchActivity.this.sendEvent("cloudPhoneClose");
                    MyLanJinagTouchActivity.this.closeVideo();
                }
            }
        };
        IntentFilter filterPhoneState = new IntentFilter();
        filterPhoneState.addAction("PhoneState");
        registerReceiver(mReceiverPhoneState, filterPhoneState);


    }

    @Override
    public void onClick(View view) {
        actionDialog.cancel();

        switch (view.getId()) {
            case R.id.btn_restart:
                this.showAlertAndSendEvent("重启将会返回云手机列表", "cloudPhoneRestart");
                break;

            case R.id.btn_file:
                this.showAlertAndSendEvent("上传文件将会返回云手机列表", "cloudUploadFile");
                break;

            case R.id.btn_apk:
                this.showAlertAndSendEvent("上传应用将会返回云手机列表", "cloudUploadApk");
                break;

            case R.id.btn_renew:
                this.showAlertAndSendEvent("一键新机将手机数据全部清除\n" +
                        "并返回云手机主页", "cloudPhoneRenew");
                break;

            case R.id.btn_back:
                this.sendEvent("cloudPhoneBack");
                break;

            case R.id.btn_quit:
                this.sendEvent("cloudPhoneClose");
                this.closeVideo();
                break;

            case R.id.btn_home:
                this.sendEvent("cloudPhoneHome");
                break;


        }
    }


    private void showAlertAndSendEvent(String alertMessage, String eventName) {

        builder = new AlertDialog.Builder(this).setIcon(R.mipmap.ic_launcher2).setTitle("提示")
                .setMessage(alertMessage).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        MyLanJinagTouchActivity.this.sendEvent(eventName);
                        MyLanJinagTouchActivity.this.closeVideo();
                    }
                }).setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });
        builder.create().show();


    }


    private void sendEvent(String eventName) {
//        通过contentProvider进行线程间通信
        getContentResolver().query(uri, null, eventName, null, null);

    }


    private void closeVideo() {

        this.getSet().shutdown();
        this.kill();
    }

}
