import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons'; 
import { Icon } from 'react-native-elements'
import Arkadas from "../screens/Arkadas"
import istekler from "../screens/istekler"

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator >
          
        <Drawer.Screen name="AnaSayfa" component={TabNavigator} options={{
          drawerLabel: 'AnaSayfa',
          drawerIcon: ({ color, size }) => (
            <Icon
            name='home'
            type='feather'
            color='#517fa4'
          />
          ),
        }}/>
        <Drawer.Screen name="Arkadas" component={Arkadas} options={{
          drawerLabel: 'Arkadas',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="#517fa4" />
          ),
        }}/>
        <Drawer.Screen name="istekler" component={istekler} options={{
          drawerLabel: 'Arkadaş İstekleri',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="#517fa4" />
          ),
        }}/>
      </Drawer.Navigator>



  );
}