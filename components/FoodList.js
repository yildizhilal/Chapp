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
  const [showListVisible, setShowListVisible] = useState(false);
  
  const [checkbutton, setCheck] = useState(false);
  const [mynotes, setMyNotes] = useState("");

  
  var user = Firebase.auth().currentUser.email;


  return (
    <View>
      
      <View
        style={[styles.listContainer, { backgroundColor: list.color }]}
      >
        <View style={{flexDirection:"row", backgroundColor:"orange"}}>
         
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
    marginTop: 10,
    borderRadius: 6,
    width: "180%",
    height:80,
    justifyContent:"space-between"
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    marginBottom: 18,
    paddingLeft:20,
    alignItems:"center",
    
    marginTop:20
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: "white",
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