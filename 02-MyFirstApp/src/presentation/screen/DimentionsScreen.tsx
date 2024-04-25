import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');
export const DimentionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={style.container}>
        <View
          style={{
            ...style.purpleBox,
            width: width * 0.6,
          }}
        />
      </View>

      <Text style={style.title}>
        w:{width} , h: {height}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: '#2c2f31',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
