import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import TabNavigator from "../../navigation/TabNavigator";
import DrawerNavigator from "../../navigation/DrawerNavigator";


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const deneme =props=> {
    
  return (
    <View style={styles.container}>
        <DrawerNavigator />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
  },
});
export default deneme