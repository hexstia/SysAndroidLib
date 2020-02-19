package com.adlin.lanjiang_sdkdemo.android_ad_sdk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class OtherAct extends Activity {
    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(com.example.nopermisstionad_sdk.R.layout.innerpage);
        Button btn1 = findViewById(com.example.nopermisstionad_sdk.R.id.btn1);
        Button btn2 = findViewById(com.example.nopermisstionad_sdk.R.id.btn2);
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(OtherAct.this,testAct.class);
                intent.putExtra("key","B3E3E393C77E35A4A3F3CBD1E429B5DC");
                intent.putExtra("action","android.intent.action.LANJIANG1111");
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                Log.i("OtherAct","btn1");
                startActivity(intent);

            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(OtherAct.this,testAct.class);
                intent.putExtra("key","37A749D808E46495A8DA1E5352D03CAE");
                intent.putExtra("action","android.intent.action.LANJIANG1111");
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                Log.i("OtherAct","btn2");
                startActivity(intent);
            }
        });



    }
}
