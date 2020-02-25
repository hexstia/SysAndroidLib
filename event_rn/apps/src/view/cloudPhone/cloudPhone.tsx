
import { BaseNavNavgator, defaultStyle, ImageBtn, request } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import CloudPhoneSettingModal from '../../module/cloudPhoneSettingModal';
import EditPhoneNameModal from '../../module/editPhoneNameModal';


interface State {
    showType: 'viewType' | 'listType',
    phoneList: CloudPhoneModal[],
    contentHeight: number,
    phoneIndex: number,
}
export default class CloudPhone extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
        showType: 'viewType',
        phoneList: [],
        contentHeight: 400,
        phoneIndex: 0
    }

    editPhoneNameModal: EditPhoneNameModal | null = null;
    cloudPhoneSettingModal: CloudPhoneSettingModal | null = null;

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
            this.setState({ phoneList: [...result.list, ...result.list, ...result.list] })
        }).catch(err => {
            console.log('获取云手机列表', err)
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
                                                onPress={this.settingBtnClick}>
                                                <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('#/home/setting.png')} />
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                    <TouchableOpacity style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.refreshBtnClick}>
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
                    placeholder={nowSelectPhone.deviceName}
                    onChangePhoneName={this.onChangePhoneName} />

                {/* 手机设置弹窗 */}
                <CloudPhoneSettingModal
                    ref={sm => this.cloudPhoneSettingModal = sm}
                    cloudPhone={nowSelectPhone} />
            </View>
        );
    }

    /**
    *  加载 视图内容
    */
    loadViewContent = () => {
        let { phoneList, contentHeight, phoneIndex } = this.state
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
                                                <ImageBtn imgWidth={15} imgHeight={15} source={require('#/home/write.png')} onPress={this.editBtnClick} />
                                            </View>
                                            <Text style={{ color: '#fff', fontSize: 14 }}>剩余时间：{nowSelectPhone.remainingTime}</Text>
                                        </View>

                                        <ImageBtn style={{ marginRight: 13 }} imgWidth={64} imgHeight={29} source={require('#/home/xufei.png')} onPress={this.renewBtnClick} />
                                    </View>

                                    {/* 图片 page */}
                                    <View style={{ marginTop: 10, flex: 1, width: phoneSwiperWidth, height: phoneSwiperHeight, alignSelf: 'center' }}>
                                        <Swiper
                                            loop={false}
                                            removeClippedSubviews={false}
                                            showsPagination={false}
                                            onIndexChanged={this.onIndexChanged}>
                                            {
                                                phoneList.map((phone, index) => {
                                                    return (
                                                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#f0f', borderWidth: 1, borderColor: '#000' }} activeOpacity={1}  >

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

                </View>

            </View>
        )
    }

    /**
    *  加载 列表内容
    */
    loadListContent = () => {
        return (
            <View style={{ flex: 1 }}>

            </View>
        )
    }

    /**
    *  设置按钮点击事件
    */
    settingBtnClick = () => {
        this.cloudPhoneSettingModal?.showModal();
    }

    /**
    *  刷新按钮点击事件
    */
    refreshBtnClick = () => {
        this.loadData()
    }

    /**
    *  添加云手机
    */
    addCloudPhoneClick = () => {
        console.log('添加云手机');

    }

    /**
    *  编辑按钮点击事件
    */
    editBtnClick = () => {
        this.editPhoneNameModal?.showModal()
    }

    /**
    *  确定修改手机名称
    */
    onChangePhoneName = (name: string) => {
        let { phoneList, phoneIndex } = this.state

        let nowSelectPhone = phoneList[phoneIndex]

        request.post('/cloudPhone/phone/updateDeviceName', { deviceName: name, id: nowSelectPhone.id }, true).then(newPhone => {
            let newPhoneList = phoneList.map(pm => {
                if (pm.id == newPhone.id) {
                    return newPhone
                }
                return pm
            })
            this.setState({ phoneList: newPhoneList })
        })

    }


    /**
    *  续费按钮点击事件
    */
    renewBtnClick = () => {

    }


    /**
    *  索引变化回调
    */
    onIndexChanged = (index: number) => {
        this.setState({ phoneIndex: index })
        console.log(index);
    }
}