package com.event_rn;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.view.WindowManager;
import android.widget.Toast;

/*
* 启动页
* 跳过按钮：https://www.ctolib.com/CountdownViewa.html
* */
public class Splash extends Activity {

    CountdownView mCountdownView;

    public Boolean isOpen = false;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);//隐藏状态栏
        setContentView(R.layout.activity_splash);

        mCountdownView = (CountdownView) findViewById(R.id.countdown);
        mCountdownView.start();
        mCountdownView.setOnFinishAction(new Action() {
            @Override
            public void onAction() {
                Splash.this.gotoMain();
            }
        });
        mCountdownView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Splash.this.gotoMain();
            }
        });

    }

    public void gotoMain(){
        if (!isOpen){
            isOpen = true;
            Intent it=new Intent(getApplicationContext(),MainActivity.class);//启动MainActivity
            startActivity(it);
            finish();//关闭当前活动
        }

    }

}
