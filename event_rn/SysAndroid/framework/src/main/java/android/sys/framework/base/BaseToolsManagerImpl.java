package android.sys.framework.base;

import android.content.Context;
import android.sys.framework.activity.ActivityToolsManager;
import android.sys.framework.inputevent.InputEventToolsManager;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class BaseToolsManagerImpl extends BaseManager implements BaseToolsManager {
    /***
     *
     */
    private static class InnerSingleClass{
        private static BaseToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new BaseToolsManagerImpl();
        }
    }
    static {
            InnerSingleClass.innerInstance();
    }
    public static   BaseToolsManagerImpl  getInstance(Context context){
        return  InnerSingleClass.INSTANCE;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private BaseToolsManagerImpl(){};

    /**
     *  通过名称获取单个管理者的方法
     * @param name  名字为一个管理者的包名
     * @return
     */
    public Object getManager(String name){
        String fullPackageName = PACKAGENAME+"."+name;
        String fullClassNameImpl = fullPackageName+"."+name.substring(0, 1).toUpperCase() + name.substring(1)+"ToolsManagerImpl";
        Class claz_InterfaceToolsManagerImpl= null;
        Method  mthod_instance = null;
        Object res = null;
        try {
            claz_InterfaceToolsManagerImpl =  Class.forName(fullClassNameImpl);
            mthod_instance =  claz_InterfaceToolsManagerImpl.getMethod("getInstance");
            res = mthod_instance.invoke(null);
        } catch (Exception e) {}
        return res;
        }

    /**
     *  获取所有的管理者
     * @return
     */
    @Override
    public Object getAllManager() {
        return  getManager("all");
    }
}
