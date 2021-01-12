import React, { useState ,useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Modal
  
} from "react-native";
import { colors } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Firebase from "../config/Firebase";
import { AntDesign } from "../node_modules/@expo/vector-icons";
import Camera from "../components/Camera";

import moment from "moment";
console.disableYellowBox = true;

const AddFood = () => {

  const [isim, setisim] = useState("");
  
  const [addBarkod, setBarkod] = useState(false);   
  const [KAL, setKAL] = useState(0);
  
  const [kalori, setkalori] = useState("");
  const [gram, setgram] = useState(0);
  var user = Firebase.auth().currentUser.email;
  
  var date=moment().format('LL');


  useEffect(()=>{

    toggleAddBarkod = () => {
      setBarkod(true);
    };
  
    closeBarkod = () => {
      setBarkod(false);
    };

  },[])

  createFlowersList = () => {
    var nn=isim.toUpperCase()
    const res = nn.replace(/ /g, '')


    Firebase.firestore().collection("Food").where("name", "==", res)
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) { 
            var Foods = Firebase.firestore().collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food").doc(res)
          

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
    });

    closeModal();
  };


  return (


    
    <KeyboardAvoidingView style={styles.container} behavior="padding">

           <Modal
            animationType="slide"
            visible={addBarkod}
            onRequestClose={()=>toggleAddBarkod()}
          >
            <Camera  />
          </Modal>

      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color="black" />
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
            backgroundColor:"#adcceb",
            marginTop: 24,
            height: 50,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "space-around",
            alignSelf: "center",
            width: 310,
          }}
          onPress={()=>toggleAddBarkod()}
        >
          <View style={{flexDirection:"row"}}>
          <Text style={{  color: "black", fontWeight: "700", fontSize: 20 }} >
           Barkod ile Ekleme Yap     
          </Text>
          <AntDesign name="barcode" size={40} color="black" />
          </View>
        </TouchableOpacity>



        <TouchableOpacity
          style={{
            backgroundColor:"#adcceb",
            marginTop: 24,
            height: 50,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            width: 310,
          }}
          onPress={()=>createFlowersList()}
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
    backgroundColor:"#f1e1c7",
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
    color: "black",
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#adcceb",
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
