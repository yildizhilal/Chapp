import React, { useState } from 'react'
import { Text, View,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Firebase from '../../config/Firebase';


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const ForgotPassword =props=> {

    const {navigation} = props;
    const [email, setemail] = useState('');

    
      forgotPassword = () => {
        Firebase.auth().sendPasswordResetEmail(email)
          .then(function (user) {
            alert('Lütfen e-mail adresinizi kontrol edin')
          })
          .then(() => navigation.navigate('Login'))
          .catch(function (e) {
            console.log(e)
          })
      }


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Forgot Password Screen</Text>
        <TextInput  
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#003f5c"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>

        <TouchableOpacity 
      onPress={forgotPassword}>
    <Text>Reset</Text>
  </TouchableOpacity>
      </View>
    )
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
      color:"black"
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

export default ForgotPassword