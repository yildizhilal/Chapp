import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal,Image,Button} from "react-native";
//import colors from "./Colors";
import {Ionicons} from "../node_modules/@expo/vector-icons";
import { Entypo } from "../node_modules/@expo/vector-icons";
import { AntDesign } from "../node_modules/@expo/vector-icons";
import Firebase from "../config/Firebase";

//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const FoodList = ({ list }) => {
  
  return (
   
    <View>
      <View
        style={[styles.listContainer]}
      >
        <View style={{flexDirection:"row", backgroundColor:"#adcceb"}}>
         
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <Text style={styles.listTitle} numberOfLines={2}>
            Kalori:{list.Kalori}
          </Text>

        </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 15,
    borderRadius: 2,
    width: "100%",
    height:60,
    paddingLeft:"5%",
    justifyContent:"space-between",
    justifyContent:"center",
    alignContent:"center"
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#634d4d",
    marginBottom: 18,
    paddingLeft:20,
    alignItems:"center",
    
    marginTop:10
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: "#634d4d",
    
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
  },
  tinyLogo: {
    width: "20%",
    height: "120%",
  },
  input:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    borderRadius: 6,
    height: 30,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    width: "45%",
    
  }
});

export default FoodList;