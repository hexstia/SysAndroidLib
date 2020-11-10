package android.sys.framework.base;

import android.content.Context;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class AbstractManager implements Manager {
    private Context context;

    public Context getContext() {
        return context;
    }

    public void setContext(Context context) {
        this.context = context;
    }

    public static AbstractManager getInstance(Context context,String className){
        Class<AbstractManager>  clazz;
        Method creatSingleMethod  =null;
        AbstractManager abstractManager = null;
        try {
            clazz =  (Class<AbstractManager>)Class.forName(className);
            creatSingleMethod = clazz.getDeclaredMethod("creatSingle",Context.class);
            creatSingleMethod.setAccessible(true);
            abstractManager = (AbstractManager)creatSingleMethod.invoke(context);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return abstractManager;
    }

    public static AbstractManager getInstance(Context context,Class classObj){
        Class<AbstractManager>  clazz;
        Method creatSingleMethod  =null;
        AbstractManager abstractManager = null;
        try {
            clazz = classObj;
            creatSingleMethod = clazz.getDeclaredMethod("creatSingle",Context.class);
            creatSingleMethod.setAccessible(true);
            abstractManager = (AbstractManager) (creatSingleMethod.invoke(null,context));
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }

        return abstractManager;
    }

}
