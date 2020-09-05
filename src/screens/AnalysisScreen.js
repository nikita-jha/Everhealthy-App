import React, {useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import {Octicons} from '@expo/vector-icons'; 
import {VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis} from "victory-native"; 
import {Context as HealthInfoContext} from "../context/HealthInfoContext";
import {NavigationEvents} from 'react-navigation';  

const data = {
  planned: [null, {x: 'Week 2', y: 20}],
  actual: [
    {x: 'Week 1', y: 50},
    {x: 'Week 2', y: 80}
  ],
}; 


const AnalysisScreen = () => {
  const {state, fetchHealthInfo} = useContext(HealthInfoContext); 

    return <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchHealthInfo}/>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>Calcium: {item.Calcium}</Text>
            <Text>Glucose: {item.Glucose}</Text>
            <Text>HDL: {item.HDL}</Text>
            <Text>Hemoglobin: {item.Hemoglobin}</Text>
            <Text>Iodine: {item.Iodine}</Text>
            <Text>LDL: {item.LDL}</Text>
            <Text>Triglyceride: {item.Triglyceride}</Text>

          </View>
        )}
      />
        <VictoryChart>
          <VictoryAxis label="Week" /> 
          <VictoryAxis dependentAxis label="Hours" style={{
            axisLabel: {
              padding: 30
            }
          }} /> 

          <VictoryGroup offset={20}>
            <VictoryBar 
            data={data.actual}
            style={{
              data: {
                fill: 'blue'
              }
            }}
            />
            <VictoryBar 
            data={data.planned} 
            style={{
              data: {
                fill: 'orange'
              }
            }}
            />
          </VictoryGroup>
          <VictoryLegend
          x={Dimensions.get('screen').width / 2 - 100}
          orientation="horizontal"
          data={[
            {
              name: 'Actual',
              symbol: {
                fill: 'blue'
              }
            },
            {
              name: 'Planned',
              symbol: {
                fill: 'orange'
              }
            }
          ]}/>
        </VictoryChart>
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
