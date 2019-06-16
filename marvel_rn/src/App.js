/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// redux
import { Provider } from 'react-redux';
import store from './store';

// Project components
import Main from './screens/main'

type Props = {};
class App extends Component<Props> {
  constructor(){
    super();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Main />
      </Provider >
    );
  }
}

export default App