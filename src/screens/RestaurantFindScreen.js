import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps'
import Restaurant from '../components/Restaurant';
import mapsapi from '../api/mapsapi';
import { StyleSheet, View, Dimensions, Text, FlatList, TextInput, Alert } from 'react-native';
export default function App() {
  const[longitude, setLongitude] = useState(null);
  const[latitude, setLatitude] = useState(null);
  const[results, setResults] = useState([]);
  const[search, setSearch] = useState('');
  var markers = []
  const findCoordinates = async() => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        const currlongitude = JSON.stringify(position.coords.longitude);
        const currlatitude = JSON.stringify(position.coords.latitude);
        setLongitude(currlongitude);
        setLatitude(currlatitude);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    navigator.geolocation.watchPosition(
      position => {
        const currlongitude = JSON.stringify(position.coords.longitude);
        const currlatitude = JSON.stringify(position.coords.latitude);
        if(currlongitude!=longitude||currlatitude!=latitude){
          setLongitude(currlongitude);
          setLatitude(currlatitude);
        }
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 900000 }
    );
  };
  findCoordinates();
  const searchApi = async() => {
    var newsearch = "";
    //console.log(newsearch);
    try{
      if(search==''){
        const response = await mapsapi.get('/search', {
          params: {
            limit: 15,
            categories: 'restaurant, food',
            longitude: longitude,
            latitude: latitude,
            radius: 24140,
          }
        });
        setResults(response.data.businesses);
      }
      else {
        const response = await mapsapi.get('/search', {
          params: {
            limit: 15,
            categories: 'restaurant, food',
            longitude: longitude,
            latitude: latitude,
            radius: 24140,
            term: {search}
          }
        });
        setResults(response.data.businesses);
      }
    }
    catch(err){
      console.log('error');
    }
  }
  useEffect(() => {
    searchApi();
  }, [longitude, latitude, search]);
  var i = 0;
  for(i = 0; i < results.length; i++){
    const object = results[i];
    markers = [...markers, {
      key: i,
      title: object.name,
      coordinates: {
        latitude: object.coordinates.latitude,
        longitude: object.coordinates.longitude,
        }, 
    }]
  }
  console.log(latitude);
  console.log(longitude);
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} 
      showsUserLocation={true} 
      loadingEnabled
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.4219983,
        longitude: -122.084,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
      >
      {markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
      pinColor = "#60ABBD"
      key={marker.key}
    />
    ))}
      </MapView>
      <TextInput style={styles.search} placeholder="Search 🔍" autoCapitalize="none" autoCorrect={false} value={search}
      onChangeText={(newValue) => setSearch(newValue)} onKeyPress={(keyPress) => console.log(keyPress)} returnKeyType='search' onSubmitEditing={
        useEffect(() => {
          searchApi();
        }, [])
      }/>
      <FlatList data={results} keyExtractor={(result) => result.id} renderItem={({item}) => {
        var cost = 0;
        if(item.price=="$")cost = 1;
        if(item.price=="$$")cost = 2;
        if(item.price=="$$$")cost = 3;
        if(item.price=="$$$$")cost = 4;
        return <Restaurant name={item.name} icon={item.image_url} review={item.rating} cost = {cost}/>;
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
    height: (Dimensions.get('window').height)*1/3,
  },
  search: {
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:15,
    marginTop:5,
    borderColor: 'black',
    borderWidth: 1,
    width:Dimensions.get('window').width
  }
});