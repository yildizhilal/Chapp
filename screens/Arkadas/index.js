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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "../../config/Firebase";

import FriendList from "../../components/FriendList";

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
                      name: doc.data().KullaniciAdi
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
          <AntDesign name="plus" size={16} color="green" />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  listArea: {
    flex: 1,

  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color:"green",
    paddingTop: 20,
  },
  buttonArea: {
    borderWidth:StyleSheet.hairlineWidth,
    borderWidth:2,
    borderColor: "white",
    borderRadius:6,
    paddingBottom: 10,
    width:"85%"
  },
  addList: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    padding: 5,
    marginTop:"2%",
    paddingHorizontal:"3%",
    marginLeft:"60%"
  },
  add: {
    color: "blue",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});

export default Arkadas;





  
 /*const dbh = Firebase.firestore();
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
  
});*/
