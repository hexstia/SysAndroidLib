//
//  ViewController.h
//  TestMobileSDK
//
//  Created by huateng on 2019/11/19.
//  Copyright © 2019 cyl. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController


@end




/*






 11-21 16:36:07.655 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.655 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.655 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.656 13457 13479 I TAG     : pc[0].pressure  0.43921572
 11-21 16:36:07.656 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.656 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.657 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803676, action=0, pointerCount=1, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100], pc=[android.view.MotionEvent$PointerCoords@19f9314], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.705 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   64   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d0   dc   00   00   00   00   00   00   00   01   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   00   3e   e0   e0   e2   43   ea   00   00   44   57   00   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.710 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.710 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.711 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.711 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.711 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.711 13457 13479 I TAG     : pc[0].pressure  0.43921572
 11-21 16:36:07.711 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.711 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.712 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.712 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.712 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.712 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.712 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803684, action=5, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@539e7bd, android.view.MotionEvent$PointerCoords@77171b2], actionIndex=1, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.750 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d0   e4   00   00   00   05   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   e0   e0   e2   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   01   00   00   04   38   00   00   07   00

 11-21 16:36:07.792 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.792 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.792 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.792 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.792 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.792 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.793 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.793 13457 13479 I TAG     : pc[0].pressure  0.42352945
 11-21 16:36:07.793 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.793 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.793 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.793 13457 13479 I TAG     : pc[1].pressure  0.37647063
 11-21 16:36:07.793 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.793 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.794 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.794 13457 13479 I TAG     : pc[2].pressure  0.38431376
 11-21 16:36:07.794 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.794 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.795 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803700, action=5, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@da242b9, android.view.MotionEvent$PointerCoords@280f6fe, android.view.MotionEvent$PointerCoords@29ebe5f], actionIndex=2, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.828 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d0   f4   00   00   00   05   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   d8   d8   da   43   ea   00   00   44   57   00   00   00   00   00   00   3e   c0   c0   c2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   c4   c4   c6   43   9b   80   00   44   97   80   00   00   00   00   02   00   00   04   38   00   00   07   00
 
 

 11-21 16:36:07.912 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803753, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@3fc4c29, android.view.MotionEvent$PointerCoords@2571bae, android.view.MotionEvent$PointerCoords@19fd4f], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.919 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   29   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   e6   e6   e8   43   ea   00   00   44   57   00   00   00   00   00   00   3e   cc   cc   ce   44   3b   40   00   44   32   80   00   00   00   00   00   3e   c4   c4   c6   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.921 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.921 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.921 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.921 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.921 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.921 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.921 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.921 13457 13479 I TAG     : pc[0].pressure  0.45098042
 11-21 16:36:07.922 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[1].pressure  0.4039216
 11-21 16:36:07.922 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[2].pressure  0.38823533
 11-21 16:36:07.922 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.922 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.923 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803762, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@591cdc, android.view.MotionEvent$PointerCoords@ae481e5, android.view.MotionEvent$PointerCoords@efd44ba], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.929 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   32   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   e6   e6   e8   43   ea   00   00   44   57   00   00   00   00   00   00   3e   ce   ce   d0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   c6   c6   c8   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.932 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.932 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.932 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.932 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.932 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.932 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.932 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[0].pressure  0.454902
 11-21 16:36:07.933 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.933 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[2].pressure  0.3921569
 11-21 16:36:07.933 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.933 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.934 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803769, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ea31f6b, android.view.MotionEvent$PointerCoords@6c92ac8, android.view.MotionEvent$PointerCoords@d605761], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.939 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   39   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   e8   e8   ea   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   c8   c8   ca   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.943 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.943 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.943 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.943 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.944 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.944 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.944 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:07.944 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[1].pressure  0.4039216
 11-21 16:36:07.944 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.944 13457 13479 I TAG     : pc[2].pressure  0.40000004
 11-21 16:36:07.944 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.945 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.945 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803779, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@2aaf286, android.view.MotionEvent$PointerCoords@2524747, android.view.MotionEvent$PointerCoords@6aa2b74], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.950 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   43   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   ce   ce   d0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   cc   cc   ce   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.954 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.955 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.955 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.955 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.955 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.955 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.955 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:07.955 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.955 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.955 13457 13479 I TAG     : pc[2].pressure  0.4039216
 11-21 16:36:07.956 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.956 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.956 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803787, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@f6a089d, android.view.MotionEvent$PointerCoords@533b112, android.view.MotionEvent$PointerCoords@ce210e3], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.961 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   4b   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   ce   ce   d0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.963 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.963 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.963 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.963 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.963 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.963 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.964 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:07.964 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.964 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[2].pressure  0.40784317
 11-21 16:36:07.964 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.964 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.965 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803794, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ff88ae0, android.view.MotionEvent$PointerCoords@639199, android.view.MotionEvent$PointerCoords@617cc5e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.968 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   52   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d0   d0   d2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.970 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.970 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.970 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.970 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.970 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.970 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.970 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.970 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:07.970 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.970 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.970 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.971 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.971 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.971 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.971 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.971 13457 13479 I TAG     : pc[2].pressure  0.4156863
 11-21 16:36:07.971 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.971 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.971 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803803, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@71ad83f, android.view.MotionEvent$PointerCoords@40b750c, android.view.MotionEvent$PointerCoords@9d2ae55], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.975 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   5b   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d4   d4   d6   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.978 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.978 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.978 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.978 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.978 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.978 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.978 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:07.979 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.979 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[2].pressure  0.41960788
 11-21 16:36:07.979 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.979 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.979 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803812, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@a90506a, android.view.MotionEvent$PointerCoords@3eeb95b, android.view.MotionEvent$PointerCoords@80d5f8], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.983 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   64   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d6   d6   d8   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.987 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.987 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.987 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.987 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.987 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.987 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.987 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.987 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:07.987 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.987 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.987 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.987 13457 13479 I TAG     : pc[1].pressure  0.41176474
 11-21 16:36:07.988 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.988 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.988 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.988 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:07.988 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.988 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.988 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803819, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ddcdad1, android.view.MotionEvent$PointerCoords@5b0936, android.view.MotionEvent$PointerCoords@9559037], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.991 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   6b   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d2   d2   d4   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:07.995 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:07.995 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:07.995 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:07.995 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:07.995 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:07.995 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:07.995 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:07.995 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:07.995 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:07.995 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:07.995 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:07.995 13457 13479 I TAG     : pc[1].pressure  0.40784317
 11-21 16:36:07.996 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:07.996 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:07.996 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:07.996 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:07.996 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:07.996 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:07.996 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803829, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ce959a4, android.view.MotionEvent$PointerCoords@183530d, android.view.MotionEvent$PointerCoords@14682c2], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:07.999 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   75   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d0   d0   d2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.001 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.001 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.001 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.001 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.001 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.001 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.001 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.002 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[1].pressure  0.41176474
 11-21 16:36:08.002 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.002 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.002 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.002 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803839, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ae8f8d3, android.view.MotionEvent$PointerCoords@7346c10, android.view.MotionEvent$PointerCoords@e9f1309], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.005 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   7f   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d2   d2   d4   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.009 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.009 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.009 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.009 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.009 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.009 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.009 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.009 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.009 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.009 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.009 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.009 13457 13479 I TAG     : pc[1].pressure  0.41176474
 11-21 16:36:08.009 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.009 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.010 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.010 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.010 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.010 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.010 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803856, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@37e090e, android.view.MotionEvent$PointerCoords@2404f2f, android.view.MotionEvent$PointerCoords@adc393c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.013 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   90   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d2   d2   d4   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.015 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.015 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.015 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.015 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.015 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.015 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.015 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.015 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.016 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[1].pressure  0.41176474
 11-21 16:36:08.016 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.016 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.016 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.016 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803873, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@99cd6c5, android.view.MotionEvent$PointerCoords@295a81a, android.view.MotionEvent$PointerCoords@10caf4b], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.020 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   a1   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d2   d2   d4   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.023 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.023 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.023 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.023 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.023 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.023 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.023 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.023 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[1].pressure  0.41176474
 11-21 16:36:08.023 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.023 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.024 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.024 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.024 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.024 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803889, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ed1ad28, android.view.MotionEvent$PointerCoords@6f91a41, android.view.MotionEvent$PointerCoords@d562be6], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.027 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   b1   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d2   d2   d4   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.029 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.029 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.029 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.029 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.029 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.029 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.029 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.029 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[1].pressure  0.4156863
 11-21 16:36:08.029 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.029 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.030 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.030 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.030 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803906, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@8f4f527, android.view.MotionEvent$PointerCoords@62873d4, android.view.MotionEvent$PointerCoords@c7c197d], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.033 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   c2   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d4   d4   d6   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.036 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.036 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.036 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.036 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.036 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.036 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.036 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.036 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.036 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[1].pressure  0.4156863
 11-21 16:36:08.037 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[2].pressure  0.4431373
 11-21 16:36:08.037 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.037 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.037 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803923, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@4492072, android.view.MotionEvent$PointerCoords@531bcc3, android.view.MotionEvent$PointerCoords@f82f940], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.042 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   d3   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d4   d4   d6   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e2   e2   e4   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.044 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.044 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.044 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.044 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.044 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.044 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.044 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.044 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[1].pressure  0.4156863
 11-21 16:36:08.044 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.044 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.045 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.045 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.045 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.045 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803939, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@a35d079, android.view.MotionEvent$PointerCoords@504d1be, android.view.MotionEvent$PointerCoords@1e9621f], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.048 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   e3   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d4   d4   d6   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.052 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.052 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.052 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.052 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.052 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.052 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.052 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.052 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[1].pressure  0.4156863
 11-21 16:36:08.052 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.052 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.053 13457 13479 I TAG     : pc[2].pressure  0.4431373
 11-21 16:36:08.053 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.053 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.053 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803956, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@f3e696c, android.view.MotionEvent$PointerCoords@739fb35, android.view.MotionEvent$PointerCoords@e384bca], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.056 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d1   f4   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d4   d4   d6   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e2   e2   e4   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.058 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.058 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.058 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.058 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.058 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.058 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.058 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.058 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.058 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.059 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.059 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.059 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.059 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803973, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@d4c013b, android.view.MotionEvent$PointerCoords@5eb058, android.view.MotionEvent$PointerCoords@e1c15b1], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.062 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   05   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.064 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.064 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.064 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.064 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.064 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.064 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.064 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.064 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.064 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.064 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.065 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.065 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.065 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6803989, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@8775a96, android.view.MotionEvent$PointerCoords@e6f7617, android.view.MotionEvent$PointerCoords@83a7a04], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.068 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   15   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.069 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.069 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.069 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.069 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.069 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.069 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.069 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.069 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.069 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.069 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.070 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.070 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.070 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.070 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804006, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@52b5bed, android.view.MotionEvent$PointerCoords@fc68a22, android.view.MotionEvent$PointerCoords@deb5cb3], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.073 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   26   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.077 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.077 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.077 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.077 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.077 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.077 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.077 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.078 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.078 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.078 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.078 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.078 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804023, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@8e73270, android.view.MotionEvent$PointerCoords@e6ec9e9, android.view.MotionEvent$PointerCoords@9e7266e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.082 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   37   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.084 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.084 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.084 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.084 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.084 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.084 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.084 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.084 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.085 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.085 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.085 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.085 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.085 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804039, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@c35110f, android.view.MotionEvent$PointerCoords@e65059c, android.view.MotionEvent$PointerCoords@b611ba5], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.089 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   47   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.091 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.091 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.091 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.091 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.091 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.091 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.091 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.091 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.091 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.091 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.092 13457 13479 I TAG     : pc[2].pressure  0.43921572
 11-21 16:36:08.092 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.092 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.092 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804056, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@5633b7a, android.view.MotionEvent$PointerCoords@1bbaf2b, android.view.MotionEvent$PointerCoords@28adf88], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.095 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   58   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   e0   e0   e2   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.098 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.098 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.098 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.098 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.098 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.098 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.098 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.098 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[1].pressure  0.41960788
 11-21 16:36:08.098 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.098 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.098 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.099 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804073, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@6ccd21, android.view.MotionEvent$PointerCoords@d599546, android.view.MotionEvent$PointerCoords@4c41307], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.102 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   69   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d6   d6   d8   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.103 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.103 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.103 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.103 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.103 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.103 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.103 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.104 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.104 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.104 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.104 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.104 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804089, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@3b26c34, android.view.MotionEvent$PointerCoords@4281a5d, android.view.MotionEvent$PointerCoords@e09bfd2], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.107 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   79   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.111 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.111 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.111 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.111 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.111 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.111 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.111 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.111 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.112 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.112 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.112 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.112 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.112 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804106, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@104d8a3, android.view.MotionEvent$PointerCoords@a2417a0, android.view.MotionEvent$PointerCoords@650ff59], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.116 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   8a   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.119 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.119 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.120 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.120 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.120 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.120 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.120 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.120 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.120 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.120 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.120 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.121 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804123, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@620071e, android.view.MotionEvent$PointerCoords@d025bff, android.view.MotionEvent$PointerCoords@8430dcc], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.127 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   9b   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.130 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.130 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.130 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.130 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.131 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.131 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.131 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.131 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.131 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.131 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.131 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.131 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804139, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@a893815, android.view.MotionEvent$PointerCoords@c1772a, android.view.MotionEvent$PointerCoords@92ab91b], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.135 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   ab   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.138 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.138 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.138 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.138 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.138 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.138 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.138 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.139 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.139 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.139 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.139 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.139 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804156, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@1793ab8, android.view.MotionEvent$PointerCoords@2d24091, android.view.MotionEvent$PointerCoords@457dbf6], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.142 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   bc   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.144 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.144 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.144 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.144 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.144 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.144 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.145 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.145 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.145 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.145 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.145 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.145 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804173, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@4b1cbf7, android.view.MotionEvent$PointerCoords@3e34a64, android.view.MotionEvent$PointerCoords@5c954cd], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.148 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   cd   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.155 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.155 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.155 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.155 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.155 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.155 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.155 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.155 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.155 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.155 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.155 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.156 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.156 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.156 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.156 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.156 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.156 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.156 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.156 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804189, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@21dc182, android.view.MotionEvent$PointerCoords@42d3093, android.view.MotionEvent$PointerCoords@bca8d0], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.159 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   dd   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.172 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.172 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.172 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.172 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.172 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.172 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.172 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.173 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.173 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:08.173 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.173 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.173 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804206, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ca370c9, android.view.MotionEvent$PointerCoords@26a73ce, android.view.MotionEvent$PointerCoords@5f042ef], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.178 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   ee   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.191 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.191 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.191 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.191 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.191 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.192 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.192 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.192 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.192 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.192 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.192 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.193 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804223, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@f8b81fc, android.view.MotionEvent$PointerCoords@4e95085, android.view.MotionEvent$PointerCoords@9bdfeda], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.196 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d2   ff   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.209 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.209 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.209 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.209 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.209 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.209 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.209 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.209 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.209 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.209 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.209 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.209 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.209 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.210 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.210 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.210 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.210 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.210 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.210 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804239, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@281f0b, android.view.MotionEvent$PointerCoords@80cc1e8, android.view.MotionEvent$PointerCoords@1f37001], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.214 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   0f   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.223 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.223 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.223 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.223 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.223 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.223 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.223 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.223 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.223 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.223 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.223 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.223 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:08.223 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.224 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.224 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.224 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.224 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.224 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.224 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804256, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@28d2ea6, android.view.MotionEvent$PointerCoords@4b7a0e7, android.view.MotionEvent$PointerCoords@ee01494], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.234 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   20   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.238 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.238 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.238 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.238 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.238 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.238 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.238 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.238 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.238 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.238 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.239 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.239 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.239 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.240 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804273, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@a260b3d, android.view.MotionEvent$PointerCoords@7cd8f32, android.view.MotionEvent$PointerCoords@6d36483], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.245 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   31   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.255 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.256 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.256 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.256 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.256 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.256 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.256 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.256 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.256 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.256 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.256 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.256 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.256 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.256 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.257 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.257 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.257 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.257 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.257 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804289, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@f3e600, android.view.MotionEvent$PointerCoords@bed1e39, android.view.MotionEvent$PointerCoords@c416c7e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.263 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   41   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.271 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.271 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.271 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.271 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.271 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.271 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.271 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.271 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.271 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.271 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.271 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.271 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.271 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.272 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.272 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.272 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.272 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.272 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.272 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804306, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@e5dc5df, android.view.MotionEvent$PointerCoords@67864f5, android.view.MotionEvent$PointerCoords@502e0fb], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.278 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   52   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.288 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.288 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.288 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.288 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.288 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.288 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.288 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.288 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.288 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.288 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.288 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.289 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.289 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.289 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.289 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.289 13457 13479 I TAG     : pc[2].pressure  0.41960788
 11-21 16:36:08.289 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.289 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.289 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804323, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@fe87518, android.view.MotionEvent$PointerCoords@2375b71, android.view.MotionEvent$PointerCoords@9d48d56], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.295 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   63   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d6   d6   d8   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.306 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.306 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.306 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.306 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.306 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.306 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.306 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.306 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.306 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.306 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.306 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.306 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.307 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.307 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.307 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.307 13457 13479 I TAG     : pc[2].pressure  0.21176472
 11-21 16:36:08.307 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.307 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.307 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804336, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@91491d7, android.view.MotionEvent$PointerCoords@57bcac4, android.view.MotionEvent$PointerCoords@5153dad], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.315 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   70   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   58   d8   da   43   9b   80   00   44   97   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.321 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.321 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.321 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.321 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.321 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.321 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.321 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.322 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.322 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.322 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.323 13457 13479 I TAG     : pc[2].pressure  0.21176472
 11-21 16:36:08.323 13457 13479 I TAG     : pc[2].x  311.0
 11-21 16:36:08.323 13457 13479 I TAG     : pc[2].y  1212.0
 11-21 16:36:08.323 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804344, action=6, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@3a428e2, android.view.MotionEvent$PointerCoords@2267473, android.view.MotionEvent$PointerCoords@5cccf30], actionIndex=2, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.332 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   78   00   00   00   06   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   3e   58   d8   da   43   9b   80   00   44   97   80   00   00   00   00   02   00   00   04   38   00   00   07   00
 11-21 16:36:08.337 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.337 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.337 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.337 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.337 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.337 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.337 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.337 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.338 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.338 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.338 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.338 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.338 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804356, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@e7507a9, android.view.MotionEvent$PointerCoords@5dff12e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.344 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   84   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.349 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.349 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.349 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.349 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.350 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.350 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.350 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.350 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.350 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.350 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.350 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.350 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.351 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804373, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@369e4cf, android.view.MotionEvent$PointerCoords@ee7ae5c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.357 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   95   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.362 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.362 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.362 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.362 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.362 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.363 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.363 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.363 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.363 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.363 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.363 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.363 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.363 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804389, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@6ed7565, android.view.MotionEvent$PointerCoords@dfdf23a], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.370 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   a5   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.375 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.375 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.376 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.376 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.376 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.376 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.376 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.376 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.376 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.376 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.376 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.376 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.377 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804406, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@7c9feeb, android.view.MotionEvent$PointerCoords@16f5448], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.383 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   b6   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.390 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.391 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.391 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.391 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.391 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.391 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.391 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.391 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.391 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.391 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.391 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.391 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.392 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804423, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@fc502e1, android.view.MotionEvent$PointerCoords@8c8f806], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.396 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   c7   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.404 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.404 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.404 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.404 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.404 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.405 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:08.405 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.405 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.405 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.405 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.405 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.405 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.406 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804439, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@3c79ec7, android.view.MotionEvent$PointerCoords@3496cf4], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.410 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   d7   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.420 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.420 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.420 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.420 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.420 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.420 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:08.420 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.420 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.420 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.420 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.420 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.420 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.421 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804456, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@e2dec1d, android.view.MotionEvent$PointerCoords@2ec8e92], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.426 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   e8   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.436 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.436 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.437 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.437 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.437 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.437 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.437 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.437 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.437 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.437 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.437 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.437 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.439 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804473, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@9156063, android.view.MotionEvent$PointerCoords@10a6460], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.443 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d3   f9   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.453 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.453 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.453 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.453 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.453 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.453 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:08.454 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.454 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.454 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.454 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.454 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.454 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.455 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804489, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@e422d19, android.view.MotionEvent$PointerCoords@64101de], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.459 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   09   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.470 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.470 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.470 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.470 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.470 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.470 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.470 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.470 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.470 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.470 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.470 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.470 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.471 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804506, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@7f39fbf, android.view.MotionEvent$PointerCoords@a21668c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.476 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   1a   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.487 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.487 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.487 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.487 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.487 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.487 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.487 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.488 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.488 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.488 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.488 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.488 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.488 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804523, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@9bf81d5, android.view.MotionEvent$PointerCoords@fd75dea], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.494 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   2b   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.504 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.505 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.505 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.505 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.505 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.505 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.505 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.505 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.505 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.505 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.505 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.506 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.506 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804539, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@a4c78db, android.view.MotionEvent$PointerCoords@3c45f78], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.512 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   3b   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.521 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.521 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.521 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.521 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.521 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.521 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:08.521 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.521 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.521 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.522 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.522 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.522 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.522 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804556, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@e836651, android.view.MotionEvent$PointerCoords@ac56eb6], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.529 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   4c   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.539 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.539 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.539 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.539 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.540 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.540 13457 13479 I TAG     : pc[0].pressure  0.45882356
 11-21 16:36:08.540 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.540 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.540 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.540 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.541 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.541 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.541 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804573, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@48fc7b7, android.view.MotionEvent$PointerCoords@e9bfb24], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.547 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   5d   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ea   ea   ec   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.557 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.557 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.557 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.557 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.558 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.558 13457 13479 I TAG     : pc[0].pressure  0.454902
 11-21 16:36:08.558 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.558 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.558 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.558 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.558 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.558 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.559 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804589, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@c7168d, android.view.MotionEvent$PointerCoords@bb1c042], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.564 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   6d   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   e8   e8   ea   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.575 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.575 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.575 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.575 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.575 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.575 13457 13479 I TAG     : pc[0].pressure  0.454902
 11-21 16:36:08.575 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.575 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.575 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.575 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:08.575 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.575 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.576 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804606, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@84f2853, android.view.MotionEvent$PointerCoords@b2fa590], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.582 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   7e   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   e8   e8   ea   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.590 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.590 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.590 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.590 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.590 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.590 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:08.590 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.590 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.590 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.590 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.590 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.590 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.591 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804623, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@51b8e89, android.view.MotionEvent$PointerCoords@91f9e8e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.595 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   8f   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.603 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.603 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.603 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.603 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.603 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.603 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.603 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.603 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.603 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.604 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.604 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.604 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.604 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804639, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@499f6af, android.view.MotionEvent$PointerCoords@9118abc], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.609 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   9f   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.620 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.620 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.620 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.620 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.620 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.620 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:08.620 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.621 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.621 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.621 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.621 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.621 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.622 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804656, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@e258a45, android.view.MotionEvent$PointerCoords@c7b159a], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.626 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   b0   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.637 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.637 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.637 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.637 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.638 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.638 13457 13479 I TAG     : pc[0].pressure  0.47058827
 11-21 16:36:08.638 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.638 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.638 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.638 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.638 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.638 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.638 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804673, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@194ecb, android.view.MotionEvent$PointerCoords@cca96a8], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.644 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   c1   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f0   f0   f2   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.653 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.653 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.653 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.653 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.653 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.654 13457 13479 I TAG     : pc[0].pressure  0.47058827
 11-21 16:36:08.654 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.654 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.654 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.654 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.654 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.654 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.654 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804689, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@a1985c1, android.view.MotionEvent$PointerCoords@7e4f166], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.661 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   d1   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f0   f0   f2   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.671 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.671 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.671 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.671 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.671 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.671 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:08.671 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.672 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.672 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.672 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.672 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.672 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.672 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804706, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@8ec0ca7, android.view.MotionEvent$PointerCoords@8867554], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.679 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   e2   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.688 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.688 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.688 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.688 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.688 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.688 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:08.688 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.689 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.689 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.689 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.689 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.689 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.690 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804723, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@bf7bcfd, android.view.MotionEvent$PointerCoords@cbebdf2], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.704 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d4   f3   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.710 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.710 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.710 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.710 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.710 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.710 13457 13479 I TAG     : pc[0].pressure  0.4784314
 11-21 16:36:08.710 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.710 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.710 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.710 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.710 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.711 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.711 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804739, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@642cc43, android.view.MotionEvent$PointerCoords@37f92c0], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.719 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   03   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f4   f4   f6   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.726 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.726 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.726 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.726 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.726 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.726 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.726 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.726 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.726 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.727 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.727 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.727 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.728 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804754, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@c882bf9, android.view.MotionEvent$PointerCoords@ef6c73e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.736 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   12   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.741 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.741 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.741 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.741 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.742 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.742 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:08.742 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.742 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.742 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.742 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.742 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.742 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.742 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804758, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@7bbe99f, android.view.MotionEvent$PointerCoords@c2b1aec], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.749 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   16   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.753 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.753 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.753 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.753 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.753 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.753 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.753 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.753 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:08.753 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.753 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.753 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.754 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.754 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.754 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.754 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.754 13457 13479 I TAG     : pc[2].pressure  0.4156863
 11-21 16:36:08.754 13457 13479 I TAG     : pc[2].x  347.0
 11-21 16:36:08.754 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.754 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804758, action=5, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@f168eb5, android.view.MotionEvent$PointerCoords@114194a, android.view.MotionEvent$PointerCoords@e7f80bb], actionIndex=2, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.760 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   16   00   00   00   05   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d4   d4   d6   43   ad   80   00   44   92   60   00   00   00   00   02   00   00   04   38   00   00   07   00
 11-21 16:36:08.764 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.765 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.765 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.765 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.765 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.765 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.765 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[0].pressure  0.49411768
 11-21 16:36:08.765 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.765 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[2].pressure  0.4156863
 11-21 16:36:08.765 13457 13479 I TAG     : pc[2].x  347.0
 11-21 16:36:08.765 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.765 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804773, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@124f9d8, android.view.MotionEvent$PointerCoords@5ee6131, android.view.MotionEvent$PointerCoords@5028016], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.770 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   25   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   fc   fc   fe   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d4   d4   d6   43   ad   80   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.773 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.774 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.774 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.774 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.774 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.774 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.774 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.774 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.774 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[2].pressure  0.41176474
 11-21 16:36:08.774 13457 13479 I TAG     : pc[2].x  347.0
 11-21 16:36:08.774 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.775 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804806, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@c1b6d97, android.view.MotionEvent$PointerCoords@cdbdb84, android.view.MotionEvent$PointerCoords@296df6d], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.780 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   46   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d2   d2   d4   43   ad   80   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.787 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.787 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.787 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.787 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.787 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.787 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.787 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.787 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.787 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.787 13457 13479 I TAG     : pc[2].pressure  0.42352945
 11-21 16:36:08.787 13457 13479 I TAG     : pc[2].x  345.1309
 11-21 16:36:08.787 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.788 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804823, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@d9e87a2, android.view.MotionEvent$PointerCoords@31f4c33, android.view.MotionEvent$PointerCoords@ffd2bf0], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.792 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   57   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d8   d8   da   43   ac   90   c1   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.804 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.804 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.804 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.804 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.804 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.804 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.804 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.804 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.805 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.805 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.805 13457 13479 I TAG     : pc[2].pressure  0.427451
 11-21 16:36:08.805 13457 13479 I TAG     : pc[2].x  343.13498
 11-21 16:36:08.805 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.805 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804839, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@dcf0569, android.view.MotionEvent$PointerCoords@d017bee, android.view.MotionEvent$PointerCoords@578788f], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.811 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   67   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   da   da   dc   43   ab   91   47   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.821 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.821 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.821 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.821 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.821 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.821 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.821 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.821 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.821 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.821 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:08.821 13457 13479 I TAG     : pc[2].x  341.1053
 11-21 16:36:08.822 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.822 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804856, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@6a1171c, android.view.MotionEvent$PointerCoords@3498f25, android.view.MotionEvent$PointerCoords@b8d68fa], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.827 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   78   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   aa   8d   7a   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.837 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.837 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.837 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.837 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.837 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.837 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.837 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.837 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.837 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.837 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.837 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.838 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804873, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@c8e0eab, android.view.MotionEvent$PointerCoords@4368908, android.view.MotionEvent$PointerCoords@d28f8a1], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.843 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   89   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.853 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.853 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.853 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.853 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.853 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.853 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.854 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.854 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.854 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.854 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.854 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.854 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804889, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@3b91ac6, android.view.MotionEvent$PointerCoords@71cea87, android.view.MotionEvent$PointerCoords@22f2db4], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.863 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   99   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.870 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.870 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.870 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.870 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.870 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.870 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.870 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.871 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.871 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.871 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.871 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.871 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804906, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@b3b7ddd, android.view.MotionEvent$PointerCoords@e9c1d52, android.view.MotionEvent$PointerCoords@8d3a823], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.876 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   aa   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.889 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.889 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.889 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.889 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.889 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.889 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.889 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.889 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.889 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.889 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.890 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.890 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.890 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804923, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@d6b7120, android.view.MotionEvent$PointerCoords@1f71ad9, android.view.MotionEvent$PointerCoords@d3abc9e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.895 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   bb   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.906 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.906 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.906 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.906 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.906 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.906 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.906 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.906 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.906 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.906 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.906 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.907 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804939, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@7aea37f, android.view.MotionEvent$PointerCoords@e667f4c, android.view.MotionEvent$PointerCoords@d358b95], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.911 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   cb   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.920 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.920 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.920 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.920 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.921 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.921 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.921 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.921 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.921 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.921 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.921 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.922 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804956, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@a9204aa, android.view.MotionEvent$PointerCoords@313f89b, android.view.MotionEvent$PointerCoords@8224438], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.927 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   dc   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.936 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.936 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.936 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.936 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.936 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.937 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.937 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.937 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:08.937 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.937 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.937 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.937 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804973, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@2b04c11, android.view.MotionEvent$PointerCoords@263c176, android.view.MotionEvent$PointerCoords@af8377], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.942 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   ed   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.953 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.953 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.953 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.953 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.953 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.953 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.953 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.953 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.953 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.953 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.953 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.954 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.954 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6804989, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@9d36be4, android.view.MotionEvent$PointerCoords@3c984d, android.view.MotionEvent$PointerCoords@8c27f02], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.959 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d5   fd   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.970 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.970 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.970 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.970 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.970 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.970 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.970 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:08.970 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.970 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[2].pressure  0.43529415
 11-21 16:36:08.970 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.970 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.970 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805006, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@b0ee013, android.view.MotionEvent$PointerCoords@f4d6250, android.view.MotionEvent$PointerCoords@1c76c49], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.976 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   0e   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   de   de   e0   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:08.987 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:08.987 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:08.987 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:08.987 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:08.987 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:08.987 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:08.987 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[0].pressure  0.48235297
 11-21 16:36:08.987 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:08.987 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:08.987 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:08.987 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:08.988 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805023, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@e5d894e, android.view.MotionEvent$PointerCoords@dfd6a6f, android.view.MotionEvent$PointerCoords@c2e537c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:08.994 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   1f   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f6   f6   f8   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.007 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.007 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.007 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.007 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.007 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.007 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.007 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:09.007 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.007 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:09.007 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.007 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.008 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805039, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@b118405, android.view.MotionEvent$PointerCoords@d8cec5a, android.view.MotionEvent$PointerCoords@ca03e8b], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.016 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   2f   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.021 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.021 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.021 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.021 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.022 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.022 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.022 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:09.022 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.022 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:09.022 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.022 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.023 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805056, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@dcb2b68, android.view.MotionEvent$PointerCoords@12b5b81, android.view.MotionEvent$PointerCoords@c1d7426], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.030 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   40   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.037 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.037 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.037 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.037 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.037 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.037 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.037 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[0].pressure  0.4901961
 11-21 16:36:09.037 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[1].pressure  0.43921572
 11-21 16:36:09.037 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[2].pressure  0.43137258
 11-21 16:36:09.037 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.037 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.038 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805073, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@d523867, android.view.MotionEvent$PointerCoords@fdb9614, android.view.MotionEvent$PointerCoords@fb12ebd], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.043 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   51   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   fa   fa   fc   43   ea   00   00   44   57   00   00   00   00   00   00   3e   e0   e0   e2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   dc   dc   de   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.053 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.053 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.053 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.053 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.053 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.053 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.053 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[0].pressure  0.4901961
 11-21 16:36:09.053 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[1].pressure  0.43921572
 11-21 16:36:09.053 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[2].pressure  0.4156863
 11-21 16:36:09.053 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.053 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.054 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805089, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@ddcacb2, android.view.MotionEvent$PointerCoords@73ff403, android.view.MotionEvent$PointerCoords@fe5ff80], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.060 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   61   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   fa   fa   fc   43   ea   00   00   44   57   00   00   00   00   00   00   3e   e0   e0   e2   44   3b   40   00   44   32   80   00   00   00   00   00   3e   d4   d4   d6   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.070 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.070 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.070 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.070 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.070 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.070 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.070 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:09.070 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.070 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[2].pressure  0.19215688
 11-21 16:36:09.070 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.070 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.071 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805106, action=2, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@5c6f9b9, android.view.MotionEvent$PointerCoords@3e4e1fe, android.view.MotionEvent$PointerCoords@dc3cd5f], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.078 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   72   00   00   00   02   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   44   c4   c6   43   aa   00   00   44   92   60   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.082 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.082 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.082 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.082 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.082 13457 13479 I TAG     : pp[2].id  2
 11-21 16:36:09.082 13457 13479 I TAG     : pp[2].toolType  1
 11-21 16:36:09.082 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[0].pressure  0.48235297
 11-21 16:36:09.082 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.082 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[2].size  0.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[2].pressure  0.19215688
 11-21 16:36:09.082 13457 13479 I TAG     : pc[2].x  340.0
 11-21 16:36:09.082 13457 13479 I TAG     : pc[2].y  1171.0
 11-21 16:36:09.083 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805112, action=6, pointerCount=3, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101, android.view.MotionEvent$PointerProperties@102], pc=[android.view.MotionEvent$PointerCoords@b6b93ac, android.view.MotionEvent$PointerCoords@6d47875, android.view.MotionEvent$PointerCoords@4a9200a], actionIndex=2, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.088 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   94   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   78   00   00   00   06   00   00   00   03   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   02   00   00   00   01   00   00   00   00   3e   f6   f6   f8   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   3e   44   c4   c6   43   aa   00   00   44   92   60   00   00   00   00   02   00   00   04   38   00   00   07   00
 11-21 16:36:09.092 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.092 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.092 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.092 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.092 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.092 13457 13479 I TAG     : pc[0].pressure  0.48627454
 11-21 16:36:09.092 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.092 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.092 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.092 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.092 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.092 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.093 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805123, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@581e07b, android.view.MotionEvent$PointerCoords@4d43e98], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.096 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   83   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f8   f8   fa   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.103 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.103 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.103 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.103 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.103 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.103 13457 13479 I TAG     : pc[0].pressure  0.4784314
 11-21 16:36:09.103 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.103 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.103 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.103 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.103 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.104 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.104 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805139, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@b0126f1, android.view.MotionEvent$PointerCoords@8c132d6], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.108 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   93   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f4   f4   f6   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.120 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.120 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.120 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.120 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.120 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.120 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:09.120 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.120 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.120 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.120 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.120 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.120 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.120 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805156, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@f440957, android.view.MotionEvent$PointerCoords@b1aac44], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.124 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   a4   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.137 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.137 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.137 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.137 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.137 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.137 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:09.137 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.137 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.137 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.137 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.137 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.137 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.137 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805173, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@b70412d, android.view.MotionEvent$PointerCoords@875a662], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.141 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   b5   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.154 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.154 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.154 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.154 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.154 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.154 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:09.154 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.154 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.154 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.154 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.154 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.154 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.155 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805189, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@495e3f3, android.view.MotionEvent$PointerCoords@3848b0], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.159 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   c5   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.170 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.170 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.170 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.170 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.170 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.170 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:09.170 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.170 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.170 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.170 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.170 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.170 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.171 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805206, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@63cc329, android.view.MotionEvent$PointerCoords@60bc6ae], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.175 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   d6   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.186 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.186 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.186 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.186 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.186 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.186 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.186 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.186 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.186 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.186 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.186 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.186 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.187 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805223, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@220cc4f, android.view.MotionEvent$PointerCoords@a513fdc], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.191 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   e7   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.202 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.202 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.202 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.202 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.203 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.203 13457 13479 I TAG     : pc[0].pressure  0.47450984
 11-21 16:36:09.203 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.203 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.203 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.203 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.203 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.203 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.203 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805239, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@63568e5, android.view.MotionEvent$PointerCoords@d19fba], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.208 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d6   f7   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   f2   f2   f4   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.220 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.220 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.220 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.220 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.220 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.220 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.220 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.220 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.220 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.220 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.220 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.220 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.220 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805256, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@bc7de6b, android.view.MotionEvent$PointerCoords@ba07dc8], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.226 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   08   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.239 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.239 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.239 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.239 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.239 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.239 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.239 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.239 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.239 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.239 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.240 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.240 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.240 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805273, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@a58ae61, android.view.MotionEvent$PointerCoords@ce9fd86], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.248 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   19   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.253 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.253 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.253 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.253 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.253 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.253 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.253 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.253 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.253 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.253 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.253 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.253 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.254 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805289, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@683f647, android.view.MotionEvent$PointerCoords@d23ae74], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.258 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   29   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.273 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.273 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.273 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.273 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.274 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.274 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.274 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.274 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.274 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.274 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.274 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.274 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.274 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805306, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@910cf9d, android.view.MotionEvent$PointerCoords@bd86c12], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.284 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   3a   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.288 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.288 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.288 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.288 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.288 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.288 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.288 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.288 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.288 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.288 13457 13479 I TAG     : pc[1].pressure  0.43529415
 11-21 16:36:09.288 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.288 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.289 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805323, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@3ffafe3, android.view.MotionEvent$PointerCoords@8073de0], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.294 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   4b   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   de   de   e0   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.302 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.302 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.302 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.302 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.303 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.303 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.303 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.303 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.303 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.303 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.303 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.303 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.303 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805339, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@b2fc899, android.view.MotionEvent$PointerCoords@1cd375e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.307 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   5b   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.319 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.319 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.319 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.319 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.320 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.320 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.320 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.320 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.320 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.320 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.320 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.320 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.320 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805356, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@bf3673f, android.view.MotionEvent$PointerCoords@9d2580c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.324 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   6c   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.338 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.339 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.339 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.339 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.339 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.339 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.339 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.339 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.339 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.339 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.339 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.339 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.339 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805373, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@aab5555, android.view.MotionEvent$PointerCoords@3b16b6a], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.344 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   7d   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.353 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.353 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.353 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.353 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.353 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.353 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.353 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.354 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.354 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.354 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.354 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.354 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.354 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805389, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@f52e8f8, android.view.MotionEvent$PointerCoords@118f1d1], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.358 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   8d   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.370 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.370 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.370 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.370 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.370 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.371 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.371 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.371 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.371 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.371 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.371 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.371 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.371 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805406, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@9f2d436, android.view.MotionEvent$PointerCoords@2499ca4], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.376 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   9e   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.389 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.389 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.389 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.389 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.389 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.389 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.389 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.389 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.389 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.389 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.389 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.389 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.389 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805423, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@1e9da0d, android.view.MotionEvent$PointerCoords@40ffdc2], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.396 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   af   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.403 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.403 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.403 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.403 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.403 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.403 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.403 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.403 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.403 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.403 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.404 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.404 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.404 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805439, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@2c57d3, android.view.MotionEvent$PointerCoords@5d5df10], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.411 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   bf   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.420 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.420 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.420 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.420 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.420 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.420 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.420 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.420 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.420 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.420 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.420 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.420 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.420 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805456, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@c670a09, android.view.MotionEvent$PointerCoords@8e4340e], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.427 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   d0   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.436 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.437 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.437 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.437 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.437 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.437 13457 13479 I TAG     : pc[0].pressure  0.4666667
 11-21 16:36:09.437 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.437 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.437 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.437 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.437 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.437 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.437 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805473, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@1da9e2f, android.view.MotionEvent$PointerCoords@da1dc3c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.441 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   e1   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ee   ee   f0   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.457 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.457 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.457 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.457 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.457 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.457 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.457 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.457 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.457 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.457 13457 13479 I TAG     : pc[1].pressure  0.43137258
 11-21 16:36:09.457 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.457 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.457 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805489, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@16d3dc5, android.view.MotionEvent$PointerCoords@fb3831a], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.462 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d7   f1   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   dc   dc   de   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.469 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.469 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.469 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.469 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.469 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.469 13457 13479 I TAG     : pc[0].pressure  0.46274513
 11-21 16:36:09.469 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.469 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.469 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.469 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:09.469 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.469 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.469 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805506, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@17cee4b, android.view.MotionEvent$PointerCoords@bce8028], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.474 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   02   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   ec   ec   ee   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.486 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.486 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.486 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.486 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.486 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.486 13457 13479 I TAG     : pc[0].pressure  0.454902
 11-21 16:36:09.486 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.486 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.486 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.486 13457 13479 I TAG     : pc[1].pressure  0.427451
 11-21 16:36:09.486 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.486 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.486 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805523, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@8e8f141, android.view.MotionEvent$PointerCoords@df6b6e6], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.491 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   13   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   e8   e8   ea   43   ea   00   00   44   57   00   00   00   00   00   00   3e   da   da   dc   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.502 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.502 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.502 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.502 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.502 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.502 13457 13479 I TAG     : pc[0].pressure  0.43921572
 11-21 16:36:09.502 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.502 13457 13479 I TAG     : pc[0].y  860.0
 11-21 16:36:09.502 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.502 13457 13479 I TAG     : pc[1].pressure  0.42352945
 11-21 16:36:09.502 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.502 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.503 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805539, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@9aa2427, android.view.MotionEvent$PointerCoords@19f76d4], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.507 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   23   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   e0   e0   e2   43   ea   00   00   44   57   00   00   00   00   00   00   3e   d8   d8   da   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.519 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.519 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.519 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.519 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.519 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.519 13457 13479 I TAG     : pc[0].pressure  0.4156863
 11-21 16:36:09.519 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.519 13457 13479 I TAG     : pc[0].y  859.38947
 11-21 16:36:09.519 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.519 13457 13479 I TAG     : pc[1].pressure  0.4156863
 11-21 16:36:09.519 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.519 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.520 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805556, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@312607d, android.view.MotionEvent$PointerCoords@5e75b72], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.524 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   34   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   d4   d4   d6   43   ea   00   00   44   56   d8   ed   00   00   00   00   3e   d4   d4   d6   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.536 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.536 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.536 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.536 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.536 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.536 13457 13479 I TAG     : pc[0].pressure  0.29411766
 11-21 16:36:09.536 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.536 13457 13479 I TAG     : pc[0].y  857.3626
 11-21 16:36:09.536 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.536 13457 13479 I TAG     : pc[1].pressure  0.3921569
 11-21 16:36:09.536 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.536 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.536 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805573, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@d8adbc3, android.view.MotionEvent$PointerCoords@ee72c40], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.541 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   45   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   96   96   97   43   ea   00   00   44   56   57   35   00   00   00   00   3e   c8   c8   ca   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.544 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.544 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.544 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.544 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.544 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.544 13457 13479 I TAG     : pc[0].pressure  0.20784315
 11-21 16:36:09.544 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.544 13457 13479 I TAG     : pc[0].y  857.0
 11-21 16:36:09.544 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.544 13457 13479 I TAG     : pc[1].pressure  0.3529412
 11-21 16:36:09.544 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.544 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.545 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805576, action=2, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@1698779, android.view.MotionEvent$PointerCoords@1cbbcbe], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.549 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   48   00   00   00   02   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   54   d4   d6   43   ea   00   00   44   56   40   00   00   00   00   00   3e   b4   b4   b5   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.554 13457 13479 I TAG     : pp[0].id  0
 11-21 16:36:09.554 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.554 13457 13479 I TAG     : pp[1].id  1
 11-21 16:36:09.554 13457 13479 I TAG     : pp[1].toolType  1
 11-21 16:36:09.554 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.554 13457 13479 I TAG     : pc[0].pressure  0.20784315
 11-21 16:36:09.554 13457 13479 I TAG     : pc[0].x  468.0
 11-21 16:36:09.554 13457 13479 I TAG     : pc[0].y  857.0
 11-21 16:36:09.554 13457 13479 I TAG     : pc[1].size  0.0
 11-21 16:36:09.554 13457 13479 I TAG     : pc[1].pressure  0.1764706
 11-21 16:36:09.554 13457 13479 I TAG     : pc[1].x  749.0
 11-21 16:36:09.554 13457 13479 I TAG     : pc[1].y  714.0
 11-21 16:36:09.555 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805584, action=6, pointerCount=2, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@100, android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@35711f, android.view.MotionEvent$PointerCoords@c32cc6c], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.560 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   7c   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   50   00   00   00   06   00   00   00   02   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   01   00   00   00   00   3e   54   d4   d6   43   ea   00   00   44   56   40   00   00   00   00   00   3e   34   b4   b5   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.563 13457 13479 I TAG     : pp[0].id  1
 11-21 16:36:09.563 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.563 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.563 13457 13479 I TAG     : pc[0].pressure  0.1764706
 11-21 16:36:09.563 13457 13479 I TAG     : pc[0].x  749.0
 11-21 16:36:09.563 13457 13479 I TAG     : pc[0].y  714.0
 11-21 16:36:09.563 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805584, action=2, pointerCount=1, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@3722235], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.567 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   64   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   50   00   00   00   02   00   00   00   01   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   00   3e   34   b4   b5   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00
 11-21 16:36:09.570 13457 13479 I TAG     : pp[0].id  1
 11-21 16:36:09.570 13457 13479 I TAG     : pp[0].toolType  1
 11-21 16:36:09.570 13457 13479 I TAG     : pc[0].size  0.0
 11-21 16:36:09.570 13457 13479 I TAG     : pc[0].pressure  0.1764706
 11-21 16:36:09.570 13457 13479 I TAG     : pc[0].x  749.0
 11-21 16:36:09.570 13457 13479 I TAG     : pc[0].y  714.0
 11-21 16:36:09.570 13457 13479 I TAG     : toString()KeyCode{downTime=6803676, eventTime=6805591, action=1, pointerCount=1, metaState=0, buttonState=0, xPrecision=1.0, yPrecision=1.0, deviceId=4, edgeFlags=0, source=4098, flags=0, pp=[android.view.MotionEvent$PointerProperties@101], pc=[android.view.MotionEvent$PointerCoords@802e6ca], actionIndex=0, width=1080, height=1792, tmp=[15, 15, 15, 15]}
 11-21 16:36:09.573 13457 13479 I TAG     : HEX :0f   0f   0f   0f   00   00   00   64   00   00   00   00   00   67   d0   dc   00   00   00   00   00   67   d8   57   00   00   00   01   00   00   00   01   00   00   00   00   00   00   00   00   3f   80   00   00   3f   80   00   00   00   00   00   04   00   00   00   00   00   00   10   02   00   00   00   00   00   00   00   01   00   00   00   01   00   00   00   00   3e   34   b4   b5   44   3b   40   00   44   32   80   00   00   00   00   00   00   00   04   38   00   00   07   00


 
 
 */
