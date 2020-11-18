import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity } from 'react-native';
import Firebase from '../../config/Firebase';
import kayit from '../Kayit';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 

const KayitNext = props => {

  var radio_props = [
    {label: 'Kadın', value: 0 },
    {label: 'Erkek', value: 1 }
  ];

  const {navigation} = props;
  const dbh = Firebase.firestore();
  const [cinsiyet, setcinsiyet] = useState('');
  const [kilo, setkilo] = useState('');
  const [boy, setboy] = useState('');
  const [yas, setyas] = useState('');
  const [hedef, sethedef] = useState('');

data_ekle=()=>{
  dbh.collection("Users").doc(kayit.name).set({
    cinsiyet:cinsiyet,
    kilo: kilo,
    boy: boy,
    yas:yas,
    hedef:hedef,
  })
}

  const [selectedValue, setSelectedValue] = useState("Cinsiyetiniz..");
  return (

    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2019/05/28/10/05/rock-4234793_960_720.jpg'}}>
   <View style={styles.container}>
    <Text style={styles.logo}>Bazı bilgilere ihtiyacımız var..:)</Text>
    
    <View style={styles.radio}>
    <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          buttonColor={'#fb5b5a'}
          selectedButtonColor={'#fb5b5a'}
          buttonInnerColor={'#fb5b5a'}
          buttonSize={20}
          onPress={cinsiyet =>setcinsiyet(cinsiyet)}
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kilonuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={kilo => setkilo(kilo)}
        defaultValue={kilo}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Boyunuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={boy => setboy(boy)}
        defaultValue={boy}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Yaşınız:" 
        placeholderTextColor="#003f5c"
        onChangeText={yas => setyas(yas)}
        defaultValue={yas}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Hedef Kilonuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={hedef => sethedef(hedef)}
        defaultValue={hedef}/>
    </View>
 
    <TouchableOpacity style={styles.devamBtn} onPress={data_ekle}>
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
    radio:{
      paddingLeft:60,
      paddingRight:60,
    },
    logo:{
      marginTop: 50,
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
      backgroundColor:"#9bb0bf",
      height:30,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',
    },
    inputText:{
      height:50,
      color:"black"
    },
    devamBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignSelf: 'center',
  
      marginTop:40,
      marginBottom:10
    },
    devamText:{
      marginTop: 15,
      color:"white",
      textAlign: "center",
    }
  
  });
  

export default KayitNext;