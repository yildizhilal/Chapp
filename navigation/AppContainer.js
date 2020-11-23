import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartPageScreen from '../screens/StartPage';
import KayitScreen from '../screens/Kayit';
import LoginScreen from '../screens/Login';
import KayitNextScreen from '../screens/KayitNext';

import BarkodDataScreen from '../screens/BarkodData';
import AnaSayfaScreen from '../screens/AnaSayfa';
import CameraScreen from '../screens/Camera';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartPage">
            
        <Stack.Screen name="StartPage"  component={StartPageScreen} />
        <Stack.Screen name="Kayit" component={KayitScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="KayitNext" component={KayitNextScreen} />
        <Stack.Screen name="BarkodData" component={BarkodDataScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="AnaSayfa" component={AnaSayfaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;