package android.sys.framework.all;

import android.sys.framework.activity.ActivityToolsManager;
import android.sys.framework.inputevent.InputEventToolsManager;

/**
 *  所有者的管理者全部放入到里面
 */
public class AllToolsManger implements ActivityToolsManager, InputEventToolsManager {

    @Override
    public boolean openSpecialApp(String packageName) {
        return false;
    }

    @Override
    public boolean openPictureApp() {
        return false;
    }
}
