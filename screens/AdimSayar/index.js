import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

import Firebase from "../../config/Firebase";
import moment from "moment";

const AdimSayar=()=> {

  const[pastStepCount,setpastStepCount]=useState(0);
  
  const[isPedometerAvailable,setisPedometerAvailable]=useState('checking');
  const[currentStepCount,setcurrentStepCount]=useState(0);
  var user = Firebase.auth().currentUser.email;
  var date=moment().format('LL');
  var saat=moment().format('LT'); 
  var SAAT="11:50 PM"


  _subscribe = () => {
    _subscription = Pedometer.watchStepCount(result => {
        setcurrentStepCount(result.steps)
       
  console.log(currentStepCount)
  console.log("saat",saat)
  if(saat==SAAT){
    console.log("eşit")
  }

    });

    Pedometer.isAvailableAsync().then(
      result => {
          setisPedometerAvailable(result)
  
      },
      error => {
          setisPedometerAvailable(error)

      }
    );

   
  };

  _unsubscribe = () => {
    _subscription && _subscription.remove();
    _subscription = null;
    if(saat==SAAT){
      var adim= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
      var setWithMerge = adim.set({
      Adim:currentStepCount
  }, { merge: true });
    }
  };



  
  useEffect(() => {
    _subscribe();
    // returned function will be called on component unmount 
    return () => {
      _unsubscribe();
    }
  }, [])




    return (
      <View style={styles.container}>
        <Text>{isPedometerAvailable ? "Hemen adım sayısını arttıralım!" : "Telefonunuz bu özelliği desteklememektedir."} </Text>
        <Text>Adım Sayısı 👣: {currentStepCount}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AdimSayar;