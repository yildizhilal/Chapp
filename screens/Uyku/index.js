import React,{useState} from "react";
import { View, StyleSheet,ImageBackground,Button,Text } from "react-native";
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

const kontrol=()=>{
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
  const uykuEkle =()=>{
 
    var sure=()=>kontrol();
    setuyku(sure)
    var Uyku= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
     var setWithMerge = Uyku.set({
       UykuSaati:uyku
   }, { merge: true });

   }

  return (
    <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2019/03/18/21/12/dream-catcher-4064206_960_720.jpg'}}>
    <View style={styles.center}>
      <View style={styles.design}>
      <View style={{alignContent:"space-around"}}>
        <Button onPress={showTimepicker} title="SAAT KAÇTA UYUDUNUZ?" />
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

      <View style={{alignContent:"space-around"}}>
        <Button onPress={showTimepicker1} title="SAAT KAÇTA UYANDINIZ?" />
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

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  kaydetBtntxt:{
    marginTop: "8%",
    color:"white",
    textAlign: "center",
  },
  kaydetBtn:{
    width:"50%",
    backgroundColor:"#5e9ae8",
    borderRadius:25,
    height:"15%",
    alignSelf:'center',

    marginTop:"10%",
    marginBottom:"10%"
  },
  design:{
    flexDirection:'row',
    alignContent:"space-between",
    
  }
  
});

export default Uyku;