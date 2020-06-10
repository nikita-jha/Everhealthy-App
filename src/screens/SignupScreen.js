import React, {useContext, useEffect} from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'; 
import {NavigationEvents} from 'react-navigation'; 
import AuthForm from '../components/AuthForm'; 
import NavLink from '../components/NavLink'; 

const SignupScreen = ({ navigation }) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext); 

    return (
      <SafeAreaView>
    <KeyboardAvoidingView style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm
      headerText="Sign Up"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
      onSubmit={signup}
      />

      <NavLink
        routeName="Signin"
        text1="Already have an account?"
        text2=" Sign in"
      />

    </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => null
  };
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 75,
    paddingBottom: 150,
    backgroundColor: '#FFF'
    }
});

export default SignupScreen;
