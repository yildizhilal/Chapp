import React, { useState, PropTypes, useEffect}  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Modal } from 'react-native';
import Firebase from "../config/Firebase";
import { CommonActions } from '@react-navigation/native';

import moment from "moment";
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from "../node_modules/@expo/vector-icons";



//disable yellow warnings on EXPO client!
console.disableYellowBox = true;



const BarkodEkle = props => {


  const {navigation} = props;
 

  const dbh = Firebase.firestore();

  const [kalori, setkalori] = useState('');
  const [yag, setyag] = useState('');
  const [protein, setprotein] = useState('');
  const [karbonhidrat, setkarbonhidrat] = useState('');
  const [isim, setisim] = useState('');
  const [gram, setgram] = useState('');
  const [getValue, setGetValue] = useState('');
  
  var user = Firebase.auth().currentUser.email;
  
  var date=moment().format('LL');

handleSignUp = () => {
    dbh.collection("Barkod").doc(getValue).set({
      Kalori: kalori,
      name:isim,
      Yag:yag,
      Protein:protein,
      Karbonhidrat:karbonhidrat,
     })

     Firebase.firestore().collection("Barkod").doc(getValue)
    .onSnapshot(function(doc) {
            var Foods = Firebase.firestore().collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food").doc(doc.data().name)
          

            var sfDocRef = Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
              Firebase.firestore().runTransaction(function(transaction) {
                  return transaction.get(sfDocRef).then(function(sfDoc) {
                      if (!sfDoc.exists) {
                        var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
                        var k = SU.set({
                          YAG:0,
                          KARBONHIDRAT:0,
                          PROTEİN:0,
                          KALORI:0,
                          SuMiktari:0
                        }, { merge: true });
                      }
                  
                      var newk = sfDoc.data().KALORI +((doc.data().Kalori*gram)/100);
                      var newK = sfDoc.data().KARBONHIDRAT +((doc.data().Karbonhidrat*gram)/100);
                      var newY = sfDoc.data().YAG +((doc.data().Yag*gram)/100);
                      var newP = sfDoc.data().PROTEIN +((doc.data().Protein*gram)/100);
                    
                          transaction.update(sfDocRef, { KALORI: newk });
                          transaction.update(sfDocRef, { YAG: newY });
                          transaction.update(sfDocRef, { KARBONHIDRAT: newK });
                          transaction.update(sfDocRef, { PROTEIN: newP });
                          return {newk,newK,newP,newY};
                  });
              }).then(function(newk) {
                  console.log("Population increased to ", newk);
              }).catch(function(err) {
                  // This will be an "population is too big" error.
                  console.error(err);
              });
              var setWithMerge = Foods.set({
                name: doc.data().name,
                Kalori:((doc.data().Kalori*gram)/100),
                Protein:((doc.data().Protein*gram)/100),
                Yag:((doc.data().Yag*gram)/100),
                Karbonhidrat:((doc.data().Karbonhidrat*gram)/100),
            }, { merge: true });
  });
}
useEffect(() => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('key').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetValue(value)
      //Setting the value in Text
    );
  })
  return (

<View style={styles.container}>

<TouchableOpacity
        style={{ position: "absolute", top: 20, right: 32 }}
       // onPress={c}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

    <Text style={styles.logo}>Besin Bilgileri</Text>
    <View style={styles.inputView} >
      <TextInput  
        
        style={styles.inputText}
        placeholder="Ürün Adı:" 
        placeholderTextColor="white"
        onChangeText={isim => setisim(isim)}
        defaultValue={isim}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Gram:" 
        placeholderTextColor="white"
        onChangeText={gram => setgram(gram)}
        defaultValue={gram}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kalori:" 
        placeholderTextColor="white"
        onChangeText={kalori => setkalori(kalori)}
        defaultValue={kalori}/>
    </View>
   
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Yağ:" 
        placeholderTextColor="white"
        onChangeText={yag => setyag(yag)}
        defaultValue={yag}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Karbonhidrat:" 
        placeholderTextColor="white"
        onChangeText={karbonhidrat => setkarbonhidrat(karbonhidrat)}
        defaultValue={karbonhidrat}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Protein:" 
        placeholderTextColor="white"
        onChangeText={protein => setprotein(protein)}
        defaultValue={protein}/>
    </View>
    
    <TouchableOpacity style={styles.devamBtn} onPress={handleSignUp}>
      <Text style={styles.devamText}>DEVAM</Text>
    </TouchableOpacity>

   
    </View>
 
  );
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      paddingLeft:40,
      paddingRight:40,
      backgroundColor:"#f1e1c7"
      
    },
 
 
    
    logo:{
      marginTop: "10%",
      fontWeight:"bold",
      fontSize:20,
      color:"#2f5a93",
      marginBottom:"10%",
      textAlign: "center",
      alignSelf:'stretch',
      borderBottomColor:"#2f5a93",
      borderBottomWidth:3,
      paddingBottom:10,
    
    },
  
    inputView:{
      width:"80%",
      backgroundColor:"#adcceb",
      height:'8%',
      marginBottom:"5%",
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',
      paddingLeft:40,
      paddingRight:40,
      borderRadius:25,
    },
    inputText:{
      height:25,
      color:"black",
    },
    devamBtn:{
      width:"80%",
      backgroundColor:"#5e9ae8",
      borderRadius:25,
      height:'10%',
      alignSelf: 'center',
      marginTop:"5%",
      marginBottom:"5%",
    },
    devamText:{
      marginTop: "7%",
      color:"#634d4d",
      textAlign: "center",
      fontSize:30,
      fontWeight:"bold",
    },

    pickerStyle:
    {
     color:"black",
      height:100,
      width:150,
      alignSelf:'center',
      marginBottom:0,
      
    }
  
  });
  
  
  export default BarkodEkle;