import React, {useState, useEffect} from 'react';
import mapsapi from '../api/mapsapi';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

const MenuDetailScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const foodName = navigation.getParam('itemName'); 
   const searchApi = async () => {
    const response = await mapsapi.get('/ingredients.php', {
      params: {
        key: '76e92658-ed95-11ea-91c0-525400552a35',
        s: "McDONALD'S, Hamburger"
      }
    })
    setResults(response.data); 
    //console.log(response.data); 
  } 

  useEffect(() => {
    searchApi(); 
  }, [])
  
    return <View style={styles.container}>
        <Text style={styles.title}>{foodName}</Text>
        <View style={{top: 15, left: 75}}>
        <Text style={{fontSize: 20, paddingTop: 35}}>Calcium</Text>
        <Text style={{fontSize: 20, paddingTop: 35}}>Glucose</Text>
        <Text style={{fontSize: 20, paddingTop: 35}}>HDL</Text>
        <Text style={{fontSize: 20, paddingTop: 35}} >LDL</Text>
        <Text style={{fontSize: 20, paddingTop: 35}}>Hemoglobin</Text>
        <Text style={{fontSize: 20, paddingTop: 35}}>Potassium</Text>
        <Text style={{fontSize: 20, paddingTop: 35}}>Sodium</Text>
        </View>


    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default MenuDetailScreen;
