package android.sys.framework.Impl;

import android.app.ActivityManager;
import android.content.Context;
import android.net.TrafficStats;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.net.INetToolsManager;

public class NetToolsManagerImpl  extends AbstractManager implements INetToolsManager {
    private long lastTotalRxBytes = -1;
    private long RxlastTimeStamp = -1;
    private long lastTotalTxBytes = -1;
    private long TxlastTimeStamp = -1;


    /**
     *  获取下行总的字节数
     * @return
     */
    private long getTotalRxBytes() {
        return TrafficStats.getUidRxBytes(getContext().getApplicationInfo().uid) == TrafficStats.UNSUPPORTED ? 0 :(TrafficStats.getTotalRxBytes()/1024);//转为KB
    }
    /**
     *  显示网络下行网速  单位 kb/s
     * @return
     */
    @Override
    public String  showNetRxSpeed() {
        long nowTotalRxBytes = getTotalRxBytes();
        long nowTimeStamp = System.currentTimeMillis();
        String downloadSpeed = null;
        if(lastTotalRxBytes ==-1&&RxlastTimeStamp==-1){
            downloadSpeed = 0+"kb/s";
        }else{
            long speed = ((nowTotalRxBytes - lastTotalRxBytes) * 1000 / (nowTimeStamp - RxlastTimeStamp));//毫秒转换
            long speed2 = ((nowTotalRxBytes - lastTotalRxBytes) * 1000 % (nowTimeStamp - RxlastTimeStamp));//毫秒转换
            downloadSpeed = String.valueOf(speed) + "." + String.valueOf(speed2).substring(0,1) + "kb/s";
        }
        RxlastTimeStamp = nowTimeStamp;
        lastTotalRxBytes = nowTotalRxBytes;
        return downloadSpeed;
    }

    /**
     *  获取上行总的字节数
     * @return
     */
    private long getTotalTxBytes() {
        return TrafficStats.getUidTxBytes(getContext().getApplicationInfo().uid) == TrafficStats.UNSUPPORTED ? 0 :(TrafficStats.getTotalTxBytes()/1024);//转为KB
    }

    /**
     *  显示网络上行网速  单位 kb/s
     * @return
     */
    public String  showNetTxSpeed() {
        long nowTotalTxBytes = getTotalTxBytes();
        long nowTimeStamp = System.currentTimeMillis();
        String updateSpeed = null;
        if(lastTotalTxBytes ==-1&&TxlastTimeStamp==-1){
            updateSpeed = 0+"kb/s";
        }else{
            long speed = ((nowTotalTxBytes - lastTotalTxBytes) * 1000 / (nowTimeStamp - TxlastTimeStamp));//毫秒转换
            long speed2 = ((nowTotalTxBytes - lastTotalTxBytes) * 1000 % (nowTimeStamp - TxlastTimeStamp));//毫秒转换
            updateSpeed = String.valueOf(speed) + "." + String.valueOf(speed2).substring(0,1) + "kb/s";
        }

        TxlastTimeStamp = nowTimeStamp;
        lastTotalTxBytes = nowTotalTxBytes;

        return updateSpeed;
    }

/***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static NetToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new NetToolsManagerImpl();
        }
    }
    static {
        NetToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   NetToolsManagerImpl  creatSingle(Context context){
        NetToolsManagerImpl bmi =  NetToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private NetToolsManagerImpl(){};

/***********************************************************************************/

}
