package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.property.IPropertyToolsManager;

import java.lang.reflect.Method;

public class PropertyToolsManagerImpl extends AbstractManager implements IPropertyToolsManager {



    /**
     *  获取系统属性 通过反射的形式，来获取
     * @param key
     * @param defaultValue
     * @return
     */
    @Override
    public String getProperty(String key, String defaultValue){
        String value = defaultValue;
        try {
            Class<?> c = Class.forName("android.os.SystemProperties");
            Method get = c.getMethod("get", String.class, String.class);
            value = (String) (get.invoke(c, key, "unknown"));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            return value;
        }
    }
    /**
     *  设置系统属性 通过反射的形式，根据键来设置值
     * @param key
     * @param value
     * @return
     */
    @Override
    public void setProperty(String key, String value) {
        try {
            Class<?> c = Class.forName("android.os.SystemProperties");
            Method set = c.getMethod("set", String.class, String.class);
            set.invoke(c, key, value );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static PropertyToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new PropertyToolsManagerImpl();
        }
    }
    static {
        PropertyToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   PropertyToolsManagerImpl  creatSingle(Context context){
        PropertyToolsManagerImpl bmi =  PropertyToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private PropertyToolsManagerImpl(){};

/***********************************************************************************/
}
