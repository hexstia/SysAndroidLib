package android.sys.framework.Impl;

import android.content.Context;
import android.sys.framework.activity.IActivityToolsManager;
import android.sys.framework.base.AbstractManager;
import android.sys.framework.inputevent.IInputEventToolsManager;
import android.view.InputEvent;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class InputEventToolsManagerImpl  extends AbstractManager implements IInputEventToolsManager {

    public static final int INJECT_INPUT_EVENT_MODE_ASYNC = 0;
    public static final int INJECT_INPUT_EVENT_MODE_WAIT_FOR_RESULT = 1;
    public static final int INJECT_INPUT_EVENT_MODE_WAIT_FOR_FINISH = 2;
    private Method injectInputEventMethod = null;
    private Method getInputEventMethod(){
        try {
            if(injectInputEventMethod == null) {
                injectInputEventMethod = getInputManager().getClass().getMethod("injectInputEvent", InputEvent.class, int.class);
            }
        } catch (NoSuchMethodException e) {
            throw new AssertionError(e);
        }
        return injectInputEventMethod;
    }
    /**
     * 输入事件 反射的模拟用户的输入事件， 按键， 触控，鼠标 ，滚轮
     * @param inputEvent  MotionEvent,KeyEvent
     * @param mode INJECT_INPUT_EVENT_MODE_ASYNC,
     *             INJECT_INPUT_EVENT_MODE_WAIT_FOR_RESULT,
     *             INJECT_INPUT_EVENT_MODE_WAIT_FOR_FINISH
     * @return
     */
    @Override
    public boolean injectInputEvent(InputEvent inputEvent, int mode) {
        try {
            return (Boolean) getInputEventMethod().invoke(getInputManager(), inputEvent, mode);
        } catch (InvocationTargetException | IllegalAccessException e) {
            throw new AssertionError(e);
        }
    }

    /***********************************************************************************/
    /***
     * 单例实现方式
     */
    private static class InnerSingleClass{
        private static InputEventToolsManagerImpl INSTANCE ;
        private static void innerInstance(){
            INSTANCE = new InputEventToolsManagerImpl();
        }
    }
    static {
        InputEventToolsManagerImpl.InnerSingleClass.innerInstance();
    }
    public  static   InputEventToolsManagerImpl  creatSingle(Context context){
        InputEventToolsManagerImpl bmi =  InputEventToolsManagerImpl.InnerSingleClass.INSTANCE;
        bmi.setContext(context);
        return bmi;
    }
    /**
     *  单例私有化，不可创建实例
     */
    private InputEventToolsManagerImpl(){};

/***********************************************************************************/
}
