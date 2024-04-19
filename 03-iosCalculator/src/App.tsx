import React from 'react';
import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screen/CalculatorScreen';

export const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
};
