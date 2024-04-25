import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.purpleBox]} />
      <View style={[style.box, style.orangeBox]} />
      <View style={[style.box, style.blueBox]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // justifyContent: 'center',
    // alignItems: 'center',
    //Todo:tarea
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // flex: 1,
    // right: 40,
    // top: 283,
    // position: 'absolute',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    // flex: 1,
    // left: 100,
    // // bottom: 100,
    // // // flex: 1,
    // position: 'relative',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // flex: 1,
    // position: 'relative',
    // right: 100,
    // // width: 'auto',
  },
});
