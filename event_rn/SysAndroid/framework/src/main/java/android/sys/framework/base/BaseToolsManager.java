package android.sys.framework.base;

import android.app.AlertDialog;
import android.sys.framework.activity.ActivityToolsManager;
import android.sys.framework.inputevent.InputEventToolsManager;

/**
 *   获取所有的的功能管理者的实例的接口类
 *
 *   1. 获取ActivityToolsManager 用于处理与Activity相关功能的接口类
 *
 */
public interface BaseToolsManager {

            public Object getManager(String name);
            public Object getAllManager();

}
