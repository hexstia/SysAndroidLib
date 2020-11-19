package android.sys.framework.net;

public interface INetToolsManager {

    /**
     *  显示网络下行网速  单位 kb/s
     * @return
     */
    String showNetRxSpeed();

    /**
     *  显示网络上行网速  单位 kb/s
     * @return
     */
    String showNetTxSpeed();

    /**
     *  根据URL 获取设备的公网IP ，也就是通过那个网卡的公网ip来获取服务器数据
     * @param URL
     * @return
     */
    String  getPublicIp(String URL);

}
