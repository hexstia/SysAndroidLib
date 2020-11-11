package android.sys.framework.deviceInfo;

public interface IDeviceInfoToolsManager {
    /**
     *  设备进行重启
     * @return
     */
    boolean deviceReboot();
    /**
     *  设备进行关机
     * @return
             */
    boolean deviceShutDown();
    /**
     * 设备进行恢复出厂设置
     */
    boolean deviceRecoveryReset();

    /**
     *  根据网卡 通过读取文件来获取mac， 准确性高，但是需要对文件读取权限
     * @param netInterface
     * @return mac值
     */
    String getFileMac(String netInterface);
    /**
     * 根据wifiManager 获取wifi的mac地址，本质是根据网卡来获取mac
     * @return mac值
     */
    String getWifiMac();

}
