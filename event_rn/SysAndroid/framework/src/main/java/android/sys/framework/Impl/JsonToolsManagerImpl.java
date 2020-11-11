package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.json.IJsonToolsManager;

public class JsonToolsManagerImpl extends AbstractManager implements IJsonToolsManager {



    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static JsonToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new JsonToolsManagerImpl();
        }
    }
    static {
        JsonToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   JsonToolsManagerImpl  creatSingle(Context context){
        JsonToolsManagerImpl bmi =  JsonToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private JsonToolsManagerImpl(){};

/***********************************************************************************/
}
