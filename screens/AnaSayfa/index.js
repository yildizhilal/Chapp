import React, {useState,useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Firebase from '../../config/Firebase';
import { Component } from 'react';


const AnaSayfa=props=> {

 const[x,setx]=useState([])
  
        useEffect(() => {
          const fetchData=async()=>{
 
            const db= Firebase.firestore()
            const data= await db.collection('Users').get()
            setx(data.docs.map(doc=>doc.data()))
          }
        fetchData()
        },[])
return (
  <View style={styles.container}>
    <Text>{x.map(y=>(y.isim))}</Text>
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



