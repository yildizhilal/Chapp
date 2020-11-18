import React from 'react';
import {SafeAreaView} from 'react-native';
import AppContainer from './navigation/AppContainer';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};



export default App;