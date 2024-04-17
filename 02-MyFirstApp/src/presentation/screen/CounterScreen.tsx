import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>

      <Pressable
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}>
        <Text>+</Text>
      </Pressable>
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
