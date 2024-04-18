import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {PrimaryBotton} from '../components/';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>
      <PrimaryBotton label="Increment" onPress={handleIncrement} />
      <Button style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Button>
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
