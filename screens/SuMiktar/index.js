import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text,TouchableOpacity,FlatList} from "react-native";

import Firebase from "../../config/Firebase";
import moment from "moment";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;


const SuMiktar = props => {
  const {navigation} = props;
  var date=moment().format('LL');
  var user = Firebase.auth().currentUser.email;
  var damla;
  
   const[water,setWater]=useState("")

  useEffect(() => {

    const subscriber = Firebase.firestore()
      .collection("Users").doc(user).collection("GunlukTakip").doc(date)
      .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data().SuMiktari);
         setWater( doc.data().SuMiktari)

    });

  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);





const[su,setsu]=useState(250)

  su_ekle=()=>{
    setsu((su+250))
    var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
     var setWithMerge = SU.set({
       SuMiktari:su
   }, { merge: true });

   }
   

  return (
    <View style={styles.center}>
      <View style={styles.title}>
          <Text style={{fontWeight:"700",fontSize:40, color:"white"}}>This is the SuMiktar screen</Text>
      </View>
      <View style={styles.miktar}>
        <Text style={styles.miktartext}>Bugün Toplam {water} Mililitre Su İçtin</Text>
        <Text style={styles.miktartext}>Tebrikler Böyle Devam Et!</Text>
      </View>
      <TouchableOpacity style={styles.addList} onPress={()=>su_ekle()}>
            <AntDesign name="plus" size={16} color="white" />
      </TouchableOpacity>
   
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
    marginTop:"10%",
    flexDirection:"row"

  }
});

export default SuMiktar;