package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.power.IPowerToolsManager;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class PowerToolsManagerImpl extends AbstractManager implements IPowerToolsManager {
    private Method  isScreenOnMethod;
    /**
     *  屏幕是否属于亮屏状态 ;
     * @return true 亮屏 false 息屏
     */
    @Override
    public boolean isScreenOn() {
        try {
            return (Boolean) getIsScreenOnMethod().invoke(getPowerManager());
        } catch (InvocationTargetException | IllegalAccessException e) {
            throw new AssertionError(e);
        }
    }

    /**
     *  通过反射获得 设备是否亮屏判断的方法
     * @return
     */
    private Method getIsScreenOnMethod(){
        try {
//            @SuppressLint("ObsoleteSdkInt") // we may lower minSdkVersion in the future
//            String methodName = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH ? "isInteractive" : "isScreenOn";
            if(isScreenOnMethod ==null) {
                isScreenOnMethod = getPowerManager().getClass().getMethod("isInteractive");
            }
        } catch (NoSuchMethodException e) {
            throw new AssertionError(e);
        }
        return isScreenOnMethod;
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static PowerToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new PowerToolsManagerImpl();
        }
    }
    static {
        PowerToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   PowerToolsManagerImpl  creatSingle(Context context){
        PowerToolsManagerImpl bmi =  PowerToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private PowerToolsManagerImpl(){};

/***********************************************************************************/
}
