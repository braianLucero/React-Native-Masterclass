import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../../config/theme/app-them';

export const CalculatorScreen = () => {
  return (
    <View style={style.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={style.mainResult}>1500</Text>
        <Text style={style.subResult}>15</Text>
      </View>
    </View>
  );
};
