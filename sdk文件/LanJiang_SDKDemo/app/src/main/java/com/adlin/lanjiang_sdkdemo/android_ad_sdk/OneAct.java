package com.adlin.lanjiang_sdkdemo.android_ad_sdk;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class OneAct extends Activity {

private Button btn,btn1,btn2,btn3,btn4;
private Intent intent ;
    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(com.example.nopermisstionad_sdk.R.layout.oneact);
        btn = findViewById(com.example.nopermisstionad_sdk.R.id.button1);
        btn1 = findViewById(com.example.nopermisstionad_sdk.R.id.button2);
        btn2 = findViewById(com.example.nopermisstionad_sdk.R.id.button3);
        btn3 = findViewById(com.example.nopermisstionad_sdk.R.id.button4);
        btn4 = findViewById(com.example.nopermisstionad_sdk.R.id.button5);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(OneAct.this,testAct.class);
                Bundle bundle = new Bundle();
                bundle.putString("appPackageName","ruisasi.com.creditpowers");
                bundle.putString("adName","信贷动力");
//                bundle.putString("token","eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjoiaHR0cDpcL1wvd3d3LjkxbGFuamlhbmcuY29tXC9odHRwVXNlckltYWdlXC8zNTNlZDhkMTZkMzk0Yjg1YWE1OGYwNTFmZWVkNGI2Yy4zNjg0MDgiLCJsYXN0SXAiOiIxMDYuMTE4LjE4LjE4NyIsImxvZ2luVHlwZSI6bnVsbCwiY29tcGFueU5hbWUiOiIxMjMxMzIiLCJpc3MiOiJ0Y3NzQXBpU2VydmVyIiwidHlwZSI6IjEiLCJlbmFibGVUb2tlbiI6dHJ1ZSwiZGVsZXRlRmxhZyI6MCwibGFzdElwQWRkciI6IuS4reWbvS3msrPljJct5buK5Z2KIiwicGFzc3dvcmQiOiI0ZmYwNDMzZDUyM2MxZDEyMjc0OThlMzUyOGMwZTNlMCIsImVuYWJsZSI6dHJ1ZSwibG9naW5OYW1lIjoiMTUyMTA4MTAzMTIiLCJpZCI6NiwiZXhwIjoiMjAxOS0xMi0yNiAxODozMToyMCIsImlhdCI6IjIwMTktMTItMjYgMTQ6MzE6MjAiLCJjcmVhdGVUaW1lU3RyIjoiMjAxOS0wNi0xNyAxMDo0NzozNCIsImVtYWlsIjoiIiwicm9sZUlkIjpudWxsLCJtb2JpbGUiOiIxNTIxMDgxMDMxMiIsInVwZGF0ZVRpbWUiOiJXZWQgRGVjIDI1IDE2OjE0OjM1IEdNVCswODowMCAyMDE5IiwidXNlck5hbWUiOiIxNTIxMDgxMDMxMiIsInR5cGVTdHIiOiLmma7pgJrnlKjmiLciLCJjb21wYW55SWQiOjEsImNyZWF0ZVRpbWUiOiJNb24gSnVuIDE3IDEwOjQ3OjM0IEdNVCswODowMCAyMDE5Iiwid3hObyI6IiIsImVuYWJsZVN0ciI6IuWQr-eUqCIsImNvbnRhY3RVc2VyIjoiYXNkYXNkIiwiY29udGFjdFBob25lIjoiIiwibG9naW5QbGF0Rm9ybSI6bnVsbH0.1tyi_CVbvS257seLgVMiTQp2u2WUBvJ7TdXP2v7-9JM");              bundle.putString("action","android.intent.action.LANJIANG");
                bundle.putString("token","eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjoiaHR0cDpcL1wvd3d3LjkxbGFuamlhbmcuY29tXC9odHRwVXNlckltYWdlXC8zNTNlZDhkMTZkMzk0Yjg1YWE1OGYwNTFmZWVkNGI2Yy4zNjg0MDgiLCJsYXN0SXAiOiIxMDEuNzIuNTguMTE4IiwibG9naW5UeXBlIjpudWxsLCJjb21wYW55TmFtZSI6IjEyMzEzMiIsImlzcyI6InRjc3NBcGlTZXJ2ZXIiLCJ0eXBlIjoiMSIsImVuYWJsZVRva2VuIjp0cnVlLCJkZWxldGVGbGFnIjowLCJsYXN0SXBBZGRyIjoi5Lit5Zu9Leays-WMly3lu4rlnYoiLCJwYXNzd29yZCI6IjRmZjA0MzNkNTIzYzFkMTIyNzQ5OGUzNTI4YzBlM2UwIiwiZW5hYmxlIjp0cnVlLCJsb2dpbk5hbWUiOiIxNTIxMDgxMDMxMiIsImlkIjo2LCJleHAiOiIyMDIwLTAyLTE4IDAxOjQxOjIwIiwiaWF0IjoiMjAyMC0wMi0xNyAyMTo0MToyMCIsImNyZWF0ZVRpbWVTdHIiOiIyMDE5LTA2LTE3IDEwOjQ3OjM0IiwiZW1haWwiOiIiLCJyb2xlSWQiOm51bGwsIm1vYmlsZSI6IjE1MjEwODEwMzEyIiwidXBkYXRlVGltZSI6Ik1vbiBGZWIgMTcgMjE6NDE6MTkgR01UKzA4OjAwIDIwMjAiLCJ1c2VyTmFtZSI6IjE1MjEwODEwMzEyIiwidHlwZVN0ciI6IuaZrumAmueUqOaItyIsImNvbXBhbnlJZCI6MSwiY3JlYXRlVGltZSI6Ik1vbiBKdW4gMTcgMTA6NDc6MzQgR01UKzA4OjAwIDIwMTkiLCJ3eE5vIjoiIiwiZW5hYmxlU3RyIjoi5ZCv55SoIiwiY29udGFjdFVzZXIiOiJhc2Rhc2QiLCJjb250YWN0UGhvbmUiOiIiLCJsb2dpblBsYXRGb3JtIjpudWxsfQ.nJZHnuwqp2hu3z9wcaKw5awTdAIIhohLGhF6CcpCuuM");              bundle.putString("action","android.intent.action.LANJIANG");
                intent.putExtras(bundle);
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                Log.i("OneAct","btn");
                startActivity(intent);
            }
        });
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
    }

    @Override
    protected void onRestart() {
        Log.i("OneAct","onRestart");
        btn = findViewById(com.example.nopermisstionad_sdk.R.id.button1);
        btn1 = findViewById(com.example.nopermisstionad_sdk.R.id.button2);
        btn2 = findViewById(com.example.nopermisstionad_sdk.R.id.button3);
        btn3 = findViewById(com.example.nopermisstionad_sdk.R.id.button4);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
        super.onRestart();
    }

    @Override
    protected void onResume() {
        Log.i("OneAct","onResume");
        super.onResume();
    }

    @Override
    protected void onStop() {
        Log.i("OneAct","onStop");
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        Log.i("OneAct","onDestroy");
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        Log.i("OneAct","onPause");
        super.onPause();
    }
}
