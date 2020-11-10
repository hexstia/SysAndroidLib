package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.net.IVpnToolsManager;

public class VpnToolsManagerImpl extends AbstractManager implements IVpnToolsManager {


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
