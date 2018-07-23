import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackNav from './src/Navigation/StackNav';
import DrawerNav from './src/Navigation/DrawerNav';
import TabNav from './src/Navigation/TabNav';
import MixedNavigators from './src/Navigation/MixedNavigators';

export default class App extends Component {
  render() {
    return (
      <MixedNavigators />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  api: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  date_time: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
