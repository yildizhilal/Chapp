import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { useRoute } from '@react-navigation/native';


const AnaSayfa = props => {

  const {navigation} = props;
  const route = useRoute();

  var kalori=route.params.kal
    

return (
  <View style={styles.container}>
      <Text style={styles.text}>{route.params.kal}</Text>
  </View>
  
);
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:"pink"
    
  
   
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



export default AnaSayfa;