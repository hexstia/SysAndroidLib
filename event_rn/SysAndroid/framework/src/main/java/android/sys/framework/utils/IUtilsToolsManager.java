package android.sys.framework.utils;

import android.graphics.Bitmap;

public interface IUtilsToolsManager {

    /**
     *  最大值使用位运算来处理
     * @param a
     * @param b
     * @return 返回最大值
     */
    int max(int a,int b);

    /**
     *  bitmap 转换为base64 字符串类型
     * @param bitmap
     * @return
     */
    String bitmapToBase64(Bitmap bitmap);

}
