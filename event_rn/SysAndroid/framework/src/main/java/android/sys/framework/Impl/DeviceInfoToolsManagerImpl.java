package android.sys.framework.Impl;

import android.content.Context;
import android.content.Intent;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.PowerManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.deviceInfo.IDeviceInfoToolsManager;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
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
    /**
     *  根据网卡 通过读取文件来获取mac， 准确性高，但是需要对文件读取权限
     * @param netInterface
     * @return mac值
     */
    @Override
    public String getFileMac(String netInterface) {
        File file = new File("/sys/class/net/"+netInterface+"/address");
        String strs = null;
        if(file.exists()){
            try {
                FileReader fos = new FileReader(file);
                char[] str = new char[17];
                fos.read(str);
                strs = new String(str);
                return strs.toUpperCase();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{

        }
        return strs;
    }
    /**
     * 根据wifiManager 获取wifi的mac地址，本质是根据网卡来获取mac
     * @return mac值
     */
    @Override
    public String getWifiMac() {
        WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();
        boolean hasMacAddress = wifiInfo != null;
        return hasMacAddress ? wifiInfo.getMacAddress() : null;
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
/***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static DeviceInfoToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new DeviceInfoToolsManagerImpl();
        }
    }
    static {
        DeviceInfoToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   DeviceInfoToolsManagerImpl  creatSingle(Context context){
        DeviceInfoToolsManagerImpl bmi =  DeviceInfoToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private DeviceInfoToolsManagerImpl(){};

/***********************************************************************************/


}
