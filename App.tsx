import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
