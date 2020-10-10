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

  const [Sodium, setSodium] = useState(150); 
  const [Glucose, setGlucose] = useState(73); 
  const [HDL, setHDL] = useState(20); 
  const [LDL, setLDL] = useState(183); 
  const [Hemoglobin, setHemoglobin] = useState(14.7); 
  const [Potassium, setPotassium] = useState(4); 
  const [Calcium, setCalcium] = useState(9.5); 

  console.log(JSON.stringify(state).length); 
  //console.log("Right before state[0].Sodium")
  useEffect(() => {
    if(JSON.stringify(state).length > 2){
      setSodium(parseInt((JSON.stringify(state[0].Sodium)))); 
      setGlucose(parseInt((JSON.stringify(state[0].Glucose)))); 
      setHDL(parseInt((JSON.stringify(state[0].HDL)))); 
      setLDL(parseInt((JSON.stringify(state[0].LDL)))); 
      setHemoglobin(parseInt((JSON.stringify(state[0].Hemoglobin)))); 
      setPotassium(parseInt((JSON.stringify(state[0].Potassium)))); 
      setCalcium(parseInt((JSON.stringify(state[0].Calcium)))); 
    }
  })


  const data = {
    actual: [
      {x: 'Cal', y: Calcium},
      {x: 'Gluc', y:Glucose },
      {x: 'HDL', y:HDL },
      {x: 'LDL', y:LDL },
      {x: 'Hemoglobin', y:Hemoglobin },
      {x: 'Potassium', y:Potassium },
      {x: 'Sod', y:Sodium },

    ],
  }; 

  //console.log(data);

  const normalCalcium = [8.6, 10.3]; //6, 8.1, 9.9, 10.3, 13
  const normalGlucose = [80, 130]; //50, 80, 105, 130, 380
  const normalHDL = [40, 100]; //10, 40, 70, 100, 100
  const normalLDL = [50, 130]; //10, 50, 90, 130, 190
  const normalHemoglobin = [12.1, 17.2]; //8, 12.1, 14.7, 17.2, 30
  const normalPotassium = [3.6, 5.2]; //1, 3.6, 4.4, 5.2, 9.5
  const normalSod = [135, 145]; //110, 135, 140, 145, 180

  var colorCalcium = "#FFFFFF";
  var colorGlucose = "#FFFFFF";
  var colorHDL = "#FFFFFF";
  var colorLDL = "#FFFFFF";
  var colorHemoglobin = "#FFFFFF";
  var colorPotassium = "#FFFFFF";
  var colorSod = "#FFFFFF";
  if(data.actual[0].y < normalCalcium[0] || data.actual[0].y > normalCalcium[1])colorCalcium = "#c43a31";
  if(data.actual[0].y >= normalCalcium[0] && data.actual[0].y <= normalCalcium[1]) colorCalcium="#40cf47"; 
  if(data.actual[1].y < normalGlucose[0] || data.actual[1].y > normalGlucose[1])colorGlucose = "#c43a31";
  if(data.actual[1].y >= normalGlucose[0] && data.actual[1].y <= normalGlucose[1]) colorGlucose="#40cf47"; 
  if(data.actual[2].y < normalHDL[0] || data.actual[2].y > normalHDL[1])colorHDL = "#c43a31";
  if(data.actual[2].y >= normalHDL[0] && data.actual[2].y <= normalHDL[1]) colorHDL="#40cf47"; 
  if(data.actual[3].y < normalLDL[0] || data.actual[3].y > normalLDL[1])colorLDL = "#c43a31";
  if(data.actual[3].y >= normalLDL[0] && data.actual[3].y <= normalLDL[1]) colorLDL="#40cf47"; 
  if(data.actual[4].y < normalHemoglobin[0] || data.actual[4].y > normalHemoglobin[1])colorHemoglobin = "#c43a31";
  if(data.actual[4].y >= normalHemoglobin[0] && data.actual[4].y <= normalHemoglobin[1]) colorHemoglobin="#40cf47"; 
  if(data.actual[5].y < normalPotassium[0] || data.actual[5].y > normalPotassium[1])colorPotassium = "#c43a31";
  if(data.actual[5].y >= normalPotassium[0] && data.actual[5].y <= normalPotassium[1]) colorPotassium="#40cf47"; 
  if(data.actual[6].y < normalSod[0] || data.actual[6].y > normalSod[1])colorSod = "#c43a31";
  if(data.actual[6].y >= normalSod[0] && data.actual[6].y <= normalSod[1]) colorSod="#40cf47"; 

  const [calciumData, setCalciumData] = useState([{ x: 2, y: Calcium, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setCalciumData([{ x: 2, y: Calcium, symbol: "circle", size: 7 }]);
  }, []);

  const [glucoseData, setGlucoseData] = useState([{ x: 2, y: Glucose, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setGlucoseData([{ x: 2, y: Glucose, symbol: "circle", size: 7 }]);
  }, []);

  const [HDLData, setHDLData] = useState([{ x: 2, y: HDL, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setHDLData([{ x: 2, y: HDL, symbol: "circle", size: 7 }]);
  }, []);

  const [LDLData, setLDLData] = useState([{ x: 2, y: LDL, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setLDLData([{ x: 2, y: LDL, symbol: "circle", size: 7 }]);
  }, []);

  const [hemoglobinData, setHemoglobinData] = useState([{ x: 2, y: Hemoglobin, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setHemoglobinData([{ x: 2, y: Hemoglobin, symbol: "circle", size: 7 }]);
  }, []);

  const [potassiumData, setPotassiumData] = useState([{ x: 2, y: Potassium, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setPotassiumData([{ x: 2, y: Potassium, symbol: "circle", size: 7 }]);
  }, []);

  const [sodiumData, setSodiumData] = useState([{ x: 2, y: Sodium, symbol: "circle", size: 0 }]);
  useEffect(() => {
    setSodiumData([{ x: 2, y: Sodium, symbol: "circle", size: 7 }]);
  }, []);

    return <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <NavigationEvents onWillFocus={fetchHealthInfo}/>
      <Image 
      source={require('../../assets/Logo.png')}
      style={styles.image}
      />
      <Spacer/>

      <Text style={{alignSelf: 'center', top: 25}}>🟢 = Healthy Range        🔴 = Unhealthy Range</Text>
      <Spacer/>
      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Potassium Level: {Potassium} mmol/L </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorPotassium } }}
        data={potassiumData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [1, 3.6, 4.4, 5.2, 9.5] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mmol/L</Text>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Glucose Level: {Glucose} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorGlucose } }}
        data={glucoseData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [50, 80, 105, 130, 280] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      HDL Level: {HDL} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorHDL } }}
        data={HDLData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [10, 40, 70, 100, 100] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      LDL Level: {LDL} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorLDL } }}
        data={LDLData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [10, 50, 90, 130, 190] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Hemoglobin Level: {Hemoglobin} g/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorHemoglobin } }}
        data={hemoglobinData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [8, 12.1, 14.7, 17.2, 30] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >g/dL</Text>

      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Calcium Level: {Calcium} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorCalcium } }}
        data={calciumData}
        animate={{easing:'exp', duration: 5000}}
      />
      <VictoryBoxPlot 
      q1Labels
      minLabels
      q3Labels
      maxLabels
      horizontal
      animate={{
        duration: 1000,
        easing: "bounce"
      }}
      style={{
        min: { stroke: "#46A8C0" },
        max: { stroke: "#46A8C0" },
        q1: { fill: "#40cf47" },
        q3: { fill: "#40cf47" },
        median: { stroke: "#40cf47" },
      }}
      data={[{ x: 1, y: [6, 8.1, 9.9, 10.3, 13] }]}/>
      </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>


      
      <Text 
      style={{textAlign: "center", fontWeight: 'bold', top: 20, fontSize: 20, color: '#46A8C0'}}> 
      Sodium Level: {Sodium} mg/dL </Text>
      <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: colorSod } }}
        data={sodiumData}
        animate={{easing:'exp', duration: 5000}}
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
        { x: 1, y: [110, 135, 140, 145, 180] },
      ]}/>
            </VictoryChart>
      <Text style={{alignSelf: 'flex-end', right: 25, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>

      </ScrollView>
    </View >
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    alignSelf: 'center', 
    top: 40,
    width: 260, 
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
