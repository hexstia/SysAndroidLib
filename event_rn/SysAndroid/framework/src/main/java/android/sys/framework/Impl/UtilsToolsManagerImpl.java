package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.utils.IUtilsToolsManager;

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
