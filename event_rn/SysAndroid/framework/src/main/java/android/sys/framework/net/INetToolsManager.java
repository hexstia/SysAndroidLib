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

}
