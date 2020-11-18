import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity,Picker } from 'react-native';


const Kayit = props => {

  const {navigation} = props;
  state={
    cinsiyet:"",
    kilo:"",
    boy:"",
    yas:"",
    hedef:"",
  }
  const [selectedValue, setSelectedValue] = useState("Cinsiyetiniz..");
  return (

    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2019/05/28/10/05/rock-4234793_960_720.jpg'}}>
<View style={styles.container}>
    <Text style={styles.logo}>Bazı bilgilere ihtiyacımız var..:)</Text>
    <Picker
        selectedValue={selectedValue}
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label="Cinsiyetiniz.." value=" " />
        <Picker.Item label="kadin" value="kadin" />
        <Picker.Item label="erkek" value="erkek" />
      </Picker>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Kilonuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({kilo:text})}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Boyunuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({boy:text})}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Yaşınız:" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({yas:text})}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Hedef Kilonuz:" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({hedef:text})}/>
    </View>
 
    <TouchableOpacity style={styles.devamBtn}>
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