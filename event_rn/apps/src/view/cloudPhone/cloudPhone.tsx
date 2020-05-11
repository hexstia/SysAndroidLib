
import { BaseNavNavgator, configs, DefaultListView, defaultStyle, ImageBtn, msg, request, tips } from 'dl-kit';
import { Banner, CloudPhoneModal } from 'global';
import React from 'react';
import { Image, ImageBackground, Platform, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Swiper from 'react-native-swiper';
import { addCloudPhoneEventListener, addSocketEventListener, checkSocketConnect, closeCloudPhone, enterCloudPhone, sendWebsocketData, startWebsocketConnection } from '../../module/CloudPhoneModule';
import CloudPhoneSettingModal from '../../module/cloudPhoneSettingModal';
import EditPhoneNameModal from '../../module/editPhoneNameModal';
import TipModal from '../../module/tipModal';
import UploadAppModal from '../../module/uploadAppModal';
import UploadFileModal from '../../module/uploadFileModal';



interface State {
    /**
    *  当前显示类型
    */
    showType: 'viewType' | 'listType',
    /**
    *  手机列表
    */
    phoneList: CloudPhoneModal[],
    /**
    *  手机部分的高度 包含续费条，手机page 页码
    */
    contentHeight: number,
    /**
    *  当前显示的手机
    */
    phoneIndex: number,
    /**
    *  重启的手机id 列表
    */
    reStartPhoneIds: number[],
    /**
    *  重置的手机id 列表
    */
    renewPhoneIds: number[],
    /**
    *  banner 数据
    */
    bannerDatas: Banner[],
    /**
    *  手机截图截集合
    */
    screenShotSet: any,
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
        screenShotSet: {}
    }

    editPhoneNameModal: EditPhoneNameModal | null = null;
    uploadFileModal: UploadFileModal | null = null;
    uploadAppModal: UploadAppModal | null = null;
    cloudPhoneSettingModal: CloudPhoneSettingModal | null = null;
    tipModal: TipModal | null = null;
    enterCloudPhoneLoading: boolean = false;


    constructor(props: any) {
        super(props)
        if (configs.token) {
            this.loadData()
            this.addEventListener()
        }
        this.loadBanner()

        msg.on('phoneListChange', () => {
            this.loadData()
        })
    }

    /**
    *  获取云手机列表
    */
    loadData = () => {
        let param = { page: 1, pageSize: 1000 }
        // 获取云手机列表
        request.post('/cloudPhone/phone/list', param, true).then(result => {
            this.setState({ phoneList: result.list }, this.getAllScreenshot)
        }).catch(err => {
            console.log('获取云手机列表', err)
        })
    }

    /**
    *  获取banner广告
    */
    loadBanner = () => {
        // 获取云手机的banner图
        request.post('/tcssPlatform/user/queryAdBanner', { type: Platform.OS == 'ios' ? 2 : 1, proType: 1 }, true).then(result => {
            this.setState({ bannerDatas: result.list })
        })
    }

    /**
    *  获取所有手机的截图
    */
    getAllScreenshot = () => {
        checkSocketConnect().then(v => {
            this.state.phoneList.map((p, index) => {
                if (p.status != 10 && p.status != 15 && p.status != 20) {
                    setTimeout(() => {
                        this.getScreenshot(p);
                    }, index * 1000);
                }
            })

        }).catch((err: { code: string }) => {
            // socket未连接，等三秒再试试
            setTimeout(() => {
                this.getAllScreenshot()
            }, 3000);
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
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: 'viewType' })} />
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: 'listType' })} />
                        </ImageBackground>

                        {/* 右侧俩按钮 */}
                        {
                            <View style={{ width: 90, height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                                {/* 添加手机的时候，不显示设置按钮 */}
                                {
                                    (nowSelectPhone && nowSelectPhone.id && showType == 'viewType') ? (
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
                        }

                    </View>
                </View>

                {/* 手机内容部分 */}
                <View style={{ flex: 1 }}>
                    {this.loadViewContent()}
                    {this.loadListContent()}
                </View>
                {/* {showType == 'viewType' ? this.loadViewContent() : this.loadListContent()} */}

                {/* 修改手机名称的modal */}
                <EditPhoneNameModal
                    ref={pm => this.editPhoneNameModal = pm}
                    updatePhoneName={this.updatePhoneName} />

                {/* 手机设置弹窗 */}
                <CloudPhoneSettingModal
                    ref={sm => this.cloudPhoneSettingModal = sm}
                    onPhoneSettingAction={this.onPhoneSettingAction} />
                {/* 上传文件弹窗 */}
                <UploadFileModal
                    ref={uf => this.uploadFileModal = uf}
                />

                {/* 上传应用 */}
                <UploadAppModal
                    ref={ua => this.uploadAppModal = ua}
                />
                {/* 提示框 */}
                <TipModal
                    ref={tm => this.tipModal = tm}
                />
            </View>
        );
    }


    /**
    *  添加云手机监听 和 Socket 监听
    */
    addEventListener = () => {
        addCloudPhoneEventListener((eventName, phone) => {
            switch (eventName) {
                case 'cloudPhoneRestart':
                    this.onPhoneSettingAction('reStart', phone)
                    break;

                case 'cloudUploadFile':
                    this.onPhoneSettingAction('upFile', phone)
                    break;

                case 'cloudUploadApk':
                    this.onPhoneSettingAction('upApp', phone)
                    break;

                case 'cloudPhoneRenew':
                    this.onPhoneSettingAction('renew', phone)
                    break;

                case 'cloudPhoneBack':
                    request.post('/cloudPhone/phone/groupController', { deviceIds: phone.deviceId, type: '2', selectAll: '2', searchGroupId: '', status: '' }).then(res => {

                    })
                    break;

                case 'cloudPhoneHome':
                    request.post('/cloudPhone/phone/groupController', { deviceIds: phone.deviceId, type: '1', selectAll: '2', searchGroupId: '', status: '' }).then(res => {

                    })
                    break;

                case 'cloudPhoneClose':
                    this.getScreenshot(phone)
                    break;
            }
        })


        addSocketEventListener((eventName, socketMessage) => {
            let { phoneList, reStartPhoneIds, renewPhoneIds, screenShotSet } = this.state

            console.log('收到socket消息', socketMessage);
            try {
                switch (eventName) {
                    case 'webSocektMessage':
                        let messageData = JSON.parse(socketMessage.message);
                        if (messageData.method == 'rebootReceive') {
                            // 重启成功 和 重置成功都是返回这个 一起处理
                            let newRSIds = reStartPhoneIds.filter(id => id != messageData.data.deviceId)
                            let newRNIds = renewPhoneIds.filter(id => id != messageData.data.deviceId)

                            this.setState({ reStartPhoneIds: newRSIds, renewPhoneIds: newRNIds })

                            phoneList.forEach(p => {
                                this.getScreenshot(p);
                            })
                        } else if (messageData.method == 'screenShot') {

                            let newScreenShotSet = { ...screenShotSet }
                            newScreenShotSet[messageData.data.deviceId] = 'data:image/png;base64,' + messageData.data.content
                            this.setState({ screenShotSet: newScreenShotSet })
                        } else if (messageData.method == 'takeUpNotify') {
                            // 设备被占用
                            closeCloudPhone()
                            tips.showTips('该账号已被其他端登陆')
                        }

                        break

                    case 'webSocektOnClose':
                        setTimeout(() => {
                            console.log('开启socket');
                            startWebsocketConnection()
                        }, 1000);
                        break;

                    case 'webSocektOnError':
                        setTimeout(() => {
                            startWebsocketConnection()
                        }, 1000);
                        break;
                }

            } catch (error) {
                console.log('socket消息解析失败', socketMessage);
            }
        })
    }


    /**
    *  加载 视图内容
    */
    loadViewContent = () => {
        let { phoneList, contentHeight, bannerDatas, reStartPhoneIds, renewPhoneIds, screenShotSet } = this.state
        let addImgHeight = contentHeight - 10 - 10
        let addImgWith = Math.floor(addImgHeight * (210 / 413))

        let phoneSwiperHeight = contentHeight - 97;
        let phoneSwiperWidth = Math.floor(addImgHeight * (185 / 363))

        let phoneWidth = phoneSwiperWidth * 166 / 185
        let phoneHeight = phoneSwiperHeight * 295 / 363
        let phoneTop = phoneSwiperHeight * 29.5 / 363

        let phoneItems = []

        phoneList.forEach((phone, index) => {

            let isRestart = reStartPhoneIds.indexOf(phone.deviceId) != -1
            let isRenew = renewPhoneIds.indexOf(phone.deviceId) != -1
            let screenShot = screenShotSet[`${phone.deviceId}`]
            let screenShotSource = screenShot ? { uri: screenShot } : require('#/home/tempPhoneContent.png')
            phoneItems.push(
                <View style={{ alignItems: 'center', flex: 1 }} key={phone.deviceId}>
                    {/* 顶部蓝色条目 */}
                    <View style={{ height: 50, marginTop: 5, marginHorizontal: 1, backgroundColor: '#6498FF', flexDirection: 'row' }}>
                        <View style={{ flex: 1, marginLeft: 15, justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>手机名称：{phone.deviceName} </Text>
                                <ImageBtn style={{ marginLeft: 10 }}
                                    imgWidth={15}
                                    imgHeight={15}
                                    source={require('#/home/write.png')}
                                    onPress={this.editBtnClick.bind(this, phone)} />
                            </View>
                            <Text style={{ color: '#fff', fontSize: 14 }}>剩余时间：{phone.remainingTime}</Text>
                        </View>

                        {/* 续费按钮 */}
                        <ImageBtn style={{ marginRight: 13 }}
                            imgWidth={64} imgHeight={29}
                            source={require('#/home/xufei.png')}
                            onPress={this.renewBtnClick.bind(this, phone)} />
                    </View>
                    {/* 手机 */}
                    <TouchableOpacity
                        style={{ width: phoneSwiperWidth, height: phoneSwiperHeight, marginTop: 10 }}
                        activeOpacity={1}
                        onPress={this.enterCloudPhone.bind(this, phone)}
                        key={phone.deviceId} >
                        <ImageBackground style={{ width: phoneSwiperWidth, height: phoneSwiperHeight, alignItems: 'center' }} resizeMode='contain' source={require('#/home/tempPhone.png')} >
                            <ImageBackground style={{ width: phoneWidth, height: phoneHeight, marginTop: phoneTop, alignItems: 'center', }}
                                resizeMode='contain'
                                source={screenShotSource} >
                                {
                                    (isRestart || isRenew) && (
                                        <View style={{ marginTop: 110, alignItems: 'center' }}>
                                            <View style={{ width: 84, height: 84, borderRadius: 42, borderColor: '#6498FF', borderWidth: 6, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#A0C3FF', justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#6498FF', justifyContent: 'center', alignItems: 'center' }} >
                                                        <Text style={{ color: '#fff', fontSize: 12 }}>loading</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={{ color: '#fff', fontSize: 12, marginTop: 6, lineHeight: 15, textAlign: 'center', fontWeight: '600' }}>{isRestart ? '设备重启中\n请稍后' : '一键新机中\n请稍后'}</Text>
                                        </View>
                                    )
                                }
                            </ImageBackground>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* 页码 */}
                    <View style={{ height: 32, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#6498FF', fontSize: 16 }}>{index + 1}<Text style={{ color: '#ccc' }}>/{phoneList.length}</Text></Text>
                    </View>
                </View>

            )
        })

        /* 最后的添加手机 */
        phoneItems.push(
            <View style={{ alignItems: 'center', flex: 1 }} key='asda'>
                <TouchableOpacity style={{ marginVertical: 10, width: addImgWith, height: addImgHeight, alignSelf: 'center' }}
                    activeOpacity={1}
                    onPress={this.addCloudPhoneClick}>
                    <Image style={{ alignSelf: 'stretch', width: addImgWith, height: addImgHeight }}
                        resizeMode='contain'
                        source={require('#/home/addCloudPhone.png')} />
                </TouchableOpacity>
            </View>
        )


        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }} onLayout={(e) => this.setState({ contentHeight: e.nativeEvent.layout.height })}>

                    {
                        phoneList.length == 0 ? (
                            <TouchableOpacity style={{ marginVertical: 10, width: addImgWith, height: addImgHeight, alignSelf: 'center' }}
                                activeOpacity={1}
                                onPress={this.addCloudPhoneClick}>
                                <Image style={{ alignSelf: 'stretch', width: addImgWith, height: addImgHeight }} resizeMode='contain' source={require('#/home/addCloudPhone.png')} />
                            </TouchableOpacity>
                        ) : (
                                <View style={{ flex: 1 }}>
                                    <Swiper
                                        loop={false}
                                        showsPagination={false}
                                        onIndexChanged={this.phoneIndexChanged}>
                                        {/* 手机们 */}
                                        {
                                            phoneItems
                                        }
                                    </Swiper>
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
                                autoplayTimeout={4}
                                paginationStyle={{ bottom: 1 }}>
                                {
                                    bannerDatas.map((banner, index) => {

                                        return (
                                            <TouchableOpacity style={{ width: defaultStyle.device.width, height: 56 }}
                                                onPress={this.bannerClick.bind(this, banner)}
                                                key={banner.id}>
                                                <Image style={{ width: defaultStyle.device.width, height: 56 }} resizeMode='cover' source={{ uri: banner.imagePath }} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </Swiper>
                        ) : null
                    }

                    <Text style={{ position: 'absolute', top: 5, right: 15, color: '#FE5437', fontSize: 14 }}>广告</Text>

                </View>

            </View>
        )
    }

    /**
    *  加载 列表内容
    */
    loadListContent = () => {
        let { phoneList, showType } = this.state

        if (showType == 'listType') {
            return (
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#f3f4f5' }}>
                    <DefaultListView
                        useExternalSource={true}
                        dataSource={{ data: phoneList, pageNum: 0 }}
                        renderItem={this.renderCloudPhoneCell}
                        listEmptyComponent={this.renderListEmptyComponent}
                        listHeaderComponent={this.renderListHeader} />
                </View>
            )
        }

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
                        <Text style={{ color: '#333', fontSize: 16, flex: 1 }} numberOfLines={1}>手机名称：{item.deviceName}</Text>
                        <ImageBtn style={{ marginLeft: 10 }}
                            imgWidth={15}
                            imgHeight={15}
                            source={require('#/home/edit_grey.png')}
                            onPress={this.editBtnClick.bind(this, item)} />
                    </View>
                    <Text style={{ color: '#999', fontSize: 16, marginTop: 6 }}>剩余时间：{item.remainingTime}</Text>
                </View>
                <ImageBtn style={{ marginRight: 15, marginLeft: 15 }}
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
        this.navigate('PayCloudPhone', { title: '购买云手机', payCallback: this.loadData })
    }

    /**
    *  编辑手机名称按钮点击事件
    */
    editBtnClick = (phone: CloudPhoneModal) => {
        this.editPhoneNameModal?.showModal(phone)
    }

    /**
    *  当前展示的手机序号发生变化
    */
    phoneIndexChanged = (index: number) => {
        this.setState({ phoneIndex: index })
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
                    let messageData = {
                        method: 'apply',
                        type: 'cloudPhone',
                        data: {
                            device: [cloudPhone.deviceId],
                            selectAll: ''
                        }
                    }

                    sendWebsocketData(JSON.stringify(messageData)).then(v => {
                        request.post('/cloudPhone/phone/resetDevice', { deviceIds: cloudPhone.deviceId, type: 1 }, true).then(result => {
                            this.setState({ reStartPhoneIds: [...reStartPhoneIds, cloudPhone.deviceId] })
                        })
                    })

                    break;

                case 'upFile':
                    this.uploadFileModal && this.uploadFileModal.uploadFile(cloudPhone)
                    break;

                case 'upApp':
                    if (Platform.OS == 'ios') {
                        this.uploadAppModal && this.uploadAppModal.uploadApp(cloudPhone);
                    } else {
                        DocumentPicker.pick({ type: DocumentPicker.types.allFiles }).then(res => {
                            console.log('选择文件', res);

                            request.upload('/cloudPhone/phone/installApk', { paths: [res.uri], deviceIds: cloudPhone.deviceId + '', selectAll: 2, searchGroupId: '', status: '' }, true).then(res => {
                                tips.showTips('上传成功!');
                            })

                        }).catch((err: any) => {
                            console.log('文件选择失败', err);
                            if (DocumentPicker.isCancel(err)) {
                                // User cancelled the picker, exit any dialogs or menus and move on
                            } else {
                                throw err;
                            }
                        })
                    }
                    break;

                case 'renew': // 恢复出厂设置
                    let messageData2 = {
                        method: 'apply',
                        type: 'cloudPhone',
                        data: {
                            device: [cloudPhone.deviceId],
                            selectAll: ''
                        }
                    }
                    sendWebsocketData(JSON.stringify(messageData2)).then(v => {
                        request.post('/cloudPhone/phone/resetDevice', { deviceIds: cloudPhone.deviceId, type: 2 }, true).then(result => {
                            this.setState({ renewPhoneIds: [...renewPhoneIds, cloudPhone.deviceId] })
                        })
                    })

                    break;
            }
        }
    }


    /**
    *  续费按钮点击事件
    */
    renewBtnClick = (cloudPhone: CloudPhoneModal) => {
        this.navigate('PayCloudPhone', { cloudPhone, title: '续费', payCallback: this.loadData })
    }

    /**
    *  进入手机
    */
    enterCloudPhone = (phone: CloudPhoneModal) => {
        if (this.checkCloudPhone(phone) && !this.enterCloudPhoneLoading) {
            this.enterCloudPhoneLoading = true
            tips.showLoading('打开中')
            enterCloudPhone(phone).then(() => {
                tips.hideLoading()
                this.enterCloudPhoneLoading = false

            }).catch(err => {
                tips.hideLoading()
                this.enterCloudPhoneLoading = false

            })
        }
    }

    /**
    *  banner 点击事件
    */
    bannerClick = (banner: Banner) => {

        this.navigate('BaseWebView', { title: banner.proTypeStr, uri: banner.skipUrl })

    }

    /**
    *  获得手机截图
    */
    getScreenshot = (phone: CloudPhoneModal) => {

        let messageData = {
            method: 'apply',
            type: 'cloudPhone',
            data: {
                device: [phone.deviceId],
                selectAll: '1'
            }
        }
        sendWebsocketData(JSON.stringify(messageData)).then(v => {
            let param = { screenStatus: 2, height: 568, width: 320, deviceId: phone.deviceId }
            request.post('/cloudPhone/phone/screenshotCloudphone', param, false).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    /**
    *  检查手机状况  是否可以操作
    */
    checkCloudPhone = (phone: CloudPhoneModal) => {
        let { reStartPhoneIds, renewPhoneIds } = this.state

        if (reStartPhoneIds.indexOf(phone.deviceId) != -1) {
            //此手机正在重启
            this.tipModal?.showModal('一键重启中，请稍后…')
            return false;
        }

        if (renewPhoneIds.indexOf(phone.deviceId) != -1) {
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