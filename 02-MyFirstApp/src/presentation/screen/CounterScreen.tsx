import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PrimaryBotton} from '../components/';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>
      <PrimaryBotton
        label="Incrementar"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: '#000',
    fontWeight: '300',
  },
});
