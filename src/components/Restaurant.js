import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
const Restaurant = (props, {onClick}) =>{
  var i = 0;

  return (<View style={{flexDirection:"column", borderBottomWidth:20, borderColor:'white'}}>
    <Text style={{marginLeft: 10, color: 'blue'}}>{props.name}</Text>
    <View style={{flexDirection:"row"}}>
      <View style={{flexDirection:"column"}}>
        <Text style={{marginLeft: 10}}>{props.briefDescription}</Text>
        <Text>                                                                                    </Text>
        <Text style={{marginLeft: 10}}>Cuisine: {props.cuisines}</Text>
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