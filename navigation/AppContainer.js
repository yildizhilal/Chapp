import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import StartPage from '../screens/StartPage';
import Kayit from '../screens/Kayit';
import Login from '../screens/Login';
import KayitNext from '../screens/KayitNext';

import BarkodData from '../screens/BarkodData';
import AnaSayfa from '../screens/AnaSayfa';
import Camera from '../screens/Camera';
import Uyku from "../screens/Uyku";
import AdimSayar from "../screens/AdimSayar";
import SuMiktar from "../screens/SuMiktar";



import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#a5a5b1",
  },
  headerTintColor: "white",
  headerBackTitle: "black",
};



const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="StartPage">
      
      <Stack.Screen name="AnaSayfa" component={AnaSayfa} />
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="KayitNext" component={KayitNext} />
      <Stack.Screen name="Kayit" component={Kayit} />


    </Stack.Navigator>
  
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BarkodData" component={BarkodData} />
      <Stack.Screen name="Uyku" component={Uyku} />


    </Stack.Navigator>
  );
};

const DenemeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Uyku" component={Uyku} />
      <Stack.Screen name="SuMiktar" component={SuMiktar} />
      <Stack.Screen name="AdimSayar" component={AdimSayar} />



    </Stack.Navigator>
  );
};
const Deneme1StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name="SuMiktar" component={SuMiktar} />
     



    </Stack.Navigator>
  );
};

const Deneme2StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AdimSayar" component={AdimSayar} />
    </Stack.Navigator>
  );
};


export { MainStackNavigator, ContactStackNavigator,DenemeStackNavigator,Deneme1StackNavigator,Deneme2StackNavigator };