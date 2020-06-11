import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox, Image, TouchableOpacity, ScrollView } from 'react-native';
import {Input} from 'react-native-elements'; 
import {MaterialIcons} from '@expo/vector-icons'; 


const HealthProfileScreen = ({navigation}) => {
    const HDL = "HDL         "
    const LDL = "LDL         "
    const Triglyceride = "Triglyceride"
    const Glucose = "Glucose     "
    const Iodine = "Iodine      "
    const Hemoglobin = "Hemoglobin "
    const Calcium = "Calcium     "

    return <ScrollView style={styles.container}>
        <Image 
        source={require('../../assets/Logo.png')}
        style={styles.image}
      />
        <View style={{
            paddingVertical: 30,
            paddingHorizontal: 30,
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Text style={styles.text}>My Health Profile</Text>
            <MaterialIcons name="edit" size={35} color="#585858" style={{top: 35, marginLeft: 50}} />
        </View>

        <View style={{width: '97%' ,alignSelf: 'center'}}>
        <Input
        label="Year"
        placeholder="ex: 2020"
        keyboardType="decimal-pad"
        />
       </View>
       <View style={{width: '97%' ,alignSelf: 'center'}}>
        <Input
        label="Height in inches"
        placeholder="ex: 65"
        keyboardType="decimal-pad"
        />
       </View >
       <View style={{width: '97%' ,alignSelf: 'center'}}>
        <Input
        label="Weight in lbs"
        placeholder="ex: 160"
        keyboardType="decimal-pad"
        />
       </View>

       <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{HDL}</Text>
          <View style={{width: '30%', left: 74}}>
          <Input/>
          </View>
          <Text style={{left: 75}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{LDL}</Text>
          <View style={{width: '30%', left: 75}}>
          <Input/>
          </View>
          <Text style={{left: 78}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Triglyceride}</Text>
          <View style={{width: '30%', left: 55}}>
          <Input/>
          </View>
          <Text style={{left: 60}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Glucose}</Text>
          <View style={{width: '30%', left: 58}}>
          <Input/>
          </View>
          <Text style={{left: 65}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Iodine}</Text>
          <View style={{width: '30%', left: 66}}>
          <Input/>
          </View>
                <Text style={{left: 74}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Hemoglobin}</Text>
          <View style={{width: '30%', left: 42}}>
          <Input/>
          </View>
          <Text style={{left: 52}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}/>
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Calcium}</Text>
          <View style={{width: '30%', left: 53}}>
          <Input/>
          </View>
      <Text style={{left: 64}}>g/dc</Text>
        </View>



        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('RestaurantFind')}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: '#000'}}> Done </Text>
        </TouchableOpacity>
    </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  image: {
    alignSelf: 'center', 
    width: 200, 
    height: 50, 
    top: 45
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 25,
    width: 75,
    height: 35,
    backgroundColor: '#B0E3E6',
    borderColor: '#0E8088', 
    borderWidth: 3,
    padding: 3,
    alignSelf: 'center'
  },
  text: {
    top: 35,
    fontSize: 25,
    left: 45
  },
  card: {
    flexDirection:'row',
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingRight: 55
  },
  input: {
    marginLeft: 50
  }
});

export default HealthProfileScreen;
