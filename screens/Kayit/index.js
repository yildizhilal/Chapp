import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Picker } from 'react-native';
import Firebase from '../../config/Firebase';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { useRoute } from '@react-navigation/native';

const Kayit = props => {

  
  const {navigation} = props;
  const route = useRoute();

  const dbh = Firebase.firestore();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [kullaniciadi, setkullaniciadi] = useState('');
  const [soyisim, setsoyisim] = useState('');
  const [isim, setisim] = useState('');
  const [secim, setsecim] = useState('');

  handleSignUp = () => {
    dbh.collection("Users").doc(kullaniciadi).set({
      KullaniciAdi: kullaniciadi,
      isim:isim,
      soyisim:soyisim,
     })
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('KayitNext',{ caption: kullaniciadi}))
        .catch(error => alert(error))
}



var radio_props = [
  {label: 'Kilomu Koru', value: 0 },
  {label: 'Kilo Ver', value: 1 },
  {label: 'Kilo Al', value: 2 }
];
  return (

    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2019/05/28/10/05/rock-4234793_960_720.jpg'}}>
<View style={styles.container}>

    <Text style={styles.logo}>Bazı bilgilere ihtiyacımız var..:)</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kullanıcı adı:" 
        placeholderTextColor="#003f5c"
        onChangeText={kullaniciadi => setkullaniciadi(kullaniciadi)}
        defaultValue={kullaniciadi}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Adınz:" 
        placeholderTextColor="#003f5c"
        onChangeText={isim => setisim(isim)}
        defaultValue={isim}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Soyadınız:" 
        placeholderTextColor="#003f5c"
        onChangeText={soyisim => setsoyisim(soyisim)}
        defaultValue={soyisim}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="E-mail:" 
        placeholderTextColor="#003f5c"
        onChangeText={email => setemail(email)}
        defaultValue={email}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Password:" 
        placeholderTextColor="#003f5c"
        onChangeText={password => setpassword(password)}
        defaultValue={password}/>
    </View>
    <View style={styles.radio}>
    <Text style={styles.text}>Seçim Yapınız.</Text>
    <RadioForm
          radio_props={radio_props}
          initial={0}
          
          buttonColor={'#fb5b5a'}
          selectedButtonColor={'#fb5b5a'}
          buttonInnerColor={'#fb5b5a'}
          onPress={secim =>setsecim(secim)}

          
        />
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
      fontSize:15,
       color:"#26659c",
       borderBottomColor:"#26659c",
      borderBottomWidth:3,
      fontWeight:"bold",},
    
    radio:{
      paddingLeft:"20%",
      paddingRight:"20%",
    },
    
    logo:{
      marginTop: "2%",
      fontWeight:"bold",
      fontSize:20,
      color:"#26659c",
      marginBottom:0,
      textAlign: "center",
      alignSelf:'stretch',
      borderBottomColor:"#26659c",
      borderBottomWidth:3,
      paddingBottom:"5%",
    
    },
  
    inputView:{
      width:"100%",
      backgroundColor:"#9bb0bf",
      height:"5%",
      marginBottom:"2%",
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',  
      borderRadius:25,
      
    },
    inputText:{
      height:50,
      color:"black"
    },
    devamBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:"8%",
      alignSelf: 'center',
  
      marginTop:"10%",
      marginBottom:"10%"
    },
    devamText:{
      marginTop: "8%",
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
  
  
  export default Kayit;

