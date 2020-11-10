package android.sys.framework.Impl;

import android.app.ActivityManager;
import android.content.Context;
import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.all.IAllToolsManger;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.base.BaseManager;
import android.sys.framework.base.Manager;
import android.sys.framework.inputevent.IInputEventToolsManager;

import java.lang.reflect.InvocationTargetException;

public class AllToolsManagerImpl extends AbstractManager  implements IAllToolsManger {

    @Override
    public void test() {
    actM.test();
    }
    private IActivityToolsManager actM;
    private IInputEventToolsManager inputM;
    @Override
    public boolean openSpecialApp(String packageName) {
      return  actM.openSpecialApp(packageName);
    }

    @Override
    public boolean openPictureApp() {
        return false;
    }

    @Override
    public boolean openBackHome() {
        return false;
    }

    @Override
    public boolean openTaskList() {
        return false;
    }

    @Override
    public boolean stopApp(String appPackageName) {
        return false;
    }

    @Override
    public ActivityManager.RunningTaskInfo getCurrentRuningList(int maxNum, int currentIndex) {
        return null;
    }

    @Override
    public void removeTask(int taskId) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {

    }

    @Override
    public void removeAllTask(int maxNum) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        actM.removeAllTask(maxNum);
    }

    private  void createAllSingleInstance(Context context){
        BaseManager bm = BaseManager.getInstance(context);
        actM = (IActivityToolsManager) bm.getManager(Manager.ACTIVITY_MANAGER);
        inputM = (IInputEventToolsManager) bm.getManager(Manager.INPUTEVENT_MANAGER);
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static AllToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new AllToolsManagerImpl();
        }
    }
    static {
        AllToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static AllToolsManagerImpl creatSingle(Context context){
        AllToolsManagerImpl bmi =  AllToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        bmi.createAllSingleInstance(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private AllToolsManagerImpl(){};

/***********************************************************************************/
}
