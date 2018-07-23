import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  ListView,
  TouchableHighlight,
  FlatList,
  SectionList
} from 'react-native';
import { Button, Icon } from 'native-base';

import firebase from "firebase";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA-sOxt7U8Ph42SGWWLGyUTvMJ7c4SNmFc",
    authDomain: "aqumes2018.firebaseapp.com",
    databaseURL: "https://aqumes2018.firebaseio.com",
    projectId: "aqumes2018",
    storageBucket: "aqumes2018.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Fire1 extends Component {

  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    }

    this.itemsRef = this.getRef().child('update');

    // this.renderRow = this.renderRow.bind(this);
    // this.renderRow = this.pressRow.bind(this);
  }

  componentWillMount(){
    //this.getItems(this.itemsRef);
  }

  componentDidMount() {
      this.getItems(this.itemsRef);
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  getItems(itemsRef){
    //let items = [{title:'Item One'},{title:'Item Two'}];
    itemsRef.on('value',(snap) => {
      
      let items = [];

      snap.forEach((child) => {
        items.push(
          
          child.val().Date,
          child.val().Time,
          child.val().API,
          child.val().Status,
          child.val().Temperature,
          child.val().Co,
          child.val().NO2,
          child.val().O3,
          child.val().PM10,
          child.val().PM25,
          child.val().SO2,

          
        );
      });

      console.log('items',items);

      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  pressRow = (index) => {
    console.log(index);
  }

  renderRow(item,index){
    return (
      <View>
      <TouchableHighlight onPress={() => {
        // this.pressRow(index);
        console.log(index);

      }}>
      <View  >
        <Text style={styles.liText2}>
        {item}
        </Text>
      </View>
      </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      
      <View>
         
        <ListView
            dataSource={this.state.itemDataSource}
            renderRow={this.renderRow}          
          />

      </View>
    );
  }
}
/* use button in view if needed
<Button 
          title="Show Screen 1"
          onPress={() => {
            this.props.navigation.navigate('Screen1');
          }}
        />
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  api: {
    alignItems: 'flex-start',
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  daily: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  liText2: {
    flex: 1,
    color: 'red',
    fontSize: 20,
    textAlign: 'left',
    flexDirection: 'column',
   },
});

