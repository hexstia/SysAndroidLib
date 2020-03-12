package com.event_rn;

import android.app.Dialog;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

// https://blog.csdn.net/baidu_32015283/article/details/88050617
// https://blog.csdn.net/qq_34882418/article/details/81085608
public class ActionDialog extends Dialog {

    Context context;

    public ActionDialog(@NonNull Context context) {
        super(context);
        this.context=context;
        init();
    }

    public ActionDialog(@NonNull  Context context, int themeResId) {
        super(context, themeResId);
        this.context=context;
        init();
    }

    protected ActionDialog(@NonNull Context context, boolean cancelable,  @Nullable OnCancelListener cancelListener) {
        super(context, cancelable, cancelListener);
        this.context=context;
        init();
    }

    private void init() {

        setContentView(R.layout.dialog_action);
    }
}
