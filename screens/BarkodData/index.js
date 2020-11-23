import React, { useState, PropTypes}  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Picker } from 'react-native';
import Firebase from '../../config/Firebase';
import { CommonActions } from '@react-navigation/native';

const BarkodData = props => {

  const {navigation} = props;
 

  const dbh = Firebase.firestore();

  const [kalori, setkalori] = useState('');
  const [yag, setyag] = useState('');
  const [protein, setprotein] = useState('');
  const [karbonhidrat, setkarbonhidrat] = useState('');
  const [isim, setisim] = useState('');
  
  const [gram, setgram] = useState('');

  return (

    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={require('../../assets/kurabiye.jpg')}>
<View style={styles.container}>
    <Text style={styles.logo}>Bilgiler</Text>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Ürün Adı:" 
        placeholderTextColor="#003f5c"
        onChangeText={isim => setisim(isim)}
        defaultValue={isim}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Gram:" 
        placeholderTextColor="#003f5c"
        onChangeText={gram => setgram(gram)}
        defaultValue={gram}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kalori:" 
        placeholderTextColor="#003f5c"
        onChangeText={kalori => setkalori(kalori)}
        defaultValue={kalori}/>
    </View>
   
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Yağ:" 
        placeholderTextColor="#003f5c"
        onChangeText={yag => setyag(yag)}
        defaultValue={yag}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Karbonhidrat:" 
        placeholderTextColor="#003f5c"
        onChangeText={karbonhidrat => setkarbonhidrat(karbonhidrat)}
        defaultValue={karbonhidrat}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Protein:" 
        placeholderTextColor="#003f5c"
        onChangeText={protein => setprotein(protein)}
        defaultValue={protein}/>
    </View>
    
     <TouchableOpacity style={styles.devamBtn} onPress={handleSignUp}>
      <Text style={styles.devamText}>DEVAM</Text>
    </TouchableOpacity>
   
    </View>
    </ImageBackground>
 
  );
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      paddingLeft:60,
      paddingRight:60,
      
    },
    text:{
      fontSize:20,
       color:"#26659c",
       borderBottomColor:"#26659c",
      borderBottomWidth:3,
      fontWeight:"bold",},
    
    radio:{
      paddingLeft:60,
      paddingRight:60,
    },
    
    logo:{
      marginTop: 20,
      fontWeight:"bold",
      fontSize:20,
      color:"#26659c",
      marginBottom:0,
      textAlign: "center",
      alignSelf:'stretch',
      borderBottomColor:"#26659c",
      borderBottomWidth:3,
      paddingBottom:10,
    
    },
  
    inputView:{
      width:"80%",
      backgroundColor:"#E57373",
      height:'10%',
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',
      
      borderRadius:25,
    },
    inputText:{
      height:50,
      color:"black",
    },
    devamBtn:{
      width:"80%",
      backgroundColor:"#E53935",
      borderRadius:25,
      height:'10%',
      alignSelf: 'center',
  
      marginTop:40,
      marginBottom:10
    },
    devamText:{
      marginTop: 15,
      color:"white",
      textAlign: "center",
    },

    pickerStyle:
    {
     color:"black",
      height:100,
      width:150,
      alignSelf:'center',
      marginBottom:0,
      
    }
  
  });
  
  
  export default BarkodData;

