import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../../core/entities/movie.entity';
interface Props {
  movies: Movie;
}
export const MoviesPoster = ({movies}: Props) => {
  return (
    <View>
      <Image source={{uri: movie.poster}} />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
