import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import {Octicons} from '@expo/vector-icons'; 
import {VictoryChart, VictoryTheme, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis, VictoryBoxPlot, VictoryScatter} from "victory-native"; 
import {Context as HealthInfoContext} from "../context/HealthInfoContext";
import {NavigationEvents} from 'react-navigation';  
import Spacer from '../components/Spacer'; 
import { color } from 'react-native-reanimated';



const AnalysisScreen = () => {
  const {state, fetchHealthInfo} = useContext(HealthInfoContext);

  const [Sodium, setSodium] = useState(0); 
  const [Glucose, setGlucose] = useState(0); 
  const [HDL, setHDL] = useState(0); 
  const [LDL, setLDL] = useState(0); 
  const [Iron, setIron] = useState(0); 
  const [Magnesium, setMagnesium] = useState(0); 
  const [Calcium, setCalcium] = useState(0); 

  console.log(JSON.stringify(state).length); 
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
      {x: 'Cal', y: Calcium},
      {x: 'Gluc', y:Glucose },
      {x: 'HDL', y:HDL },
      {x: 'LDL', y:LDL },
      {x: 'Iron', y:Iron },
      {x: 'Mag', y:Magnesium },
      {x: 'Sod', y:Sodium },

    ],
  }; 

  //console.log(data);

  const normalCalcium = [8.6, 10.3];
  const normalGlucose = [70, 99];
  const normalHDL = [35.5, 48.6];
  const normalLDL = [35.5, 48.6];
  const normalIron = [35.5, 48.6];
  const normalMag = [35.5, 48.6];
  const normalSod = [35.5, 48.6];

  var colorCalcium = "#FFFFFF";
  var colorGlucose = "#FFFFFF";
  var colorHDL = "#FFFFFF";
  var colorLDL = "#FFFFFF";
  var colorIron = "#FFFFFF";
  var colorMag = "#FFFFFF";
  var colorSod = "#FFFFFF";
  if(data.actual[0].y < normalCalcium[0] || data.actual[0].y > normalCalcium[1])colorCalcium = "#c43a31";
  if(data.actual[0].y >= normalCalcium[0] && data.actual[0].y <= normalCalcium[1]) colorCalcium="#40cf47"; 
  if(data.actual[1].y < normalGlucose[0] || data.actual[1].y > normalGlucose[1])colorGlucose = "#c43a31";
  if(data.actual[1].y >= normalGlucose[0] && data.actual[1].y <= normalGlucose[1]) colorGlucose="#40cf47"; 
  if(data.actual[2].y < normalHDL[0] || data.actual[2].y > normalHDL[1])colorHDL = "#c43a31";
  if(data.actual[2].y >= normalHDL[0] && data.actual[2].y <= normalHDL[1]) colorHDL="#40cf47"; 
  if(data.actual[3].y < normalLDL[0] || data.actual[3].y > normalLDL[1])colorLDL = "#c43a31";
  if(data.actual[3].y >= normalLDL[0] && data.actual[3].y <= normalLDL[1]) colorLDL="#40cf47"; 
  if(data.actual[4].y < normalIron[0] || data.actual[4].y > normalIron[1])colorIron = "#c43a31";
  if(data.actual[4].y >= normalIron[0] && data.actual[4].y <= normalIron[1]) colorIron="#40cf47"; 
  if(data.actual[5].y < normalMag[0] || data.actual[5].y > normalMag[1])colorMag = "#c43a31";
  if(data.actual[5].y >= normalMag[0] && data.actual[5].y <= normalMag[1]) colorMag="#40cf47"; 
  if(data.actual[6].y < normalSod[0] || data.actual[6].y > normalSod[1])colorSod = "#c43a31";
  if(data.actual[6].y >= normalSod[0] && data.actual[6].y <= normalSod[1]) colorSod="#40cf47"; 

    return <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <NavigationEvents onWillFocus={fetchHealthInfo}/>
      <Image 
      source={require('../../assets/Logo.png')}
      style={styles.image}
      />
      <Spacer/>
      <Spacer/>

      <Text style={{alignSelf: 'center'}}>🟢 = Healthy Range        🔴 = Unhealthy Range</Text>
      <Spacer/>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Calcium Level: {Calcium} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorCalcium } }}
        data={[
          { x: 2, y: Calcium, symbol: "circle", size: 7 }
        ]}
      />
      <VictoryBoxPlot 
      q1Labels
      minLabels
      q3Labels
      maxLabels
      horizontal
      style={{
        min: { stroke: "#46A8C0" },
        max: { stroke: "#46A8C0" },
        q1: { fill: "#40cf47" },
        q3: { fill: "#40cf47" },
        median: { stroke: "#40cf47" },
      }}
      data={[
        { x: 1, y: [6, 8.1, 9.9, 10.3, 13] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>

      </ScrollView>
    </View >
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  image: {
    alignSelf: 'center', 
    top: 60,
    width: 250, 
    height: 65
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
