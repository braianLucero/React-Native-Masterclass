import React from 'react';
import {View} from 'react-native';
import {globalStyle} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
};
//
