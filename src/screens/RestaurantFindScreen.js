import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Restaurant from '../components/Restaurant';
import mapsapi from '../api/mapsapi';
import { StyleSheet, View, Dimensions, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
export default function App({navigation}) {


  const[longitude, setLongitude] = useState(null);
  const[latitude, setLatitude] = useState(null);
  const [numLongitude, setNumLongitude] = useState(0); 
  const [numLatitude, setNumLatitude] = useState(0); 
  const[results, setResults] = useState([]);
  const[search, setSearch] = useState('');
  var markers = []
  const findCoordinates = async() => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        const currlongitude = position.coords.longitude;
        const currlatitude = position.coords.latitude;
        
        setLongitude(currlongitude);
        setLatitude(currlatitude); 
        setNumLongitude(position.coords.longitude); 
        setNumLatitude(position.coords.latitude); 

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
          setNumLongitude(position.coords.longitude); 
          setNumLatitude(position.coords.latitude); 
 
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
    //console.log(longitude);
    //console.log(latitude);
    try{
    const response = await mapsapi.get('/search', {
      params: {
        distance: 5,
        lon: longitude,
        lat: latitude,
        q: search
      }
    });
    setResults(response.data.result.data);
    //console.log("Sent request");
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    searchApi();
  }, [longitude, latitude, search]);
  //console.log(results);
  var i = 0;
  //("my_latitude: " + Number(JSON.parse(latitude))); 
  //console.log("my_longitude: " + Number(JSON.parse(longitude))); 
  for(i = 0; i < results.length; i++){
    const object = results[i];
    markers = [...markers, {
      key: i,
      title: object.restaurant_name,
      coordinates: {
        latitude: object.geo.lat,
        longitude: object.geo.lon,
        }, 
    }]
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} 
      showsUserLocation={true} 
      loadingEnabled
      mapType="mutedStandard"
      region={{
        latitude:numLatitude,
        longitude: numLongitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
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
      onChangeText={(newValue) => setSearch(newValue)} returnKeyType='search' onSubmitEditing={
        useEffect(() => {
          searchApi();
        }, [])
      }/>
      <FlatList 
      data={results} 
      keyExtractor={(result) => result.restaurant_id.toString()} 
      renderItem={({item}) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('Menu', {id: item.id})}>
          <Restaurant 
        id = {item.restaurant_id} 
        name={item.restaurant_name}
        number={item.restaurant_phone} 
        cuisines={item.cuisines}
        />
        </TouchableOpacity>
  );
      }}/>
    </View>
  );
}

App.navigationOptions = () => {
  return {
    title: 'Choose a Restaurant',
    headerTitleStyle: {alignSelf: 'center'}
    
  };
};
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