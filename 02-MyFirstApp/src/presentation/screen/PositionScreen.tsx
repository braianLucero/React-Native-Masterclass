import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.greenBox} />
      <View style={style.orangeBox} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    right: 0,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green ',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});
// las cajas hijas siempren dependen del padre
