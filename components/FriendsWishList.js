import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal,Image,TextInput, Button} from "react-native";
//import colors from "./Colors";
import FriendModal from "./FriendModal"; 
import {Ionicons} from "../node_modules/@expo/vector-icons";
import { Entypo } from "../node_modules/@expo/vector-icons";
import { AntDesign } from "../node_modules/@expo/vector-icons";
import Firebase from "../config/Firebase";

const FriendList = ({ list }) => {
  
  var user = Firebase.auth().currentUser.email;


  istek_kabul=(isim)=>{
    
    var cityRef = Firebase.firestore().collection('Users').doc(user).collection("Arkadaslar").doc(isim)
    var setWithMerge = cityRef.set({
        name: isim
    }, { merge: true });
    Firebase.firestore().collection('Users').doc(user).collection("istekler").doc(isim).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }
  istek_red=(isim)=>{
    Firebase.firestore().collection('Users').doc(user).collection("istekler").doc(isim).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }
  return (
    <View>
      
      <View
        style={[styles.listContainer, { backgroundColor: list.color }]}
       
      >
        <View style={{flexDirection:"row"}}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/kurabiye.jpg")}
          />
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <Text style={styles.listTitle} numberOfLines={2}>
            {list.puan}
          </Text>
        <Button title="Kabul Et" onPress={()=>istek_kabul(list.name)}/>
        <Button title="Yok Say" onPress={()=>istek_red(list.name)}/>
        
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

export default FriendList;