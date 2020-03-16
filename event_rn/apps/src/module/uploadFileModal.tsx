

import { BaseComponent, configs, ImageBtn, imagePicker, tips } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
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
  uploadTasks: UploadTask[]
}
/**
*  编辑手机名称
*/
export default class UploadFileModal extends BaseComponent<Props> {
  state: State = {
    visible: false,
    uploadTasks: []
  }

  constructor(props: Props) {
    super(props)

  }

  render() {
    let { visible, uploadTasks } = this.state
    let itemWidth = 90
    let itemHeight = 100
    return (
      <Modal visible={visible}
        transparent={true}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' }}>

          <View style={{ width: 270, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
            {/* 标题 */}
            <View style={{ height: 40, backgroundColor: '#6498FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ width: 30, marginLeft: 5 }} />
              <Text style={{ color: '#fff', fontSize: 18 }}>上传文件</Text>
              <ImageBtn style={{ marginRight: 5 }} width={30} height={30} imgWidth={20} imgHeight={20} source={require('#/home/close.png')} onPress={this.close} />
            </View>

            {/* 文件上传 */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, alignSelf: 'stretch' }}>
              {
                uploadTasks.map(task => {
                  return (
                    <View style={{ width: itemWidth, height: itemHeight, alignItems: 'center' }} key={task.jobId}>
                      {/* 文件夹📂 */}
                      <Image style={{ width: 60, height: 60, marginTop: 10 }} resizeMode='contain' source={require('#/home/filePage.png')} />
                      {/* 进度条 */}
                      <View style={{ width: 60, height: 5, marginTop: 6, backgroundColor: '#EEEEEE', borderRadius: 2.5 }}>
                        <View style={{ width: 60 * task.progress * 0.01, height: 5, backgroundColor: '#6498FF', borderRadius: 2.5 }} />
                      </View>
                      {/* 文字 */}
                      <Text style={{ color: task.statusTextColor, fontSize: 10, marginTop: 4 }}>{task.status == 'success' ? '成功' : (task.status == 'faild' ? '失败' : `${task.progress}%`)}</Text>
                    </View>
                  )
                })
              }
              <View style={{ width: itemWidth, height: itemHeight, alignItems: 'center' }}>
                <ImageBtn style={{ marginTop: 15 }} imgWidth={50} imgHeight={50} source={require('#/home/addFile.png')} onPress={this.addFileClick} />
              </View>
            </View>
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

    imagePicker({ maxFiles: 100, mediaType: 'any', compressImageMaxWidth: 800 }, (data: any) => {

      console.log('图片选择', data)
      let imgs = data as any[]
      let paths = imgs.map(i => i.path)
      if (paths.length > 0) {
        this.setState({ visible: true })
        this.uploadFiles(paths)
      }
    })

  }


  uploadFiles = (paths: string[]) => {
    let { cloudPhone, uploadTasks } = this.state
    if (cloudPhone == undefined) {
      tips.showTips('缺少云手机参数');
      return;
    }

    var uploadUrl = configs.apiHost + '/cloudPhone/phone/uploadFile';

    let fileDatas = paths.map((path, index) => {
      var arr = path.split('/');
      let name = arr[arr.length - 1]
      let type = getFileType(name);
      let fileData = { filepath: path.split('file://').join(''), filetype: type, name, filename: name };
      return fileData
    })


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
      this.setState({ uploadTasks: [...uploadTasks, task] })
    };

    var uploadProgress = (response: { jobId: number, totalBytesExpectedToSend: number, totalBytesSent: number }) => {
      var percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
      console.log('上传进度：' + response.jobId + '==》' + percentage);

      let newTasks = [...this.state.uploadTasks].map(task => {
        if (task.jobId == response.jobId) {
          return { ...task, progress: percentage }
        }
        return task;
      })
      this.setState({ uploadTasks: newTasks })
    };

    // console.log(RNFS);
    // upload files
    RNFS.uploadFiles({
      toUrl: uploadUrl,// Allow for binary data stream for file to be uploaded without extra headers, Default is 'false'
      files: fileDatas,
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      fields: {
        token: configs.token,
        'deviceIds': cloudPhone!.deviceId + '',
        selectAll: '2',
        searchGroupId: '',
        status: ''
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).promise.then((response: { jobId: number, statusCode: number, headers: Headers, body: string }) => {
      if (response.statusCode == 200) {
        console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
      } else {
        console.log('SERVER ERROR');
      }

      let newTasks = [...this.state.uploadTasks].map(task => {
        if (task.jobId == response.jobId) {
          return { ...task, status: response.statusCode == 200 ? 'success' : 'faild', statusTextColor: response.statusCode == 200 ? '#18A918' : '#FE5437' }
        }
        return task;
      })
      this.setState({ uploadTasks: newTasks })
    }).catch((err: any) => {
      if (err.description === "cancelled") {
        // cancelled by user
      }
      tips.showTips(`上传失败！`)
      console.log(err);
    });
  }



  /**
  *  关闭
  */
  close = () => {
    this.setState({ visible: false })
  }

  /**
  *  显示弹窗
  */
  showModal = (phone: CloudPhoneModal) => {
    this.setState({ visible: true, cloudPhone: phone }, () => {
      this.addFileClick()
    })
  }

  /**
  *  上传文件
  */
  uploadFile = (phone: CloudPhoneModal) => {
    this.setState({ cloudPhone: phone }, () => {
      this.addFileClick()
    })
  }


}