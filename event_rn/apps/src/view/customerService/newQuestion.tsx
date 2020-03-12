
import { BaseNavNavgator, Icon, ImageBtn, imagePicker, request, tips } from 'dl-kit';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface State {
    title: string,
    content: string,
    imgPath?: string
}

/**
*  新键消息
*/
export default class NewQuestion extends BaseNavNavgator {
    state: State = {
        title: '',
        content: '',
    }
    constructor(props: any) {
        super(props)
    }
    render() {
        let { title, content, imgPath } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff' }}>
                    {/* 问题标题 */}
                    <View style={{ height: 45, paddingHorizontal: 15 }}>
                        <TextInput
                            style={{ padding: 0, flex: 1, fontSize: 16 }}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            placeholder='问题标题'
                            value={title}
                            onChangeText={text => this.setState({ title: text })}
                        />
                    </View>
                    <View style={{ height: 0.5, backgroundColor: '#eee', marginHorizontal: 15 }} />

                    {/* 问题内容 */}
                    <View style={{ paddingVertical: 13, paddingHorizontal: 15, height: 160 }}>
                        <TextInput
                            style={{ padding: 0, flex: 1, fontSize: 16 }}
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={true}
                            underlineColorAndroid="transparent"
                            placeholder='问题内容'
                            value={content}
                            onChangeText={text => this.setState({ content: text })}
                        />
                    </View>

                    {/* 添加附件 */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#ccc', fontSize: 14, marginLeft: 15 }}>添加附件</Text>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', width: 100, height: 100, marginLeft: 15 }}
                            onPress={this.selectImageAction}>
                            {
                                imgPath ? (
                                    <Image style={{ width: 100, height: 100 }} source={{ uri: imgPath }} />
                                ) : (
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon style={{ color: '#333', fontSize: 25 }} iconCode={0xe644} />
                                            <Text style={{ color: '#999', fontSize: 14, marginTop: 14 }}>上传图片</Text>
                                        </View>
                                    )
                            }

                        </TouchableOpacity>
                    </View>

                    {/* 按钮 */}
                    <View style={{ marginTop: 36, flexDirection: 'row', marginBottom: 25, justifyContent: 'space-between', paddingHorizontal: 15 }}>
                        <ImageBtn imgWidth={133} imgHeight={48} source={require('#/service/submitBtn.png')} onPress={this.submitAction} />
                        <ImageBtn imgWidth={133} imgHeight={48} source={require('#/service/backBtn.png')} onPress={this.goBack.bind(this)} />
                    </View>


                </View>
            </View>
        );
    }


    /**
    *  选择图片
    */
    selectImageAction = () => {
        imagePicker({ maxFiles: 1, mediaType: 'photo', compressImageMaxWidth: 800 }, (data) => {

            let imgs = data as any[]
            let paths = imgs.map(i => i.path)

            request.upload('/tcssPlatform/user/imageUploadConsultation', { paths }, true).then(res => {
                this.setState({ imgPath: res.fileUrl })
            })
        })
    }

    /**
    *  提交事件
    */
    submitAction = () => {
        let { title, content, imgPath } = this.state;

        let param: any = { title, content }
        if (imgPath) {
            param.imgPath = imgPath
        }
        request.post('/tcssPlatform/user/addConsultation', param, true).then(result => {
            tips.showTips('新问题提交成功', 2000, () => {
                this.goBack()
            })
        })
    }
}