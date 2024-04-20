import React from 'react';
import {View, Text} from 'react-native';
import {colors, style} from '../../config/theme/app-them';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={style.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={style.mainResult}>1500</Text>
        <Text style={style.subResult}>15</Text>
      </View>

      <View style={style.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          label="C"
          blacktext
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
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
        <CalculatorButton onPress={() => console.log('7')} label="7" />
        <CalculatorButton onPress={() => console.log('8')} label="8" />
        <CalculatorButton onPress={() => console.log('9')} label="9" />
        <CalculatorButton
          onPress={() => console.log('x')}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => console.log('4')} label="4" />
        <CalculatorButton onPress={() => console.log('5')} label="5" />
        <CalculatorButton onPress={() => console.log('6')} label="6" />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => console.log('1')} label="1" />
        <CalculatorButton onPress={() => console.log('2')} label="2" />
        <CalculatorButton onPress={() => console.log('3')} label="3" />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={style.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => console.log('.')} label="." />
        <CalculatorButton onPress={() => console.log('=')} label="=" />
      </View>
    </View>
  );
};
