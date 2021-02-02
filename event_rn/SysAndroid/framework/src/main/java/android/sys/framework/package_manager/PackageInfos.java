package android.sys.framework.package_manager;

public class PackageInfos {
    /**
     *  打开相册功能，使用包名 :"com.android.gallery3d"
     *   官方Android系统自带的相册功能
     *   其他系统的另说
     */
    public static final String  PACKAGENAME_PICTURE = "com.android.gallery3d";
    /**
     *  任务键功能 ，包名 （用来显示任务列表），
     */
    public static final String  PACKAGENAME_TASKLIST = "com.android.systemui";
    /**
     *  任务键功能 ，类名 （用来显示任务列表），
     */
    public static final String  CLASSENAME_TASKLIST = "com.android.systemui.recents.RecentsActivity";

    /**
     * 恢复出厂设置 ，action （用来恢复出厂设置）
     */
    public static final String  ACTION_FACTORY_RESET = "ACTION_FACTORY_RESET";

    /**
     *  intent  ，类名
     */
    public static final String  CLASSENAME_INTENT = "android.content.Intent";

    /**
     *  android  ，包名
     */
    public static final String  ANDROID = "android";


    /**
     * 额外信息，extra （用来恢复出厂设置 辅助信息）
     */
    public static final String  EXTRA_REASON ="EXTRA_REASON";

    /**
     * 恢复出厂设置 ，action （用来关机）
     */
    public static final String  ACTION_REQUEST_SHUTDOWN = "ACTION_REQUEST_SHUTDOWN";

    /**
     * 额外信息，extra （用来关机 辅助信息）
     */
    public static final String  EXTRA_KEY_CONFIRM ="EXTRA_KEY_CONFIRM";


    /**
     *  任务键功能 ，包名 （用来显示任务列表），
     */
    public static final String  PACKAGENAME_ACTIVITYMANAGER = "android.app.ActivityManager";

}
