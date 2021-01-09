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
    <View style={styles.container}>
      
      <Text style={styles.title}>Arkadaşlar</Text>

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

export default istekler;



