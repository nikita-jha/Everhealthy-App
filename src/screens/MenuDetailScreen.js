import React, {useState, useEffect} from 'react';
import nutritionapi from '../api/menudetail.js';
import nutritionapix from '../api/menudetail.js';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

const MenuDetailScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const foodName = navigation.getParam('itemName');
  const restaurantName = navigation.getParam('rName'); 
  const query = restaurantName + " " + foodName;
  console.log(query);
   const searchApi = async () => {
    const response = await nutritionapix.get('https://nutritionix-api.p.rapidapi.com/v1_1/search/', {
      params: 
      {
        phrase: query,
        fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'
      }

    }); 
    console.log(response);
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
