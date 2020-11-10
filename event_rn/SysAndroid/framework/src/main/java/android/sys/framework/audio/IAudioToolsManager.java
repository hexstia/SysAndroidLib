package android.sys.framework.audio;

public interface IAudioToolsManager {

    /**
     *  最大系统音量
     *
     */
        void maxSystemVolume();
    /**
     *  最小系统音量
     */
        void minSystemVolume();
    /**
     *  最大多媒体音量
     */
        void  maxMusicVolume();
    /**
     *  最大多媒体音量
     */
        void  minMusicVolume();

    /**
     * 设置系统的音量，最大值
     * @param value
     * @param streamType
     * @param flag
     */
        void setVolume(int value,int streamType,int flag);


}
