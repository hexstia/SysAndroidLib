
import React from 'react';
import { View, ViewStyle } from 'react-native';
import BaseComponent from '../../base/baseComponent';
import Input from '../form/input';
import InputArea from '../form/input-area';
import Picker from '../form/picker';
import Region from '../form/region';
import DatePicker from './datePicker';

interface FormProps {
  /**
  *  form 样式
  */
  style?: ViewStyle,
  /**
  *  分割线组件
  */
  separator?: () => Element
}

export default class Form extends BaseComponent<FormProps> {
  constructor(props: FormProps) {
    super(props);
    //表单数据值
    this.formRef = {};
  }

  render() {
    return (
      <View style={{ ...this.props.style }}>
          {this.renderComponent()}
      </View>
    )
  }

  // 子组件ref 字典集合
  formRef: any = {}

  renderComponent() {

    let children = React.Children.map(this.props.children, (child: any, index) => {
      if (child) {
        let props = (Object.assign({}, child.props) || {}) as { ref: any };

        props.ref = (_instance: any) => {
          if (_instance && _instance.props.property) {
            this.formRef[_instance.props.property] = _instance;
          }
        };
        return React.cloneElement(child as any, props);
      }
    }).filter(item => !!item);

    // 分割线
    if (!this.props.separator) {
      return children;
    }

    let size = children.length * 2 - 1;
    let array = [];

    for (let i = 0; i < size; i++) {
      if (i % 2 == 0) {
        array.push(children[i / 2]);
      } else {
        array.push(this.props.separator());
      }
    }

    return array;
  }


  /**
  *  重置form数据
  */
  reset() {
    Object.keys(this.formRef).map(k => {
      let _instance = this.formRef[k];
      if (_instance) {
        if (_instance instanceof Form) {
          _instance.reset();
        } else {
          if (this.isFormItem(_instance)) {
            _instance.setValue(null);
          }
        }
      }
    });
  }

  //获取表单数据
  getValue() {
    let formData: any = {}
    Object.keys(this.formRef).map((k, i) => {
      let _instance = this.formRef[k];
      if (_instance && (_instance instanceof Form || this.isFormItem(_instance))) {
        formData[_instance.props.property] = _instance.getValue();
      }
    });
    return formData;
  }

  /**
   * 为表单设置值
   *
   * @param formData
   * @returns {*}
   */
  setValue(formData: { [property: string]: any }) {
    //遍历调用
    Object.keys(formData).map((k, i) => {
      let _instance = this.formRef[k];
      if (_instance instanceof Form || this.isFormItem(_instance)) {
        _instance.setValue(formData[k]);
      }
    });
  }

  /**
   * 判断是否为表单项目
   *
   * @param t 节点类型
   */
  isFormItem = (t: Element) => {
    return !![Picker, DatePicker, Input, Region, Form, InputArea].filter(item => {
      return t instanceof item
    }).length;
  }
}
