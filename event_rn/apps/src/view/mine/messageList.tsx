
import dayjs from 'dayjs';
import { BaseNavNavgator, DefaultListView, request } from 'dl-kit';
import { Message } from 'global';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface State {
}
/**
*  消息列表
*/
export default class MessageList extends BaseNavNavgator {
  state: State = {
  }

  constructor(props: any) {
    super(props)
  }

  listView: DefaultListView | null = null;

  loadData = (pageNum: number) => {

    request.post('/tcssPlatform/user/queryNotice', { page: pageNum + 1 }, false).then(result => {

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
          renderItem={this.renderItem}
          listEmptyComponent={this.renderListEmpty}
          onPressItem={this.onPressItem} />
      </View>
    );
  }

  renderListEmpty = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 155, height: 155, marginTop: 100 }} resizeMode='contain' source={require('#/mine/noMossageIcon.png')} />
        <Text style={{ color: '#999', fontSize: 15, marginTop: 8 }}>暂无消息通知哦</Text>
      </View>
    )
  }

  renderItem = (item: Message, index: number) => {
    let createTime = dayjs(item.createTime).format('YYYY-MM-DD')
    return (
      <View style={{ backgroundColor: '#fff' }} key={item.id}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <View style={{ width: 12, height: 12, marginLeft: 20, borderRadius: 6, backgroundColor: item.readStatus == 2 ? '#F84D4E' : '#CCCCCC' }} />
          <Text style={{ color: '#333', fontSize: 15, marginLeft: 5, lineHeight: 18, flex: 1 }} numberOfLines={1}>{item.title}</Text>
          <Text style={{ color: '#999', fontSize: 13, marginRight: 10, marginLeft: 10 }} numberOfLines={1}>{createTime}</Text>
        </View>
        {/* <Text style={{ color: '#999', fontSize: 13, marginLeft: 37, marginTop: 10, marginBottom: 22 }}>{item.appStatusStr}</Text> */}
      </View>
    )
  }

  onPressItem = (item: Message, index: number) => {
    this.navigate('BaseWebView', { title: '详情', htmlStr: item.content })
  }


}