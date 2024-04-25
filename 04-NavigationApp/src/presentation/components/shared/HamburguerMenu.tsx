import {useNavigation, DrawerActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {IonIcons} from './IonIcons';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

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
  return <></>;
};
