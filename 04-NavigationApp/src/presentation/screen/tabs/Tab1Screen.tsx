import React from 'react';
import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
// import Icon from 'react-native-vector-icons/Ionicons';
import {IonIcons} from '../../components/shared/IonIcons';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text style={{textAlign: 'center'}}>Tab 1 Screen </Text>
      {/* <Icon name="rocket-outline" size={100} /> */}
      <IonIcons name="rocket-outline" color="red" />
    </View>
  );
};
