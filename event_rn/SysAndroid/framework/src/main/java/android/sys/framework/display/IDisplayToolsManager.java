package android.sys.framework.display;

import android.util.DisplayMetrics;

public interface IDisplayToolsManager {

    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalWidth 的宽度，该宽度为设备的宽度，也就是分辨率，全屏
     * @return
     */
    int getDisplayInfoWidth();
    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalHidth 的（高度），该（高度）为设备的（高度），也就是分辨率，全屏
     * @return
     */
    int getDisplayInfoHeight();
    /**
     *  通过反射displayManager 获取getdisplayinfo的信息，得到logicalWidth 的（方向），该（方向）为设备的（方向），也就是横竖屏转换的方向 0 1 2 3四个值
     *  一般常用  0  1
     * @return
     */
    int getDisplayInfoRotation();

    /**
     *  获取真实的宽高值
     * @return
     */
    DisplayMetrics getWH();
}
