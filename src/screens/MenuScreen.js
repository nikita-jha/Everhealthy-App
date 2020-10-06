import React, {useState, useEffect} from 'react';
import mapsapi from '../api/mapsapi';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';

const MenuScreen = ({navigation}) => {
  const [results, setResults] = useState([]); 
  const id = navigation.getParam('id'); 
  var data = []; 

  const searchApi = async () => {
    const response = await mapsapi.get('/restaurant.php', {
      params: {
        key: '76e92658-ed95-11ea-91c0-525400552a35',
        id
      }
    });
    setResults(response.data.response.result.menus[0].menu_groups); 
    //console.log(response.data.response.result.menus[0].menu_groups); 
  }
  useEffect(() => {
    searchApi(); 
  },[])


  var i = 0; 
  var j = 0; 
  for(i = 0; i<results.length; i++){
    var newItems = []; 
    for(j = 0; j<results[i].menu_items.length; j++){
      newItems = [...newItems, {
        foodName: results[i].menu_items[j].menu_item_name
      }]
    }
          data = [...data, {
        title: results[i].group_name,
        data: newItems
      }]
  }
    return <SafeAreaView style={styles.container}>
              <SectionList
          sections={data}
          renderItem={({item}) => 
          <TouchableOpacity 
          onPress={() => navigation.navigate('Recommendation', {itemName: item.foodName})}
          style={styles.touchableOpacity}> 
          <Text style={styles.item}>{item.foodName}</Text>
          <Text style={{color: 'grey',fontSize:20, alignSelf: 'flex-end', right: 13, bottom: 18}}>&gt;</Text>
          </TouchableOpacity>}
          
          renderSectionHeader={({section}) => 
         <View style={{backgroundColor: '#d6ecff'}}><Text style={styles.sectionHeader}>{section.title}</Text></View>}
          keyExtractor={(item, index) => index}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4f9'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#d6ecff',
  },
  item: {
    fontSize: 18,
    height: 38,
    left: 15,
    top:20
  },
  touchableOpacity: { 
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'stretch'
  }
});

export default MenuScreen;
