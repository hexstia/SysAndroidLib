package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.net.IHttpToolsManager;

public class HttpToolsManagerImpl extends AbstractManager implements IHttpToolsManager {



    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static HttpToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new HttpToolsManagerImpl();
        }
    }
    static {
        HttpToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   HttpToolsManagerImpl  creatSingle(Context context){
        HttpToolsManagerImpl bmi =  HttpToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private HttpToolsManagerImpl(){};

/***********************************************************************************/
}
