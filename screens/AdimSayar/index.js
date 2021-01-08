import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,ImageBackground ,TouchableOpacity} from 'react-native';
import { Pedometer } from 'expo-sensors';
import AsyncStorage from '@react-native-community/async-storage';

import Firebase from "../../config/Firebase";
import moment from "moment";

const AdimSayar = props => {
  const {navigation} = props;

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

  handlelogout = async()=>{
    try{
          await Firebase.auth().signOut()
         .then(() => navigation.navigate('Login'));
         
      AsyncStorage.clear();
         
  
    }catch( error ){
          console.error(error);
    }
  }


    return (
      <ImageBackground style={{flex: 1, opacity: 0.9,}} source={require('../../assets/k.png')}>

      <View style={styles.container}>
        <Text>{isPedometerAvailable ? "Hemen adım sayısını arttıralım!" : "Telefonunuz bu özelliği desteklememektedir."} </Text>
        <Text>Adım Sayısı 👣: {currentStepCount}</Text>

        <TouchableOpacity style={styles.kaydetBtn} onPress={()=>handlelogout()}>
         <Text style={styles.kaydetBtntxt}>logout</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kaydetBtntxt:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
    fontWeight:"600",
    fontSize:20,
    justifyContent: "center",
    alignItems: "center",
  },
  kaydetBtn:{
    width:"50%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"22%",
    alignSelf:'center',
    

    marginTop:"10%",
    marginBottom:"10%"
  },
});

export default AdimSayar;