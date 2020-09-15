import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
const Restaurant = (props, {onClick}) =>{
  return (<View 
  style={{
  flexDirection:"column", 
  borderBottomWidth:20, 
  borderColor:'white'  }}>
    <Text style={{color: '#168294', fontSize: 20, fontWeight: 'bold'}}>{props.name}</Text>
    <View style={{flexDirection:"row"}}>
      <View style={{flexDirection:"column"}}>
        <Text style={{top: 10, fontSize: 15}}>📍 Address: {props.address}</Text>
        <Text>                                                                                    </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Cuisine: {props.cuisines}</Text>
      </View>
    </View>

    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Restaurant;