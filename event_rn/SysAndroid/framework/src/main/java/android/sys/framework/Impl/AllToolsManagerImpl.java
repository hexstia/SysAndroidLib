package android.sys.framework.Impl;

import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.graphics.Rect;
import android.os.IBinder;
import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.all.IAllToolsManger;
import android.sys.framework.audio.IAudioToolsManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.base.BaseManager;
import android.sys.framework.base.Manager;
import android.sys.framework.bytetype.IByteTypeToolsManager;
import android.sys.framework.deviceInfo.IDeviceInfoToolsManager;
import android.sys.framework.display.IDisplayToolsManager;
import android.sys.framework.file.IFileToolsManger;
import android.sys.framework.inputevent.IInputEventToolsManager;
import android.sys.framework.json.IJsonToolsManager;
import android.sys.framework.net.INetToolsManager;
import android.sys.framework.other.IOtherToolsManager;
import android.sys.framework.package_manager.IPackageToolsManager;
import android.sys.framework.power.IPowerToolsManager;
import android.sys.framework.property.IPropertyToolsManager;
import android.sys.framework.surface.ISurfaceControlToolsManager;
import android.sys.framework.utils.IUtilsToolsManager;
import android.sys.framework.window.IWindowToolsManager;
import android.util.DisplayMetrics;
import android.view.IRotationWatcher;
import android.view.InputEvent;
import android.view.Surface;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;

import javax.net.ssl.SSLContext;

public class AllToolsManagerImpl extends AbstractManager  implements IAllToolsManger {

    @Override
    public void test() {
    actM.test();
    }
    private IActivityToolsManager actM;
    private IAudioToolsManager audioM;
    private IByteTypeToolsManager byteM;
    private IDeviceInfoToolsManager deviceM;
    private IDisplayToolsManager displayM;
    private IFileToolsManger fileM;
    private IInputEventToolsManager inputM;
    private IJsonToolsManager jsonM;
    private INetToolsManager netM;
    private IOtherToolsManager otherM;
    private IPackageToolsManager packageM;
    private IPowerToolsManager powerM;
    private IPropertyToolsManager propertyM;
    private ISurfaceControlToolsManager surfaceM;
    private IUtilsToolsManager utilsM;
    private IWindowToolsManager windowM;


    @Override
    public boolean openSpecialApp(String packageName) {
      return  actM.openSpecialApp(packageName);
    }

    @Override
    public boolean openPictureApp() {
     return  actM.openPictureApp();
    }

    @Override
    public boolean openBackHome() {
        return actM.openBackHome();
    }

    @Override
    public boolean openTaskList() {
        return actM.openTaskList();
    }

    @Override
    public boolean stopApp(String appPackageName) {
        return actM.stopApp(appPackageName);
    }

    @Override
    public ActivityManager.RunningTaskInfo getCurrentRuningList(int maxNum, int currentIndex) {
        return actM.getCurrentRuningList(maxNum,currentIndex);
    }

    @Override
    public void removeTask(int taskId) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
         actM.removeTask(taskId);
    }

    @Override
    public void removeAllTask(int maxNum) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        actM.removeAllTask(maxNum);
    }

    @Override
    public String getTopAcitvityPackageName() {
        return actM.getTopAcitvityPackageName();
    }

    @Override
    public ComponentName startCommponetAsUser(Intent intent, int userid, String methodName) {
        return actM.startCommponetAsUser(intent,userid,methodName);
    }

    private  void createAllSingleInstance(Context context){
        BaseManager bm = BaseManager.getInstance(context);
        actM = (IActivityToolsManager) bm.getManager(Manager.ACTIVITY_MANAGER);
        inputM = (IInputEventToolsManager) bm.getManager(Manager.INPUTEVENT_MANAGER);
        windowM = (IWindowToolsManager) bm.getManager(Manager.WINDOW_MANAGER);
    }

    @Override
    public boolean injectInputEvent(InputEvent inputEvent, int mode) {
        return false;
    }

    @Override
    public void maxSystemVolume() {
        audioM.maxSystemVolume();
    }

    @Override
    public void minSystemVolume() {
        audioM.minSystemVolume();
    }

    @Override
    public void maxMusicVolume() {
        audioM.maxMusicVolume();
    }

    @Override
    public void minMusicVolume() {
        audioM.minMusicVolume();
    }

    @Override
    public void setVolume(int value, int streamType, int flag) {
        audioM.setVolume(value,streamType,flag);
    }

    @Override
    public String bytesToHexString(byte[] bytes) {

        return byteM.bytesToHexString(bytes);
    }

    @Override
    public byte[] littleIntToBytes(int i) {
        return byteM.littleIntToBytes(i);
    }

    @Override
    public byte[] bigIntToBytes(int i) {
        return byteM.bigIntToBytes(i);
    }

    @Override
    public byte[] littleIntToBytes2(int i) {
        return byteM.littleIntToBytes2(i);
    }

    @Override
    public byte[] bigIntToBytes2(int i) {
        return byteM.bigIntToBytes2(i);
    }

    @Override
    public byte[] littleIntToBytes(byte[] bs, int i, int index) {
        return byteM.littleIntToBytes(bs,i,index);
    }

    @Override
    public byte[] bigIntToBytes(byte[] bs, int i, int index) {
        return byteM.bigIntToBytes(bs,i,index);
    }

    @Override
    public byte[] littleIntToBytes2(byte[] bs, int i, int index) {
        return byteM.littleIntToBytes2(bs,i,index);
    }

    @Override
    public byte[] bigIntToBytes2(byte[] bs, int i, int index) {
        return byteM.bigIntToBytes2(bs,i,index);
    }

    @Override
    public int bigBytesToInt(byte[] bs) {
        return byteM.bigBytesToInt(bs);
    }

    @Override
    public int littleBytesToInt(byte[] bs) {
        return byteM.littleBytesToInt(bs);
    }

    @Override
    public int bigBytesToInt2(byte[] bs) {
        return byteM.bigBytesToInt2(bs);
    }

    @Override
    public int littleBytesToInt2(byte[] bs) {
        return byteM.littleBytesToInt2(bs);
    }

    @Override
    public int bigBytesToInt(byte[] bs, int index) {
        return byteM.bigBytesToInt(bs,index);
    }

    @Override
    public int littleBytesToInt(byte[] bs, int index) {
        return byteM.littleBytesToInt(bs,index);
    }

    @Override
    public int bigBytesToInt2(byte[] bs, int index) {
        return byteM.bigBytesToInt2(bs,index);
    }

    @Override
    public int littleBytesToInt2(byte[] bs, int index) {
        return byteM.littleBytesToInt2(bs,index);
    }

    @Override
    public int toUnsigned(short value) {
        return byteM.toUnsigned(value);
    }

    @Override
    public int toUnsigned(byte value) {
        return byteM.toUnsigned(value);
    }

    @Override
    public boolean deviceReboot() {
return deviceM.deviceReboot();
    }

    @Override
    public boolean deviceShutDown() {
        return deviceM.deviceShutDown();
    }

    @Override
    public boolean deviceRecoveryReset() {
        return deviceM.deviceRecoveryReset();
    }

    @Override
    public String getFileMac(String netInterface) {
        return deviceM.getFileMac(netInterface);
    }

    @Override
    public String getWifiMac() {
        return deviceM.getWifiMac();
    }

    @Override
    public String getLocalIP() {
        return deviceM.getLocalIP();
    }

    @Override
    public int getDisplayInfoWidth() {
        return displayM.getDisplayInfoWidth();
    }

    @Override
    public int getDisplayInfoHeight() {
        return displayM.getDisplayInfoHeight();
    }

    @Override
    public int getDisplayInfoRotation() {
        return displayM.getDisplayInfoRotation();
    }

    @Override
    public DisplayMetrics getWH() {
        return displayM.getWH();
    }

    @Override
    public boolean copyFile(String oldPath, String newPath) {
      return fileM.copyFile(oldPath,newPath);
    }

    @Override
    public String showNetRxSpeed() {
       return  netM.showNetRxSpeed();
    }

    @Override
    public String showNetTxSpeed() {
        return  netM.showNetTxSpeed();
    }

    @Override
    public void sslUtilsInit(String storeType, String storePassword, String keyPassword, String algorithm, InputStream ksInputStream) throws KeyStoreException, NoSuchAlgorithmException, CertificateException, IOException, UnrecoverableKeyException {
          otherM.sslUtilsInit(storeType,storePassword,keyPassword,algorithm,ksInputStream);
    }

    @Override
    public void sslUtilsInit(String storeType, String storePassword, String keyPassword, InputStream ksInputStream) throws KeyStoreException, NoSuchAlgorithmException, CertificateException, IOException, UnrecoverableKeyException {
        otherM.sslUtilsInit(storeType,storePassword,keyPassword,ksInputStream);
    }

    @Override
    public SSLContext sslCreate() throws NoSuchAlgorithmException, KeyManagementException {
     return    otherM.sslCreate();
    }

    @Override
    public SSLContext sslCreate(String protocol) throws NoSuchAlgorithmException, KeyManagementException {
        return    otherM.sslCreate(protocol);
    }

    @Override
    public boolean installApkFileByPackageNameDefault(String installPath, String packageName) {
        return    packageM.installApkFileByPackageNameDefault(installPath,packageName);
    }

    @Override
    public int getUidByPackageName(String packageName) {
        return    packageM.getUidByPackageName(packageName);
    }

    @Override
    public boolean isScreenOn() {
        return powerM.isScreenOn();
    }

    @Override
    public String getProperty(String key, String defaultValue) {
        return propertyM.getProperty(key,defaultValue);
    }

    @Override
    public void setProperty(String key, String value) {
         propertyM.setProperty(key,value);
    }

    @Override
    public void openTransaction() {
        surfaceM.openTransaction();
    }

    @Override
    public void closeTransaction() {
        surfaceM.closeTransaction();
    }

    @Override
    public void setDisplayProjection(IBinder displayToken, int orientation, Rect layerStackRect, Rect displayRect) {
        surfaceM.setDisplayProjection(displayToken,orientation,layerStackRect,displayRect);
    }

    @Override
    public void setDisplayLayerStack(IBinder displayToken, int layerStack) {
        surfaceM.setDisplayLayerStack(displayToken,layerStack);
    }

    @Override
    public void setDisplaySurface(IBinder displayToken, Surface surface) {
        surfaceM.setDisplaySurface(displayToken,surface);
    }

    @Override
    public IBinder createDisplay(String name, boolean secure) {
        return surfaceM.createDisplay(name,secure);
    }

    @Override
    public void destroyDisplay(IBinder displayToken) {
         surfaceM.destroyDisplay(displayToken);
    }

    @Override
    public int max(int a, int b) {
        return utilsM.max(a,b);
    }

    @Override
    public void setWmSize(int w, int h) throws Exception {
         windowM.setWmSize(w,h);
    }

    @Override
    public void setWmDensity(int d) throws Exception {
         windowM.setWmDensity(d);
    }

    @Override
    public Point getOverrideSize() throws Exception {
        return windowM.getOverrideSize();
    }

    @Override
    public Point getPhysicalSize() throws Exception {
        return windowM.getPhysicalSize();
    }

    @Override
    public int getRotation() {
        return windowM.getRotation();
    }

    @Override
    public void registerRotationWatcher(IRotationWatcher rotationWatcher) {
         windowM.registerRotationWatcher(rotationWatcher);
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static AllToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new AllToolsManagerImpl();
        }
    }
    static {
        AllToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static AllToolsManagerImpl creatSingle(Context context){
        AllToolsManagerImpl bmi =  AllToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        bmi.createAllSingleInstance(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private AllToolsManagerImpl(){};

/***********************************************************************************/
}
