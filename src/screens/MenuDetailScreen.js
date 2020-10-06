import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  TouchableOpacity, Button} from 'react-native';
import Spacer from '../components/Spacer'; 
import Modal from 'react-native-modal';


const MenuDetailScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const foodName = navigation.getParam('itemName');
  const restaurantName = navigation.getParam('rName'); 
  const query = restaurantName + " " + foodName;
  const check = '✅';
  const redx = '🔺';
  const user_calcium = 9.5
  const user_glucose = 73
  const user_HDL = 84
  const user_LDL = 183
  const user_Hemoglobin = 14.7
  const user_Potassium = 2.7
  const user_Sodium = 138

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return <ScrollView style={styles.container}>
        <Text style={{alignSelf: 'center', top: 35, fontSize: 25, fontWeight: 'bold'}}>Spicy Chicken Sandwich</Text>
        <Image source={require('../../assets/Sandwich.png')} style={styles.image} /> 
        <Text style={{color: '#509de6', alignSelf: 'center', fontWeight: 'bold', fontSize: 25, bottom: 25}}>Personal Reccomendation:</Text>
        <Text style={{color: '#ff1100', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, bottom: 20}}>Avoid This Meal!</Text>
        <View style={{backgroundColor: '#c0dffc', height: 65, width: 325, alignSelf: 'center'}}>
        <Text style={{color: '#000000', alignSelf: 'center', fontSize:15}}>Your cholesterol and 
        sodium levels are already in the unhealthy range. This meal is high in saturated fat and 
        sodium! 
        </Text>
        </View>
        <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Calcium </Text>
        <Text style={{fontSize: 25, left: 50}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Glucose </Text>
        <Text style={{fontSize: 25, left: 50}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>HDL </Text>
        <Text style={{fontSize: 25, left: 75}}>{redx}</Text>

        <View style={{flex: 1}}>
        <TouchableOpacity 
        style={{left: 120}} 
        onPress={toggleModal}><Text style={{color: '#461efa'}}>Why?</Text>
         </TouchableOpacity>
         
        <Modal 
        isVisible={isModalVisible} 
        style={{alignItems: 'center'} } 
        hasBackdrop={false}
              animationType={'fade'}

 
        >
            <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          width: 300, height: 100
          }}>
          <Text style={{color: "#000"}}>How are you!</Text>
          <TouchableOpacity style={{top: 20}}
            onPress={toggleModal}><Text style={{color: '#03a1fc'}}>Close</Text>
         </TouchableOpacity>
      </View>

        </Modal>
        </View>
        


      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>LDL </Text>
        <Text style={{fontSize: 25, left: 78}}>{redx}</Text>
        <Text style={{color: '#461efa', left: 120}}>Why?</Text> 


      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Hemoglobin </Text>
        <Text style={{fontSize: 25, left: 20}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Potassium </Text>
        <Text style={{fontSize: 25, left: 30}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Sodium </Text>
        <Text style={{fontSize: 25, left: 50}}>{redx}</Text>
        <Text style={{color: '#461efa', left: 95}}>Why?</Text> 


      </View>
      
        <View style={{top: 15, left: 75}}>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edeeff'
  },
  text: {
    fontSize: 100,
    marginRight: 10
  },
  card: {
    flexDirection:'row',
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 15,
    top: 15

  },
  image: {
    width: 300, 
    height: 275, 
    alignSelf:'center',
    bottom: 20
  }
});

export default MenuDetailScreen;
