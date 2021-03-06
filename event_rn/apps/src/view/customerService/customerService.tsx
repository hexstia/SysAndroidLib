

import { BaseNavNavgator, DefaultListView, Icon } from 'dl-kit';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface State {
}
interface Question {
    title: string,
    url: string
}

export default class CustomerService extends BaseNavNavgator {
    state: State = {
    }

    listView: DefaultListView | null = null;
    commonQuestions: Question[] = [
        {
            title: '购买成功未显示设备？',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=question1'
        },
        {
            title: '如何上传应用到云手机？',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=question2'
        },
        {
            title: '使用云手机是否消耗本地流量?',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=question4'
        },
        {
            title: '设备到期后会怎样?',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=question3'
        },
        {
            title: '应用在云手机运行是否安全？',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=question5'
        },
        {
            title: '常见综合问题',
            url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=FQA'
        },
        // {
        //     title: '关于蓝将',
        //     url: 'http://91lanjiang.com/cloud/cloudPhone/book?type=aboutApp'
        // }
    ]

    constructor(props: any) {
        super(props)
        this.setTitle('客服中心')
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <DefaultListView
                    style={{ marginTop: 5 }}
                    ref={lv => this.listView = lv}
                    useExternalSource={true}
                    dataSource={{ data: this.commonQuestions, pageNum: 0 }}
                    renderItem={this.renderItem}
                    listHeaderComponent={this.renderListHeader}
                    onPressItem={this.onPressItem}
                />

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 210, height: 50, borderRadius: 25, marginTop: 20, alignSelf: 'center', backgroundColor: '#258BEC', justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.gotoQuestionList}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900' }}>转留言</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#999', fontSize: 13, marginTop: 9 }}>客服电话：400-6699-160</Text>
                    <Text style={{ color: '#999', fontSize: 13, marginTop: 10, marginBottom: 10 }}>在线客服时间：9:00-20:00</Text>
                </View>
            </View>
        );
    }

    renderListHeader = () => {
        return (
            <View style={{ height: 35, justifyContent: 'center', backgroundColor: '#fff' }}>
                <Text style={{ color: '#333', fontSize: 18, fontWeight: '900', marginLeft: 15 }}>常见问题</Text>
            </View>
        )
    }
    renderItem = (item: Question, index: number) => {
        return (
            <View style={{ height: 45, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                <Text style={{ color: '#333', fontSize: 14, marginLeft: 15 }}>{item.title}</Text>
                <Icon style={{ color: '#666', fontSize: 12, marginRight: 25 }} iconCode={0xe649} />
            </View>
        )
    }

    onPressItem = (item: Question, index: number) => {
        this.navigate('BaseWebView', { title: '详情', uri: item.url })
    }


    // 跳转问题列表
    gotoQuestionList = () => {
        this.navigate('QuestionList', { title: '咨询' })
    }


}