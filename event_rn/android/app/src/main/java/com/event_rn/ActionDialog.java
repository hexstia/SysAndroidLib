package com.event_rn;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;


// https://blog.csdn.net/baidu_32015283/article/details/88050617
// https://blog.csdn.net/qq_34882418/article/details/81085608
public class ActionDialog extends Dialog {

    public Context context;
    public TextView phoneName;
    public TextView speed;

    public LinearLayout btn_restart;
    public LinearLayout btn_file;
    public LinearLayout btn_apk;
    public LinearLayout btn_renew;
    public LinearLayout btn_back;
    public LinearLayout btn_quit;
    public LinearLayout btn_home;


    public ActionDialog(@NonNull Context context, int themeResId) {
        super(context, themeResId);
        this.context = context;
        setContentView(R.layout.dialog_action);

        phoneName = findViewById(R.id.tv_phone_name);
        speed = findViewById(R.id.tv_speed);

        btn_restart = findViewById(R.id.btn_restart);
        btn_file = findViewById(R.id.btn_file);
        btn_apk = findViewById(R.id.btn_apk);
        btn_renew = findViewById(R.id.btn_renew);
        btn_back = findViewById(R.id.btn_back);
        btn_quit = findViewById(R.id.btn_quit);
        btn_home = findViewById(R.id.btn_home);

    }


}
