package android.sys.framework.all;

import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.audio.IAudioToolsManager;
import android.sys.framework.bytetype.IByteTypeToolsManager;
import android.sys.framework.deviceInfo.IDeviceInfoToolsManager;
import android.sys.framework.display.IDisplayToolsManager;
import android.sys.framework.file.IFileToolsManger;
import android.sys.framework.inputevent.IInputEventToolsManager;
import android.sys.framework.json.IJsonToolsManager;
import android.sys.framework.net.INetToolsManager;
import android.sys.framework.package_manager.IPackageToolsManager;
import android.sys.framework.power.IPowerToolsManager;
import android.sys.framework.property.IPropertyToolsManager;
import android.sys.framework.surface.ISurfaceControlToolsManager;
import android.sys.framework.other.IOtherToolsManager;
import android.sys.framework.utils.IUtilsToolsManager;
import android.sys.framework.window.IWindowToolsManager;

/**
 *  所有者的管理者全部放入到里面
 */
public interface IAllToolsManger extends IActivityToolsManager,IAudioToolsManager,
        IByteTypeToolsManager, IDeviceInfoToolsManager, IDisplayToolsManager, IFileToolsManger,
        IInputEventToolsManager, IJsonToolsManager, INetToolsManager, IPackageToolsManager, IPowerToolsManager, IPropertyToolsManager,
        ISurfaceControlToolsManager, IOtherToolsManager, IUtilsToolsManager, IWindowToolsManager {

}
