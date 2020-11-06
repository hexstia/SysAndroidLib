package android.sys.framework.activity;

public interface ActivityToolsManager {
    /**
     *  打开指定的app，
     * @param packageName 根据包名来判断，打开的页面为<main></>
     * @return
     */
         boolean openSpecialApp(String packageName);

    /**
     *  打开相册应用 或者是图库功能
     * @return
     */
         boolean openPictureApp();
}
