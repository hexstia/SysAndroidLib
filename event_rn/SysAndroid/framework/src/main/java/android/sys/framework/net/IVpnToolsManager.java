package android.sys.framework.net;

import android.content.Context;

public interface IVpnToolsManager {

    /**
     * 初始化vpn相关的类，通过反射
     * @return
     */
    boolean initVpn();

    /**
     * 创建VPN的配置文件
     * @param name     vpn连接名，自定义
     * @param server   服务器地址
     * @param username 用户名
     * @param password 用户密码
     * @return 返回一个com.android.internal.net.VpnProfile的实例
     */
    Object createVpnProfile(String name, String server, String username, String password);
    /**
     * 设置vpn相关参数
     * @param name     vpn连接名，自定义
     * @param server   服务器地址
     * @param username 用户名
     * @param password 用户密码
     * @return 返回一个com.android.internal.net.VpnProfile的实例
     */
    Object setParams(Object vpnProfileObj, String name, String server, String username, String password) ;

    /**
     * 连接vpn
     *
     * @param profile com.android.internal.net.VpnProfile的实例
     * @return true:连接成功，false:连接失败
     */
    boolean connect( Object profile) ;

    /**
     * 断开vpn连接
     *
     * @return true:已断开，false:断开失败
     */
    boolean disConnect();

    /**
     * 判断该vpn是否在使用中，也就是当前设备开启再使用vpn中。。。
     * @return
     */
    boolean isVpnUser();
    /**
     * @return 返回一个已存在的vpn实例
     */
     Object getVpnProfile();

    /**
     * @return 返回第index 个已存在的vpn实例
     */
     Object getVpnProfile(int index) ;
}
