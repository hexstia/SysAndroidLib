
import dayjs from 'dayjs';
import { BaseNavNavgator, request } from 'dl-kit';
import { Question } from 'global';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface State {
    question: Question
}

/**
*  问题详情
*/
export default class QuestionDetail extends BaseNavNavgator {
    state: State = {
        question: this.data.question
    }

    constructor(props: any) {
        super(props)
        this.setTitle('详情')
        request.post('/tcssPlatform/user/detailConsultation', { id: this.data.question.id }, true).then(result => {
            this.setState({ question: result })
        })
    }

    render() {
        let { question } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 10, marginHorizontal: 15, borderRadius: 5, backgroundColor: '#fff', shadowColor: '#999', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6 }}>
                    {/* 问题部分 */}
                    <View style={{ marginTop: 10, marginHorizontal: 10, backgroundColor: '#F0F0F0', paddingHorizontal: 8, paddingTop: 8, marginBottom: 10 }}>
                        {/* 标题 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '900' }}>{question.title}</Text>
                            <Text style={{ color: '#666', fontSize: 13 }}>{dayjs(question.createTime).format('YYYY-MM-DD HH:mm')}</Text>
                        </View>
                        {/* 内容 */}
                        <Text style={{ marginTop: 8, color: '#666', fontSize: 13, lineHeight: 16, marginBottom: 12 }}>{question.content}</Text>

                        {/* 图片 */}
                        {
                            question.userImg ? (
                                <Image style={{ width: 100, height: 100, marginBottom: 12, backgroundColor: '#eee' }} source={{ uri: question.userImg }} />
                            ) : null
                        }
                    </View>

                    {/* 回答 */}
                    <View style={{ marginBottom: 10, marginHorizontal: 10, backgroundColor: '#eee', paddingHorizontal: 8, paddingTop: 8, paddingBottom: 8 }}>
                        <Text style={{ color: '#666', fontSize: 13, lineHeight: 16 }}>{question.replyContent || '暂无回答'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}