import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {Routes} from './src/Routes';

const App = () => {
  return (
    <>
      <Text>FAAAAALA SE NÃO É O PAULO PLÍNIO</Text>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
};

export default App;
