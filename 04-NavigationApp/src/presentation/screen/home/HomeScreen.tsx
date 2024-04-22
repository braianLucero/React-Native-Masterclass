import React from 'react';
import {View} from 'react-native';
import {globalStyle} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyle.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
//
