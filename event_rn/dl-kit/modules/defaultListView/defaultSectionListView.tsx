

import equal from 'fast-deep-equal';
import React from 'react';
import { SectionList, SectionListData, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import BaseComponent from '../../base/baseComponent';
import defaultStyle from '../../configs/defaultStyle';
import ListEmptyView from './listEmptyView';

interface Props {
    /**
    *  样式
    */
    style?: ViewStyle,
    /**
    *  cell 点击事件
    */
    onPressItem?: (item: any, index: number, section: SectionListData<any>) => void,
    /**
    *  加载每个cell  必填
    */
    renderItem: (item: any, index: number, section: SectionListData<any>) => React.ReactElement,

    /**
    *  加载 组头
    */
    renderSectionHeader?: (section: SectionListData<any>) => React.ReactElement,

    /**
    *  加载组尾
    */
    renderSectionFooter?: (section: SectionListData<any>) => React.ReactElement,

    /**
    *  是否显示分割线 默认显示
    */
    showItemSeparator?: boolean,
    /**
    *  指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，
    */
    initialNumToRender?: number,
    /**
    *  空列表显示的组件
    */
    listEmptyComponent?: (emptyType: 'noData' | 'errorData') => (React.ReactElement | undefined),
    /**
    *  列表底部组件
    */
    listFooterComponent?: () => (React.ReactElement | undefined),
    /**
    *  列表头部组件
    */
    listHeaderComponent?: () => (React.ReactElement | undefined),
    /**
    *  当使用尺寸计算工具时
    */
    itemLayoutData?: { itemHeight: number, sectionHeaderHeight: number, sectionFooterHeight: number, listHeaderHeight: number }
    /**
    *  其他相关数据
    */
    extraData?: any,
    /**
    *  加载数据 根据pageNum计算当前是上拉加载还是下拉刷新,没有此函数就没有上拉下拉动作。
    */
    loadData?: (pageNum: number) => void,
    /**
    *  是否移除出了屏幕的cell ，默认yes
    */
    removeClippedSubviews?: boolean,
    /**
   *  使用外部数据源
   */
    useExternalSource?: boolean,
    /**
    *  外部数据源
    */
    dataSource?: { data: any[] | null, pageNum: number },
}

interface State {
    dataSource: any[],
    refreshing: boolean,
    pageNum: number,
    /**
    *  是否没有更多数据
    */
    noMoreData: boolean,
    /**
    *  空列表类型
    */
    emptyType: 'noData' | 'errorData',
    /**
    *  是否正在上拉加载
    */
    loadMoring: boolean
}

export default class DefaultSectionListView extends BaseComponent<Props> {

    static defaultProps = {
        showItemSeparator: true,
        removeClippedSubviews: true,
        useExternalSource: false
    }

    state: State = {
        dataSource: (this.props.dataSource || { data: undefined }).data || [],
        refreshing: true,
        pageNum: 0,
        noMoreData: false,
        emptyType: 'noData',
        loadMoring: false
    }

    /**
    *  当前列表控件
    */
    listView: any | null = null

    constructor(props: Props) {
        super(props)
        setTimeout(() => {
            this.onRefresh()
        }, 500);
    }


    componentWillReceiveProps(nextProps: Props) {

        if (this.props.useExternalSource) {
            let dataSource = nextProps.dataSource || { data: [], pageNum: 0 };
            console.log('刷新数据源', nextProps.dataSource);
            if (dataSource.pageNum == 0) {
                this.setState({
                    dataSource: dataSource.data || [],
                    pageNum: dataSource.pageNum || 0,
                    refreshing: false,
                    noMoreData: dataSource.data ? false : true,
                    emptyType: dataSource.data ? 'noData' : 'errorData',
                    loadMoring: dataSource.data ? false : true,
                }, () => {
                    console.log('刷新数据源之后', this.state);
                });
            } else {
                let isEqual = equal(dataSource.data, this.state.dataSource);

                this.setState({
                    dataSource: dataSource.data || [],
                    pageNum: dataSource.pageNum,
                    noMoreData: isEqual,
                    emptyType: dataSource.data ? 'noData' : 'errorData',
                    loadMoring: isEqual,
                })
            }
        }
    }


    render() {

        console.log('设置分组列表的数据源', this.state.dataSource);
        return (
            <SectionList ref={lv => this.listView = lv}
                initialNumToRender={this.props.initialNumToRender}
                keyboardDismissMode='on-drag'
                style={{ flex: 1, ...this.props.style }}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                renderSectionFooter={this.renderSectionFooter}
                sections={this.state.dataSource}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                ListEmptyComponent={this.props.listEmptyComponent ? this.props.listEmptyComponent(this.state.emptyType) : <ListEmptyView emptyType={this.state.emptyType} reloadDataAction={this.onRefresh} />}
                ListHeaderComponent={this.props.listHeaderComponent && this.props.listHeaderComponent()}
                ListFooterComponent={this.listFooterComponent}
                extraData={this.props.extraData}
                onRefresh={this.props.loadData && this.onRefresh}
                refreshing={this.state.refreshing}
                onEndReachedThreshold={0.3}
                onEndReached={this.props.loadData && this.onEndReached}
                removeClippedSubviews={this.props.removeClippedSubviews}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                // stickySectionHeadersEnabled={true}
                getItemLayout={this.props.itemLayoutData ? this.getItemLayout : undefined}
            />
        );
    }

    /**
    *  动态计算item高度
    */
    getItemLayout: any = sectionListGetItemLayout({
        // The height of the row with rowData at the given sectionIndex and rowIndex
        getItemHeight: () => this.props.itemLayoutData!.itemHeight,
        // These four properties are optional
        getSeparatorHeight: () => this.props.showItemSeparator ? defaultStyle.px2dp(1) : 0, // The height of your separators
        getSectionHeaderHeight: () => this.props.itemLayoutData!.sectionHeaderHeight, // The height of your section headers
        getSectionFooterHeight: () => this.props.itemLayoutData!.sectionFooterHeight, // The height of your section footers
        listHeaderHeight: () => this.props.itemLayoutData!.listHeaderHeight, // The height of your list header
    })

    /**
    *  加载 组头
    */
    renderSectionHeader = ({ section }: { section: SectionListData<any> }) => {

        return this.props.renderSectionHeader ? this.props.renderSectionHeader(section) : null
    }

    /**
    *  加载组尾
    */
    renderSectionFooter = ({ section }: { section: SectionListData<any> }) => {
        return this.props.renderSectionFooter ? this.props.renderSectionFooter(section) : null
    }

    /**
    *   加载cell
    */
    renderItem = ({ item, index, section }: { item: any, index: number, section: SectionListData<any> }) => {
        if (this.props.onPressItem != undefined) {
            return (
                <TouchableOpacity activeOpacity={1} onPress={this.props.onPressItem.bind(this, item, index, section)}>
                    {this.props.renderItem(item, index, section)}
                </TouchableOpacity>
            )
        } else {
            return this.props.renderItem(item, index, section);
        }
    }

    /**
    *  列表底部
    */
    listFooterComponent = () => {
        return (
            <View>
                {this.props.listFooterComponent && this.props.listFooterComponent()}
                {
                    this.state.noMoreData && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                            <Text style={{ color: '#666', fontSize: 14 }}>没有更多数据了...</Text>
                        </View>
                    )
                }

                {
                    (!this.state.noMoreData && this.state.loadMoring) && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                            <Text style={{ color: '#666', fontSize: 14 }}>正在加载更多数据...</Text>
                        </View>
                    )
                }
            </View>
        )
    }

    /**
    *  画分割线
    */
    ItemSeparatorComponent = () => {
        return this.props.showItemSeparator ? (<View style={{ height: defaultStyle.px2dp(1), backgroundColor: '#ccc', marginHorizontal: 10 }}></View>) : null
    }

    /**
    *   下拉刷新数据
    */
    onRefresh = () => {
        console.log('列表下拉刷新')
        this.setState({
            refreshing: true,
        }, () => {
            this.props.loadData && this.props.loadData(0);
        })
    }


    /**
    *  将可视区内位于特定sectionIndex 或 itemIndex (section内)位置的列表项，滚动到可视区的制定位置。
    * 
    * 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to true.
'itemIndex' (number) - Index within section for the item to scroll to. Required.
'sectionIndex' (number) - Index for section that contains the item to scroll to. Required.
'viewOffset' (number) - 一个以像素为单位，到最终位置偏移距离的固定值，比如为了弥补粘接的header所占据的空间。
'viewPosition' (number) - A value of 0 places the item specified by index at the top, 1 at the bottom, and 0.5 centered in the middle.
    */
    scrollToLocation = (params: any) => {
        this.listView && this.listView.scrollToLocation(params);
    }


    /**
  *  上拉加载数据
  */
    onEndReached = () => {
        if (this.state.loadMoring) { return; }
        if (this.state.refreshing) { return; }

        console.log('上拉加载')

        this.setState({
            loadMoring: true
        }, () => {
            this.props.loadData && this.props.loadData(this.state.pageNum + 1)
        })
    }


    /**
    *  设置数据 如实设置数据，没拿到数据就给[] ,网络访问错误就给null , 把请求数据的页码也要传回来。
    */
    setData = (data: any[] | null, pageNum: number) => {
        console.log('列表设置数据', data, pageNum)
        if (pageNum == 0) {
            this.setState({
                dataSource: data ? data : [],
                refreshing: false,
                pageNum: 0,
                noMoreData: data ? false : true,
                emptyType: data ? 'noData' : 'errorData',
                loadMoring: data ? false : true,
            })
        } else {
            this.setState({
                dataSource: data && data.length > 0 ? [...this.state.dataSource, ...data] : this.state.dataSource,
                pageNum: data && data.length > 0 ? pageNum : this.state.pageNum,
                noMoreData: data && data.length == 0 ? true : false,
                emptyType: data ? 'noData' : 'errorData',
                loadMoring: data && data.length == 0 ? true : false,
            })
        }
    }

    /**
    *  更新某一组的的数据
    */
    reloadSectionData = (data: any, index: number) => {
        let dataSource = [...this.state.dataSource]
        dataSource.splice(index, 1, data);
        this.setState({ dataSource })
    }
}



