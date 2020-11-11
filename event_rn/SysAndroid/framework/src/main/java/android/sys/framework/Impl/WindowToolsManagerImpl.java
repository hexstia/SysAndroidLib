package android.sys.framework.Impl;

import android.content.Context;
import android.graphics.Point;
import android.os.IBinder;
import android.os.IInterface;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.window.IWindowToolsManager;
import android.view.Display;
import android.view.IRotationWatcher;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class WindowToolsManagerImpl  extends AbstractManager implements IWindowToolsManager {

    private IInterface mWm; //Anroid windowManager的 接口
    /**
     * 相当于命令 wm size w x y 例如 wm size 1080x2246 (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @param w 宽度 pix
     * @param h 高度 pix
     * @throws Exception
     */
    @Override
    public void setWmSize(int w, int h) throws Exception {
        Method setForcedDisplaySizeMeth = mWm.getClass().getMethod("setForcedDisplaySize",int.class,int.class,int.class);
        setForcedDisplaySizeMeth.invoke(mWm, Display.DEFAULT_DISPLAY,w,h);
    }
    /**
     * 相当于命令 wm density  例如 wm density 120  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @param d 密度 density
     * @throws Exception
     */
    @Override
    public void setWmDensity(int d) throws Exception {
        Method setForcedDisplayDensityForUser = mWm.getClass().getMethod("setForcedDisplayDensityForUser",int.class,int.class,int.class);
        setForcedDisplayDensityForUser.invoke(mWm,Display.DEFAULT_DISPLAY,d,-2); // -2= USER_CURRENT
    }
    /**
     * 该函数相当于命令 wm size 获得的内容 覆盖的尺寸，前提是之前执行过wm size修改过尺寸 例如wm size 1080x2246
     *  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @return 屏幕的尺寸 包含宽高
     * @throws Exception
     */
    @Override
    public Point getOverrideSize() throws Exception {
        Method getBaseDisplaySizemeth =  mWm.getClass().getMethod("getBaseDisplaySize",int.class, Point.class);
        Point baseSize = new Point();
        getBaseDisplaySizemeth.invoke(mWm,Display.DEFAULT_DISPLAY,baseSize);
        return baseSize;
    }
    /**
     * 该函数相当于命令 wm size 获得的内容 物理的尺寸  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @return 屏幕的尺寸 包含宽高
     * @throws Exception
     */
    @Override
    public Point getPhysicalSize() throws Exception {
        Method getBaseDisplaySizemeth =  mWm.getClass().getMethod("getInitialDisplaySize",int.class, Point.class);
        Point baseSize = new Point();
        getBaseDisplaySizemeth.invoke(mWm,Display.DEFAULT_DISPLAY,baseSize);
        return baseSize;
    }

    /**
     *  通过反射windowManager的getRotation的方法来获得 横竖屏（旋转）方向状态
     * @return
     */
    @Override
    public int getRotation() {
        try {
            Class<?> cls = getWindowManager().getClass();
            try {
                return (Integer) cls.getMethod("getRotation").invoke(getWindowManager());
            } catch (NoSuchMethodException e) {
                // method changed since this commit:
                // https://android.googlesource.com/platform/frameworks/base/+/8ee7285128c3843401d4c4d0412cd66e86ba49e3%5E%21/#F2
                return (Integer) cls.getMethod("getDefaultDisplayRotation").invoke(getWindowManager());
            }
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }
    /**
     *  通过反射  调用注册binder来实现横竖屏的监听方法
     *  Binder的注册方法 ：
     *  new IRotationWatcher.Stub() {
     *             @Override
     *             public void onRotationChanged(int rotation) throws RemoteException {
     *                 synchronized (xxx.this) {
     *                     }
     *                 }
     *             }
     */
    @Override
    public void registerRotationWatcher(IRotationWatcher rotationWatcher) {
        try {
            Class<?> cls = getWindowManager().getClass();
            try {
                cls.getMethod("watchRotation", IRotationWatcher.class).invoke(getWindowManager(), rotationWatcher);
            } catch (NoSuchMethodException e) {
                cls.getMethod("watchRotation", IRotationWatcher.class, int.class).invoke(getWindowManager(), rotationWatcher, 0);
            }
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    /**
     *  通过反射来获取IWindowManager类的代理类，完成对应的功能
     */
    private boolean InitmWm(){
        boolean res =false;
        Method asInterfaceMethod = null;
        try {
            asInterfaceMethod = Class.forName("android.view.IWindowManager" + "$Stub").getMethod("asInterface", IBinder.class);
            Method checkService = Class.forName("android.os.ServiceManager").getMethod("checkService",String.class);
            Object asInterfaceParam =  checkService.invoke(null, Context.WINDOW_SERVICE);
            mWm  =(IInterface)asInterfaceMethod.invoke(null,asInterfaceParam);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
            return res;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return res;
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            return res;
        } catch (InvocationTargetException e) {
            e.printStackTrace();
            return res;
        }
        return  true;
    }


    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static WindowToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new WindowToolsManagerImpl();
        }
    }
    static {
        WindowToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   WindowToolsManagerImpl  creatSingle(Context context){
        WindowToolsManagerImpl bmi =  WindowToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private WindowToolsManagerImpl(){
        InitmWm();
    };

/***********************************************************************************/
}
