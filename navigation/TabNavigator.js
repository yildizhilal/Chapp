import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator,DenemeStackNavigator,Deneme1StackNavigator,Deneme2StackNavigator } from "./AppContainer";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AnaSayfa" component={MainStackNavigator} />
      <Tab.Screen name="BarkodData" component={ContactStackNavigator} />
      <Tab.Screen name="Uyku" component={DenemeStackNavigator} />
      <Tab.Screen name="SuMiktar" component={Deneme1StackNavigator} />
      <Tab.Screen name="AdimSayar" component={Deneme2StackNavigator} />

      

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;