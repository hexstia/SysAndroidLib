
import { BaseNavNavgator, DefaultListView, ImageBtn, request } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface State {
    nowSelectTabIndex: number,
    phoneList: CloudPhoneModal[],

}

/**
*  设备列表
*/
export default class DeviceList extends BaseNavNavgator {
    state: State = {
        nowSelectTabIndex: 0,
        phoneList: []
    }
    constructor(props: any) {
        super(props)

    }

    listView: DefaultListView | null = null;
    tabTexts = ['全部', '即将到期', '已到期', '已销毁']

    loadData = (pageNum: number) => {

        if (pageNum == 0) {
            let status: number | undefined = undefined;
            switch (this.state.nowSelectTabIndex) {
                case 1:
                    status = 5
                    break;

                case 2:
                    status = 10
                    break;

                case 3:
                    status = 15
                    break;
            }

            request.post('/cloudPhone/phone/list', { page: 1, pageSize: 1000, type: 1, status }, false).then(result => {
                this.listView && this.listView.setData(result.list, 0);
            }).catch(err => {
                this.listView && this.listView.setData(null, pageNum);
            })
        } else {
            this.listView && this.listView.setData([], pageNum);
        }

    }


    render() {
        let { nowSelectTabIndex } = this.state;

        return (
            <View style={{ flex: 1 }}>
                {/* 顶部Tab切换 */}
                <View style={{ backgroundColor: '#fff', height: 45, flexDirection: 'row' }}>
                    {
                        this.tabTexts.map((t, index) => {
                            let select = nowSelectTabIndex == index;
                            return (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: select ? '#6498FF' : '#fff', borderRadius: 3, paddingHorizontal: 15, paddingVertical: 4, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.tabSelect.bind(this, index)}>
                                        <Text style={{ color: select ? '#fff' : '#333', fontSize: 15, lineHeight: 17 }}>{t}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
                {/* 列表 */}
                <DefaultListView
                    ref={lv => this.listView = lv}
                    loadData={this.loadData}
                    renderItem={this.renderItem}
                    listEmptyComponent={this.renderListEmptyComponent}
                    showItemSeparator={false} />

            </View>
        );
    }

    /**
  *  加载空列表页面
  */
    renderListEmptyComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ width: 180, height: 175, marginTop: 75 }} resizeMode='contain' source={require('#/home/emptyList.png')} />
                <ImageBtn style={{ marginTop: 9 }} imgWidth={223} imgHeight={63} source={require('#/home/buyPhone.png')}
                    onPress={this.addCloudPhoneClick} />
            </View>
        )
    }

    renderItem = (item: CloudPhoneModal, index: number) => {
        let imgSource = require('#/mine/xufei.png')
        if (item.status == 10) {
            imgSource = require('#/mine/jixuhuifu.png')
        } else if (item.status == 15) {
            imgSource = require('#/mine/yixiaohui.png')
        }

        return (
            <View style={{ backgroundColor: '#fff', marginTop: 10, marginHorizontal: 15, borderRadius: 5, shadowColor: '#999', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6 }} key={item.id}>
                {/* 顶部文字 */}
                <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 8, marginLeft: 10 }}>
                    {/* 左侧 */}
                    <View style={{ flex: 1 }}>
                        {/* 左侧上部 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 13, height: 22 }} resizeMode='contain' source={require('#/home/phone_img.png')} />
                            <Text style={{ color: '#999', fontSize: 15, marginLeft: 5 }}>手机名称：{item.deviceName}</Text>
                        </View>
                        {/* 设备类型 */}
                        <View style={{ marginTop: 5, borderRadius: 2, borderWidth: 1, alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderColor: '#F2D7A0', backgroundColor: '#FEFCEE', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#B3944C', fontSize: 13, lineHeight: 15 }}>设备类型：{item.proName || '暂无设备类型'}</Text>
                        </View>
                    </View>

                    {/* 右侧按钮 */}
                    <ImageBtn style={{ marginTop: 2 }} imgWidth={79} imgHeight={34} source={imgSource} onPress={this.xufeiBtnClick.bind(this, item)} />
                </View>

                {/* 事件模块 */}
                <View style={{ marginTop: 10, marginHorizontal: 10, backgroundColor: '#F6F6F6', paddingHorizontal: 10, marginBottom: 14 }}>
                    <Text style={{ color: '#333333', fontSize: 13, marginTop: 12, lineHeight: 16 }}>购买时间：{item.beginTime}</Text>
                    <Text style={{ color: '#333333', fontSize: 13, marginTop: 8, lineHeight: 16 }}>到期时间：{item.endTime}</Text>
                    <Text style={{ color: '#333333', fontSize: 13, marginTop: 8, marginBottom: 12, lineHeight: 16 }}>销毁时间：{item.destructionTtime}</Text>
                </View>

            </View>
        )
    }

    /**
    *  续费按钮点击事件
    */
    xufeiBtnClick = (cloudPhone: CloudPhoneModal) => {
        if (cloudPhone.status != 15) {
            this.navigate('PayCloudPhone', { cloudPhone, title: '续费' })
        }
    }



    /**
  *  顶部Tab点击事件
  */
    tabSelect = (index: number) => {
        this.setState({ nowSelectTabIndex: index }, () => {
            this.loadData(0)
        })
    }


    /**
  *  添加云手机
  */
    addCloudPhoneClick = () => {
        this.navigate('PayCloudPhone', { title: '购买云手机' })
    }

}