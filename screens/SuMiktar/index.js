import React, {useEffect, useState} from "react";
import { View, StyleSheet,Image,ImageBackground, Text,TouchableOpacity} from "react-native";

import Firebase from "../../config/Firebase";
import moment from "moment";



//disable yellow warnings on EXPO client!
console.disableYellowBox = true;


const SuMiktar = props => {
  const {navigation} = props;
  var date=moment().format('LL');
  var user = Firebase.auth().currentUser.email;


  const [count, setCount] = useState(0);
  
 

  _kontrol=(n)=> {
    if (count==n){
      return false;
    }
    else{
      return true;
    }
  }
 _kontrol2=(n)=> {
    if (count<n){
      return true;
    }
    else{
      return false;
    }
  }

  useEffect(()=>{
        var sfDocRef = Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
        return Firebase.firestore().runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(sfDocRef).then(function(sfDoc) {
                if (!sfDoc.exists) {
                  var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
                  var setWithMerge = SU.set({
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
                  setwater(doc.data().SuMiktari)
                });
            });
        }).then(function() {
            console.log("Transaction successfully committed!");
        }).catch(function(error) {
            console.log("Transaction failed: ", error);
        }); 
  },[])


const[su,setsu]=useState(250)
const[water,setwater]=useState(0)
     
 su_ekle=()=>{
    var sfDocRef = Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)

return Firebase.firestore().runTransaction(function(transaction) {
    return transaction.get(sfDocRef).then(function(sfDoc) {
        if (!sfDoc.exists) {
          var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
          var setWithMerge = SU.set({
            SuMiktari:0
          }, { merge: true });
        }

        Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
        .onSnapshot(function(doc) {
          setwater(doc.data().SuMiktari)
        });
        setCount(count+ 1);
        setsu((su+250))
        var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
         var setWithMerge = SU.set({
           SuMiktari:su
       }, { merge: true });
    });
}).then(function() {
    console.log("Transaction successfully committed!");
}).catch(function(error) {
    console.log("Transaction failed: ", error);
});
   }
     console.log(water,"water")

   
     

  return (
    <View style={styles.center}>
       <ImageBackground style={{ flex:1,}} source={require('../../assets/beyaz.png')}>

      <View style={styles.title}>
          <Text style={{fontWeight:"700",fontSize:40, color:"#d77a5b" ,marginTop:"8%",  borderBottomColor:"#d77a5b",
    borderBottomWidth:3,
    paddingBottom:"2%",}}>  SU HAYATTIR!</Text>
      </View>
      <View style={styles.miktar}>
        <Text style={styles.miktartext}>Bugün Toplam {water} Mililitre Su İçtin</Text>
        <Text style={styles.miktartext}>Tebrikler Böyle Devam Et!</Text>
      </View>
  
       <View style={styles.controlSpace}>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(0)}
          style={ _kontrol2(1) ? styles.btn2 : styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(1)}
          style={ _kontrol2(2) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
     
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(2)}
          style={ _kontrol2(3) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
     
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(3)}
          style={ _kontrol2(4) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(4)}
          style={ _kontrol2(5) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(5)}
          style={ _kontrol2(6) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.controlSpace}>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(6)}
          style={ _kontrol2(7) ? styles.btn2 : styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(7)}
          style={ _kontrol2(8) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(8)}
          style={ _kontrol2(9) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(9)}
          style={ _kontrol2(10) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(10)}
          style={ _kontrol2(11) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>su_ekle()}
          disabled={_kontrol(11)}
          style={ _kontrol2(12) ? styles.btn2: styles.btn1}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
              <Text>+250ml</Text>
        </TouchableOpacity>

        </View>
       
       </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,

  },
  title:{
    padding:15,
    alignItems:"center",
    borderBottomWidth:0,
    borderBottomColor:"white"
  },

  miktar:{
    
    alignItems: "center",
    justifyContent: "center",
    marginTop:"2%",
    marginBottom:"2%",
    width:"90%",
    backgroundColor:"#adcceb",
    height: "15%",
    padding:"7%",
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#844b15",
    
  },
  miktartext:{
    fontSize:21,
    alignItems: "center",
    justifyContent: "center",
    color:"black",
    marginBottom:"4%",
    
  },
  txtson:{
    fontSize:25,
    alignItems: "center",
    justifyContent: "center",
    color:"white",
  
  },
  txt:{
    alignItems: "center",
    justifyContent: "center",
    marginTop:"0%",
  },
  btn1: {
  
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: "30%",
    width: "15%",
    borderRadius: 5,
    margin: "0.5%",
    opacity:1,
  },
  buttonImageIconStyle: {
    padding: 15,
    margin: "15%",
    height: "75%",
    width: "15%",
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btn2:{
 
    alignItems: 'center',
    backgroundColor: '#00e6e6',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: "30%",
    width: "15%",
    borderRadius: 5,
    margin: "0.5%",
    opacity:0.3,
  },
  controlSpace: {
    flexDirection: 'row',
    justifyContent:"center",
    marginTop: "1%",
    
  
  },
});

export default SuMiktar;