package android.sys.framework.activity;

import android.app.ActivityManager;

import java.lang.reflect.InvocationTargetException;

public interface IActivityToolsManager {

    void test();
    /**
     *  打开指定的app，
     * @param packageName 根据包名来判断，打开的页面为<main></>
     * @return
     */
         boolean openSpecialApp(String packageName);

    /**
     *  打开相册应用 或者是图库功能
     * @return
     */
             boolean openPictureApp();

    /**
     *  回到Android的主桌面功能，相当于物理按键Home
     *
      */
    boolean openBackHome();

        /**
         *   点击物理按键 ，任务键功能
         */
      boolean openTaskList();

    /**
     *  强制停止APP的使用 根据包名
     * @return
     */
      boolean stopApp(String appPackageName);
    /**
     * 获取正在运行的APP的任务信息，根据该方法，可以扩展很多功能的使用 （System 级权限）
     */
    ActivityManager.RunningTaskInfo getCurrentRuningList(int maxNum,int currentIndex);

    /**
     *  移除后台任务  (相当于移除后台app) （System 级权限）
     */
     void removeTask(int taskId) throws ClassNotFoundException,NoSuchMethodException,IllegalAccessException, InvocationTargetException ;

    /**
     *   移除所有的任务后台 (相当于清理后台) （System 级权限）
     *   @param maxNum 传入的参数为最大的数量，当前后台的应用数量<maxNum即可
     */
     void removeAllTask(int maxNum) throws ClassNotFoundException,NoSuchMethodException,IllegalAccessException, InvocationTargetException;

    /**
     *  获取当前窗口的顶层Acitvity的包名
     * @return 包名
     */
     String getTopAcitvityPackageName();


}
