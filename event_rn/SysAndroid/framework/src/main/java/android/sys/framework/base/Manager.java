package android.sys.framework.base;

import android.sys.framework.activity.IActivityToolsManager;

public interface Manager {

    /**
     *  所有ToolsManager类的包名
     */
    String PACKAGENAME= "android.sys.framework";
    /**
     *  使用函数 {@link BaseManager#getManager(String)} 来获得一个ActivityToolsManager对象
     * {@link IActivityToolsManager}  完成与Acitvity相关功能的管理者
     *
     * @see BaseManager#getManager(String)
     * @see IActivityToolsManager
     */
    String ACTIVITY_MANAGER = "activity";

    /**
     *  使用函数 {@link BaseManager#getManager(String)} 来获得一个InputEventToolsManager对象
     * {@link android.sys.framework.inputevent.IInputEventToolsManager}  完成与InputEvent相关功能的管理者
     *
     * @see BaseManager#getManager(String)
     * @see IActivityToolsManager
     */
    String INPUTEVENT_MANAGER = "inputEvent";
}
