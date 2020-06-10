import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {Input} from 'react-native-elements'; 
import {MaterialIcons} from 'react-native-vector-icons'; 
import {Entypo} from 'react-native-vector-icons'; 
import Spacer from '../components/Spacer'; 

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return <>
        <Image 
        source={require('../../assets/Logo.png')}
        style={{width: 400, height: 100, alignSelf: 'center', paddingTop: 0}}
      />
      <View style={{marginTop: 30}}/>
    <Text style={styles.text}>{headerText}</Text>
    <View style={{marginTop: 30}}/>
      <Input 
        label="Email" 
        value={email} 
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize="none"
        autoCorrect={false}
        placeholder= ' email@address.com'
        leftIcon={
          <MaterialIcons
          name='email'
          size={28}
          color='black'
          />}
        />
    <Spacer/>
      <Input 
        label="Password" 
        value={password} 
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        placeholder= ' password'
        leftIcon={
          <Entypo
            name='lock'
            size={28}
            color='black'
           />}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null} 
        <View style={{paddingTop: 15}}/>
      <TouchableOpacity
         style={styles.button}
         onPress={() => onSubmit({email, password})}>
         <Text style={{alignSelf: 'center', fontSize: 20}}> {submitButtonText} </Text>
      </TouchableOpacity>
    <Spacer/>
        </>
}; 

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        width: 200,
        backgroundColor: '#58acbc',
        padding: 10
          },
    text: {
      fontSize: 36,
      paddingLeft: 12,
      color: "#58acbc",
      alignSelf: 'center'
      },
    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginLeft: 15,
      marginTop: 15
    }
}); 

export default AuthForm; 