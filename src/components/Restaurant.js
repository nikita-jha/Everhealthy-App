import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import MenuScreen from '../screens/MenuScreen';
import RestaurantFindScreen from '../screens/RestaurantFindScreen';
const Restaurant = (props, {onClick}) =>{
  var cuisines = props.cuisines[0];
  var i = 0;
  for(i = 1; i < props.cuisines.length; i++){
    cuisines = cuisines + ", " + props.cuisines[i];
  }
  //console.log(navigation);
  return (<TouchableOpacity style={{flexDirection:"column", borderBottomWidth:20, borderColor:'white'}}
  onPress={() => onClick}>
    <Text>{props.name}</Text>
    <View style={{flexDirection:"row"}}>
      <View style={{flexDirection:"column"}}>
        <Text style={{marginLeft: 10}}>📞: {props.number}</Text>
        <Text>                                                                                    </Text>
        <Text style={{marginLeft: 10}}>Cuisine: {cuisines}</Text>
      </View>
    </View>

    </TouchableOpacity>
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