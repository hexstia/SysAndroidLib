package android.sys.framework.Impl;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Binder;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.package_manager.IPackageToolsManager;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class PackageToolsManagerImpl extends AbstractManager implements IPackageToolsManager {

    /**
     *  该apk文件安装方式通过静默进行安装，该种安装方式的弊端 :
     *  无法得知apk是否安装成功，无法返回安装进度和安装是否成功
     * @param installPath   apk文件所在的路径 /sdcard/xxxx.apk
     * @param packageName   apk文件的包名  可以填写null
     * @return 如果apk文件不正确 ，则失败。
     */
    @Override
    public boolean installApkFileByPackageNameDefault(String installPath, String packageName) {
        Class<?> pmService;
        Class<?> activityTherad;
        Method method;
        boolean res = false;
        try {
            activityTherad = Class.forName("android.app.ActivityThread");
            Class<?> paramTypes[] = getParamTypes(activityTherad, "getPackageManager");
            method = activityTherad.getMethod("getPackageManager", paramTypes);
            Object PackageManagerService = method.invoke(activityTherad);
            pmService = PackageManagerService.getClass();
            Class<?> paramTypes1[] = getParamTypes(pmService, "installPackageAsUser");
            method = pmService.getMethod("installPackageAsUser", paramTypes1);
//                method.invoke(PackageManagerService, installPath, null, 0x00000040, packageName, getUserId(Binder.getCallingUid()));//getUserId
            int uid  = Binder.getCallingUid();
            int userID = uid/100000;
            method.invoke(PackageManagerService,
                    installPath, null, 0x00000002, packageName,userID);//getUserId
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return res;
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
            return res;
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            return res;
        } catch (InvocationTargetException e) {
            e.printStackTrace();
            return res;
        }
        res = true;
        return res;
    }

    /**
     *  获取uid 根据包名，也就是获取对应包名 uid
     * @param packageName
     * @return
     */
    @Override
    public int getUidByPackageName(String packageName) {
            int uid = -1;
            PackageManager packageManager = getContext().getPackageManager();
            try {
                PackageInfo packageInfo = packageManager.getPackageInfo(packageName, PackageManager.GET_META_DATA);

                uid = packageInfo.applicationInfo.uid;
            } catch (PackageManager.NameNotFoundException e) {
            }
            return uid;
    }

    private Class<?>[] getParamTypes(Class<?> cls, String mName) {
        Class<?> cs[] = null;
        Method[] mtd = cls.getMethods();
        for (int i = 0; i < mtd.length; i++) {
            if (!mtd[i].getName().equals(mName)) {
                continue;
            }
            cs = mtd[i].getParameterTypes();
        }
        return cs;
    }







    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static PackageToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new PackageToolsManagerImpl();
        }
    }
    static {
        PackageToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   PackageToolsManagerImpl  creatSingle(Context context){
        PackageToolsManagerImpl bmi =  PackageToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private PackageToolsManagerImpl(){};

/***********************************************************************************/
}
