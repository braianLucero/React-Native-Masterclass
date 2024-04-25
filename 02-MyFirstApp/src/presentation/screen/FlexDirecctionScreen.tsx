import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirecctionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box1]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffa',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
});
