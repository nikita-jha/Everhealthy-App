import React, {useContext} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import Spacer from './Spacer'; 
import { withNavigation } from 'react-navigation'; 

const NavLink = ({navigation, text1, text2, routeName}) => {

    return (
        <Text style={{color: '#000', alignSelf: 'center', fontSize: 20}}> 
        {text1}   
        <Text onPress={() => navigation.navigate(routeName)}
              style={{color: '#58acbc'}}>
              {text2}
        </Text> 
     </Text>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(NavLink); 
