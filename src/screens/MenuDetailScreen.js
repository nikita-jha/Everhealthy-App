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
        <Text>{foodName}</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuDetailScreen;
