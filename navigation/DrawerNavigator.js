import * as React from 'react';
import {Alert } from "react-native";
import { createDrawerNavigator,  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons'; 
import { Icon } from 'react-native-elements'
import Arkadas from "../screens/Arkadas"
import istekler from "../screens/istekler"

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();





export default function DrawerNavigator(props) {


  return (
      <Drawer.Navigator    drawerStyle={{
        backgroundColor: '#e19b84',
        width: 240,
      }}>
          
        <Drawer.Screen name="AnaSayfa" component={TabNavigator} options={{
          drawerLabel: 'AnaSayfa',
          drawerIcon: ({ color, size }) => (
            <Icon
            name='home'
            type='feather'
            color='#634d4d'
          />
          ),
        }}/>
        <Drawer.Screen name="Arkadas" component={Arkadas} options={{
          drawerLabel: 'Arkadas',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="#634d4d" />
          ),
        }}/>
        <Drawer.Screen name="istekler" component={istekler} options={{
          drawerLabel: 'Arkadaş İstekleri',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="#634d4d" />
          ),
        }}/>

    
      </Drawer.Navigator>



  );
}