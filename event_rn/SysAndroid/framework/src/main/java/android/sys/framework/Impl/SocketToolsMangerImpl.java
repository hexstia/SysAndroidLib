package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.net.ISocketToolsManager;

public class SocketToolsMangerImpl extends AbstractManager implements ISocketToolsManager {





    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static SocketToolsMangerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new SocketToolsMangerImpl();
        }
    }
    static {
        SocketToolsMangerImpl.InnerSingleClass.innerInstance();
    }
    public  static   SocketToolsMangerImpl  creatSingle(Context context){
        SocketToolsMangerImpl bmi =  SocketToolsMangerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private SocketToolsMangerImpl(){};

/***********************************************************************************/
}
