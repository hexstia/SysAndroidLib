package android.sys.framework.base;

import android.content.Context;

public abstract class BaseManager extends AbstractManager {

    /**
     *  通过名称返回一个可以处理系统级别的Manager对象
     *  @param name  名字为一个管理者的包名
     * @return 如果名称不存在则返回为空
     */
    public abstract Manager getManager(String name);


    /**
     *  通过名称返回一个可以处理系统级别的Manager对象
     * @return 如果名称不存在则返回为空
     */
    public abstract Manager getAllManager();

    public static   BaseManagerImpl getInstance(Context context){
        BaseManagerImpl bmi = (BaseManagerImpl)getInstance(context,BaseManagerImpl.class);
        return bmi;
    }




}
