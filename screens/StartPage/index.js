import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const StartPage = props => {

  const {navigation} = props;

return (
  <View style={styles.container}>
     <ImageBackground style={{flex: 1, opacity: 0.87,}} source={{uri: 'https://cdn.pixabay.com/photo/2016/03/01/08/06/harmony-1229886_960_720.jpg'}}>
      <Text style={styles.text}>HOŞGELDİN</Text>
      <Text style={styles.textNext}>Hadi başlayalım...</Text>
    <View style={styles.buttonContainer}>
      <View style={styles.kayitText}>
    <Text 
         onPress={() => navigation.navigate('Kayit')}
        style={styles.textButton}>KAYIT OL</Text>
    </View>
    <View style={styles.kayitText} >
    <Text
        onPress={() => navigation.navigate('Login')} 
        style={styles.textButton}>GİRİŞ YAP</Text>
    </View>
    </View>
    </ImageBackground>
  </View>
  
);
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    
  
   
  },
  

  text:{
    marginTop: "20%",
    height:'43%',
    color:"#022040",
      fontWeight: 'bold',
      fontSize: 65,
      textAlign: "center",
      fontStyle: 'italic',
      
  },

  textNext:{
    height:'15%',
    color:"#022040",
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: "center",
      fontStyle: 'italic',
  },
  buttonContainer:{
    justifyContent:'space-between',
    width:'80%',
    height:'20%',
    alignSelf: 'center',
    
    
    
  },
  kayitText:{
   
    backgroundColor: 'rgba(0,0,0,0.65)',
    
    borderWidth: 2,
    borderRadius: 50,
    justifyContent:"space-around",
    fontSize: 50,
    opacity:0.8
  },
  textButton:{
    fontSize:30,
    textAlign: "center",
    color:"#f7f7f7",
   
  },


});



export default StartPage;