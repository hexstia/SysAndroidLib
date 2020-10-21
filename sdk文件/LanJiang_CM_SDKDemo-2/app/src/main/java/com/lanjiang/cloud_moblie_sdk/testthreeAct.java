package com.lanjiang.cloud_moblie_sdk;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.widget.Toast;

import com.example.nopermisstionad_sdk.LanJinagTouchActivity;

public class testthreeAct extends LanJinagTouchActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AlertDialog.Builder builder  = new AlertDialog.Builder(this);
        builder.setTitle("测试");
        builder.setMessage("这是一个测试程序");
        builder.setNegativeButton("测试", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(testthreeAct.this, "hello world", Toast.LENGTH_SHORT).show();
            }
        });

        setDialog(builder.create());
    }

}
