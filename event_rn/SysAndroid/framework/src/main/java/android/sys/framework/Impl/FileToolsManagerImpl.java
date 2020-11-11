package android.sys.framework.Impl;

import android.app.ActivityManager;
import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.file.IFileToolsManger;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileToolsManagerImpl  extends AbstractManager implements IFileToolsManger {
    /**
     *  拷贝文件函数 只针对文件
     * @param oldPath 源文件的位置路径
     * @param newPath 新文件的位置路径 包含文件本身名称
     * @return  true 拷贝成功 false 拷贝失败
     */
    @Override
    public boolean copyFile(String oldPath, String newPath) {
        int n = 0;
        boolean res = false;
        try {
            File file = new File(oldPath);
            if (!file.exists()) {
                return  res;
            }
            FileInputStream fis = new FileInputStream(oldPath);
            FileOutputStream fos = new FileOutputStream(newPath);
            byte[] b = new byte[1024];
            int len = 0;
            while ((len = fis.read(b)) != -1) {
                fos.write(b, 0, len);
                fos.flush();
            }
            fis.close();
            fos.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return res ;
        } catch (IOException e) {
            e.printStackTrace();
            return res ;
        }
        return true;
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static FileToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new FileToolsManagerImpl();
        }
    }
    static {
        FileToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   FileToolsManagerImpl  creatSingle(Context context){
        FileToolsManagerImpl bmi =  FileToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private FileToolsManagerImpl(){};

/***********************************************************************************/
}
