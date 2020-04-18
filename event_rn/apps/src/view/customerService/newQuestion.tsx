
import { BaseNavNavgator, defaultStyle, Icon, ImageBtn, imagePicker, request, tips } from 'dl-kit';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
            <ScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag'>
                <View style={{ marginTop: 10, ...defaultStyle.device }}>
                    {/* 问题标题 */}
                    <View style={{ height: 40, paddingHorizontal: 15, backgroundColor: '#fff' }}>
                        <TextInput
                            style={{ padding: 0, flex: 1, fontSize: 16 }}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            placeholder='问题标题'
                            placeholderTextColor='#aaa'
                            value={title}
                            onChangeText={text => this.setState({ title: text })}
                        />
                    </View>
                    <View style={{ height: 0.5, backgroundColor: '#eee', marginHorizontal: 15 }} />

                    {/* 问题内容 */}
                    <View style={{ paddingVertical: 10, paddingHorizontal: 15, height: 160, backgroundColor: '#fff' }}>
                        <TextInput
                            style={{ padding: 0, flex: 1, fontSize: 16, textAlignVertical: 'top' }}
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={true}
                            underlineColorAndroid="transparent"
                            placeholder='问题内容'
                            placeholderTextColor='#aaa'
                            value={content}
                            onChangeText={text => this.setState({ content: text })}
                        />
                    </View>

                    {/* 添加附件 */}
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingBottom: 15 }}>
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
            </ScrollView>
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

        if (title.length == 0) {
            tips.showTips('问题标题不能为空')
            return
        }

        if (content.length == 0) {
            tips.showTips('问题内容不能为空')
            return
        }

        request.post('/tcssPlatform/user/addConsultation', param, true).then(result => {
            this.data.newQuestionAction && this.data.newQuestionAction()
            this.goBack()
            tips.showTips('新问题提交成功')
        })
    }
}