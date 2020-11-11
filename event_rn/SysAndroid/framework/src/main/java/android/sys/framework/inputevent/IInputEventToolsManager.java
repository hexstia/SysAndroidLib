package android.sys.framework.inputevent;

import android.view.InputEvent;

public interface IInputEventToolsManager {

    /**
     * 输入事件 反射的模拟用户的输入事件， 按键， 触控，鼠标 ，滚轮
     * @param inputEvent  MotionEvent,KeyEvent
     * @param mode INJECT_INPUT_EVENT_MODE_ASYNC,
     *             INJECT_INPUT_EVENT_MODE_WAIT_FOR_RESULT,
     *             INJECT_INPUT_EVENT_MODE_WAIT_FOR_FINISH
     * @return
     */
    boolean injectInputEvent(InputEvent inputEvent, int mode);

}
