package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.bytetype.IByteTypeToolsManager;

public class ByteTypeToolsManagerImpl  extends AbstractManager implements IByteTypeToolsManager {

    /**
     *  将字节数组转换为 16进制的字符串
     * @param bytes 字节数组
     * @return 16进制的字符串  多用来分析网络数据和音视频流数据
     */
    @Override
    public String bytesToHexString(byte[] bytes) {

        StringBuilder buf = new StringBuilder(bytes.length * 2);
        for(byte b : bytes) { // 使用String的format方法进行转换
            buf.append(String.format("%02d ", new Integer(b & 0xff)));
        }
        return buf.toString();
    }
    /**
     *  将整型值转换为数组长度为4的字节数组 （小端模式） 高低高低
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为4
     */
    @Override
    public byte[] littleIntToBytes(int i) {

        byte[] bs = new byte[4];
        littleIntToBytes(bs,i,0);
        return bs;
    }
    /**
     *  将整型值转换为数组长度为4的字节数组 （大端模式） 高高低低
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为4
     */
    @Override
    public byte[] bigIntToBytes(int i) {
        byte[] bs = new byte[4];
        bigIntToBytes(bs,i,0);
        return bs;
    }
    /**
     *  将整型值转换为数组长度为2的字节数组 （小端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组  长度为2
     */
    @Override
    public byte[] littleIntToBytes2(int i) {
        byte[] bs = new byte[2];
        littleIntToBytes2(bs,i,0);
        return bs;
    }
    /**
     *  将整型值转换为数组长度为2的字节数组 （大端模式）
     * @param i 要转换的整型值
     * @return 转换好的数组 长度为2
     */
    @Override
    public byte[] bigIntToBytes2(int i)
    {
        byte[] bs = new byte[2];
        bigIntToBytes2(bs,i,0);
        return bs;
    }
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（小端模式）
     *  将整型转换为占数组的长度4个元素
     *  小端模式：
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    @Override
    public byte[] littleIntToBytes(byte[] bs, int i, int index){
        int add = 0;
        bs[index+(add++)] = (byte)i ;
        bs[index+(add++)] = (byte)(i >> 8) ;
        bs[index+(add++)] = (byte)(i >> 16) ;
        bs[index+(add++)] = (byte)(i >> 24) ;
        return bs;
    }
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度4个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    @Override
    public byte[] bigIntToBytes(byte[] bs, int i, int index) {
        int add = 4;
        bs[index+(add++)] = (byte)i ;
        bs[index+(add++)] = (byte)(i >> 8) ;
        bs[index+(add++)] = (byte)(i >> 16) ;
        bs[index+(add++)] = (byte)(i >> 24) ;
        return bs;
    }
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度2个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    @Override
    public byte[] littleIntToBytes2(byte[] bs, int i, int index) {
        int add = 0;
        bs[index+(add++)] = (byte)i ;
        bs[index+(add++)] = (byte)(i >> 8) ;
        return bs;
    }
    /**
     *  将整型值转换为数组，并指定数组本身，且指定从数组的index位置开始（大端模式）
     *  将整型转换为占数组的长度2个元素
     * @param bs 并指定数组本身（引用）
     * @param i  要转换的整型值
     * @param index  从数组的具体位置index  （注意范围）
     * @return
     */
    @Override
    public byte[] bigIntToBytes2(byte[] bs, int i, int index) {
        int add = 2;
        bs[index+(add++)] = (byte)i ;
        bs[index+(add++)] = (byte)(i >> 8) ;
        return bs;
    }

    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为4 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int bigBytesToInt(byte[] bs) {

        return bigBytesToInt(bs,0);
    }
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为4 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int littleBytesToInt(byte[] bs) {
        return littleBytesToInt(bs,0);
    }
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为2 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int bigBytesToInt2(byte[] bs) {
       return bigBytesToInt2(bs,0);
    }
    /**
     *  将数组转换为整型值，去数组的从索引0开始长度为2 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int littleBytesToInt2(byte[] bs) {
        return littleBytesToInt2(bs,0);
    }
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为4 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int bigBytesToInt(byte[] bs, int index) {
        int i0= bs[index+3] & 0xFF  ;

        int i1 = (bs[index+2] & 0xFF) << 8 ;

        int i2 = (bs[index+1] & 0xFF) << 16 ;

        int i3 = (bs[index] & 0xFF) << 24 ;
        return i3|i2|i1|i0;
    }
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为4 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int littleBytesToInt(byte[] bs, int index) {

        int i3 = (bs[index++] & 0xFF) << 24 ;

        int i2 = (bs[index++] & 0xFF) << 16 ;

        int i1 = (bs[index++] & 0xFF) << 8 ;

        int i0= bs[index] & 0xFF  ;
        return i0|i1|i2|i3;
    }

    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为2 的内容转换为整型（大端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int bigBytesToInt2(byte[] bs,int index){
        int i0= bs[index+1] & 0xFF  ;
        int i1 = (bs[index] & 0xFF) << 8 ;
        return i1|i0;
    }
    /**
     *  将数组转换为整型值，去数组的从索引index开始长度为2 的内容转换为整型（小端模式）
     * @param bs 并指定数组本身（引用）
     * @return 得到的整型值
     */
    @Override
    public int littleBytesToInt2(byte[] bs,int index){
        int i0= bs[index+1] & 0xFF  ;
        int i1 = (bs[index] & 0xFF) << 8 ;
        return i0|i1;
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static ByteTypeToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new ByteTypeToolsManagerImpl();
        }
    }
    static {
        ByteTypeToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   ByteTypeToolsManagerImpl  creatSingle(Context context){
        ByteTypeToolsManagerImpl bmi =  ByteTypeToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private ByteTypeToolsManagerImpl(){};

/***********************************************************************************/
}
