import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Style} from '../../../config/app-theme';
import {userCountStore} from '../../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = userCountStore(state => state.count);
  const increment = userCountStore(state => state.increment);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: ` Contador :${count}`,
    });
  }, [count]);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Count: {count} </Text>

      <Pressable style={Style.primaryButton} onPress={() => increment(+1)}>
        <Text style={Style.title}>+1</Text>
      </Pressable>

      <Pressable style={Style.primaryButton} onPress={() => increment(-1)}>
        <Text style={Style.title}>-1</Text>
      </Pressable>
    </View>
  );
};
