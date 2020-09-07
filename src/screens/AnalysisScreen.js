import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from 'react-native';
import {Octicons} from '@expo/vector-icons'; 
import {VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis} from "victory-native"; 
import {Context as HealthInfoContext} from "../context/HealthInfoContext";
import {NavigationEvents} from 'react-navigation';  
import { G } from 'react-native-svg';



const AnalysisScreen = () => {
  const {state, fetchHealthInfo} = useContext(HealthInfoContext);

  const [Sodium, setSodium] = useState(0); 
  const [Glucose, setGlucose] = useState(0); 
  const [HDL, setHDL] = useState(0); 
  const [LDL, setLDL] = useState(0); 
  const [Iron, setIron] = useState(0); 
  const [Magnesium, setMagnesium] = useState(0); 
  const [Calcium, setCalcium] = useState(0); 

  //console.log(JSON.stringify(state).length); 
  //console.log("Right before state[0].Sodium")
  useEffect(() => {
    if(JSON.stringify(state).length > 2){
      setSodium(parseInt((JSON.stringify(state[0].Sodium)))); 
      setGlucose(parseInt((JSON.stringify(state[0].Glucose)))); 
      setHDL(parseInt((JSON.stringify(state[0].HDL)))); 
      setLDL(parseInt((JSON.stringify(state[0].LDL)))); 
      setIron(parseInt((JSON.stringify(state[0].Iron)))); 
      setMagnesium(parseInt((JSON.stringify(state[0].Magnesium)))); 
      setCalcium(parseInt((JSON.stringify(state[0].Calcium)))); 
    }
  })



  const data = {
    actual: [
      {x: 'Calcium', y:Calcium },
      {x: 'Glucose', y:Glucose },
      {x: 'HDL', y:HDL },
      {x: 'LDL', y:LDL },
      {x: 'Iron', y:Iron },
      {x: 'Magnesium', y:Magnesium },
      {x: 'Sodium', y:Sodium },

    ],
  }; 
    return <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchHealthInfo}/>
      
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>LDL: {item.LDL}</Text>
            <Text>HDL: {item.HDL}</Text>
            <Text>Sodium: {item.Sodium}</Text>
            <Text>Glucose: {item.Glucose}</Text>
            <Text>Iron: {item.Iron}</Text>
            <Text>Magnesium: {item.Magnesium}</Text>
            <Text>Calcium: {item.Calcium}</Text>

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
          </VictoryGroup>
          <VictoryLegend
          x={Dimensions.get('screen').width / 2 - 50}
          orientation="horizontal"
          data={[
            {
              name: 'Actual',
              symbol: {
                fill: 'blue'
              }
            },
          ]}/>
        </VictoryChart>
    </View>
}

const styles = StyleSheet.create({
  container: {

  },
});

AnalysisScreen.navigationOptions = () => {
  return {
    title: 'Analysis',
    tabBarIcon: <Octicons name="graph" size={30} color="#585858" />
  };
};
export default AnalysisScreen;
