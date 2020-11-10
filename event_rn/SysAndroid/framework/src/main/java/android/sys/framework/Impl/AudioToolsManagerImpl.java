package android.sys.framework.Impl;

import android.annotation.TargetApi;
import android.content.Context;
import android.media.AudioManager;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.sys.framework.audio.IAudioToolsManager;
import android.sys.framework.base.AbstractManager;

public class AudioToolsManagerImpl extends AbstractManager implements IAudioToolsManager {

    private  AudioManager audioMa;
    /**
     *  最大系统音量
     */
    @Override
    public void maxSystemVolume() {
        int mSystemMax = audioMa.getStreamMaxVolume(AudioManager.STREAM_SYSTEM);
        int streamType = AudioManager.STREAM_SYSTEM;
        int flag =  AudioManager.FLAG_SHOW_UI;
        setVolume(mSystemMax,streamType,flag);
    }
    /**
     *  最小系统音量
     */
    @RequiresApi(api = Build.VERSION_CODES.P)
    @Override
    public void minSystemVolume() {
        int mSystemMax = audioMa.getStreamMinVolume(AudioManager.STREAM_SYSTEM);
        int streamType = AudioManager.STREAM_SYSTEM;
        int flag =  AudioManager.FLAG_SHOW_UI;
        setVolume(mSystemMax,streamType,flag);
    }
    /**
     *  最大多媒体音量
     */
    @Override
    public void maxMusicVolume() {
        int mSystemMax = audioMa.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        int streamType = AudioManager.STREAM_MUSIC;
        int flag =  AudioManager.FLAG_SHOW_UI;
        setVolume(mSystemMax,streamType,flag);
    }
    /**
     *  最小多媒体音量
     */
    @RequiresApi(api = Build.VERSION_CODES.P)
    @Override
    public void minMusicVolume() {
        int mSystemMax = audioMa.getStreamMinVolume(AudioManager.STREAM_MUSIC);
        int streamType = AudioManager.STREAM_MUSIC;
        int flag =  AudioManager.FLAG_SHOW_UI;
        setVolume(mSystemMax,streamType,flag);
    }

    /**
     * 设置系统的音量，最大值
     * @param value  音量直
     * @param streamType 调节的音量类型
     * @param flag  音量的标记
     */
    @Override
    public void setVolume(int value, int streamType, int flag) {
        audioMa.setStreamVolume(streamType, value, flag);
    }



    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static AudioToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new AudioToolsManagerImpl();
        }
    }
    static {
        AudioToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   AudioToolsManagerImpl  creatSingle(Context context){
        AudioToolsManagerImpl bmi =  AudioToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        bmi.audioMa =(AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private AudioToolsManagerImpl(){
    };

/***********************************************************************************/
}
