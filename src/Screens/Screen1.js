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
/*
  componentWillMount() {
    // To Configure react native app with cloud of Google Firebase database !
    var config = {
      apiKey: "AIzaSyATzawIX7SF_7ptbi0TPycr0ihmBsbVas8",
      authDomain: "testfire-fd8cb.firebaseapp.com",
      databaseURL: "https://testfire-fd8cb.firebaseio.com",
      projectId: "testfire-fd8cb",
      storageBucket: "",
      messagingSenderId: "479739911728"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var fruits = database.ref('fruits');

    var data = {
      name: 'pear',
      count: 7
    }

    fruits.push(data);

    fruits.push(data, finished);
    function finished(error) {
    if (error) {
    console.log('ooops');
    } else {
    console.log('data saved!');
          }
    }

    var ref = database.ref("fruits");
    ref.on("value", gotData, errData);

    function errData(err) {
      console.log('Error!');
      console.log(err);
    }

    function gotData(data) {
      var fruits = data.val();
      // Grab the keys to iterate over the object
      var keys = Object.keys(fruits);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // Look at each fruit object!
        var fruit = fruits[key];
      }
    }
    

    /*
    // To select data from firebase every time data has changed !
    firebase.database().ref('sensors').once('value', (data) => {
        console.log(data.toJSON());
    })

    // To Await 5 seconds to insert a new user
    setTimeout(() => {
      
        firebase.database().ref('sensors/003').set(
            {
                api_value: 111,
                api_level: 'Moderate Pollution',
                PM25: 210,
                PM10: 391,
                NO2: 50,
                SO2: 5,
                CO: 30,
                O3: 0
            }  
        ).then(() => {
            console.log('INSERTED !');
        }).catch((error) => {
            console.log(error);
        });
    }, 5000);
    */
    /*
    // To Update a user
    firebase.database().ref('sensors/002').update({
                api_value: 90,
                api_level: 'Low Pollution',
                PM25: 100,
                PM10: 122,
                NO2: 55,
                SO2: 22,
                CO: 39,
                O3: 55
    });
    */
    // To Remove a user
    //firebase.database().ref('sensors/').remove();
  
    // To Display data from firebase
    /*
    var sensorsRef = firebase.database().ref('sensors/sensors');
    starCountRef.on('value', function(snapshot) {
    updateSensors(postElement, snapshot.val());
    */
   /*
   firebase.database().ref(`/sensors/003`)
  .on('value', snapshot => {
    snapshot.val()
   });
   */
  /*
   var sensorId = '003';
   return firebase.database().ref('/sensors/' + sensorId).once('value').then(function(snapshot) {
   var sensorname = (snapshot.val() && snapshot.val().sensorname) || 'Anonymous';
   });
   */
   /*
   firebase.database().ref('/sensors/').on('value', snapshot => {
    this.setState({ sensorname: snapshot.val() });
  });
  */
 /* not js syntax :-
 var database = firebase.database().ref().child('sensors');
 var sensorInput = document.getElementById('mainSearch');
 
 database.child(sensorInput).on('value', function(snap) {
 
           var data = snap.val();
 
           var apiValue = data.api_value;
           var apiLevel = data.api_level;
         }); 
}
*/
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
            backgroundColor="#009999"
            barStyle="light-content"
        />

        <Image
        style={{width: 200, height: 200}}
        //source={{uri:'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-symbols-shapes/016961-3d-transparent-glass-icon-symbols-shapes-smileyfacesad.png' }}
        source={{uri:'https://png.icons8.com/windows/1600/happy-cloud.png'}}
        />
        <Text style={styles.date_time}>
        14 May 2018 9.15PM
        </Text>
        <Text style={styles.api}>
          API : GOOD
        </Text>

        
        
        <Image 
        style={{width: 300, height: 200}}
        source={{uri:'https://lh3.googleusercontent.com/F0x8me7MrZmVNOuOqVLYuVWRdKpmwcHwAdWfL3nht2Ax-WBipvEkOU8zWOylV6WxPAsh=s124'}}                
        />
        

        {alert('Welcome to AQUMES')}
        

                <Text style={{ fontWeight: 'bold', fontSize: 18, fontColor:'white' }}> 
                {'\t'}
              "AQUMES 2018"
                </Text>  

            </View>

    );
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  api: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#4CAF50',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'orange',
  },
  date_time: {
    fontSize:20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  liText2: {
    color: '#4CAF50',
    fontSize: 20,
    textAlign: 'center',
  },
});
