
import { BaseNavNavgator, DefaultListView, defaultStyle, ImageBtn, request } from 'dl-kit';
import { Banner, CloudPhoneModal } from 'global';
import React from 'react';
import { Image, ImageBackground, Platform, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import CloudPhoneSettingModal from '../../module/cloudPhoneSettingModal';
import EditPhoneNameModal from '../../module/editPhoneNameModal';
import TipModal from '../../module/tipModal';

interface State {
    showType: 'viewType' | 'listType',
    phoneList: CloudPhoneModal[],
    contentHeight: number,
    phoneIndex: number,
    reStartPhoneIds: number[],
    renewPhoneIds: number[],
    bannerDatas: Banner[]
}

/**
*  云手机页面
*/
export default class CloudPhone extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
        showType: 'viewType',
        phoneList: [],
        contentHeight: 400,
        phoneIndex: 0,
        reStartPhoneIds: [],
        renewPhoneIds: [],
        bannerDatas: [],
    }

    editPhoneNameModal: EditPhoneNameModal | null = null;
    cloudPhoneSettingModal: CloudPhoneSettingModal | null = null;
    tipModal: TipModal | null = null;

    constructor(props: any) {
        super(props)
        this.loadData()
    }

    /**
    *  获取云手机列表
    */
    loadData = () => {
        let param = { page: 1, pageSize: 1000 }
        request.post('/cloudPhone/phone/list', param, true).then(result => {
            console.log('获取云手机列表', result)
            this.setState({ phoneList: result.list })
        }).catch(err => {
            console.log('获取云手机列表', err)
        })

        request.post('/tcssPlatform/user/queryAdBanner', { type: Platform.OS == 'ios' ? 2 : 1, proType: 1 }, true).then(result => {
            this.setState({ bannerDatas: result.list })
        })
    }

    render() {
        let { showType, phoneIndex, phoneList } = this.state
        let nowSelectPhone = phoneList[phoneIndex] || {}

        return (
            <View style={{ flex: 1 }}>
                {/* 导航栏 */}
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{ marginTop: defaultStyle.safeArea.navMarginTop, height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 90 }} />

                        {/* 切换的tab */}
                        <ImageBackground style={{ width: 180, height: 35, flexDirection: 'row' }} resizeMode='contain' source={showType == 'viewType' ? require('#/home/viewBGImage.png') : require('#/home/listBgImage.png')} >
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: showType == 'viewType' ? 'listType' : 'viewType' })} />
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: showType == 'viewType' ? 'listType' : 'viewType' })} />
                        </ImageBackground>

                        {/* 右侧俩按钮 */}
                        {
                            showType == 'viewType' ? (
                                <View style={{ width: 90, height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                                    {/* 添加手机的时候，不显示设置按钮 */}
                                    {
                                        (nowSelectPhone && nowSelectPhone.id) ? (
                                            <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}
                                                onPress={() => this.cloudPhoneSettingModal?.showModal(nowSelectPhone)}>
                                                <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('#/home/setting.png')} />
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                    <TouchableOpacity style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.loadData}>
                                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('#/home/refresh.png')} />
                                    </TouchableOpacity>
                                </View>
                            ) : (<View style={{ width: 90 }} />)
                        }

                    </View>
                </View>

                {/* 手机内容部分 */}
                {showType == 'viewType' ? this.loadViewContent() : this.loadListContent()}

                {/* 修改手机名称的modal */}
                <EditPhoneNameModal
                    ref={pm => this.editPhoneNameModal = pm}
                    updatePhoneName={this.updatePhoneName} />

                {/* 手机设置弹窗 */}
                <CloudPhoneSettingModal
                    ref={sm => this.cloudPhoneSettingModal = sm}
                    onPhoneSettingAction={this.onPhoneSettingAction} />

                {/* 提示框 */}
                <TipModal
                    ref={tm => this.tipModal = tm}
                />
            </View>
        );
    }

    /**
    *  加载 视图内容
    */
    loadViewContent = () => {
        let { phoneList, contentHeight, phoneIndex, bannerDatas } = this.state
        let addImgHeight = contentHeight - 10
        let addImgWith = Math.floor(addImgHeight * (210 / 413))
        let nowSelectPhone = phoneList[phoneIndex]

        let phoneSwiperHeight = contentHeight - 97;
        let phoneSwiperWidth = Math.floor(addImgHeight * (185 / 363))

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }} onLayout={(e) => this.setState({ contentHeight: e.nativeEvent.layout.height })}>

                    {
                        phoneList.length == 0 ? (
                            <TouchableOpacity style={{ marginTop: 10, width: addImgWith, height: addImgHeight, alignSelf: 'center' }}
                                activeOpacity={1}
                                onPress={this.addCloudPhoneClick}>
                                <Image style={{ alignSelf: 'stretch', width: addImgWith, height: addImgHeight }} resizeMode='contain' source={require('#/home/addCloudPhone.png')} />
                            </TouchableOpacity>
                        ) : (
                                <View style={{ flex: 1 }}>
                                    {/* 顶部蓝色条目 */}
                                    <View style={{ height: 50, marginTop: 5, backgroundColor: '#6498FF', flexDirection: 'row' }}>
                                        <View style={{ flex: 1, marginLeft: 15, justifyContent: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff', fontSize: 14 }}>手机名称：{nowSelectPhone.deviceName} </Text>
                                                <ImageBtn style={{ marginLeft: 10 }}
                                                    imgWidth={15}
                                                    imgHeight={15}
                                                    source={require('#/home/write.png')}
                                                    onPress={this.editBtnClick.bind(this, nowSelectPhone)} />
                                            </View>
                                            <Text style={{ color: '#fff', fontSize: 14 }}>剩余时间：{nowSelectPhone.remainingTime}</Text>
                                        </View>

                                        <ImageBtn style={{ marginRight: 13 }} imgWidth={64} imgHeight={29} source={require('#/home/xufei.png')} onPress={this.renewBtnClick.bind(this, nowSelectPhone)} />
                                    </View>

                                    {/* 图片 page */}
                                    <View style={{ marginTop: 10, flex: 1, width: phoneSwiperWidth, height: phoneSwiperHeight, alignSelf: 'center' ,overflow:'hidden'}}>
                                        <Swiper
                                            loop={false}
                                            removeClippedSubviews={false}
                                            showsPagination={false}
                                            onIndexChanged={(index: number) => this.setState({ phoneIndex: index })}>
                                            {
                                                phoneList.map((phone, index) => {
                                                    return (
                                                        <TouchableOpacity style={{ flex: 1,backgroundColor:'#f0f', borderWidth: 1, borderColor: '#000' }} activeOpacity={1}  >

                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </Swiper>
                                    </View>

                                    {/* 页码 */}
                                    <View style={{ height: 32, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#6498FF', fontSize: 16 }}>{phoneIndex + 1}<Text style={{ color: '#ccc' }}>/{phoneList.length}</Text></Text>
                                    </View>

                                </View>
                            )
                    }
                </View>


                {/* 广告 */}
                <View style={{ height: 56, backgroundColor: '#eee' }}>
                    {
                        bannerDatas.length > 0 ? (
                            <Swiper
                                loop={true}
                                autoplay={true}
                                removeClippedSubviews={false}

                                paginationStyle={{ bottom: 1 }}
                                onTouchStart={this.bannerClick}>
                                {
                                    bannerDatas.map((banner, index) => {
                                        return (
                                            <Image style={{ flex: 1 }} source={{ uri: banner.imagePath }} />
                                        )
                                    })
                                }
                            </Swiper>
                        ) : null
                    }

                </View>

            </View>
        )
    }

    /**
    *  加载 列表内容
    */
    loadListContent = () => {
        let { phoneList } = this.state

        return (
            <View style={{ flex: 1 }}>
                <DefaultListView
                    useExternalSource={true}
                    dataSource={{ data: phoneList, pageNum: 0 }}
                    renderItem={this.renderCloudPhoneCell}
                    listEmptyComponent={this.renderListEmptyComponent}
                    listHeaderComponent={this.renderListHeader} />
            </View>
        )
    }

    /**
    *  列表头部
    */
    renderListHeader = () => {
        let { phoneList } = this.state

        return (
            <View>
                {
                    phoneList.length > 0 ? (
                        <ImageBtn style={{ marginTop: 14 }} imgWidth={134} imgHeight={39} source={require('#/home/buyPhoneBlue.png')} onPress={this.addCloudPhoneClick} />
                    ) : null
                }
                <Text style={{ marginTop: 12, marginLeft: 15, color: '#999', fontSize: 16 }}>所有设备（{phoneList.length}台）</Text>
            </View>
        )
    }

    /**
    *  加载云手机cell
    */
    renderCloudPhoneCell = (item: CloudPhoneModal, index: number) => {
        return (
            <View style={{ marginTop: 10, marginHorizontal: 15, backgroundColor: '#fff', borderRadius: 5, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' }}>
                <Image style={{ width: 26, height: 44, marginLeft: 8, marginVertical: 12 }} resizeMode='contain' source={require('#/home/phone_img.png')} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 16 }}>手机名称：{item.deviceName}</Text>
                        <ImageBtn style={{ marginLeft: 10 }}
                            imgWidth={15}
                            imgHeight={15}
                            source={require('#/home/edit_grey.png')}
                            onPress={this.editBtnClick.bind(this, item)} />
                    </View>
                    <Text style={{ color: '#999', fontSize: 16, marginTop: 6 }}>剩余时间：{item.remainingTime}</Text>
                </View>
                <ImageBtn style={{ marginRight: 15 }}
                    imgWidth={40}
                    imgHeight={40}
                    source={require('#/home/player.png')}
                    onPress={this.enterCloudPhone.bind(this, item)} />
            </View>
        )
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

    /**
    *  添加云手机
    */
    addCloudPhoneClick = () => {
        this.navigate('PayCloudPhone', { title: '购买云手机' })
    }

    /**
    *  编辑手机名称按钮点击事件
    */
    editBtnClick = (phone: CloudPhoneModal) => {
        this.editPhoneNameModal?.showModal(phone)
    }


    /**
    *  更新设备名称
    */
    updatePhoneName = (name: string, deviceId: number) => {

        request.post('/cloudPhone/phone/updateDeviceName', { deviceName: name, id: deviceId }, true).then(newPhone => {
            let newPhoneList = this.state.phoneList.map(pm => {
                if (pm.id == newPhone.id) {
                    return newPhone
                }
                return pm
            })
            this.setState({ phoneList: newPhoneList })
        })

    }


    /**
    *  设备设置事件
    */
    onPhoneSettingAction = (action: 'reStart' | 'upFile' | 'upApp' | 'renew', cloudPhone: CloudPhoneModal) => {
        if (this.checkCloudPhone(cloudPhone)) {
            let { reStartPhoneIds, renewPhoneIds } = this.state

            switch (action) {
                case 'reStart': // 重启
                    this.setState({ reStartPhoneIds: [...reStartPhoneIds, cloudPhone.id] })
                    request.post('/cloudPhone/phone/resetDevice', { deviceIds: cloudPhone.deviceId, type: 1 }, true).then(result => {
                        this.setState({ reStartPhoneIds: this.state.reStartPhoneIds.filter(id => id != cloudPhone.id) })
                    }).catch(err => {
                        this.setState({ reStartPhoneIds: this.state.reStartPhoneIds.filter(id => id != cloudPhone.id) })
                    })
                    break;

                case 'upFile':
                    break;

                case 'upApp':
                    break;

                case 'renew':
                    this.setState({ renewPhoneIds: [...renewPhoneIds, cloudPhone.id] })
                    request.post('/cloudPhone/phone/resetDevice', { deviceIds: cloudPhone.deviceId, type: 3 }, true).then(result => {
                        this.setState({ renewPhoneIds: this.state.renewPhoneIds.filter(id => id != cloudPhone.id) })
                    }).catch(err => {
                        this.setState({ renewPhoneIds: this.state.renewPhoneIds.filter(id => id != cloudPhone.id) })
                    })
                    break;
            }
        }
    }


    /**
    *  续费按钮点击事件
    */
    renewBtnClick = (cloudPhone: CloudPhoneModal) => {
        this.navigate('PayCloudPhone', { cloudPhone, title: '续费' })
    }

    /**
    *  进入手机
    */
    enterCloudPhone = (phone: CloudPhoneModal) => {
        if (this.checkCloudPhone(phone)) {

        }
    }

    /**
    *  banner 点击事件
    */
    bannerClick = (swiper: any, data: { index: number }) => {
        console.log(data);
        console.log(this.state.bannerDatas[data.index])
        let banner = this.state.bannerDatas[data.index]
        if (banner) {
            this.navigate('BaseWebView', { title: banner.proTypeStr, uri: banner.skipUrl })
        }

    }

    /**
    *  检查手机状况  是否可以操作
    */
    checkCloudPhone = (phone: CloudPhoneModal) => {
        let { reStartPhoneIds, renewPhoneIds } = this.state

        if (reStartPhoneIds.indexOf(phone.id) != -1) {
            //此手机正在重启
            this.tipModal?.showModal('一键重启中，请稍后…')
            return false;
        }

        if (renewPhoneIds.indexOf(phone.id) != -1) {
            // 此手机正在恢复出厂设置
            this.tipModal?.showModal('一键新机中，请稍后…')
            return false;
        }

        if (phone.status == 2) {
            // 此手机属于被控制状态
            this.tipModal?.showModal('其他端正在控制是否强制登录')
            return false;
        }

        if (phone.status == 10) {
            // 此手机 处于过期状态
            this.tipModal?.showModal('手机已过期')
            return false;
        }

        if (phone.status == 15) {
            // 此手机 处于已销毁状态
            this.tipModal?.showModal('手机已销毁')
            return false;
        }
        if (phone.status == 20) {
            // 此手机 处于离线状态
            this.tipModal?.showModal('手机已离线')
            return false;
        }

        return true
    }
}