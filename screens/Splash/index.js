import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet,Image, ImageBackground,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Firebase from '../../config/Firebase';


console.disableYellowBox = true;

const Splash = props => {

  const {navigation} = props;

  const [email, setemail] = useState('x@x.com');
  const [password, setpassword] = useState('......');

  useEffect(() => {
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
      setemail(value)
      //Setting the value in Text
    );
    AsyncStorage.getItem('any_key_here2').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
       setpassword(value)
      //Setting the value in Text
    );
    if(email!=null && password!=null && email!="x@x.com" && password!="......"){
      
      Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('deneme',{
        screen: 'AnaSayfa',
        params: {
          screen: 'AnaSayfa',
          params: {
            caption:email,
          },
        },
      }
       ))
      .catch(error => alert(error))
    }
    else if(email==null && password==null){
        navigation.navigate('Login');
    }
  });

  return (
    <View style={styles.container}>
       <ImageBackground style={{flex: 1, opacity: 0.87,}} source={require('../../assets/splash_.png')}>
       
     
      </ImageBackground>
    </View>
    
  );
  };

  const styles = StyleSheet.create({
    container:{
        flex: 1, 
      },
 
});

  export default Splash;