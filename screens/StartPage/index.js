import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const StartPage = props => {

    const {navigation} = props;

  return (
    <View style={styles.container}>
        <Text style={styles.text}>CHAPP'E Hoşgeldiniz</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.kayitText}>
      <Text 
           onPress={() => navigation.navigate('Kayit')}
          style={styles.textButton}>Kayıt Ol</Text>
      </View>
      <View style={styles.kayitText} >
      <Text
          onPress={() => navigation.navigate('Login')} 
          style={styles.textButton}>Giriş Yap</Text>
      </View>
      </View>
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
    text:{
      height:'50%',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center",
        fontStyle: 'italic',
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



export default StartPage;