import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Restaurant = (props) =>{
<<<<<<< HEAD
  const url = props.icon;
=======
  var url = props.icon;
>>>>>>> 37d8d937ad78083ff63fa50cf31faf12eef57942
  if(url=='')url = 'https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._AC_SX679_.jpg';
  var stars = "";
  var cost = "";
  var i;
  for(i = 0; i < props.review; i++){
    stars+="⭐"
  }
  for(i = 0; i < props.cost; i++){
    cost+="💲"
  }
<<<<<<< HEAD
  return (<TouchableOpacity style={{flexDirection:"column", borderBottomWidth:20, borderColor:'white'}}>
    <Text>{props.name}</Text>
    <View style={{flexDirection:"row"}}>
      <Image style={{height: 50, width: 50, marginTop: 5}} source={{uri: url}}/>
      <View style={{flexDirection:"column"}}>
        <Text style={{marginLeft: 10}}>Review: {stars}</Text>
        <Text>                                                                                    </Text>
        <Text style={{marginLeft: 10}}>Cost: {cost}</Text>
=======
  return (<TouchableOpacity style={{flexDirection:"column", borderBottomWidth:15, borderColor:'white'}}>
    <Text>{props.name}</Text>
    <View style={{flexDirection:"row"}}>
      <Image style={{height: 50, width: 50}} source={{uri: url}}/>
      <View style={{flexDirection:"column"}}>
        <Text>Review: {stars}</Text>
        <Text>                                                                                    </Text>
        <Text>Cost: {cost}</Text>
>>>>>>> 37d8d937ad78083ff63fa50cf31faf12eef57942
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

<<<<<<< HEAD
export default Restaurant;
=======
export default Restaurant;
>>>>>>> 37d8d937ad78083ff63fa50cf31faf12eef57942
