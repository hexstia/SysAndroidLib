package android.sys.framework.Impl;

import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.UserHandle;
import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.base.BaseManagerImpl;
import android.sys.framework.package_manager.PackageInfos;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import static android.sys.framework.package_manager.PackageInfos.PACKAGENAME_ACTIVITYMANAGER;

public class ActivityToolsManagerImpl extends AbstractManager implements IActivityToolsManager {

    private ActivityManager mActivityManager ;
    public void test(){
        System.out.println("测试函数");
    }

    /**
     *  回到Android的主桌面功能，相当于物理按键Home
     */
    @Override
    public boolean openBackHome() {
        Intent ib = new Intent(Intent.ACTION_MAIN);
        ib.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        ib.addCategory(Intent.CATEGORY_HOME);
        getContext().startActivity(ib);
        return true;
    }

    /**
     *   点击物理按键 ，任务键功能显示任务列表功能
     */
    @Override
    public boolean openTaskList() {
        ComponentName componetName = new ComponentName(
                PackageInfos.PACKAGENAME_TASKLIST
                ,PackageInfos.CLASSENAME_TASKLIST);
        try {
            Intent intent = new Intent();
            intent.setComponent(componetName);
            getContext().startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * 强制停止APP的使用 根据包名
     * @param appPackageName
     * @return
     */
    @Override
    public boolean stopApp(String appPackageName) {
            try {
                Method method = Class.forName(PACKAGENAME_ACTIVITYMANAGER).getMethod("forceStopPackage", String.class);
                method.invoke(mActivityManager, appPackageName);  //appPackageName 是需要强制停止的应用程序包名
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        return true;
    }

    @Override
    public ActivityManager.RunningTaskInfo getCurrentRuningList(int maxNum, int currentIndex) {
        ActivityManager.RunningTaskInfo cn  =null;
        cn = mActivityManager.getRunningTasks(maxNum).get(currentIndex);
        return cn;
    }

    @Override
    public void removeTask(int taskId) throws ClassNotFoundException,NoSuchMethodException,IllegalAccessException, InvocationTargetException {
        Class class_am = Class.forName("android.app.ActivityManager");
        Method meth = class_am.getMethod("removeTask",int.class);
        meth.setAccessible(true);
        meth.invoke(mActivityManager,taskId);
    }

    @Override
    public void removeAllTask(int maxNum) throws ClassNotFoundException,NoSuchMethodException,IllegalAccessException, InvocationTargetException {
        List<ActivityManager.RunningTaskInfo> ltask = mActivityManager.getRunningTasks(maxNum);
        for (int i = ltask.size(); i >= 0; i--) {
            removeTask(ltask.get(i).id);
        }
    }

    /**
     * 打开指定的APP 功能实现
     * @param packageName 根据包名来判断，打开的页面为<main></>
     * @return
     */
    @Override
    public boolean openSpecialApp(String packageName) {
        PackageManager packageManager = getContext().getPackageManager();
        Intent intent;
        intent = packageManager.getLaunchIntentForPackage(packageName);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(intent);
        return true;
    }

    /**
     *  打开APP  APP:PackageName : "com.android.gallery3d"
     *   @see PackageInfos#PACKAGENAME_PICTURE
     * @return
     */
    @Override
    public boolean openPictureApp() {
        openSpecialApp(PackageInfos.PACKAGENAME_PICTURE);
        return true;
    }

    /**
     *  获取当前窗口的顶层Acitvity的包名
     * @return 包名
     */
    @Override
    public String getTopAcitvityPackageName(){
        List<ActivityManager.RunningTaskInfo> runningTasks = mActivityManager.getRunningTasks(1);
        return runningTasks.get(0).topActivity.getPackageName();
    }

    @Override
    public ComponentName startCommponetAsUser(Intent intent, int userid, String methodName) {
        Class clazz  = Context.class;
        Method  method  = null;
        try {
            method = clazz.getMethod(methodName, Intent.class, UserHandle.class);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
        method.setAccessible(true);
        UserHandle handle = null;
        try {
            handle = creatUserHandle(userid);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }
        if(handle ==null){
            return  null;
        }
        Object componentName = null;
        try {
            componentName = method.invoke(getContext(),intent,handle);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return (ComponentName)componentName;
    }

    private  UserHandle  creatUserHandle(int h) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Class clazz  = UserHandle.class;
        Constructor method  =clazz.getConstructor(int.class);
        UserHandle object = (UserHandle)method.newInstance(h);
        return object;
    }
/***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static ActivityToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new ActivityToolsManagerImpl();
        }
    }
    static {
        ActivityToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   ActivityToolsManagerImpl  creatSingle(Context context){
        ActivityToolsManagerImpl bmi =  ActivityToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        bmi.mActivityManager = (ActivityManager)context.getSystemService(Context.ACTIVITY_SERVICE);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private ActivityToolsManagerImpl(){};

/***********************************************************************************/

}
