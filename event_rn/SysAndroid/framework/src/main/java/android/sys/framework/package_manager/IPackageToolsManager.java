package android.sys.framework.package_manager;

public interface IPackageToolsManager {
    /**
     *  该apk文件安装方式通过静默进行安装，该种安装方式的弊端，无法得知apk是否安装成功，无法返回安装进度和安装是否成功
     * @param installPath   apk文件所在的路径 /sdcard/xxxx.apk
     * @param packageName   apk文件的包名  可以填写空值
     * @return
     */
    boolean installApkFileByPackageNameDefault(String installPath, String packageName);


}
