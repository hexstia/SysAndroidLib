package android.sys.framework.Impl;

import android.content.Context;
import android.graphics.Bitmap;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.utils.IUtilsToolsManager;
import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class UtilsToolsManagerImpl extends AbstractManager implements IUtilsToolsManager {
    /**
     *  最大值使用位运算来处理
     * @param a
     * @param b
     * @return 返回最大值
     */

    @Override
    public int max(int a, int b) {
        return b & ((a-b) >> 31) | a & (~(a-b) >> 31);
    }

    /**
     *  bitmap 转换为base64 字符串类型
     * @param bitmap
     * @return base64 字符串
     */
    @Override
    public String bitmapToBase64(Bitmap bitmap) {
        String result = null;
        ByteArrayOutputStream baos = null;
        try {
            if (bitmap != null) {
                baos = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.JPEG, 100, baos);
                baos.flush();
                baos.close();
                byte[] bitmapBytes = baos.toByteArray();
                result = Base64.encodeToString(bitmapBytes, Base64.DEFAULT);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (baos != null) {
                    baos.flush();
                    baos.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return result;
    }


/***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static UtilsToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new UtilsToolsManagerImpl();
        }
    }
    static {
        UtilsToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   UtilsToolsManagerImpl  creatSingle(Context context){
        UtilsToolsManagerImpl bmi =  UtilsToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private UtilsToolsManagerImpl(){};

/***********************************************************************************/
}
