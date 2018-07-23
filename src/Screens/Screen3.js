import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button, Icon } from 'native-base';
import MapView from 'react-native-maps';

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

  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    })
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MapView style={styles.map}
          region={{
            latitude: 3.2542111,
            longitude: 101.7301225,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >

          <MapView.Marker
            coordinate={{
              latitude: 3.2542111,
              longitude: 101.7301225
            }}
            title={'My marker title'}
            description={'My marker description'}
            />

          </MapView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
