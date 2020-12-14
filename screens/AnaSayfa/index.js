import React, {useState,useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground,TouchableOpacity, Button} from 'react-native';
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
        <ImageBackground style={{ flex:1,}} source={{uri: 'https://cdn.pixabay.com/photo/2016/11/29/02/35/blue-1866881_960_720.jpg'}}>

      <View style={styles.kalori} >
    <Text style={styles.txt}>{kalori}</Text>
    <Text style={{ textAlign: 'center',fontSize:20,}}>kcal</Text>
    </View>
    <View style={styles.controlSpace}>
        <View style={styles.yagView} >
        <Text style={{ opacity: 0.8,fontWeight:"bold",textAlign: 'center' ,}}>YAĞ</Text>
            <Text style={{ fontWeight:"bold",textAlign: 'center', fontSize:20}}>{yag}</Text>
         </View>
         
        <View style={styles.proView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' ,}}>PROTEİN</Text>
            <Text style={{ fontWeight:"bold",textAlign: 'center', fontSize:20}}>{protein}</Text>
        </View>
        <View style={styles.karView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' , fontSize:11,}}>KARBONHİDRAT</Text>
            <Text style={{ fontWeight:"bold",textAlign: 'center', fontSize:20}}>{karbonhidrat}</Text>
        </View>
    </View>
    <View style={{paddingRight:"5%",flex:1}}>
      <TouchableOpacity style={styles.yemekBtn} 
        >
      <Text style={styles.yemekText}>BESİN EKLE</Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    
  );

};


const styles = StyleSheet.create({
  container:{
    flex: 1, 
  
  },
  yemekText:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
  },
  yemekBtn:{
    width:"50%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"10%",
   
  },
  txt:
  {
    color:"black",
    fontSize:40,
    fontWeight:"bold",
    textAlign: 'center' ,
    justifyContent:"center",
    
  },

  controlSpace: {
    flexDirection: 'row',
    justifyContent:"center",
  
  },
  yagView:
  {

    width:"22%",
    backgroundColor:"#e3dcce",
    borderRadius:25,
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#844b15",
    

  },
  proView:
  {

    width:"28%",
    backgroundColor:"#e3dcce",
    borderRadius:25,
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#844b15",
    

  },
  karView:
  {

    width:"33%",
    backgroundColor:"#e3dcce",
    borderRadius:25,
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#844b15",
    

  },
  kalori:
  {
    marginTop:"15%",

    width:"40%",
    backgroundColor:"#e3dcce",
    borderRadius:100,
    height: "20%",
    marginBottom:"1%",
    justifyContent:"center",
    padding:"8%",
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: "#844b15",
  }

});



export default AnaSayfa;



