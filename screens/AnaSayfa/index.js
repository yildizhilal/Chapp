import React, {useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ImageBackground,TouchableOpacity, FlatList,Modal} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Firebase from '../../config/Firebase';
import { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
 import ProgressCircle from 'react-native-progress-circle'
import moment from "moment";
import AddFood from "../../components/AddFood";
import FoodList from "../../components/FoodList";
import { DrawerActions } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-community/async-storage';



//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const AnaSayfa=({ navigation })=> {

  var deneme=[];
  var kal = [];
  var KAL = [];
  var KAR= [];
  var PRO = [];
  var YAG = [];
  var k = [];
  var y = [];
  var p = [];
 const route = useRoute();

 var email=route.params.caption
 //var Email=route.params.belge
   
 const[kalori,setkalori]=useState([])
 
 const[KALORI,setKALORI]=useState([])
 
 const[KARBONHIDRAT,setKAR]=useState([])
 
 const[PROTEIN,setPRO]=useState([])
 
 const[YA,setYAG]=useState([])
 
 const[d,setd]=useState([])
 const[dd,setdd]=useState([])
 
 const[yag,setY]=useState([])
 const[protein,setP]=useState([])
 const[karbonhidrat,setK]=useState([])
 
 const [addFlowersVisible, setFlowers] = useState(false);
 const[Food,setFood]=useState([])
 const dbh = Firebase.firestore();

 var user = Firebase.auth().currentUser.email;
 
 var date=moment().format('LL');
 
 handlelogout = async()=>{
  try{
        await Firebase.auth().signOut()
       .then(() => navigation.navigate('Login'));
       
    AsyncStorage.clear();
       

  }catch( error ){
        console.error(error);
  }
}

 
        useEffect(() => {
          dbh.collection("Users")
          .onSnapshot(function(querySnapshot) {
              
              querySnapshot.forEach(function(doc) {
               if((doc.id===email)||(doc.id===email)){
                  kal.push(doc.data().Kalori);
                  k.push(doc.data().Karbonhidrat);
                  p.push(doc.data().Protein);
                  y.push(doc.data().Yag);} }
              );
            setkalori(kal)
            setK(k)
            setP(p)
            setY(y)
          });
          var sfDocRef = Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
          Firebase.firestore().runTransaction(function(transaction) {
              return transaction.get(sfDocRef).then(function(sfDoc) {
                  if (!sfDoc.exists) {
                    var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
                    var k = SU.set({
                      YAG:0,
                      KARBONHIDRAT:0,
                      PROTEIN:0,
                      KALORI:0,
                      SuMiktari:0,
                      UykuSaati:0,
                      Adim:0,
                    }, { merge: true }); }
              });
            })
          Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
          .onSnapshot(function(doc) {
            KAL.push(doc.data().KALORI)
            KAR.push(doc.data().KARBONHIDRAT)
            YAG.push(doc.data().YAG)
            PRO.push(doc.data().PROTEIN) });
          setKALORI(KAL); 
          setPRO(PRO); 
          setKAR(KAR); 
          setYAG(YAG); 
          const subscriber = Firebase.firestore()
      .collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food")
      .onSnapshot(querySnapshot => {
        const food = [];
        querySnapshot.forEach(documentSnapshot => {
          food.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });setFood(food);
        
      });

      deneme=(kalori-KALORI);
      setd(deneme);

      toggleAddFlowersModal = () => {
        setFlowers(true);
      };
    
      closeModal = () => {
        setFlowers(false);
      };

    // Unsubscribe from events when no longer in use
    return () =>{ subscriber();}
    
        },[])


        renderList = (list) => {
          return <FoodList list={list} />;
        };
      
     
  return (
    <View style={styles.container}>
        <ImageBackground style={{ flex:1,}} source={require('../../assets/beyaz.png')}>

    <View style={{alignItems:"flex-start",top:25,left:15}}>
    <FontAwesome name="bars" size={30} color="black" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
    <View style={{alignItems:"flex-end",right:15}}>
    <MaterialIcons name="exit-to-app" size={30} color="black"  onPress={()=>handlelogout()} />
    </View>

 <Modal
      animationType="slide"
      visible={addFlowersVisible}
      onRequestClose={()=>toggleAddFlowersModal()}
    >
      <AddFood  />
    </Modal>

        

      <View style={styles.kalori} >
      <ProgressCircle
            percent={(KALORI*100)/kalori}
            radius={80}
            borderWidth={10}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{}}
        >
            <Text style={{ fontSize: 18 }}>{d} kcal</Text>
        </ProgressCircle>

    </View>
    <View style={styles.controlSpace}>
        <View style={styles.yagView} >
        <Text style={{ fontWeight:"bold",textAlign: 'center' , fontSize:10}}>YAĞ</Text>
            <Progress.Bar progress={1} width={100} height={20}  />
         </View>
         
        <View style={styles.proView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' , fontSize:10}}>PROTEİN</Text>
        <Progress.Bar progress={1} width={100} height={20} />
        </View>
        <View style={styles.karView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' , fontSize:11, fontSize:10}}>KARBON</Text>
        <Progress.Bar progress={1} width={100} height={20}  />
        </View>
    </View>


    <View style={{paddingRight:"5%",flex:1}}>
      <TouchableOpacity style={styles.yemekBtn} onPress={()=>toggleAddFlowersModal()}
        >
      <Text style={styles.yemekText}>BESİN EKLE</Text>
     
    </TouchableOpacity>
    

    <View style={styles.listArea}>
        
        <FlatList
        data={Food}
         horizontal={false}
         showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderList(item)}
      />
     </View>

    </View>
    </ImageBackground>
    <StatusBar style="auto"  hidden={true} />
    </View>
  );

};


const styles = StyleSheet.create({
  container:{
    flex: 1, 
  
  },
  yemekText:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
    fontWeight:"600",
    fontSize:20,
  },
  listArea: {
    flex: 1,
    justifyContent:"center",
    alignContent:"center"
  },
  yemekBtn:{
    width:"50%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"15%",
    alignSelf:'center',
   
  },
  txt:
  {
    color:"black",
    fontSize:30,
    fontWeight:"bold",
    justifyContent:"center",
    
    
  },

  controlSpace: {
    flexDirection: 'row',
    justifyContent:"center",
  
  },
  yagView:
  {

    width:"30%",
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    alignSelf: 'center',
    

  },
  proView:
  {

    width:"30%",
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    alignSelf: 'center',
    

  },
  karView:
  {

    width:"30%",
    height: "8%",
    marginBottom:"3%",
    justifyContent:"center",
    alignSelf: 'center',
    

  },
  kalori:
  {
    marginTop:"5%",
    width:"40%",
    height: "20%",
    marginBottom:"10%",
    justifyContent:"center",
    alignSelf: 'center',
  }

});



export default AnaSayfa;



