/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import { createNavNavigator } from 'dl-kit';
import { UserModel } from 'global';
import React, { Component } from 'react';
import { loadLoginInfoFromLocal } from '../module/publicFunc';
import routes from './router';


interface Props {
  name: string
}
export default class App extends Component<Props, {}> {

  constructor(props: Props) {
    super(props)
    let cc: UserModel

    loadLoginInfoFromLocal((success => {
      if (success) {

      } else {

      }
    }))
  }

  render() {


    let Nav = createNavNavigator(routes, 'Login')
    return (
      <Nav />
    );
  }
}

