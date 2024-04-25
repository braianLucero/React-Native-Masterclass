import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Style} from '../../../config/app-theme';
import {userCountStore} from '../../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = userCountStore(state => state.count);
  const incrementBy = userCountStore(state => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: `Contador : ${count}`});
  }, [count]);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Contador : {count}</Text>

      <Pressable style={Style.primaryButton} onPress={() => incrementBy(+1)}>
        <Text style={Style.title}>+1</Text>
      </Pressable>

      <Pressable style={Style.primaryButton} onPress={() => incrementBy(-1)}>
        <Text style={Style.title}>-1</Text>
      </Pressable>
    </View>
  );
};
