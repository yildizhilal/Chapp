import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Picker } from 'react-native';
import Firebase from '../../config/Firebase';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Kayit = props => {

  const {navigation} = props;
 

  const dbh = Firebase.firestore();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [kullaniciadi, setkullaniciadi] = useState('');
  const [soyisim, setsoyisim] = useState('');
  const [isim, setisim] = useState('');
  const [secim, setsecim] = useState('');

  handleSignUp = () => {
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('KayitNext'))
        .catch(error => console.log(error))
}

var radio_props = [
  {label: 'Kilomu Koru', value: 0 },
  {label: 'Kilo Ver', value: 1 },
  {label: 'Kilo Al', value: 2 }
];

  const [selectedValue, setSelectedValue] = useState("seçim yapınız");
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
        secureTextEntry
        style={styles.inputText}
        placeholder="adınz:" 
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
        placeholder="password:" 
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

