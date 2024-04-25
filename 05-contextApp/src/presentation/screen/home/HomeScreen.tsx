import React from 'react';
import {View, Text} from 'react-native';
import {Style} from '../../../config/app-theme';
import {useProfileStore} from '../../../store/proFile-store';
import {userCountStore} from '../../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = userCountStore(state => state.count);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Nombre: {name}</Text>
      <Text style={Style.title}>Email: {email}</Text>
      <Text style={Style.title}>Contador : {count}</Text>
    </View>
  );
};
