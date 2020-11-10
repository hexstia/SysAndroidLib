package android.sys.framework.Impl;

import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.deviceInfo.IDeviceInfoToolsManager;

import java.lang.reflect.Field;

import static android.sys.framework.package_manager.PackageInfos.ACTION_FACTORY_RESET;
import static android.sys.framework.package_manager.PackageInfos.ACTION_REQUEST_SHUTDOWN;
import static android.sys.framework.package_manager.PackageInfos.ANDROID;
import static android.sys.framework.package_manager.PackageInfos.CLASSENAME_INTENT;
import static android.sys.framework.package_manager.PackageInfos.EXTRA_KEY_CONFIRM;
import static android.sys.framework.package_manager.PackageInfos.EXTRA_REASON;

public class DeviceInfoToolsManagerImpl extends AbstractManager implements IDeviceInfoToolsManager {
    private  Context context;
    /**
     *  设备进行重启
     * @return
     */
    @Override
    public boolean deviceReboot() {
        PowerManager pManager = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        pManager.reboot("Reboot");
        return true;
    }
    /**
     *  设备进行关机
     * @return
     */
    @Override
    public boolean deviceShutDown() {
        Intent intent = new Intent(getIntentAction(CLASSENAME_INTENT,ACTION_REQUEST_SHUTDOWN));
        intent.putExtra(getIntentAction(CLASSENAME_INTENT,EXTRA_KEY_CONFIRM), false);
        context.startActivity(intent);
        return true;
    }
    /**
     *  设备进行恢复出厂
     * @return
     */
    @Override
    public boolean deviceRecoveryReset() {

        Intent intent = new Intent(getIntentAction(CLASSENAME_INTENT, ACTION_FACTORY_RESET));
        intent.setPackage(ANDROID);
        intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
        intent.putExtra(getIntentAction(CLASSENAME_INTENT, EXTRA_REASON), "MasterClearConfirm");
        context.sendBroadcast(intent);
        return true;
    }
    public String getIntentAction(String classname, String action) {
        String actionName = null;
        try {
            Class<?> objClass = Class.forName(classname);//classname
            Field declaredField = objClass.getDeclaredField(action);
            Object object = declaredField.get(objClass);
            actionName = object.toString();
        } catch (Exception e) {
        } finally {
            return actionName;
        }
    }
}
