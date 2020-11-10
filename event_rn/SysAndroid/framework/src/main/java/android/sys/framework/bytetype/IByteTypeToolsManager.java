package android.sys.framework.bytetype;

/**
 *  该接口用来做底层的数据转换的类，一般用来 音视频或者socket通信等 流数据分析使用
 */
public interface IByteTypeToolsManager {
    /**
     *  将字节数组转换为 16进制的字符串
     * @param bytes 字节数组
     * @return 16进制的字符串  多用来分析网络数据和音视频流数据
     */
    String bytesToHexString(byte[] bytes);

    /**
     *  将整型值转换为数组长度为4的字节数组 （小端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为4
     */
    byte[] littleIntToBytes(int i);
    /**
     *  将整型值转换为数组长度为4的字节数组 （大端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为4
     */
    byte[] bigIntToBytes(int i);


    /**
     *  将整型值转换为数组长度为2的字节数组 （小端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为2
     */
    byte[] littleIntToBytes2(int i);
    /**
     *  将整型值转换为数组长度为2的字节数组 （大端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组 长度为2
     */
    byte[] bigIntToBytes2(int i);


    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（小端模式）
     *  将整型转换为占数组的长度4个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    byte[] littleIntToBytes(byte[] bs ,int i,int index);

    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度4个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    byte[] bigIntToBytes(byte[] bs ,int i,int index);
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度2个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    byte[] littleIntToBytes2(byte[] bs ,int i,int index);
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度2个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    byte[] bigIntToBytes2(byte[] bs ,int i,int index);

    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为4 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int bigBytesToInt(byte[] bs);
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为4 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int littleBytesToInt(byte[] bs);
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为2 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int bigBytesToInt2(byte[] bs);
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为2 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int littleBytesToInt2(byte[] bs);
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为4 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int bigBytesToInt(byte[] bs,int index);
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为4 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */

    int littleBytesToInt(byte[] bs,int index);
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为2 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int bigBytesToInt2(byte[] bs,int index);
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为2 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    int littleBytesToInt2(byte[] bs,int index);
}
