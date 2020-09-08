import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import {Octicons} from '@expo/vector-icons'; 
import {VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis} from "victory-native"; 
import {Context as HealthInfoContext} from "../context/HealthInfoContext";
import {NavigationEvents} from 'react-navigation';  
import Spacer from '../components/Spacer'; 



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
      {x: 'Cal', y:Calcium },
      {x: 'Gluc', y:Glucose },
      {x: 'HDL', y:HDL },
      {x: 'LDL', y:LDL },
      {x: 'Iron', y:Iron },
      {x: 'Mag', y:Magnesium },
      {x: 'Sod', y:Sodium },

    ],
  }; 
    return <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <NavigationEvents onWillFocus={fetchHealthInfo}/>
      <Image 
      source={require('../../assets/Logo.png')}
      style={styles.image}
    />
          <Text style={styles.text}>Analysis: Your Blood Levels</Text>
        <Spacer/>
        <VictoryChart   
        padding={{top: 50, left: 60, right: 40, bottom: 50}}
        height={275}
        width={350}
        >
          <VictoryAxis label="Blood Biomarker" style={{
            axisLabel: {
              padding: 35
            }
          }} /> 
          <VictoryAxis 
          dependentAxis 
          label="Quantity" 
           
          style={{
            axisLabel: {
              padding: 35
            },
          }} /> 

          <VictoryGroup offset={20}>
            <VictoryBar 
            data={data.actual}
            style={{
              data: {
                fill: '#58acbc'
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
                fill: '#58acbc'
              }
            },
          ]}/>
        </VictoryChart>
        <VictoryChart   
        padding={{top: 50, left: 60, right: 40, bottom: 50}}
        height={275}
        width={350}
        >
          <VictoryAxis label="Blood Biomarker" style={{
            axisLabel: {
              padding: 35
            }
          }} /> 
          <VictoryAxis 
          dependentAxis 
          label="Quantity" 
           
          style={{
            axisLabel: {
              padding: 35
            },
          }} /> 

          <VictoryGroup offset={20}>
            <VictoryBar 
            data={data.actual}
            style={{
              data: {
                fill: '#58acbc'
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
                fill: '#58acbc'
              }
            },
          ]}/>
        </VictoryChart>
        <VictoryChart   
        padding={{top: 50, left: 60, right: 40, bottom: 50}}
        height={275}
        width={350}
        >
          <VictoryAxis label="Blood Biomarker" style={{
            axisLabel: {
              padding: 35
            }
          }} /> 
          <VictoryAxis 
          dependentAxis 
          label="Quantity" 
           
          style={{
            axisLabel: {
              padding: 35
            },
          }} /> 

          <VictoryGroup offset={20}>
            <VictoryBar 
            data={data.actual}
            style={{
              data: {
                fill: '#58acbc'
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
                fill: '#58acbc'
              }
            },
          ]}/>
        </VictoryChart>
        </ScrollView>
    </View >
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  image: {
    alignSelf: 'center', 
    top: 30,
    width: 200, 
    height: 50
  },
  text: {
    top: 40,
    fontWeight: "bold", 
    fontSize: 25,
    left: Dimensions.get('screen').width / 2 - 155
    
  },
  scrollView: {
    flex: 1
  }
});

AnalysisScreen.navigationOptions = () => {
  return {
    title: 'Analysis',
    tabBarIcon: <Octicons name="graph" size={30} color="#585858" />
  };
};
export default AnalysisScreen;
