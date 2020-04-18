
import dayjs from 'dayjs';
import { BaseNavNavgator, DefaultListView, ImageBtn, request } from 'dl-kit';
import { Question } from 'global';
import React from 'react';
import { Text, View } from 'react-native';

interface State {
}
export default class QuestionList extends BaseNavNavgator {
    state: State = {
    }

    listView: DefaultListView | null = null;

    constructor(props: any) {
        super(props)
    }

    loadData = (pageNum: number) => {

        request.post('/tcssPlatform/user/queryConsultation', { page: pageNum + 1 }, false).then(result => {
            this.listView && this.listView.setData(result.list, pageNum);
        }).catch(err => {
            this.listView && this.listView.setData(null, pageNum);
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DefaultListView
                    ref={lv => this.listView = lv}
                    loadData={this.loadData}
                    listHeaderComponent={this.renderListHeader}
                    renderItem={this.renderItem}
                    onPressItem={this.onPressItem}
                />
                <ImageBtn style={{ position: 'absolute', bottom: 220, right: 6 }} imgWidth={67} imgHeight={67} source={require('#/service/addNewQuestion.png')} onPress={this.gotoAddQuestion} />
            </View>
        );
    }

    renderListHeader = () => {
        return (
            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                <View style={{ width: 55, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>序号</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>问题标题</Text>
                </View>

                <View style={{ width: 60, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>处理状态</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>提问时间</Text>
                </View>
            </View>
        )
    }

    /**
    *  渲染问题
    */
    renderItem = (item: Question, index: number) => {
        return (
            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ width: 55, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>{index + 1}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12, lineHeight: 15 }}>{item.title}</Text>
                </View>

                <View style={{ width: 60, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>{item.statusStr}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 12 }}>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}</Text>
                </View>
            </View>
        )
    }

    /**
    *  点击事件
    */
    onPressItem = (item: Question, index: number) => {
        this.navigate('QuestionDetail', { title: '详情', question: item })
    }

    /**
    *  添加问题
    */
    gotoAddQuestion = () => {
        this.navigate('NewQuestion', { title: '新问题', newQuestionAction: this.newQuestionAction })
    }

    /**
    *  添加新问题的回调
    */
    newQuestionAction = () => {
        this.listView && this.listView.onRefresh()
    }

}