package android.sys.framework.tools;

import java.io.IOException;
import java.io.InputStream;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;

import javax.net.ssl.SSLContext;

public interface OtherToolsManager {

    /**
     *  与websocket相关  wss 和https 会用到，网络通讯的安全ssl ，初始化文件的西南西
     * @param storeType   例如 BKS
     * @param storePassword  签证密码
     * @param keyPassword   键值 密码
     * @param algorithm   例如 X509
     * @param ksInputStream 签证文件的inputStream
     *
     */
     void sslUtilsInit(String storeType, String storePassword, String keyPassword, String algorithm, InputStream ksInputStream)
             throws KeyStoreException, NoSuchAlgorithmException, CertificateException, IOException, UnrecoverableKeyException;

    /**
     *  与websocket相关  wss 和https 会用到，网络通讯的安全ssl ，初始化文件的西南西
     * @param storeType   例如 BKS
     * @param storePassword  签证密码
     * @param keyPassword   键值 密码
     *  algorithm   例如 默认X509
     * @param ksInputStream 签证文件的inputStream
     *
     */
      void sslUtilsInit(String storeType,String storePassword,String keyPassword, InputStream ksInputStream)
              throws  KeyStoreException,NoSuchAlgorithmException,CertificateException,IOException,UnrecoverableKeyException;

    /**
     * 根据sslUtilsInit函数的信息返回SSLContext上下文
     *  protocol TLS
     */
    SSLContext sslCreate() throws NoSuchAlgorithmException, KeyManagementException;
    /**
     * 根据sslUtilsInit函数的信息返回SSLContext上下文
     * @param protocol the standard name of the requested protocol.
     *          See the SSLContext section in the <a href=
     * "{@docRoot}openjdk-redirect.html?v=8&path=/technotes/guides/security/StandardNames.html#SSLContext">
     *          Java Cryptography Architecture Standard Algorithm Name
     *          Documentation</a>
     *          for information about standard protocol names.
     */
    SSLContext sslCreate(String protocol) throws NoSuchAlgorithmException, KeyManagementException;

}
