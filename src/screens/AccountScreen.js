import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements'; 
import Spacer from '../components/Spacer'; 
import {Context as AuthContext} from '../context/AuthContext'; 

const AccountScreen = () => {
  const {signout} = useContext(AuthContext); 
    return <View style={styles.container}>

          <Text>AccountScreen</Text>
          <Button title="Sign Out" onPress={signout}/>
      </View>
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AccountScreen.navigationOptions = () => {
  return {
    header: () => "Account Screen"
  };
};

export default AccountScreen;
