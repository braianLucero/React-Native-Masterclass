import React from 'react';
import {View, Text} from 'react-native';
import {Style} from '../../../config/app-theme';
import {useProfileStore} from '../../../store/proFile-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Nombre: {name}</Text>
      <Text style={Style.title}>Email: {email}</Text>
    </View>
  );
};
