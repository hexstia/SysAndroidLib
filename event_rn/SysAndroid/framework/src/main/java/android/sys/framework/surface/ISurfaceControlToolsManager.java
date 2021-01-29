package android.sys.framework.surface;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.os.IBinder;
import android.view.Surface;

import java.lang.reflect.Method;

public interface ISurfaceControlToolsManager {

    void openTransaction();

    void closeTransaction();

    void setDisplayProjection(IBinder displayToken, int orientation, Rect layerStackRect, Rect displayRect);

    void setDisplayLayerStack(IBinder displayToken, int layerStack);

    void setDisplaySurface(IBinder displayToken, Surface surface);

    IBinder createDisplay(String name, boolean secure);

    void destroyDisplay(IBinder displayToken);

    Bitmap nativeScreenShot(int width, int height);
}
