import Sound from 'react-native-sound';

type callBack = () => void

export default function play(url: string, successCallback?: callBack, faildCallback?: callBack) {

  const whoosh = new Sound(url, undefined, (e: any) => {
    if (e) {
      faildCallback && faildCallback()
      return;
    }
    whoosh.setVolume(1);
    whoosh.setPan(1);

    whoosh.play(() => {
      successCallback && successCallback()
      whoosh.release()
    });
  });
}

