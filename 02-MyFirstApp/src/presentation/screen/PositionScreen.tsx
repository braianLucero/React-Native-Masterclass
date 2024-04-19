import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row', // Para que los elementos se alineen en fila
    justifyContent: 'space-between', // Para espaciar los elementos
    alignItems: 'flex-end', // Para alinear los elementos al final del contenedor
    paddingHorizontal: 20, // Añade un poco de espacio en los bordes
    paddingBottom: 20,
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
    // right: 0, // No necesitas esta propiedad
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green ',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

// las cajas hijas siempren dependen del padre
