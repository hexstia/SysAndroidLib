package android.sys.framework.window;

import android.graphics.Point;
import android.view.IRotationWatcher;

public interface IWindowToolsManager {

    /**
     * 相当于命令 wm size w x y 例如 wm size 1080x2246 (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @param w 宽度 pix
     * @param h 高度 pix
     * @throws Exception
     */
        void setWmSize(int w,int h)throws Exception;

    /**
     * 相当于命令 wm density  例如 wm density 120  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @param d 密度 density
     * @throws Exception
     */
     void setWmDensity(int d)throws Exception;



    /**
     * 该函数相当于命令 wm size 获得的内容 覆盖的尺寸，前提是之前执行过wm size修改过尺寸 例如wm size 1080x2246
     *  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @return 屏幕的尺寸 包含宽高
     * @throws Exception
     */
    public Point getOverrideSize()throws Exception;


    /**
     * 该函数相当于命令 wm size 获得的内容 物理的尺寸  (注意有延迟，因为属于进程操作，修改本机的设备尺寸)
     * @return 屏幕的尺寸 包含宽高
     * @throws Exception
     */
    public Point getPhysicalSize()throws Exception;

    /**
     *  通过反射windowManager的getRotation的方法来获得 横竖屏（旋转）方向状态
     * @return
     */
     int getRotation();

    /**
     *  通过反射  调用注册binder来实现横竖屏的监听方法
     *  Binder的注册方法 ：
     *  new IRotationWatcher.Stub() {
     *             @Override
     *             public void onRotationChanged(int rotation) throws RemoteException {
     *                 synchronized (xxx.this) {
     *
     *                     }
     *                 }
     *             }
     *
     */
    void registerRotationWatcher(IRotationWatcher rotationWatcher) ;
}
