import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Octicons} from '@expo/vector-icons'; 


const AnalysisScreen = () => {
    return <View style={styles.container}>
        <Text>AnalysisScreen</Text>
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

AnalysisScreen.navigationOptions = () => {
  return {
    title: 'Analysis',
    tabBarIcon: <Octicons name="graph" size={30} color="#585858" />
  };
};
export default AnalysisScreen;
