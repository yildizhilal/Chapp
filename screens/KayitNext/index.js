import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity } from 'react-native';
import Firebase from '../../config/Firebase';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { useRoute } from '@react-navigation/native';


const KayitNext = (props) => {
  const route = useRoute();

  var doc=route.params.caption
    

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
  
  const [x, setx] = useState('');
 
  
data_ekle=()=>{

if(cinsiyet===0){
  var kalori= 22*hedef
  var yag=  (1,6)*hedef
  var karbonhidrat=(4,8)*hedef
  var protein=(0,8)*hedef
}
else{
  kalori= (24,5)*hedef
   yag=  (1,6)*hedef
   karbonhidrat=(4,8)*hedef
   protein=(0,8)*hedef 
}
var cityRef = dbh.collection("Users").doc(doc);
    var setWithMerge = cityRef.set({
      Cinsiyet:cinsiyet,
      Kilo: kilo,
      Boy: boy,
      Yas:yas,
      Hedef:hedef,
      Kalori:kalori,
      Yag:yag,
      Karbonhidrat:karbonhidrat,
      Protein:protein,
}, { merge: true }); 

setx(kalori)

}

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
      <Text style={styles.devamText}>KAYDET</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.devamBtn} onPress={() => navigation.navigate('AnaSayfa',{ belge: x})}>
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
      paddingLeft:"20%",
      paddingRight:"20%",
      paddingBottom:"10%",
      paddingTop:"10%",
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
      marginBottom:"5%",
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
    }
  
  });
  

export default KayitNext;