import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movie} from '../../core/entities/movie.entity';
import {
  NavigationContainerProps,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParams, Navigation} from '../navigations/Navigation';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
export const MoviesPoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationContainerProps<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', {movieId: movie.id})}>
      <View>
        <Image source={{uri: movie.poster}} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
