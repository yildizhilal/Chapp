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


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const AnaSayfa=({ navigation })=> {

  var kal = [];
  var KAL = [];
  var k = [];
  var y = [];
  var p = [];
 const route = useRoute();

 var email=route.params.caption
 //var Email=route.params.belge
   
 const[kalori,setkalori]=useState([])
 
 const[KALORI,setKALORI]=useState([])
 
 const[yag,setY]=useState([])
 const[protein,setP]=useState([])
 const[karbonhidrat,setK]=useState([])
 
 const [addFlowersVisible, setFlowers] = useState(false);
 const[Food,setFood]=useState([])
 const dbh = Firebase.firestore();

 var user = Firebase.auth().currentUser.email;
 
 var date=moment().format('LL');

        useEffect(() => {
          dbh.collection("Users")
          .onSnapshot(function(querySnapshot) {
              
              querySnapshot.forEach(function(doc) {
               if((doc.id===email)||(doc.id===email)){
                  kal.push(doc.data().Kalori);
                  k.push(doc.data().Karbonhidrat);
                  p.push(doc.data().Protein);
                  y.push(doc.data().Yag);}
              }
              );
            setkalori(kal)
            setK(k)
            setP(p)
            setY(y)
          });

          Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
          .onSnapshot(function(doc) {
            KAL.push(doc.data().KALORI)
            
          });
          setKALORI(KAL); 



          const subscriber = Firebase.firestore()
      .collection('Users').doc(user).collection("GunlukTakip").doc(date).collection("food")
      .onSnapshot(querySnapshot => {
        const food = [];
        querySnapshot.forEach(documentSnapshot => {
          food.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
     
        setFood(food);
      });



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
        <ImageBackground style={{ flex:1,}} source={{uri: 'https://cdn.pixabay.com/photo/2016/11/29/02/35/blue-1866881_960_720.jpg'}}>

    <View style={{alignItems:"flex-start",top:10,left:15}}>
    <FontAwesome name="bars" size={30} color="black" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} />
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
            percent={((kalori-KALORI)*100)/kalori}
            radius={80}
            borderWidth={10}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{}}
        >
            <Text style={{ fontSize: 18 }}>{kalori-KALORI} kcal</Text>
        </ProgressCircle>

    </View>
    <View style={styles.controlSpace}>
        <View style={styles.yagView} >
        <Text style={{ fontWeight:"bold",textAlign: 'center' , fontSize:10}}>YAĞ</Text>
            <Progress.Bar progress={(100*75)/yag} width={100} height={20}  />
         </View>
         
        <View style={styles.proView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' , fontSize:10}}>PROTEİN</Text>
        <Progress.Bar progress={(100*75)/protein} width={100} height={20} />
        </View>
        <View style={styles.karView} >
        <Text style={{  opacity: 0.8,fontWeight:"bold",textAlign: 'center' , fontSize:11, fontSize:10}}>KARBON</Text>
        <Progress.Bar progress={(100*5)/karbonhidrat} width={100} height={20}  />
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



