package com.event_rn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

public class PhoneModal {

    private String deviceName;
    private int deviceId;
    private int id;

    public PhoneModal(ReadableMap phone) {
        this.deviceId = phone.getInt("deviceId");
        this.id = phone.getInt("id");
        this.deviceName = phone.getString("deviceName");
    }


    public WritableMap getWriteMap() {
        WritableMap params = Arguments.createMap();
        params.putString("deviceName", this.deviceName);
        params.putInt("deviceId", this.deviceId);
        params.putInt("id", this.id);
        return params;
    }
}
