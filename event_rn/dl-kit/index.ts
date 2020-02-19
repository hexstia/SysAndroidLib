
import deepEqual from 'fast-deep-equal';
import { Text, TextInput } from 'react-native';
import BaseComponent from './base/baseComponent';
import BaseNavNavgator from './base/baseNavNavgator';
import TemplateText from './base/baseText';
import configs from './configs';
import constant from './configs/constant';
import defaultStyle from './configs/defaultStyle';
import ActionSheetModal from './modules/actionSheet/index';
import audio from './modules/audio/index';
import DefaultListView from './modules/defaultListView/defaultListView';
import DefaultModal from './modules/defaultModal/defaultModal';
import DefaultScrollView from './modules/defaultScrollView/defaultScrollView';
import DatePicker from './modules/form/datePicker';
import Form from './modules/form/index';
import Input from './modules/form/input';
import InputArea from './modules/form/input-area';
import Picker from './modules/form/picker';
import Region from './modules/form/region';
import Icon from './modules/icon';
import ImageBtn from './modules/imageBtn/index';
import ImageViewer from './modules/imageViewer/viewer';
import SearchBar from './modules/searchBar/searchBar';
import VideoView from './modules/video';
import './util/extension/date-util';
import './util/extension/string-util';
import { imageCamera, imagePicker } from './util/imagePicker';
import msg from './util/msg';
import createNavNavigator from './util/navigation/createNavNavigator';
import createTabNavigator from './util/navigation/createTabNavigator';
import createTabRoute from './util/navigation/createTabRoute';
import request from './util/request';
import tips from './util/tip';

let validator = require('validator')

// 全局设置 TextInput 和  Text 的文字大小不随着系统文字改变而改变
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, { allowFontScaling: false })
Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false })

// 隐藏黄色警告⚠️
console.disableYellowBox = true;


export { Icon, ImageViewer, DatePicker, Form, BaseComponent, audio, VideoView, Region, Picker, InputArea, TemplateText, Input, createNavNavigator, createTabNavigator, msg, BaseNavNavgator, imagePicker, request, tips, configs, DefaultListView, defaultStyle, createTabRoute, DefaultModal, SearchBar, validator, constant, DefaultScrollView, ActionSheetModal, imageCamera, ImageBtn, deepEqual };


