import React, { useState, PropTypes}  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Picker } from 'react-native';
import Firebase from '../../config/Firebase';
import { CommonActions } from '@react-navigation/native';



//disable yellow warnings on EXPO client!
console.disableYellowBox = true;



const BarkodData = props => {


  const {navigation} = props;
 

  const dbh = Firebase.firestore();

  const [kalori, setkalori] = useState('');
  const [yag, setyag] = useState('');
  const [protein, setprotein] = useState('');
  const [karbonhidrat, setkarbonhidrat] = useState('');
  const [isim, setisim] = useState('');
  
  const [gram, setgram] = useState('');


  handleSignUp = () => {
    dbh.collection("Barkod").doc('1').set({
      Kalori: kalori,
      Isım:isim,
      Yag:yag,
      Protein:protein,
      Karbonhidrat:karbonhidrat,
     })
}




  return (

    <ImageBackground style={{flex: 1, opacity: 0.9,}}  source={require('../../assets/beyaz.png')}>
<View style={styles.container}>
    <Text style={styles.logo}>Besin Bilgileri</Text>

  

    <View style={styles.inputView} >
      <TextInput  
        
        style={styles.inputText}
        placeholder="Ürün Adı:" 
        placeholderTextColor="white"
        onChangeText={isim => setisim(isim)}
        defaultValue={isim}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Gram:" 
        placeholderTextColor="white"
        onChangeText={gram => setgram(gram)}
        defaultValue={gram}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kalori:" 
        placeholderTextColor="white"
        onChangeText={kalori => setkalori(kalori)}
        defaultValue={kalori}/>
    </View>
   
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Yağ:" 
        placeholderTextColor="white"
        onChangeText={yag => setyag(yag)}
        defaultValue={yag}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Karbonhidrat:" 
        placeholderTextColor="white"
        onChangeText={karbonhidrat => setkarbonhidrat(karbonhidrat)}
        defaultValue={karbonhidrat}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Protein:" 
        placeholderTextColor="white"
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
      paddingLeft:40,
      paddingRight:40,
      
    },
 
 
    
    logo:{
      marginTop: "10%",
      fontWeight:"bold",
      fontSize:20,
      color:"#26659c",
      marginBottom:"10%",
      textAlign: "center",
      alignSelf:'stretch',
      borderBottomColor:"#26659c",
      borderBottomWidth:3,
      paddingBottom:10,
    
    },
  
    inputView:{
      width:"80%",
      backgroundColor:"#3c4d80",
      height:'8%',
      marginBottom:"5%",
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',
      paddingLeft:40,
      paddingRight:40,
      borderRadius:25,
    },
    inputText:{
      height:25,
      color:"pink",
    },
    devamBtn:{
      width:"80%",
      backgroundColor:"#ca9bca",
      borderRadius:25,
      height:'10%',
      alignSelf: 'center',
      marginTop:"5%",
      marginBottom:"5%",
    },
    devamText:{
      marginTop: "5%",
      color:"white",
      textAlign: "center",
      fontSize:30,
      fontWeight:"bold",
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