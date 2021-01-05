import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity ,Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { AntDesign } from "../node_modules/@expo/vector-icons";
import AddFood from "../components/AddFood";
import Firebase from "../config/Firebase";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dbh = Firebase.firestore();
  
  const [addFlowersVisible, setFlowers] = useState(false);   

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

  }, []);

  closemodal=()=>{
    return()=>{
      <Modal
      animationType="slide"
      visible={addFlowersVisible}
      onRequestClose={()=>toggleAddFlowersModal()}
    >
      <AddFood  />
    </Modal>
    }

  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    var sfDocRef = dbh.collection("Barkod").doc(data)
    Firebase.firestore().runTransaction(function(transaction) {
      return transaction.get(sfDocRef).then(function(sfDoc) {
          if (!sfDoc.exists) {
            Alert.alert(
              "Alert Title",
              "My Alert Msg",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            )
          }
          else{
            alert(`Bar code with data ${data} has been scanned!`);
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
        backgroundColor:"pink"
      }}>
        <Text style={{ position: "absolute", top: 20, fontSize:40 }}>Barkodu Okut</Text>
         <TouchableOpacity
        style={{ position: "absolute", top: 20, right: 32 }}
        onPress={closemodal}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
