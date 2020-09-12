import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Restaurant from '../components/Restaurant';
import mapsapi from '../api/mapsapi';
import { StyleSheet, View, Dimensions, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import postalcode from '../api/postalcode';
export default function App({navigation}) {

  const[longitude, setLongitude] = useState(-84.187820);
  const[latitude, setLatitude] = useState(34.041061);
  const [numLongitude, setNumLongitude] = useState(-84.187820); 
  const [numLatitude, setNumLatitude] = useState(34.041061); 
  const [zipCode, setZipCode] = useState(0);
  const[results, setResults] = useState([1]);
  const[search, setSearch] = useState('');
  var markers = []
  const findCoordinates = async() => {
    try{
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
    }
    catch(err){
      console.log('navigator lat long');
    }
  };
  const reversegeo = async() => {
    try{
      const prox = latitude + ',' + longitude + ',' + 1;
      const results = await postalcode.get('/reversegeocode.json', {
        params: {
          prox,
          mode: 'retrieveAddresses',
          apiKey: 'ZzPS_PzDHFia_uGSQsi0YLy-FZjNpdbISXboOIfpSaE',
          maxresults: 1,
          gen: 9
        }
      });
      console.log('RESULTS');
      console.log(results);
      const actresults = results.data.Response.View[0].Result[0].Location.Address;
      setZipCode(actresults.PostalCode);
    }
    catch(err){
      console.log(err);
      console.log('Reverse geo');
    }
  }
  findCoordinates();
  useEffect(() => {
    reversegeo();
  });
  const searchApi = async() => {
    try{
    console.log('zip code: ' + zipCode);
    const response = await mapsapi.get('/location.php', {
      params: {
        key: '76e92658-ed95-11ea-91c0-525400552a35',
        postal_code: zipCode,
        country: 'US',
        s: search
      }
    });
    setResults(response.data.response.result.restaurant);
    console.log(results.length);
    }
    catch(err){
      console.log('SearchAPI')
      console.log(err);
    }
  }
  useEffect(() => {
    searchApi();
  }, [zipCode, search]);
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
        latitude: object.latitude,
        longitude: object.longitude,
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