package android.sys.framework.Impl;

import android.content.Context;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.os.UserHandle;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.net.IVpnToolsManager;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.net.NetworkInterface;
import java.util.Collections;
import java.util.Enumeration;

public class VpnToolsManagerImpl extends AbstractManager implements IVpnToolsManager {
    private  Class vpnProfileClz;
    private  Class credentialsClz;
    private  Class keyStoreClz;
    private  Class iConManagerClz;
    private  Object iConManagerObj;
    /**
     * 初始化vpn相关的类，通过反射
     * @return
     */
    @Override
    public boolean initVpn() {
        try {
            vpnProfileClz = Class.forName("com.android.internal.net.VpnProfile");
            keyStoreClz = Class.forName("android.security.KeyStore");
            ConnectivityManager cm = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
            Field fieldIConManager = null;
            fieldIConManager = cm.getClass().getDeclaredField("mService");
            fieldIConManager.setAccessible(true);
            iConManagerObj = fieldIConManager.get(cm);
            iConManagerClz = Class.forName(iConManagerObj.getClass().getName());
        } catch (Exception e) {
            e.printStackTrace();
            return  false;
        }
        return  true;
    }
    /**
     * 创建VPN的配置文件
     * @param name     vpn连接名，自定义
     * @param server   服务器地址
     * @param username 用户名
     * @param password 用户密码
     * @return 返回一个com.android.internal.net.VpnProfile的实例
     */
    @Override
    public Object createVpnProfile(String name, String server, String username, String password) {
        Object vpnProfileObj = null;
        try {
            //生成vpn的key
            long millis = System.currentTimeMillis();
            String vpnKey = Long.toHexString(millis);
            //获得构造函数
            Constructor constructor = vpnProfileClz.getConstructor(String.class);
            vpnProfileObj = constructor.newInstance(vpnKey);
            //设置参数
            setParams(vpnProfileObj, name, server, username, password);
            //插入vpn数据
            insertVpn(vpnProfileObj, vpnKey);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return vpnProfileObj;
    }

    /**
     *  插入一条vpn的用户数据 该函数给 createVpnProfile()使用
     * @param profieObj
     * @param key
     * @throws Exception
     */
    private  void insertVpn(Object profieObj, String key) throws Exception {
        Method keyStore_put = keyStoreClz.getDeclaredMethod("put", String.class, byte[].class, int.class, int.class);
        Object keyStoreObj = getKeyStoreInstance();
        Class vpnProfileClz = Class.forName("com.android.internal.net.VpnProfile");
        Method vpnProfile_encode = vpnProfileClz.getDeclaredMethod("encode");
        byte[] bytes = (byte[]) vpnProfile_encode.invoke(profieObj);
        keyStore_put.invoke(keyStoreObj, "VPN_" + key, bytes, -1, 1);
    }

    /**
     *  获取签名的实例 用于给insertVpn使用
     * @return
     * @throws Exception
     */
    private  Object getKeyStoreInstance() throws Exception {
        Method keyStore_getInstance = keyStoreClz.getMethod("getInstance");
        keyStore_getInstance.setAccessible(true);
        Object keyStoreObj = keyStore_getInstance.invoke(null);
        return keyStoreObj;
    }
    /**
     * 设置vpn相关参数
     * @param name     vpn连接名，自定义
     * @param server   服务器地址
     * @param username 用户名
     * @param password 用户密码
     * @return 返回一个com.android.internal.net.VpnProfile的实例
     */
    @Override
    public Object setParams(Object vpnProfileObj, String name, String server, String username, String password) {
        try {
            Field field_username = vpnProfileClz.getDeclaredField("username");
            Field field_password = vpnProfileClz.getDeclaredField("password");
            Field field_server = vpnProfileClz.getDeclaredField("server");
            Field field_name = vpnProfileClz.getDeclaredField("name");
            //设置参数
            field_name.set(vpnProfileObj, name);
            field_server.set(vpnProfileObj, server);
            field_username.set(vpnProfileObj, username);
            field_password.set(vpnProfileObj, password);
        } catch (Exception e) {
            e.printStackTrace();
            return  null;
        }
        return vpnProfileObj;
    }
    /**
     * 连接vpn
     *
     * @param profile com.android.internal.net.VpnProfile的实例
     * @return true:连接成功，false:连接失败
     */
    @Override
    public boolean connect( Object profile) {
        boolean isConnected = true;
        try {
            Method metStartLegacyVpn = iConManagerClz.getDeclaredMethod("startLegacyVpn", vpnProfileClz);
            metStartLegacyVpn.setAccessible(true);
            //解锁KeyStore
//            unlock(context);
            //开启vpn连接
            metStartLegacyVpn.invoke(iConManagerObj, profile);
        } catch (Exception e) {
            isConnected = false;
            e.printStackTrace();
        }
        return isConnected;

    }
    /**
     * 断开vpn连接
     *
     * @return true:已断开，false:断开失败
     */
    @Override
    public boolean disConnect() {
        boolean disconnected = true;
        try {
            PackageManager pm = getContext().getPackageManager();
            Method myUserId = UserHandle.class.getDeclaredMethod("myUserId");  //先获得这个userid
            int userID = (Integer) myUserId.invoke(pm, new Object[]{});  //pm是packagemanager
            // /packages/apps/Settings/tests/app/src/com/android/settings/vpn2/VpnTests.java  的 prepareVpn 方法，这里是Android O系统源码，
            // 之前源码版本是4.4.4少一个 UserHandle.myUserId()参数
            Method metPrepare = iConManagerClz.getDeclaredMethod("prepareVpn", String.class, String.class, int.class);
            //断开连接
            metPrepare.invoke(iConManagerObj, "[Legacy VPN]", "[Legacy VPN]", userID);
        } catch (Exception e) {
            disconnected = false;
            e.printStackTrace();
        }
        return disconnected;
    }
    /**
     * 判断该vpn是否在使用中，也就是当前设备开启再使用vpn中。。。
     * @return  true 使用，false没有开启
     */
    @Override
    public boolean isVpnUser() {
        try {
            Enumeration<NetworkInterface> niList = NetworkInterface.getNetworkInterfaces();
            if (niList != null) {
                for (NetworkInterface intf : Collections.list(niList)) {
                    if (!intf.isUp() || intf.getInterfaceAddresses().size() == 0) {
                        continue;
                    }
                    if ("tun0".equals(intf.getName()) || "ppp0".equals(intf.getName())) {
                        return true; // The VPN is up
                    }
                }
            }
        } catch (Throwable e) {
            e.printStackTrace();
            return false;
        }
        return false;
    }
    /**
     * @return 返回第一个已存在的vpn实例
     */
    @Override
    public Object getVpnProfile() {
        try {
            Object keyStoreObj = getKeyStoreInstance();
            Method keyStore_saw = keyStoreClz.getMethod("saw", String.class);
            keyStore_saw.setAccessible(true);
            //查找数据库
            String[] keys = (String[]) keyStore_saw.invoke(keyStoreObj, "VPN_");
            //如果之前没有创建过vpn，则返回null
            if (keys == null || keys.length == 0) {
                return null;
            }
            Method vpnProfile_decode = vpnProfileClz.getDeclaredMethod("decode", String.class, byte[].class);
            vpnProfile_decode.setAccessible(true);
            Method keyStore_get = keyStoreClz.getDeclaredMethod("get", String.class);
            keyStore_get.setAccessible(true);
            //获得第一个vpn
            Object byteArrayValue = keyStore_get.invoke(keyStoreObj, "VPN_" + keys[0]);
            //反序列化返回VpnProfile实例
            Object vpnProfileObj = vpnProfile_decode.invoke(null, keys[0], byteArrayValue);
            return vpnProfileObj;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    /**
     * @return 返回第index 个已存在的vpn实例
     */
    @Override
    public Object getVpnProfile(int index) {
        try {
            Object keyStoreObj = getKeyStoreInstance();
            Method keyStore_saw = keyStoreClz.getMethod("saw", String.class);
            keyStore_saw.setAccessible(true);
            //查找数据库
            String[] keys = (String[]) keyStore_saw.invoke(keyStoreObj, "VPN_");
            //如果之前没有创建过vpn，则返回null
            if (keys == null || keys.length == 0) {
                return null;
            }
            Method vpnProfile_decode = vpnProfileClz.getDeclaredMethod("decode", String.class, byte[].class);
            vpnProfile_decode.setAccessible(true);
            Method keyStore_get = keyStoreClz.getDeclaredMethod("get", String.class);
            keyStore_get.setAccessible(true);
            //获得第一个vpn
            Object byteArrayValue = keyStore_get.invoke(keyStoreObj, "VPN_" + keys[index]);
            //反序列化返回VpnProfile实例
            Object vpnProfileObj = vpnProfile_decode.invoke(null, keys[index], byteArrayValue);
            return vpnProfileObj;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static VpnToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new VpnToolsManagerImpl();
        }
    }
    static {
        VpnToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   VpnToolsManagerImpl  creatSingle(Context context){
        VpnToolsManagerImpl bmi =  VpnToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private VpnToolsManagerImpl(){};

/***********************************************************************************/
}
