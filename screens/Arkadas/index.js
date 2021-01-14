import React, { useEffect, useState } from "react";
import {ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  SafeAreaView,
  ImageBackground
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "../../config/Firebase";

import FriendList from "../../components/FriendList";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const Arkadas = () => {
  
  
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [ekle, setEkle] = useState(""); 
  
  var user = Firebase.auth().currentUser.email;
  useEffect(() => {

    const subscriber = Firebase.firestore()
      .collection("Users").doc(user).collection("Arkadaslar")
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);


  Arkadas_ekle=()=>{

    alert("Arkadaşlık isteği Gönderilmiştir.")
  
  
    Firebase.firestore().collection("Users").where("KullaniciAdi", "==",ekle)
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().email);

           Firebase.firestore().collection('Users').doc(user)
           .onSnapshot(function(doc) {
              var kisi = [];
                  kisi.push(doc.data().KullaniciAdi);

                  console.log("Suan",doc.data().KullaniciAdi)
                  
                  console.log("x",cities.toString())

                  var cityRef = Firebase.firestore().collection('Users').doc(cities.toString()).collection("istekler").doc(doc.data().KullaniciAdi)
                 
                  var setWithMerge = cityRef.set({
                      name: doc.data().KullaniciAdi,
                      cinsiyet:doc.data().Cinsiyet,
                    
                  }, { merge: true });

            });
          
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });
  
  }
  


  renderList = (list) => {
    return <FriendList list={list} />;
  };




  return (
    <ImageBackground style={{flex: 1, opacity: 0.9,}}  source={require('../../assets/krem.png')}>

    <View style={styles.container}>
      <Text style={styles.title}>Arkadaşlar</Text>

      <View style={[styles.buttonArea,{flexDirection:"row"}]}>
      <TextInput
            style={styles.input}
            placeholder="Arkadaş Ekle"
            onChangeText={(ekle) => setEkle(ekle)}
          />      
        <TouchableOpacity
          style={styles.addList}
          onPress={()=>Arkadas_ekle()}
        >
          <AntDesign name="plus" size={20} color="#2f5a93" />
        </TouchableOpacity>
      </View>


      <View style={styles.listArea}>
        
      <FlatList
      data={users}
       horizontal={false}
       showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => renderList(item)}
    />
  
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  listArea: {
    paddingHorizontal:"5%",
    width:"90%"

  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color:"#2f5a93",
    paddingTop: 20,
    borderBottomColor:"#2f5a93",
    borderBottomWidth:5,
    paddingBottom:"3%",
  
  },
  buttonArea: {
    borderWidth:StyleSheet.hairlineWidth,
    marginTop:"8%",
    borderWidth:4,
    borderColor: "#634d4d",
    borderRadius:6,
    paddingBottom: 10,
    width:"85%"
  },
  addList: {
    borderWidth: 2,
    borderColor: "#634d4d",
    borderRadius: 4,
    padding: 5,
    marginTop:"2%",
    paddingHorizontal:"3%",
    marginLeft:"40%"
  },
  add: {
    color: "blue",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
  input:{
    fontSize:20,
    paddingLeft:10,
    color:"#2f5a93",
  },
});

export default Arkadas;

