import React from 'react';
import MapView from 'react-native-maps';
import Restaurant from '../components/Restaurant';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TextInput } from 'react-native';

export default function App() {
  const text = [
    {name:"Restaurant one" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"5", cost:"3", key:'1'},
    {name:"Restaurant two" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"3", cost:"1", key:'2'},
    {name:"Restaurant three" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"4", cost:"2", key:'3'},
    {name:"Restaurant four" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"3", cost:"1", key:'4'},
    {name:"Restaurant five" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"5", cost:"3", key:'5'},
    {name:"Restaurant six" ,url:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", review:"2", cost:"1", key:'6'},
  ];
  const url = "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png"
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} showsUserLocation={true} />
      <TextInput style={styles.search} placeholder="Search 🔍"/>
      <FlatList data={text} renderItem={({item}) => {
        return <Restaurant name={item.name} icon={item.url} review={item.review} cost = {item.cost}/>;
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height)*1/2,
  },
  search: {
    marginBottom:15,
    marginTop:5,
    borderColor: 'black',
    borderWidth: 1,
    width:Dimensions.get('window').width
  }
});
