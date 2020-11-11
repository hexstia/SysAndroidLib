package android.sys.framework.Impl;

import android.content.Context;
import android.os.IInterface;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.display.IDisplayToolsManager;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.WindowManager;

import java.lang.reflect.Method;

public class DisplayToolsManagerImpl extends AbstractManager implements IDisplayToolsManager {
    private  IInterface displayManager;
    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalWidth 的宽度，该宽度为设备的宽度，也就是分辨率，全屏
     * @return
     */
    @Override
    public int getDisplayInfoWidth() {
        int width = -1;
        try {
            Object displayInfo = displayManager.getClass().getMethod("getDisplayInfo", int.class).invoke(displayManager, 0);
            Class<?> cls = displayInfo.getClass();
            // width and height already take the rotation into account
             width = cls.getDeclaredField("logicalWidth").getInt(displayInfo);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
        return width;

    }
    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalHidth 的（高度），该（高度）为设备的（高度），也就是分辨率，全屏
     * @return
     */
    @Override
    public int getDisplayInfoHeight() {
        int height = -1;
        try {
            Object displayInfo = displayManager.getClass().getMethod("getDisplayInfo", int.class).invoke(displayManager, 0);
            Class<?> cls = displayInfo.getClass();
            // width and height already take the rotation into account
             height = cls.getDeclaredField("logicalHeight").getInt(displayInfo);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
        return height;
    }
    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalHidth 的（高度），该（高度）为设备的（高度），也就是分辨率，全屏
     * @return
     */
    @Override
    public int getDisplayInfoRotation(){
    int rotation = -1;
        try {
            Object displayInfo = displayManager.getClass().getMethod("getDisplayInfo", int.class).invoke(displayManager, 0);
            Class<?> cls = displayInfo.getClass();
             rotation = cls.getDeclaredField("rotation").getInt(displayInfo);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
        return rotation;
    }

    /**
     *  获取真实的宽高值
     * @return
     */
    @Override
    public DisplayMetrics getWH(){
        WindowManager windowManager = (WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE);
        Display display = windowManager.getDefaultDisplay();
        DisplayMetrics dm = new DisplayMetrics();
        try {
            @SuppressWarnings("rawtypes")
            Class c = Class.forName("android.view.Display");
            @SuppressWarnings("unchecked")
            Method method = c.getMethod("getRealMetrics", DisplayMetrics.class);
            method.invoke(display, dm);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return dm;
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static DisplayToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new DisplayToolsManagerImpl();
        }
    }
    static {
        DisplayToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   DisplayToolsManagerImpl  creatSingle(Context context){
        DisplayToolsManagerImpl bmi =  DisplayToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        bmi.displayManager = bmi.getDisplayManager();
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private DisplayToolsManagerImpl(){};

/***********************************************************************************/
}
