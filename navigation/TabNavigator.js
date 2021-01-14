import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import AnaSayfa from "../screens/AnaSayfa"
import SuMiktar from "../screens/SuMiktar"
import AdimSayar from "../screens/AdimSayar"
import Arkadas from "../screens/Arkadas"
import Uyku from "../screens/Uyku"

import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator tabBarOptions={{style:{backgroundColor:"#d77a5b", color:"#634d4d"}}} >
        <Tab.Screen name="AnaSayfa" component={AnaSayfa}  options={{
          tabBarLabel: 'AnaSayfa',
          tabBarIcon: ({ color, size }) => (
            <Icon
            name='home'
            type='feather'
            color='#634d4d'
          />
          ),
        }} />
        <Tab.Screen name="SuMiktar" component={SuMiktar} options={{
          tabBarLabel: 'SuMiktar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="drop" size={24} color="#634d4d" />
          ),
        }}/>
       <Tab.Screen name="AdimSayar" component={AdimSayar}  options={{
          tabBarLabel: 'AdimSayar',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="running" size={24} color="#634d4d" />
          ),
        }} />
       <Tab.Screen name="Uyku" component={Uyku}  options={{
          tabBarLabel: 'Uyku',
          tabBarIcon: ({ color, size }) => (
            <Icon
            name='moon'
            type='feather'
            color='#634d4d'
          />
          ),
        }}/>
      </Tab.Navigator>
  );
}