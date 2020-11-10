package android.sys.framework.base;

import android.content.Context;

import java.lang.reflect.Method;

public class BaseManagerImpl extends BaseManager {


    /**
     *
     * @param name  两种传入形式，第一种 ： 未扩展形式， 按照命名规则，传入类名的第一个单词的小写
     *                              例如： 调用ActivityToolsManagerImpl 那么name 传入 "activity"
     *                           第二种 ： 扩展形式， 为方便其他人， 使用框架模型，加入新的ToolsManager 对象 ,则传入全类名
     *                              例如： 调用ActivityToolsManagerImpl 那么name  传入 "android.sys.framework.Impl.ActivityToolsManagerImpl"
     * @return
     */
    public Manager getManager(String name){
        String fullClassNameImpl = null;
        if(name.indexOf(".")!=-1){
            fullClassNameImpl = name;
        }else{
            String fullPackageName = PACKAGENAME+"."+"Impl";
            fullClassNameImpl = fullPackageName+"."+name.substring(0, 1).toUpperCase() + name.substring(1)+"ToolsManagerImpl";
        }
        Class claz_InterfaceToolsManagerImpl= null;
        Method mthod_instance = null;
        Manager res = null;
        try {
            claz_InterfaceToolsManagerImpl =  Class.forName(fullClassNameImpl);
            mthod_instance =  claz_InterfaceToolsManagerImpl.getMethod("getInstance",Context.class,Class.class);
            res = (Manager) mthod_instance.invoke(null,this.getContext(),claz_InterfaceToolsManagerImpl);
        } catch (Exception e) {}
        return res;
    }

    /**
     *  获取所有的管理者
     * @return
     */
    @Override
    public Manager getAllManager() {
        return   getManager("all");
    }
/***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static BaseManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new BaseManagerImpl();
        }
    }
    static {
        BaseManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   BaseManagerImpl  creatSingle(Context context){
        BaseManagerImpl bmi =  BaseManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
}
    /**
     *  单例私有化，不可创建实例
     */
    private BaseManagerImpl(){};

/***********************************************************************************/


}
