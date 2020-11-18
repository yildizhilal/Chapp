import {View, Text, StyleSheet,Button,TextInput,TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import Firebase from '../../config/Firebase';

const Login = props => {
  const {navigation} = props;

  state={
    email:"",
    password:"", 
    login: false
  }

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  handleLogin = () => {

    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('StartPage'))
        .catch(error => console.log(error))
}


  return (
   <View style={styles.container} >
    <Text style={styles.logo}>CHAPP</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={email => setemail(email)}
        defaultValue={email}
        autoCapitalize='none'/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={password => setpassword(password)}
        defaultValue={password}
        secureTextEntry/>
    </View>
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity>
     <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>


  </View>
 );
};




const styles = StyleSheet.create({
    container:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#FFB74D'
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
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