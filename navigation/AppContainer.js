import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartPageScreen from '../screens/StartPage';
import KayitScreen from '../screens/Kayit';
import KayitNextScreen from '../screens/KayitNext';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start Page">
            
        <Stack.Screen name="StartPage"  component={StartPageScreen} />
        <Stack.Screen name="Kayit" component={KayitScreen} />
        <Stack.Screen name="KayitNext" component={KayitNextScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;
