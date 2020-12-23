
import { View, StyleSheet, Text,Button,TextInput,FlatList} from "react-native";
import React, {useState,useEffect } from 'react';
import { Component } from 'react';
import { useRoute } from '@react-navigation/native';
import Firebase from '../../config/Firebase';



const Arkadas = props => {

  
 const dbh = Firebase.firestore();
 const {navigation} = props;


 const[control,setcontrol]=useState(true)
 const[ekle,setekle]=useState({})


 //const[email,setemail]=useState("")
 const[isim,setisim]=useState("")
 const[arkadas,setarkadaslar]=useState([text=""])


 
 useEffect( () => {
  var user = Firebase.auth().currentUser.email;

  var user_email=Firebase.firestore().collection("Users").doc(user)
  user_email.get().then(function(doc){
   var user_name=doc.data().KullaniciAdi

    dbh.collection("friend_wish_list").doc(user_name).collection("friend_wish_from").where("wish", "==", true)
    .onSnapshot(function(querySnapshot) {
      var friend = [];
        querySnapshot.forEach(function(doc) {
            friend.push(doc.id);

        setarkadaslar(friend)
        console.log("hhhhhhhhhhhhh:", arkadas.text)
        });
   
    });
  })

    },[control])



    arkadas_ekle=()=>{

      var user = Firebase.auth().currentUser.email;

      var user_email=Firebase.firestore().collection("Users").doc(user)
      user_email.get().then(function(doc){
       var user_name=doc.data().KullaniciAdi
    
                dbh.collection("Users").where("KullaniciAdi","==",ekle)
                .get()
                .then(function(doc) {
                    
                    Firebase.firestore()
                    .collection("friend_wish_list")
                    .doc(ekle)
                    .collection("friend_wish_from")
                    .doc(user_name)
                    .set({
                      wish:true
                    })
                    .then(alert("İstek Gönderildi"))
              })
              .catch(function(error) {
                  console.log("Error getting document:", error);
              });
       
        });
  
  }



  return (
    
    <View style={styles.center}>
     <View style={styles.inputView} >
      <TextInput  
            style={styles.inputText}
            placeholder="Kullanıcı adı:" 
            placeholderTextColor="#003f5c"
            onChangeText={ekle => setekle(ekle)}
            defaultValue={ekle}/>
        
      </View>
      <Button  style={styles.button} title="ARAMA" onPress={arkadas_ekle}/>
      <Text>Arkadas İstekleri--- </Text>
      
      <Text>{arkadas} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
   button:{
    paddingTop:50,
  }
  
});

export default Arkadas;