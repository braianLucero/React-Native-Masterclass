import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
      {/* <Text style={style.title}>BoxObjectScreen</Text> */}
      {/* <View style={style.purpleBox} /> */}

      <View style={style.purpleBox}>
        <Text style={{color: 'white'}}>hola Mundo</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    margin: 20,
    padding: 5,
  },
});

// a la hora de agregar estilos (agregar un tamanio , siempre es el padre quien determina el tamanio no los children )
