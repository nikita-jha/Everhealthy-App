import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  TouchableOpacity, Button} from 'react-native';
import Spacer from '../components/Spacer'; 
import Modal from 'react-native-modal';
import {VictoryChart, VictoryTheme, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis, VictoryBoxPlot, VictoryScatter} from "victory-native"; 



const MenuDetailScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  const foodName = navigation.getParam('itemName');
  const restaurantName = navigation.getParam('rName'); 
  const query = restaurantName + " " + foodName;
  const check = '✅';
  const redx = '🔺';


  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };
    return <ScrollView style={styles.container}>
        <Text style={{alignSelf: 'center', top: 35, fontSize: 25, fontWeight: 'bold'}}>Spicy Chicken Sandwich</Text>
        <Image source={require('../../assets/Sandwich.png')} style={styles.image} /> 
        <Text style={{color: '#509de6', alignSelf: 'center', fontWeight: 'bold', fontSize: 25, bottom: 25}}>Personal Reccomendation:</Text>
        <Text style={{color: '#ff1100', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, bottom: 20}}>Avoid This Meal!</Text>
        <View style={{backgroundColor: '#c0dffc', height: 65, width: 325, alignSelf: 'center'}}>
        <Text style={{color: '#000000', alignSelf: 'center', fontSize:15}}>Your cholesterol and 
        sodium levels are already in the unhealthy range. This meal is high in saturated fat and 
        sodium! 
        </Text>
        </View>
        <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Calcium </Text>
        <Text style={{fontSize: 25, left: 50}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Glucose </Text>
        <Text style={{fontSize: 25, left: 50}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>HDL </Text>
        <Text style={{fontSize: 25, left: 75}}>{redx}</Text>

        <View >
        <TouchableOpacity 
        style={{left: 120}} 
        onPress={toggleModal1}><Text style={{color: '#509de6', fontWeight: 'bold'}}>Why?</Text>
         </TouchableOpacity>
         
        <Modal 
        isVisible={isModalVisible1} 
        onBackdropPress={() => setModalVisible1(false)}
        animationOut={"slideOutRight"}
        animationIn={"slideInLeft"}
        style={{alignItems: 'center'} } 
        animationType={'fade'}
        backdropOpacity={0.5}
        >
            <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          }}>
            <View style={{width: 300, height: 300, alignItems: 'center', justifyContent: 'center',

}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Your HDL Level: 20 mg/dl</Text>
            <Text style={{alignSelf: 'center', top: 25}}>🔴 = Your Level</Text>
            <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 2, y: 20, symbol: "circle", size: 7 }
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
        { x: 1, y: [10, 40, 70, 100, 100] },
      ]}/>
            </VictoryChart>        
            <Text style={{alignSelf: 'flex-end', right: 5, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>
            <Text style={{paddingRight:15, paddingLeft: 15}}>This item is bad for your HDL level. It has white bread, fried chicken, and saturated oils.</Text>
              <TouchableOpacity style={{top: 10}}
            onPress={toggleModal1}><Text style={{color: '#03a1fc'}}>Close</Text>
         </TouchableOpacity>
            </View>
      </View>

        </Modal>
        </View>
        


      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>LDL </Text>
        <Text style={{fontSize: 25, left: 78}}>{redx}</Text>
        <View style={{flex: 1}}>
        <TouchableOpacity 
        style={{left: 120}} 
        onPress={toggleModal2}><Text style={{color: '#509de6', fontWeight: 'bold'}}>Why?</Text>
         </TouchableOpacity>
         
         <Modal 
        isVisible={isModalVisible2} 
        onBackdropPress={() => setModalVisible2(false)}
        animationOut={"slideOutRight"}
        animationIn={"slideInLeft"}
        style={{alignItems: 'center'} } 
        animationType={'fade'}
        backdropOpacity={0.5}
        >
            <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          }}>
            <View style={{width: 300, height: 300, alignItems: 'center', justifyContent: 'center',

}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Your LDL Level: 183 mg/dl</Text>
            <Text style={{alignSelf: 'center', top: 25}}>🔴 = Your Level</Text>
            <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 2, y: 183, symbol: "circle", size: 7 }
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
        { x: 1, y: [10, 50, 90, 130, 190] },
      ]}/>
            </VictoryChart>        
            <Text style={{alignSelf: 'flex-end', right: 5, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>
            <Text style={{paddingRight:15, paddingLeft: 15}}>This item is bad for your LDL level. 
            It has 4g of saturated fat, and it has white bread. This will raise your LDL</Text>
              <TouchableOpacity style={{top: 10}}
            onPress={toggleModal2}><Text style={{color: '#03a1fc'}}>Close</Text>
         </TouchableOpacity>
            </View>
      </View>

        </Modal>
        </View>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Hemoglobin </Text>
        <Text style={{fontSize: 25, left: 20}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Potassium </Text>
        <Text style={{fontSize: 25, left: 30}}>{check}</Text>

      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 15, paddingLeft: 80, marginRight: 10, fontWeight: 'bold'}}>Sodium </Text>
        <Text style={{fontSize: 25, left: 50}}>{redx}</Text>
        <View style={{flex: 1}}>
        <TouchableOpacity 
        style={{left: 95}} 
        onPress={toggleModal3}><Text style={{color: '#509de6', fontWeight: 'bold'}}>Why?</Text>
         </TouchableOpacity>
         
         <Modal 
        isVisible={isModalVisible3} 
        onBackdropPress={() => setModalVisible3(false)}
        animationOut={"slideOutRight"}
        animationIn={"slideInLeft"}
        style={{alignItems: 'center'} } 
        animationType={'fade'}
        backdropOpacity={0.5}
        >
            <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          }}>
            <View style={{width: 300, height: 350, alignItems: 'center', justifyContent: 'center',

}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Your Sodium Level: 150 mg/dl</Text>
            <Text style={{alignSelf: 'center', top: 25}}>🔴 = Your Level</Text>
            <VictoryChart height={140}>
      <VictoryAxis style={{ 
    tickLabels: { fill:"transparent"} }}
      dependentAxis/>
      <VictoryScatter 
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 2, y: 150, symbol: "circle", size: 7 }
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
        { x: 1, y: [110, 135, 140, 145, 180] },
      ]}/>
            </VictoryChart>        
            <Text style={{alignSelf: 'flex-end', right: 5, bottom: 35, fontWeight: 'bold'}} >mg/dL</Text>
            <Text style={{paddingRight:15, paddingLeft: 15}}>This item has 1670 mg or almost 2g of Sodium, 
            which is more than 70% of your allotted daily value! Your sodium level is already out of the 
            healthy range. Avoid this meal! </Text>
              <TouchableOpacity style={{top: 10}}
            onPress={toggleModal3}><Text style={{color: '#03a1fc'}}>Close</Text>
         </TouchableOpacity>
            </View>
      </View>

        </Modal>
        </View>

      </View>
      
        <View style={{top: 15, left: 75}}>
        </View>
        <Spacer/>
    </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edeeff'
  },
  text: {
    fontSize: 100,
    marginRight: 10
  },
  card: {
    flexDirection:'row',
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 15,
    top: 15

  },
  image: {
    width: 300, 
    height: 275, 
    alignSelf:'center',
    bottom: 20
  }
});

export default MenuDetailScreen;
