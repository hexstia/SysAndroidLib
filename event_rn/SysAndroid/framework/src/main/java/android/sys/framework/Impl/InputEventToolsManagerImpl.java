package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.inputevent.IInputEventToolsManager;

public class InputEventToolsManagerImpl  extends AbstractManager implements IInputEventToolsManager {

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static InputEventToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new InputEventToolsManagerImpl();
        }
    }
    static {
        InputEventToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   InputEventToolsManagerImpl  creatSingle(Context context){
        InputEventToolsManagerImpl bmi =  InputEventToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private InputEventToolsManagerImpl(){};

/***********************************************************************************/
}
