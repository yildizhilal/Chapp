import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity ,Alert,Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from "../node_modules/@expo/vector-icons";
import AddFood from "../components/AddFood";
import Firebase from "../config/Firebase";
import { StackActions } from '@react-navigation/native';
import moment from "moment";
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import BarkodEkle from "../components/BarkodEkle";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

 const Camera=({navigation})=> {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dbh = Firebase.firestore();
  var user = Firebase.auth().currentUser.email;
  
  var date=moment().format('LL');
    
  const [addBarkod, setBarkod] = useState(false);   
  
  const [dataa, setdataa] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    const saveValueFunction = () => {
      AsyncStorage.setItem('key', data);
      setdataa("")
      setBarkod(true);
    } 
    var sfDocRef = dbh.collection("Barkod").doc(data)
    Firebase.firestore().runTransaction(function(transaction) {
      return transaction.get(sfDocRef).then(function(sfDoc) {
          if (!sfDoc.exists) {
            Alert.alert(
              "Çok Üzgünüz",
              "Maalesef bu ürün bizim veritabanımızda bulunmamaktadır. Eklemek ister misiniz?",
              [
                {
                  text: "Evet",
                  onPress: () => { saveValueFunction(); }
                },
                { text: "Hayır", onPress: () => console.log("Hayır Pressed") }
              ],
              { cancelable: false }
            )
          }
          else{
        alert(<TextInput placeholder="deneme"></TextInput>);        
           Firebase.firestore().collection("Barkod").where("barkod", "==", data)
            .onSnapshot(function(querySnapshot) {
                querySnapshot.forEach(function(doc) { 
                  
                    var Barkods = Firebase.firestore().collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food").doc(data)
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
        
                    var setWithMerge = Barkods.set({
                        name: doc.data().name,
                        Kalori:doc.data().Kalori,
                        Protein:doc.data().Protein,
                        Yag:doc.data().Yag,
                        Karbonhidrat:doc.data().Karbonhidrat,
                    }, { merge: true });
                });
            });


            alert("Ürün eklendi.")


          }
          
      });
  }).then(function(newk) {
      console.log("Population increased to ", newk);
  }).catch(function(err) {
      // This will be an "population is too big" error.
      console.error(err);
  });

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor:"#f1e1c7"
      }}>


          <Modal
            animationType="slide"
            visible={addBarkod}
          >
            <BarkodEkle  />
         </Modal>





        <Text style={{ position: "absolute", top: 20, fontSize:40 }}>Barkodu Okut</Text>
       

        <TouchableOpacity
        style={{ position: "absolute", top: 30, right: 32 }}
        onPress={closeBarkod}
      >
        <AntDesign name="close" size={40} color="black" />
      </TouchableOpacity>



      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

export default Camera;