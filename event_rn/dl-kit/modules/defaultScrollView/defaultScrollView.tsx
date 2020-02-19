import React from 'react';
import { RefreshControl, ScrollView, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';

interface Props {
  style?: ViewStyle,
  onRefresh?: () => void
}

export default class DefaultScrollView extends BaseComponent<Props> {
  state = {
    refreshing: true,
  }
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, ...this.props.style }}
        keyboardDismissMode='on-drag'
        refreshControl={this.props.onRefresh ? <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} /> : undefined}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {this.props.children}
      </ScrollView>
    );
  }

  endRefresh = () => {
    this.setState({
      refreshing: false
    })
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, this.props.onRefresh)
  }


}