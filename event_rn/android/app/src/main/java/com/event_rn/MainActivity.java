package com.event_rn;

import android.content.Intent;

import com.dingle.pay.RNArenaPayModule;
import com.facebook.react.ReactActivity;
import com.tencent.connect.common.Constants;
import com.tencent.tauth.Tencent;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "event_rn";
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == Constants.REQUEST_LOGIN) {
            Tencent.onActivityResultData(requestCode,resultCode,data, RNArenaPayModule.module);
        }
        super.onActivityResult(requestCode, resultCode, data);
    }
}
