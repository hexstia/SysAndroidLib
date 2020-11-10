package android.sys.framework.deviceInfo;

public interface IDeviceInfoManager {
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


}
