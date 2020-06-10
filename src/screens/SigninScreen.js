import React, {useContext} from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { NavigationEvents } from 'react-navigation'; 
import { Context as AuthContext } from '../context/AuthContext'; 
import AuthForm from '../components/AuthForm'; 
import NavLink from '../components/NavLink'; 

const SigninScreen = ({ navigation }) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext); 

    return (
      <SafeAreaView>
    <KeyboardAvoidingView style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
      headerText="Sign in"
      errorMessage={state.errorMessage}
      submitButtonText="Sign in"
      onSubmit={signin}
      />

      <NavLink
        routeName="Signup"
        text1="Don't have an account?"
        text2=" Sign up"
      />

    </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
