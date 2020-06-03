import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MenuScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Text>MenuScreen</Text>
        <Button title="Go to Menu Detail Screen" onPress={()=>navigation.navigate('MenuDetail')}/>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuScreen;
