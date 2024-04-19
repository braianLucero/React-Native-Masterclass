import React from 'react';
import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screen/CalculatorScreen';
import {style} from './config/theme/app-them';

export const App = () => {
  return (
    <View style={style.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
};
