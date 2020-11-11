package android.sys.framework.base;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class AbstractManager implements Manager {
    private Context context;
    private IInterface windowManager,displayManager,inputManager,powerManager;

    public Context getContext() {
        return context;
    }

    public void setContext(Context context) {
        this.context = context;
    }

    /**
     *  通过反射 获取ServiceManager的getService方法的对象
     *  给字段 serviceMethod 赋值
     */
    private Method getServiceMethod(){
        Method serviceMethod = null;
        try {
         serviceMethod = Class.forName("android.os.ServiceManager").getDeclaredMethod("getService", String.class);
    } catch (Exception e) {
        throw new AssertionError(e);
    }
        return serviceMethod;
}

    /**
     *  通过反射来获取各个服务的 代理接口的方法
     * @param service
     * @param type
     * @return
     */
    private IInterface getService(String service, String type) {
        try {
            IBinder binder = (IBinder) getServiceMethod().invoke(null, service);
            Method asInterfaceMethod = Class.forName(type + "$Stub").getMethod("asInterface", IBinder.class);
            return (IInterface) asInterfaceMethod.invoke(null, binder);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    public IInterface getWindowManager() {
        if (windowManager == null) {
            windowManager = getService("window", "android.view.IWindowManager");
        }
        return windowManager;
    }

    public IInterface getDisplayManager() {
        if (displayManager == null) {
            displayManager = getService("display", "android.hardware.display.IDisplayManager");
        }
        return displayManager;
    }

    public IInterface getInputManager() {
        if (inputManager == null) {
            inputManager =getService("input", "android.hardware.input.IInputManager");
        }
        return inputManager;
    }

    public IInterface getPowerManager() {
        if (powerManager == null) {
            powerManager = getService("power", "android.os.IPowerManager");
        }
        return powerManager;
    }



    public static AbstractManager getInstance(Context context,String className){
        Class<AbstractManager>  clazz;
        Method creatSingleMethod  =null;
        AbstractManager abstractManager = null;
        try {
            clazz =  (Class<AbstractManager>)Class.forName(className);
            creatSingleMethod = clazz.getDeclaredMethod("creatSingle",Context.class);
            creatSingleMethod.setAccessible(true);
            abstractManager = (AbstractManager)creatSingleMethod.invoke(context);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return abstractManager;
    }

    public static AbstractManager getInstance(Context context,Class classObj){
        Class<AbstractManager>  clazz;
        Method creatSingleMethod  =null;
        AbstractManager abstractManager = null;
        try {
            clazz = classObj;
            creatSingleMethod = clazz.getDeclaredMethod("creatSingle",Context.class);
            creatSingleMethod.setAccessible(true);
            abstractManager = (AbstractManager) (creatSingleMethod.invoke(null,context));
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }

        return abstractManager;
    }

}
