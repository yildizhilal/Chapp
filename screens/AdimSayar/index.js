import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,ImageBackground ,TouchableOpacity, TextInput} from 'react-native';
import { Pedometer } from 'expo-sensors';

import Firebase from "../../config/Firebase";
import moment from "moment";
import ProgressCircle from 'react-native-progress-circle'
import AsyncStorage from '@react-native-community/async-storage';


const AdimSayar = props => {
  
  const[isPedometerAvailable,setisPedometerAvailable]=useState('checking');
  const[currentStepCount,setcurrentStepCount]=useState(0);
  var user = Firebase.auth().currentUser.email;
  var date=moment().format('LL');
  var saat=moment().format('LT'); 
  var SAAT="11:55 PM"

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
      console.log(currentStepCount,"asas")
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

  _kontrol=() =>{
    if (currentStepCount>5000){
      return true;
    }
    else{
      return false;
    }
  }



    return (
      <ImageBackground style={{flex: 1, opacity: 0.9,}} source={require('../../assets/beyaz.png')}>

<View style={styles.container}>
      <View style={styles.uykuView1}>
        <Text>{isPedometerAvailable ? "Hemen adım sayısını arttıralım!" : "Telefonunuz bu özelliği desteklememektedir."} </Text>
        </View>
        <View style={styles.uykuView}>
        <Text>{_kontrol() ? "harika gidiyorsun!" : "Hedefe ulaşman için biraz daha adım atmalısın."} </Text>
        </View>
      
        <View style={styles.kalori} >
      <ProgressCircle
            percent={10000}
            radius={80}
            borderWidth={10}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{}}
        >
            <Text style={{ fontSize: 18}}>{currentStepCount} ADIM</Text>
        </ProgressCircle>

    </View>

  
      </View>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uykuView:{
    justifyContent:"center",
    alignContent:"center",
    width:"90%",
    backgroundColor:"#adcceb",
    height:"5%",
    margin:"5%",
    justifyContent:"center",
    padding:20,
    alignSelf: 'center',  
    
  },
  uykuView1:{
    justifyContent:"center",
    alignContent:"center",
    width:"90%",
    backgroundColor:"#adcceb",
    height:"5%",
    margin:"5%",
    justifyContent:"center",
    padding:20,
    alignSelf: 'center',  
    marginTop:"30%",
    
  },

    kalori:
    {
      width:"40%",
      height: "20%",
      margin:"10%",
      justifyContent:"center",
      alignSelf: 'center',
    }
});
export default AdimSayar;