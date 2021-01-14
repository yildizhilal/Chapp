import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';

import KayitScreen from '../screens/Kayit';
import LoginScreen from '../screens/Login';
import KayitNextScreen from '../screens/KayitNext';

import ArkadasPage from '../screens/Arkadas';

import isteklerPage from '../screens/istekler';
import BarkodDataScreen from '../screens/BarkodData';
import AnaSayfaScreen from '../screens/AnaSayfa';
import ForgotPasswordScreen from '../screens/ForgotPassword';

import deneme from '../screens/Deneme';
const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">

        <Stack.Screen name="Splash"  component={SplashScreen} />
        <Stack.Screen name="Kayit" component={KayitScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="KayitNext" component={KayitNextScreen} />
        <Stack.Screen name="BarkodData" component={BarkodDataScreen} />
        <Stack.Screen name="deneme" component={deneme} />
         <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
         <Stack.Screen name="ArkadasPage" component={ArkadasPage} />
         
         <Stack.Screen name="isteklerPage" component={isteklerPage} />


        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;