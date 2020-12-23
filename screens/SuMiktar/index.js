import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text,TouchableOpacity,FlatList} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const SuMiktar = props => {
  const {navigation} = props;

  const DATA = [
    {
      id: drop
    },
   
  ];


  const renderItem = ({ item }) => (
    <Entypo name="drop" size={50} color="#1976D2" />
  );

  const[drop,setdrop]=useState(0)

  count=()=>{
    setdrop(drop + 1)
  }

  console.log(drop)
  return (
    <View style={styles.center}>
      <View style={styles.title}>
          <Text style={{fontWeight:"700",fontSize:40, color:"white"}}>This is the SuMiktar screen</Text>
      </View>
      <View style={styles.miktar}>
        <Text style={styles.miktartext}>Bugün Toplam 0 Litre Su İçtin</Text>
        <Text style={styles.miktartext}>Tebrikler Böyle Devam Et!</Text>
      </View>
      <TouchableOpacity style={styles.addList} onPress={count}>
            <AntDesign name="plus" size={16} color="white" />
      </TouchableOpacity>
      <View style={styles.drop}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor:"#81D4FA"
  },
  title:{
    padding:15,
    alignItems:"center",
    borderBottomWidth:5,
    borderBottomColor:"white"
  },
  addList: {
    marginTop:"10%",
    marginLeft:"40%",
    width:"20%",
    borderWidth: 4,
    borderColor:"#B2EBF2",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  miktar:{
    
    alignItems: "center",
    justifyContent: "center",
    marginTop:"5%"
    
  },
  miktartext:{
    fontSize:20,
    alignItems: "center",
    justifyContent: "center",
    color:"white"
    
  },
  drop:{
    marginTop:"10%"
  }
});

export default SuMiktar;