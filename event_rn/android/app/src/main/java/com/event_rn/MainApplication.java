package com.event_rn;

import android.app.Application;
import com.tencent.bugly.crashreport.CrashReport;
import com.facebook.react.ReactApplication;
import com.vydia.RNUploader.UploaderReactPackage;
import com.rnfs.RNFSPackage;
import io.github.elyx0.reactnativedocumentpicker.DocumentPickerPackage;
import com.dingle.pay.RNArenaPayPackage;
import com.horcrux.svg.SvgPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.beefe.picker.PickerViewPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.imagepicker.ImagePickerPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {


  private static MainApplication instance;

  public static MainApplication instance() {
    return instance;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    System.out.println("初始化项目");
    SoLoader.init(this, /* native exopackage */ false);

    /* 初始化bugly */
    CrashReport.initCrashReport(getApplicationContext(), "0ad0e2d9dd", true);

  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new UploaderReactPackage(),
            new RNFSPackage(),
            new DocumentPickerPackage(),
            new RNArenaPayPackage(),
            new SvgPackage(),
            new ReactVideoPackage(),
            new RNSoundPackage(),
            new PickerViewPackage(),
            new PickerPackage(),
            new ImagePickerPackage(),
            new RNGestureHandlerPackage(),
              new MyReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };


  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }


}
