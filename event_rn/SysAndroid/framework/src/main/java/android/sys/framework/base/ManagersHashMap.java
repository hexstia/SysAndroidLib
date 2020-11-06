package android.sys.framework.base;

import java.util.HashMap;

public class ManagersHashMap {
    private HashMap<String,Object> map;
    private ManagersHashMap(HashMap<String,Object> map){
        this.map = map;
    }
    public void getEleManager(String name){
       Object ele =  map.get(name);
       if(ele ==null){
       }
    }
    public void addEleManager(){

    }

}
