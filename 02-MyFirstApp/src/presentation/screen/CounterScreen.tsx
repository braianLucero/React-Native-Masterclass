import React from 'react';

import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>

      {/* <PrimaryButton
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        label="Incrementar"
      /> */}
      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2f31',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '300',
  },
});
