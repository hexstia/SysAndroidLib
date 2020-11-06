package android.sys.framework.base;

import android.content.Context;

public abstract class BaseManager {
    /**
     *  所有ToolsManager类的包名
     */
    protected static final String PACKAGENAME= "android.sys.framework";
    /**
     *  使用函数 {@link #getManager(String)} 来获得一个ActivityToolsManager对象
     * {@link android.sys.framework.activity.ActivityToolsManager}  完成与Acitvity相关功能的管理者
     *
     * @see #getManager(String)
     * @see android.sys.framework.activity.ActivityToolsManager
     */
    public static final String ACTIVITY_MANAGER = "activity";

    /**
     *  通过名称返回一个可以处理系统级别的Manager对象
     *  @param name  名字为一个管理者的包名
     * @return 如果名称不存在则返回为空
     */
    public abstract Object getManager(String name);



}
