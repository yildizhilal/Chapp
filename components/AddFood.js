import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Firebase from "../config/Firebase";
import { AntDesign } from "../node_modules/@expo/vector-icons";

import moment from "moment";
console.disableYellowBox = true;

const AddFood = () => {

  const [isim, setisim] = useState("");
  
  const [kalori, setkalori] = useState("");
  const [gram, setgram] = useState(0);
  var user = Firebase.auth().currentUser.email;
  
  var date=moment().format('LL');

  createFlowersList = () => {

    Firebase.firestore().collection("Food").where("name", "==", isim)
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) { 
            var Foods = Firebase.firestore().collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food").doc(isim)
            var setWithMerge = Foods.set({
                name: doc.data().name,
                Kalori:((doc.data().Kalori*gram)/100),
                Protein:((doc.data().Protein*gram)/100),
                Yag:((doc.data().Yag*gram)/100),
                Karbonhidrat:((doc.data().Karbonhidrat*gram)/100),
            }, { merge: true });
        });
    });


    closeModal();
  };



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>

      <View style={{ alignSelf: "stretch", marginHorizonal: 32 }}>
        <Text style={styles.title}>Besin Ekle</Text>

<View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <TextInput
          style={styles.input}
          placeholder="Besin Adı"
          onChangeText={(isim) => setisim(isim)}
        />
          <TextInput
          style={styles.input}
          placeholder="Gram"
          onChangeText={(gram) => setgram(gram)}
        />
</View>

        <TouchableOpacity
          style={{
            backgroundColor:"orange",
            marginTop: 24,
            height: 50,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            width: 310,
          }}
          onPress={createFlowersList}
        >
          <Text style={{  color: "black", fontWeight: "700", fontSize: 25 }} >
            Ekle
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FFCC80",
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  pickText: {
    paddingTop: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "orange",
    borderWidth:2,
    backgroundColor:"white",
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    width: "45%",
  },
});

export default AddFood;
