package android.sys.framework.file;

public interface IFileToolsManger {
    /**
     *  拷贝文件函数 只针对文件
     * @param oldPath 源文件的位置路径
     * @param newPath 新文件的位置路径 包含文件本身名称
     * @return  true 拷贝成功 false 拷贝失败
     */
    boolean copyFile(String oldPath,String newPath);

}
