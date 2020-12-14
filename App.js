import React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from './navigation/AppContainer';
import BottomTabNavigator from "./navigation/TabNavigator";


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};



export default App;