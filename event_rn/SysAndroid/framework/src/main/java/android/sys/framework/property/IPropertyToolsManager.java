package android.sys.framework.property;

import java.lang.reflect.Method;

public interface IPropertyToolsManager {

    /**
     *  获取系统属性 通过反射的形式，来获取
     * @param key
     * @param defaultValue
     * @return
     */
      String getProperty(String key, String defaultValue);
    /**
     *  设置系统属性 通过反射的形式，根据键来设置值
     * @param key
     * @param value
     * @return
     */
      void setProperty(String key, String value);

}
