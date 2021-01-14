import React, { useState } from 'react'
import { Button } from 'react-native';
import { Text, View,TouchableOpacity,TextInput,StyleSheet,ImageBackground,Alert} from 'react-native'
import { colors } from 'react-native-elements';
import Firebase from '../../config/Firebase';


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const ForgotPassword =props=> {

    const {navigation} = props;
    const [email, setemail] = useState('');

    const ButtonAlert = () =>
    Alert.alert(
      "işte oldu!",
      "lütfen e-postanı kontrol et",
      [
        {
          text: "TAMAM",
          onPress:() => navigation.navigate('Login'),
         
        },
      
      ],
      { cancelable: false }
    );

      forgotPassword = () => {
        Firebase.auth().sendPasswordResetEmail(email)
          .then(function (user) {
            alert('Lütfen e-mail adresinizi kontrol edin')
          })
          .then(()=> ButtonAlert())
          .catch(function (e) {
            console.log(e)
          })
      }


    return (
      <ImageBackground style={{flex: 1, opacity: 0.9,}}  source={require('../../assets/krem.png')}>
         <View style={styles.container}>
        <Text style={styles.txt}>Lütfen e-mail adresinizi girin</Text>
        <View style={styles.inputView}>
        <TextInput  
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#634d4d"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>
      </View>
        <TouchableOpacity style={styles.resetbtn}
      onPress={forgotPassword}>
    <Text style={styles.resetbtntxt}>Reset</Text>
  </TouchableOpacity>
      </View>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center' ,   
     },
     txt:{
      fontSize:25,
      fontWeight:"bold",
      marginTop:"45%",
      color: "#634d4d"
    },
    inputView:{
      width:"80%",
      backgroundColor:"#adcceb",
      borderRadius:25,
      height: "8%",
      marginBottom:"5%",
      justifyContent:"center",
      padding:"7%",
      alignSelf: 'center',
      marginTop:"20%",
    },
    inputText:{
      height:50,
      marginTop:"3%",
      alignSelf: 'center',
      fontWeight:"bold",
    },
    resetbtn:{
      width:"60%",
      backgroundColor:"#d77a5b",
      borderRadius:25,
      height:"10%",
      alignSelf: 'center',
      marginTop:"10%",
      marginBottom:"10%"
    },
    resetbtntxt:{
      alignSelf:"center",
      marginTop:"5%", 
      fontWeight:"bold",
      fontSize: 25,
      color:"white"
    }

  
  
   
  
  
  });

export default ForgotPassword