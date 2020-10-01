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
