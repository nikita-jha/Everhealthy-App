import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import {Text, Input} from 'react-native-elements'; 
import Spacer from '../components/Spacer'; 
import {Context as AuthContext} from '../context/AuthContext'; 
import {FontAwesome} from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { withNavigation } from 'react-navigation'; 



const AccountScreen = ({navigation}) => {

  const [image, setImage] = useState(null);
  const {signout} = useContext(AuthContext); 

  useEffect(() => {
    (async () => {
      if (Constants.platform.android) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    const functionOne = () => {
      navigation.navigate('HealthProfile'); 
    }; 

    return (
      <KeyboardAvoidingView behavior='position'>
      <View style={styles.container}>
          <Text h3 style={styles.title}>My Profile</Text>
          <Text style={{marginLeft: 230, top: 55, fontSize: 15}}>
            Tap to Change{"\n"}
            Profile Image
            </Text>
          <View style={{flexDirection:'row'}}>

            {image == null 
            ? (
            <Image source={require('../../assets/ProfileImage.png')} style={styles.image} /> )
            : (
            <Image source={{ uri: image }} style={styles.image} />) }


          <View style={{flexDirection: 'column'}}>

           <TouchableOpacity
          style={styles.button2}
          onPress={pickImage}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: '#FFFFFF'}}> Choose a File </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={()=>{
            functionOne(); 
          }}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: '#000'}}> Edit Health Profile </Text>
        </TouchableOpacity>
        
        </View>
          </View>

          <Text h4 style={styles.content}>Account Information</Text>
        <View style={{marginTop: 60}}/>
        <View style={styles.card}>
          <Text style={{fontSize: 20, paddingLeft: 30}}>First Name</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.card}>
          <Text style={{fontSize: 20, paddingLeft: 30}}>Last Name</Text>
          <TextInput style={styles.input}/>
        </View>  
              
        <View style={{    
          flexDirection:'row',
          alignContent:'center',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 130,
          paddingRight: 57,
    }}>
          <Text style={{fontSize: 20}}>E-mail</Text>
          <TextInput style={styles.input}/>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={signout}>
          <Text style={{alignSelf: 'center', fontSize: 17}}> Sign Out </Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    width: 100,
    backgroundColor: '#D0CEE2',
    borderColor: '#56517E', 
    borderWidth: 3,
    padding: 10,
    marginTop: 20
   },
   button1: {
    marginTop: 80,
    marginLeft: 80,
    width: 150,
    height: 50,
    backgroundColor: '#B3FF66',
    borderColor: '#36393D', 
    borderWidth: 3,
    padding: 10,
   },
   button2: {
    top: 75,
    marginLeft: 80,
    width: 150,
    height: 50,
    backgroundColor: '#1BA1E2',
    borderColor: '#006EAF', 
    borderWidth: 3,
    padding: 10,
   },
  title: {
    alignSelf: 'center',
    top: 40
    },
  content: {
    top: 35,
    alignSelf: 'center'
        },
  card:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 55,
    paddingRight: 55
        },
  input: {
    margin: 15,
    height: 40,
    width: 160,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 60,
        },
    image: {
    top: 30,
    width: 120, 
    height: 160, 
    left: 30,
    borderRadius: 50,
    overflow: 'hidden'
  }
});

AccountScreen.navigationOptions = () => {
  return {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={30} color="#585858" />
  };
};

export default withNavigation(AccountScreen);
