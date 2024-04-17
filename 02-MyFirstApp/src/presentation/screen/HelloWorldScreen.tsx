import {View, Text, StyleSheet} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={style.constainer}>
      <Text style={style.title}>Hello World !</Text>
    </View>
  );
};

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
