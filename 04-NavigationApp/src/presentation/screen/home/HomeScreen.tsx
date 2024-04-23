import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyle} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {IonIcons} from '../../components/shared/IonIcons';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcons name="menu-outline" />
        </Pressable>
      ),
    });
  }, []);

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
