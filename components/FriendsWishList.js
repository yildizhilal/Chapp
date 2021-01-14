import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal,Image,TextInput, Button} from "react-native";
//import colors from "./Colors";
import {Ionicons} from "../node_modules/@expo/vector-icons";
import { Entypo } from "../node_modules/@expo/vector-icons";
import { AntDesign } from "../node_modules/@expo/vector-icons";
import Firebase from "../config/Firebase";

//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

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
            source={list.cinsiyet ==1? require("../assets/man.png"):require("../assets/woman.png")}
          />
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <Text style={styles.listTitle} numberOfLines={2}>
            {list.puan}
          </Text>
          <View style={{flexDirection:"row", alignContent:"space-between"}}>
        <TouchableOpacity onPress={()=>istek_kabul(list.name)} style={{
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems: 'flex-end',
         }} >
         <AntDesign name="pluscircle" size={40} color="green" />
          
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>istek_red(list.name)} style={{
       
        justifyContent: 'center',
        alignItems: 'flex-end',
        
      
         }} >
          <AntDesign name="minuscircle" size={40} color="red" />
          
          </TouchableOpacity>
          </View>
          
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