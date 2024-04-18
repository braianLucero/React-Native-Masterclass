import React from 'react';

import {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../theme/globalStyles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>{count}</Text>

      <FAB
        label="+"
        style={globalStyle.fab}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};
