import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Style} from '../../../config/app-theme';
import {useProfileStore} from '../../../store/proFile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Nombre: {name}</Text>
      <Text style={Style.title}>Email: {email}</Text>
      <Pressable
        style={Style.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Braian Lucero'})}>
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable
        style={Style.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'Brasanluc123@gmail.com'})
        }>
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={Style.primaryButton}
        onPress={() => changeProfile('John Doe', 'JohnDon@gmail.com')}>
        <Text>Regresar a john</Text>
      </Pressable>
    </View>
  );
};
