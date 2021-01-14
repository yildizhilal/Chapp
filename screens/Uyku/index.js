import React,{useState, useEffect} from "react";
import { View, StyleSheet,ImageBackground,Button,Text,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import Firebase from "../../config/Firebase";
import moment from "moment";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const Uyku = props => {
  const {navigation} = props;
  var date=moment().format('LL');
  var user = Firebase.auth().currentUser.email;
  const[uyku,setuyku]=useState(0)



const [tarih, setDate] = useState(new Date(date));
const [tarih1, setDate1] = useState(new Date(date));
const [mode, setMode] = useState('time');
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);


const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || tarih;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
  
};
const onChange1 = (event, selectedDate) => {
  const currentDate = selectedDate || tarih;
  setShow1(Platform.OS === 'ios');
  setDate1(currentDate);
 
};

  function showMode(currentMode) {
    setShow(true);
    setMode(currentMode);
  }
  function showMode1(currentMode) {
    setShow1(true);
    setMode(currentMode);
  }


const showTimepicker = () => {
  showMode('time');
};
const showTimepicker1 = () => {
  showMode1('time');
};


kontrol=()=>{
  var x=Number(tarih);
  var y=Number(tarih1);
  var deger=y-x;
  deger=deger/1000;
  deger=deger/60;
  deger=deger/60;
  if(deger<0){
    deger=24+deger;
  }
  return deger;
}
const[saat,setSaat]=useState(0)
useEffect(()=>{   
  var sfDocRef = Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
  return Firebase.firestore().runTransaction(function(transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(sfDocRef).then(function(sfDoc) {
          if (!sfDoc.exists) {
            var Uyku= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
            var setWithMerge = Uyku.set({
              SuMiktari:0,
              UykuSaati:0,
              KALORI:0,
              YAG:0,
              KARBONHIDRAT:0,
              PROTEİN:0,
              Adim:0,
            }, { merge: true });
          }
          Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
          .onSnapshot(function(doc) {
            setSaat(doc.data().UykuSaati)
          });
      });
  }).then(function() {
      console.log("Transaction successfully committed!");
  }).catch(function(error) {
      console.log("Transaction failed: ", error);
  });


},[])

  const uykuEkle =()=>{
 
    var sure=()=>kontrol();
    setuyku(sure)
    var Uyku= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
     var setWithMerge = Uyku.set({
       UykuSaati:uyku
   }, { merge: true });

   }


  return (
    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={require('../../assets/beyaz.png')}>
    <View style={styles.center}>
      <View style={styles.design}>
      <View style={{alignContent:"space-around"}}>
      <TouchableOpacity  onPress={showTimepicker}  >
        <Text style={styles.logo1}>Kaçta  uyudunuz?</Text>

        <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2016/11/23/01/27/night-1851685_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tarih}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View style={{alignContent:"space-around",
    left:"30%"}}>
        <TouchableOpacity  onPress={showTimepicker1}  >
        <Text style={styles.logo1}>Kaçta uyandınız?</Text>

        <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844227_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
      </View>
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tarih1}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange1}
        />
      )}
      </View>
    <TouchableOpacity style={styles.kaydetBtn} onPress={()=>uykuEkle()}>
  
      <Text style={styles.kaydetBtntxt}>KAYDET</Text>
    </TouchableOpacity>
    <View style={styles.uykuView}>
    <Text style={styles.logo}>Bugün Toplam {uyku} saat uyudun</Text>
    </View>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
  },
  logo:{
    marginTop: "5%",
    fontWeight:"bold",
    fontSize:20,
    color:"#634d4d",
    marginBottom:"5%",
    textAlign: "center",
    alignSelf:'stretch',
    borderBottomColor:"#634d4d",
    borderBottomWidth:3,
    paddingBottom:"5%",
  
  },
  logo1:{
    fontWeight:"bold",
    fontSize:20,
    color:"#634d4d",
    marginBottom:"5%",
    textAlign: "center",
    alignSelf:'stretch',
    borderBottomColor:"#634d4d",
    borderBottomWidth:3,
    paddingBottom:"2%",
  
  },
  buttonImageIconStyle: {
    padding: 65,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  uykuView:{
    width:"90%",
    backgroundColor:"#adcceb",
    height:"10%",
    marginBottom:"40%",
    justifyContent:"center",
    padding:20,
    alignSelf: 'center',  
    
  },
  kaydetBtntxt:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
    fontSize:40,
    justifyContent: "center",
    alignItems: "center",
  },
  miktartext:{
    fontSize:21,
    alignItems: "center",
    justifyContent: "center",
    color:"black",
    marginBottom:"4%",
    
  },
  kaydetBtn:{
    width:"50%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"30%",
    alignSelf:'center',
    marginTop:"5%",
  },
  design:{
    flexDirection:'row',
    alignContent:"space-around",
    alignItems:"center",
    right:"3%",
    left:"5%"
   
  },
  design2:{
    flexDirection:'row',
    alignContent:"space-around",
    alignItems:"center",
   
   
  }
  
});

export default Uyku;