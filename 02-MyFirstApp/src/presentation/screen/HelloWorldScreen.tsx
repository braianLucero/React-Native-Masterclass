import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({name}: Props) => {
  return (
    <View style={style.container}>
      <Text numberOfLines={1} style={style.title}>
        Hello , {name}{' '}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: '#fff',
  },
});
