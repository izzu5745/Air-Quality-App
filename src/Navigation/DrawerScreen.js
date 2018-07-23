import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class DrawerScreen extends React.Component {

  render() {
    return (
      <View>
        
        

        <Button
          title='User Account'
          color='#009999'
        />
        

        <View style={{ height: 100, backgroundColor: 'white' }}>
        <Text style ={{fontSize: 20, color:'#009999', fontFamily: "HelveticaNeue-CondensedBold"}}>  
        User: Aqumes Bin Ali
        {"\n"}
        Email : aqumes.gmail.com
        {"\n"}
        </Text>
        <Text style ={{fontSize: 15, color:'green', fontFamily: "HelveticaNeue-CondensedBold"}}>
        Status : Sensor Connected
        </Text>  
        </View>

        <Button
          title='Settings'
          color='#009999'
        />
        <Button
          title='F.A.Q'
          color='#009999'
        />
        <Button
          title='About Us'
          color='#009999'
        />
        <Button
          title='Rate the app'
          color='#009999'
        />
        <Button
          title='Share'
          color='#009999'
        />
        <Button 
          title='Sign Out'
          color='red'
        />

      </View>
    );
  }
}

