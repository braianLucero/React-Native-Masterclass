import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Style} from '../../../config/app-theme';
import {userCountStore} from '../../../store/counter-store';

export const SettingsScreen = () => {
  const count = userCountStore(state => state.count);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Count: {count} </Text>

      <Pressable style={Style.primaryButton}>
        <Text style={Style.title}>+1</Text>
      </Pressable>

      <Pressable style={Style.primaryButton}>
        <Text style={Style.title}>-1</Text>
      </Pressable>
    </View>
  );
};
