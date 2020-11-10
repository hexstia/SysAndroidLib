package android.sys.framework.activity;

import android.content.Context;
import android.sys.framework.all.IAllToolsManger;
import android.sys.framework.base.BaseManager;

/**
 *   本框架 ： 为了使用android系统层功能， 定制该库
 *
 *
 *   框架三大特性 ： 1. 重定义原有 功能库的实现： 例如IActivityToolsManager的相关功能， 如果对其中功能不满意，则可以进行重定义功能，导入jar包。 高度解耦合
 *                 2.  扩展新的模块功能，再不需要改动原有代码的情况下，安装框架规则调用自己自定义的库的功能。
 *                 具体规则 ：在自己的工程下创建 接口类
 *                     interface IXXXXToolsManager{
 *
 *                     }
 *
 *                 在自己的工程下创建 实现类
 *                  XXXXToolsManager  extends AbstractManager implements IXXXXToolsManager {
 *
 *                    private static class InnerSingleClass{
 *                       private static XXXXToolsManager INSTANCE ;
 *                       private static void innerInstance(){
 *                           INSTANCE = new XXXXToolsManager();
 *                       }
 *                   }
 *                   static {
 *                       XXXXToolsManager.InnerSingleClass.innerInstance();
 *                   }
 *                   public  static   XXXXToolsManager  creatSingle(Context context){
 *                       XXXXToolsManager bmi =  XXXXToolsManager.InnerSingleClass.INSTANCE;
 *                       bmi.setContext(context);
 *                       return bmi;
 *                   }
 *                   private ActivityToolsManagerImpl(){};
 *
 *
 *                  }
 */


public class test {
    public static void main(String args[]){
        Context context = null;
//        BaseToolsManager manager = BaseToolsManagerImpl.getInstance(context);
//        IAllToolsManger almgr= (IAllToolsManger)manager.getAllManager();
//        IActivityToolsManager actManager = (IActivityToolsManager)manager.getManager(BaseManager.ACTIVITY_MANAGER);
//        actManager.openPictureApp();
//        almgr.openPictureApp();
             BaseManager manager = BaseManager.getInstance(context);
             IActivityToolsManager actManager =  (IActivityToolsManager)manager.getManager(BaseManager.ACTIVITY_MANAGER);
             actManager.test();
                //新增扩展开发者自定义接口
            IAllToolsManger allMgr = (IAllToolsManger)manager.getAllManager();
            allMgr.test();

//            IAllToolsManger almgr =  (IAllToolsManger)manager.getAllManager();
    }
}
