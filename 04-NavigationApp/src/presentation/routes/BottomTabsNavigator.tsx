/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screen/tabs/Tab1Screen';
// import {Tab2Screen} from '../screen/tabs/Tab2Screen';
// import {Tab3Screen} from '../screen/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTapsNavigators} from './TopTapsNavigators';
import {StackNavigator} from './StackNavigator';
import {IonIcons} from '../components/shared/IonIcons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => <IonIcons name="remove-sharp" />,
        }}
        component={Tab1Screen}
      />

      <Tab.Screen
        name="Tab2"
        options={{
          tabBarIcon: ({color}) => <IonIcons name="reorder-two-sharp" />,
        }}
        component={TopTapsNavigators}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <IonIcons name="reorder-three-sharp" />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
