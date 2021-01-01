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
<<<<<<< HEAD
  var damla;
  
   const[water,setWater]=useState("")

  useEffect(() => {

    const subscriber = Firebase.firestore()
      .collection("Users").doc(user).collection("GunlukTakip").doc(date)
      .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data().SuMiktari);
         setWater( doc.data().SuMiktari)

    });

  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const [count, setCount] = useState(0);

=======

  const [count, setCount] = useState(0);

>>>>>>> f46151700289c65c5c3748d771ee854823106ef7
  function  _kontrol(n) {
    if (count==n){
      return false;
    }
    else{
      return true;
    }
  }
  function  _kontrol2(n) {
    if (count<n){
      return true;
    }
    else{
      return false;
    }
  }


const[su,setsu]=useState(250)

const[water,setwater]=useState(0)

   su_ekle=()=>{

    var SU= Firebase.firestore().collection("Users").doc(user).collection("GunlukTakip").doc(date)
    var setWithMerge = SU.set({
      SuMiktari:su
  }, { merge: true });

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

   }


  console.log(water,"water")

   

  return (
    <View style={styles.center}>
       <ImageBackground style={{ flex:1,}} source={{uri: 'https://cdn.pixabay.com/photo/2014/11/25/16/32/drop-of-water-545377_960_720.jpg'}}>

      <View style={styles.title}>
          <Text style={{fontWeight:"700",fontSize:40, color:"white" ,marginTop:"15%"}}>  SU HAYATTIR!</Text>
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
        <View style={styles.txt}>
        <Text style={styles.txtson}>Bir günde en az 2 litre su içmelisin!</Text>
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
    backgroundColor:"#e3dcce",
    borderRadius:25,
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