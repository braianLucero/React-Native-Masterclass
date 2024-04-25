import React from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyle.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>

      <PrimaryButton label="regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="regresar Al Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
