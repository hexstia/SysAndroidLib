package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.net.VpnToolsManager;

public class VpnToolsManagerImpl implements VpnToolsManager {


    @Override
    public boolean initVpn(Context context) {
        return false;
    }

    @Override
    public Object createVpnProfile(String name, String server, String username, String password) {
        return null;
    }

    @Override
    public Object setParams(Object vpnProfileObj, String name, String server, String username, String password) {
        return null;
    }

    @Override
    public boolean connect(Context context, Object profile) {
        return false;
    }

    @Override
    public boolean disConnect(Context context) {
        return false;
    }
}
