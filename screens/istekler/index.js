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
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "../../config/Firebase";

import FriendWishList from "../../components/FriendsWishList";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const istekler = () => {
  
  
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  var user = Firebase.auth().currentUser.email;

  useEffect(() => {

    const subscriber = Firebase.firestore()
      .collection("Users").doc(user).collection("istekler")
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

  
  const [addFlowersVisible, setFlowers] = useState(false);



  renderList = (list) => {
    return <FriendWishList list={list} />;
  };

  return (
    <ImageBackground style={{flex: 1, opacity: 0.9,}}  source={require('../../assets/krem.png')}>
    <View style={styles.container}>
      
      <Text style={styles.title}>Arkadaşlık İstekleri</Text>

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
    flex: 1,
    marginTop:"10%",

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
    borderWidth:4,
    borderColor: "#634d4d",
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

export default istekler;



