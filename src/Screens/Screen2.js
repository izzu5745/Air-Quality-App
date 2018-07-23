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
  TouchableHighlight
} from 'react-native';
import { Button, Icon } from 'native-base';

import Fire1 from './Fire1';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  navOptions

  static navigationOptions = ({ navigation }) => {

    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerLeft: (
        <Button
          transparent
          onPress={() => params._onHeaderEventControl()}
        >
          <Icon 
            api_value="menu"
            style={{ fontSize: 30, color: 'white' }}
          />
        </Button>
      )
    }
  }

  onHeaderEventControl() {
    const { params = {} } = navOptions.state;
    params._openNav()
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  componentWillMount(){
    //this.getItems(this.itemsRef);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    })

  }

  render() {
    return (
      
      <View style={styles.container}>
      
      <StatusBar
            backgroundColor="coral"
            barStyle="light-content"
        />       
      
      <Text style={styles.daily}>
          Daily Average : 33 {'\n'} Best Hour Of The Day : 6.00AM {'\n'} Worst Hour Of The Day : 4.00PM {'\n'}
          {"\n"}        
        </Text>
        <Image
        style={{width: 50, height: 50}}
        source={{uri:'https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/trusted_certified_seller_reseller-512.png' }}
        />
        <View style={styles.liText2}>
        <Fire1/>
        </View>
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
    color: '#4CAF50',
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
