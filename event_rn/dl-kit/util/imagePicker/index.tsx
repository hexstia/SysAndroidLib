
import ImagePicker, { Image, Options } from 'react-native-image-crop-picker';

/**
*  图片选择
*/
export const imagePicker = (options: Options, pickCallback: (data: Image | Image[]) => void) => {
  ImagePicker.openPicker({
    /**
    *  是否打开裁剪
    */
    cropping: false,
    /**
    *  启用或禁用多个图像选择
    */
    multiple: true,
    /**
    *  最多能够选取的文件数,配合multiple=true
    */
    maxFiles: 9,
    /**
    *  选择一个媒体类型 photo/video/any
    */
    mediaType: 'any',
    /**
    *  外部指定的参数
    */
    ...options
  }).then(pickCallback);
}

/**
*  照相机拍照
*/
export const imageCamera = (options: Options, pickCallback: (data: Image | Image[]) => void) => {
  ImagePicker.openCamera({
    /**
    *  是否打开裁剪
    */
    cropping: false,
    /**
    *  是否包含图像信息
    */
    includeExif: true,
    /**
    *  选择一个媒体类型 photo/video
    */
    mediaType: 'any',
    ...options
  }).then(pickCallback);
}


// import ImagePicker, { ImagePickerOptions, ImagePickerResponse } from 'react-native-image-picker';

// export const imagePicker = (option: ImagePickerOptions, pickCallback: (response: ImagePickerResponse) => void) => {
//   let options: ImagePickerOptions = {
//     title: '请选择图片来源',
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//       waitUntilSaved: true
//     },
//     cancelButtonTitle: '取消',
//     takePhotoButtonTitle: '拍照',
//     chooseFromLibraryButtonTitle: '图库相册',
//     noData: true,
//     mediaType: 'photo',
//     maxWidth: 300,
//     maxHeight: 300,
//     ...option
//   };

//   ImagePicker.showImagePicker(options, response => {
//     if (response.didCancel) {
//       // 用户取消
//     } else if (response.error) {
//       // 错误
//     } else if (response.customButton) {
//       // 用户点击了自定义按钮
//     } else {

//       if (typeof pickCallback == 'function') {
//         pickCallback(response)
//       }
//     }
//   });
// }

