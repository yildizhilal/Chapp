import React, { useEffect, useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Firebase from '../../config/Firebase';


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const Login = props => {

  const {navigation} = props;
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [getValue, setGetValue] = useState('');



  handleLogin = () => {

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

const saveValueFunction = () => {
  //function to save the value in AsyncStorage
  if (email) {
    //To check the input not empty
    AsyncStorage.setItem('any_key_here', email);
    //Setting a data to a AsyncStorage with respect to a key
    setemail('');
    //alert to confirm
  } 

  if (password) {
    //To check the input not empty
    AsyncStorage.setItem('any_key_here2', password);
    //Setting a data to a AsyncStorage with respect to a key
    setpassword('');
    //Resetting the TextInput
    //alert to confirm
  }
  handleLogin();
};

return (

  <View style={styles.container}>
  <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2016/03/01/08/06/harmony-1229886_960_720.jpg'}}>
  <Text style={styles.logo}>CHAPP</Text>
  <View style={styles.inputView} >
    <TextInput  
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#003f5c"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>
  </View>
  <View style={styles.inputView} >
    <TextInput  
      style={styles.inputText}
      placeholder="Password..." 
      placeholderTextColor="#003f5c"
      onChangeText={password => setpassword(password)}
        defaultValue={password}/>
  </View>
  <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
    <Text style={styles.forgot}>Forgot Password?</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.loginBtn} 
      onPress={()=>saveValueFunction()}>
    <Text style={styles.loginText}>LOGIN</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Kayit')}>
    <Text
     style={styles.loginText}>Sign up</Text>
  </TouchableOpacity>

  </ImageBackground>
</View>
);
}
const styles = StyleSheet.create({
  container:{
    flex: 1, 
  },
  logo:{
    marginTop: "5%",
    fontWeight:"bold",
    fontSize:80,
    color:"#fb5b5a",
    marginBottom:"30%",
    textAlign: "center",
  },
  forgot:{
    color:"white",
    fontSize:11,
    textAlign: "center",
  },
  inputView:{
    width:"80%",
    backgroundColor:"#e3dcce",
    borderRadius:25,
    height: "8%",
    marginBottom:"5%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"8%",
    alignSelf: 'center',

    marginTop:"10%",
    marginBottom:"5%",
  },
  loginText:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
  },
  text:{
    height:'50%',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: "center",
      fontStyle: 'italic',
      fontFamily:"tahoma",
  },
  buttonContainer:{
    justifyContent:'space-between',
    width:'50%',
    height:'25%',
  },
  kayitText:{
   
    backgroundColor: "#FFCC80",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent:"space-around",
    fontSize: 20,
  },
  textButton:{
    fontSize:20,
    textAlign: "center",
  },


});


export default Login;