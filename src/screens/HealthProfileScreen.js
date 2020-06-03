import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HealthProfileScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Text>HealthProfileScreen</Text>
        <Button title="Done" onPress={()=>navigation.navigate('RestaurantFind')}/>
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

export default HealthProfileScreen;
