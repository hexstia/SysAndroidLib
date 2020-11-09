package android.sys.framework.Impl;

import android.sys.framework.tools.OtherToolsManager;

import java.io.IOException;
import java.io.InputStream;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManagerFactory;

public class OtherToolsManagerImpl implements OtherToolsManager {
    private static    KeyManagerFactory kmf = null;
    private static TrustManagerFactory tmf = null;


    /**
     *  与websocket相关  wss 和https 会用到，网络通讯的安全ssl ，初始化文件的西南西
     * @param storeType   例如 BKS
     * @param storePassword  签证密码
     * @param keyPassword   键值 密码
     * @param algorithm   例如 X509
     * @param ksInputStream 签证文件的inputStream
     *
     */
    @Override
    public void sslUtilsInit(String storeType, String storePassword, String keyPassword, String algorithm, InputStream ksInputStream)
            throws  KeyStoreException,NoSuchAlgorithmException,CertificateException,IOException,UnrecoverableKeyException{
            KeyStore ks = KeyStore.getInstance(storeType);
            ks.load(ksInputStream, storePassword.toCharArray());
            kmf = KeyManagerFactory.getInstance(algorithm);
//                KeyManagerFactory kmf = KeyManagerFactory.getInstance("X509");
            kmf.init(ks, keyPassword.toCharArray());
//            TrustManagerFactory tmf = TrustManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
            tmf = TrustManagerFactory.getInstance(algorithm);
            tmf.init(ks);
    }


    /**
     *  与websocket相关  wss 和https 会用到，网络通讯的安全ssl ，初始化文件的西南西
     * @param storeType   例如 BKS
     * @param storePassword  签证密码
     * @param keyPassword   键值 密码
     *  algorithm   例如 默认X509
     * @param ksInputStream 签证文件的inputStream
     *
     */
    @Override
    public void sslUtilsInit(String storeType, String storePassword, String keyPassword, InputStream ksInputStream)
            throws  KeyStoreException,NoSuchAlgorithmException,CertificateException,IOException,UnrecoverableKeyException {
        KeyStore ks = KeyStore.getInstance(storeType);
        ks.load(ksInputStream, storePassword.toCharArray());
        kmf = KeyManagerFactory.getInstance("X509");
//                KeyManagerFactory kmf = KeyManagerFactory.getInstance("X509");
        kmf.init(ks, keyPassword.toCharArray());
//            TrustManagerFactory tmf = TrustManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
        tmf = TrustManagerFactory.getInstance("X509");
        tmf.init(ks);
    }

    /**
     * 根据sslUtilsInit函数的信息返回SSLContext上下文
     */
    @Override
    public SSLContext sslCreate() throws NoSuchAlgorithmException,KeyManagementException{
            SSLContext sslContext = null;
            sslContext = SSLContext.getInstance("TLS");
            sslContext.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);
            return sslContext;
    }
    /**
     * 根据sslUtilsInit函数的信息返回SSLContext上下文
     */
    @Override
    public SSLContext sslCreate(String prototal) throws NoSuchAlgorithmException,KeyManagementException{
        SSLContext sslContext = null;
        sslContext = SSLContext.getInstance(prototal);
        sslContext.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);
        return sslContext;
    }
}
