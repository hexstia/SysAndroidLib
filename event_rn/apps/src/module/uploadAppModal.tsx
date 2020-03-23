

import { BaseComponent, configs, ImageBtn, tips } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { getFileType } from './publicFunc';

var RNFS = require('react-native-fs');



interface Props {

}

interface UploadTask {
  status: 'upload' | 'success' | 'faild',
  statusTextColor: string,
  progress: number,
  jobId: number,
}

interface State {
  visible: boolean,
  cloudPhone?: CloudPhoneModal,
  uploadTask?: UploadTask
}
/**
*  编辑手机名称
*/
export default class UploadAppModal extends BaseComponent<Props> {
  state: State = {
    visible: false,
  }

  constructor(props: Props) {
    super(props)

  }

  render() {
    let { visible, uploadTask } = this.state
    return (
      <Modal visible={visible}
        transparent={true}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' }}>

          <View style={{ width: 260, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
            {/* 标题 */}
            <View style={{ height: 40, backgroundColor: '#6498FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ width: 30, marginLeft: 5 }} />
              <Text style={{ color: '#fff', fontSize: 18 }}>上传应用</Text>
              <ImageBtn style={{ marginRight: 5 }} width={30} height={30} imgWidth={20} imgHeight={20}
                source={require('#/home/close.png')} onPress={this.close} />
            </View>

            {/* 文件上传 */}
            {
              uploadTask && (
                <View style={{ alignItems: 'center' }}>
                  <Image style={{ marginTop: 12, width: 105, height: 78 }} source={require('#/home/uploadApp.png')} resizeMode='contain' />
                  {/* 进度条 */}
                  <View style={{ width: 120, height: 10, marginTop: 6, backgroundColor: '#EEEEEE', borderRadius: 5, overflow: 'hidden' }}>
                    <View style={{ width: 120 * uploadTask.progress * 0.01, height: 10, backgroundColor: '#6498FF', borderRadius: 5 }} />
                  </View>
                  {/* 文字 */}
                  <Text style={{ color: uploadTask.statusTextColor, fontSize: 12, marginTop: 2 }}>{uploadTask.status == 'success' ? '成功' : (uploadTask.status == 'faild' ? '失败' : `${uploadTask.progress}%`)}</Text>
                  {/* 描述 */}
                  <Text style={{ color: '#999', fontSize: 12, marginTop: 10, marginBottom: 16 }}>上传应用将自动安装</Text>
                </View>
              )
            }

          </View>

        </View>
      </Modal>
    );
  }


  /**
  *  选择文件
  */
  addFileClick = () => {

    let cloudPhone = this.state.cloudPhone
    if (cloudPhone == undefined) {
      tips.showTips('缺少云手机参数');
      return;
    }

    DocumentPicker.pick({ type: [DocumentPicker.types.allFiles] }).then(res => {
      console.log('选择文件', res); // res.uri

      this.setState({ visible: true })
      this.uploadFiles([res.uri])

    }).catch(err => {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        tips.showTips('选择文件失败')
      }
    })
  }


  uploadFiles = (paths: string[]) => {
    let { cloudPhone, uploadTask } = this.state
    if (cloudPhone == undefined) {
      tips.showTips('缺少云手机参数');
      return;
    }

    var uploadUrl = configs.apiHost + '/cloudPhone/phone/installApk';

    let fileDatas = paths.map((path, index) => {
      var arr = path.split('/');
      let filename = arr[arr.length - 1];
      let type = getFileType(filename);
      let fileData = { filepath: path.split('file://').join(''), filetype: type, name: 'file', filename };
      return fileData
    })
    console.log('文件数组', fileDatas)


    // 开始上传
    var uploadBegin = (response: { jobId: number }) => {
      var jobId = response.jobId;
      console.log('开始上传' + jobId);
      let task: UploadTask = {
        status: 'upload',
        progress: 0,
        jobId,
        statusTextColor: '#6498FF'
      }
      this.setState({ uploadTask: task })
    };

    var uploadProgress = (response: { jobId: number, totalBytesExpectedToSend: number, totalBytesSent: number }) => {
      var percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
      console.log('上传进度：' + response.jobId + '==》' + percentage);
      this.setState({ uploadTask: { ...this.state.uploadTask, progress: percentage } })
    };

    console.log('上传参数', {
      token: configs.token,
      deviceIds: cloudPhone!.deviceId + '',
      selectAll: '2',
      searchGroupId: '',
      status: ''
    });


    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: fileDatas,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      fields: {
        token: configs.token,
        deviceIds: cloudPhone!.deviceId + '',
        selectAll: '2',
        searchGroupId: '',
        status: ''
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).promise.then((response: { jobId: number, statusCode: number, headers: Headers, body: string }) => {
      console.log('上传结果', response);
      let body = JSON.parse(response.body);
      let success = response.statusCode == 200 && body.status == 200

      this.setState({ uploadTask: { ...this.state.uploadTask, status: success ? 'success' : 'faild', statusTextColor: success ? '#18A918' : '#FE5437' } })
    }).catch((err: any) => {
      if (err.description === "cancelled") {
        // cancelled by user
      }
      console.log('上传失败', err);

      this.setState({ uploadTask: { ...this.state.uploadTask, status: 'faild', statusTextColor: '#FE5437' } })
    });
  }



  /**
  *  关闭
  */
  close = () => {
    this.setState({ visible: false })
  }

  /**
  *  上传文件
  */
  uploadApp = (phone: CloudPhoneModal) => {
    this.setState({ cloudPhone: phone }, () => {
      this.addFileClick()
    })
  }


}