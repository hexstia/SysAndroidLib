package android.sys.framework.Impl;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.os.IBinder;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.surface.ISurfaceControlToolsManager;
import android.view.Surface;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class SurfaceControlToolsManagerImpl  extends AbstractManager implements ISurfaceControlToolsManager {
    private Class<?> sfcCls;

    @Override
    public void openTransaction() {
        try {
            sfcCls.getMethod("openTransaction").invoke(null);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }
    @Override
    public void closeTransaction() {
        try {
            sfcCls.getMethod("closeTransaction").invoke(null);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public void setDisplayProjection(IBinder displayToken, int orientation, Rect layerStackRect, Rect displayRect) {
        try {
            sfcCls.getMethod("setDisplayProjection", IBinder.class, int.class, Rect.class, Rect.class)
                    .invoke(null, displayToken, orientation, layerStackRect, displayRect);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public void setDisplayLayerStack(IBinder displayToken, int layerStack) {
        try {
            sfcCls.getMethod("setDisplayLayerStack", IBinder.class, int.class).invoke(null, displayToken, layerStack);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public void setDisplaySurface(IBinder displayToken, Surface surface) {
        try {

            Method me = sfcCls.getMethod("setDisplaySurface", IBinder.class, Surface.class);
            String name = me.getName();
            me.setAccessible(true);
            me.invoke(null, displayToken, surface);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public IBinder createDisplay(String name, boolean secure) {
        try {
            return (IBinder) sfcCls.getMethod("createDisplay", String.class, boolean.class).invoke(null, name, secure);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public void destroyDisplay(IBinder displayToken) {
        try {
            sfcCls.getMethod("destroyDisplay", IBinder.class).invoke(null, displayToken);
        } catch (Exception e) {
            throw new AssertionError(e);
        }
    }

    @Override
    public Bitmap nativeScreenShot(int width, int height) {
        Bitmap bitmap = null;
        try {
            bitmap = (Bitmap)sfcCls.getMethod("screenshot", new Class[]{int.class, int.class}).invoke(null, new Object[]{width, height});
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return bitmap;
    }
    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static SurfaceControlToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new SurfaceControlToolsManagerImpl();
        }
    }
    static {
        SurfaceControlToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   SurfaceControlToolsManagerImpl  creatSingle(Context context){
        SurfaceControlToolsManagerImpl bmi =  SurfaceControlToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private SurfaceControlToolsManagerImpl(){
        try {
            sfcCls = Class.forName("android.view.SurfaceControl");
        } catch (ClassNotFoundException e) {
            throw new AssertionError(e);
        }
    };

/***********************************************************************************/
}
