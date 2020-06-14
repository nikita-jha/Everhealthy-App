import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Input} from 'react-native-elements'; 
import {MaterialIcons} from '@expo/vector-icons'; 


const HealthProfileScreen = ({navigation}) => {
    const [year, setYear] = useState(0); 
    const [height, setHeight] = useState(0); 
    const [weight, setWeight] = useState(0); 
    const HDL = "HDL         "
    const [hdl, setHDL] = useState(0.0); 
    const LDL = "LDL         "
    const [ldl, setLDL] = useState(0.0); 
    const Triglyceride = "Triglyceride"
    const [Tri, setTri] = useState(0.0); 
    const Glucose = "Glucose     "
    const [glucose, setGlucose] = useState(0.0); 
    const Iodine = "Iodine      "
    const [iodine, setIodine] = useState(0.0); 
    const Hemoglobin = "Hemoglobin "
    const [hemoglobin, setHemoglobin] = useState(0.0); 
    const Calcium = "Calcium     "
    const [calcium, setCalcium] = useState(0.0); 

    const [isSelected, setSelection] = useState(true);
    const [isSelected2, setSelection2] = useState(true);
    const [isSelected3, setSelection3] = useState(true);
    const [isSelected4, setSelection4] = useState(true);
    const [isSelected5, setSelection5] = useState(true);
    const [isSelected6, setSelection6] = useState(true);
    const [isSelected7, setSelection7] = useState(true);



    return <KeyboardAvoidingView behavior='height'>
    <ScrollView style={styles.container}>
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
        onChangeText={(newYear)=> setYear(year)}
        />
       </View>
       <View style={{width: '97%' ,alignSelf: 'center'}}>
        <Input
        label="Height in inches"
        placeholder="ex: 65"
        keyboardType="decimal-pad"
        onChangeText={(newHeight) => setHeight(newHeight)}
        />
       </View >
       <View style={{width: '97%' ,alignSelf: 'center'}}>
        <Input
        label="Weight in lbs"
        placeholder="ex: 160"
        keyboardType="decimal-pad"
        onChangeText={(newWeight) => setWeight(newWeight)}
        />
       </View>

       <View style={styles.card}>
       <CheckBox style={{marginLeft: 10}}  
          value={isSelected}
          onValueChange={setSelection}
        />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{HDL}</Text>
          <View style={{width: '30%', left: 74}}>
          <Input
          onChangeText={(newHDL) => setHDL(newHDL)}
          keyboardType="decimal-pad"

          />
          </View>
          <Text style={{left: 75}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected2}
       onValueChange={setSelection2}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{LDL}</Text>
          <View style={{width: '30%', left: 75}}>
          <Input
          onChangeText={(newLDL) => setLDL(newLDL)}
          keyboardType="decimal-pad"
          />
          </View>
          <Text style={{left: 78}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected3}
       onValueChange={setSelection3}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Triglyceride}</Text>
          <View style={{width: '30%', left: 55}}>
          <Input
          onChangeText={(newTri) => setTri(newTri)}
          keyboardType="decimal-pad"
          />
          </View>
          <Text style={{left: 60}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected4}
       onValueChange={setSelection4}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Glucose}</Text>
          <View style={{width: '30%', left: 58}}>
          <Input
          onChangeText={(newGlucose) => setGlucose(newGlucose)}
          keyboardType="decimal-pad"
          />
          </View>
          <Text style={{left: 65}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected5}
       onValueChange={setSelection5}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Iodine}</Text>
          <View style={{width: '30%', left: 66}}>
          <Input
          onChangeText={(newIodine) => setIodine(newIodine)}
          keyboardType="decimal-pad"
          />
          </View>
                <Text style={{left: 74}}>g/dc</Text>

        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected6}
       onValueChange={setSelection6}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Hemoglobin}</Text>
          <View style={{width: '30%', left: 42}}>
          <Input
          onChangeText={(newHemoglobin) => setHemoglobin(newHemoglobin)}
          keyboardType="decimal-pad"
          />
          </View>
          <Text style={{left: 52}}>g/dc</Text>
        </View>

        <View style={styles.card}>
       <CheckBox 
       style={{marginLeft: 10}}
       value={isSelected7}
       onValueChange={setSelection7}
       />
      <Text style={{fontSize: 15, paddingLeft: 20, marginRight: 10}}>{Calcium}</Text>
          <View style={{width: '30%', left: 53}}>
          <Input
          onChangeText={(newCalcium) => setCalcium(newCalcium)}
          keyboardType="decimal-pad"
          />
          </View>
      <Text style={{left: 64}}>g/dc</Text>
        </View>



        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('RestaurantFind')}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: '#000'}}> Done </Text>
        </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
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
