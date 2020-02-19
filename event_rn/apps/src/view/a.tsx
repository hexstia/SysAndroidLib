import { BaseNavNavgator, DatePicker, Form, Picker, Region } from 'dl-kit';
import React from 'react';
import { Text, View } from 'react-native';
// import B from '~/view/b';


export default class A extends BaseNavNavgator {

  constructor(props: any) {
    super(props)
    this.state = {
    }

    // let ccd = B
    // let cc = this.data.name

  }

  form: Form | null = null;

  render() {

    let date = new Date();

    let param = { name: 'ABC' }
 
    return (
      <View ref='' style={{ flex: 1, justifyContent: 'center' }}>
        {/* <Image style={{width:100,height:100}} source={require('#/other/empty_error.png')} /> */}
        <Text onPress={() => this.navigate('B')}>1s's's</Text>
        <Text onPress={() => this.navigate('B')}>{date.format('yyyy-MM-dd')}</Text>
        <Text onPress={this.getFormValue} >获取数据</Text>
        <Form ref={form => this.form = form}>
          <DatePicker labelText={'ss'} />
          <Region property='address' onChange={() => { }} />
          <Picker property='picker' dataSource={['nn', 'mmm']} placeholder='qxz' />
        </Form>
      </View>
    );
  }

  getFormValue = () => {



  }
  goBack = () => {

  }
}