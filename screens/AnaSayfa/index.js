import React, {useState,useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Firebase from '../../config/Firebase';
import { Component } from 'react';


const AnaSayfa=props=> {
  var kal = [];
  var user = [];
  var k = [];
  var y = [];
  var p = [];
 const route = useRoute();

 var email=route.params.caption
   
 const[kalori,setkalori]=useState([])
 const[isim,setisim]=useState([])
 
 const[yag,setY]=useState([])
 const[protein,setP]=useState([])
 const[karbonhidrat,setK]=useState([])
 const dbh = Firebase.firestore();
        useEffect(() => {
          dbh.collection("Users")
          .onSnapshot(function(querySnapshot) {
              
              querySnapshot.forEach(function(doc) {
                if(doc.id===email){
                  kal.push(doc.data().Kalori);
                  k.push(doc.data().Karbonhidrat);
                  p.push(doc.data().Protein);
                  y.push(doc.data().Yag);
                  user.push(doc.data().Isim);}
              });
            setkalori(kal)
            setisim(user)
            setK(k)
            setP(p)
            setY(y)
          });
      
        },[])

return (
  <View style={styles.container}>
    <Text>Kullanıcı----{isim}</Text>
   <Text>Kalori---{kalori}</Text>
   
   <Text>Yağ---{yag}</Text>
   <Text>Protein---{protein}</Text>
   <Text>Karbonhidrat---{karbonhidrat}</Text>
  </View>
  
);

};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:"pink",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:40,
    color:'black',
  }
  


});



export default AnaSayfa;



