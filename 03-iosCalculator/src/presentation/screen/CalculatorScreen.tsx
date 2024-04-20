import React from 'react';
import {View, Text} from 'react-native';
import {colors, style} from '../../config/theme/app-them';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {number, buildNumber, toggleSign} = useCalculator();

  return (
    <View style={style.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.mainResult}>
          {number}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.subResult}>
          {number}
        </Text>
      </View>

      <View style={style.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          label="C"
          blacktext
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          blacktext
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('del')}
          label="del"
          blacktext
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('÷')}
          label="÷"
          blacktext
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => console.log('x')}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton onPress={() => console.log('=')} label="=" />
      </View>
    </View>
  );
};
