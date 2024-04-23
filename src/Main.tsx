import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {StackNavigator} from './presentation/routes/StackNavigator';
// import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';
import {BottomTabsNavigator} from './presentation/navigators/BottomTabsNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
