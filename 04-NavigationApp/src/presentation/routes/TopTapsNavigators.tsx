/* eslint-disable react/react-in-jsx-scope */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screen/profile/ProfileScreen';
import {About} from '../screen/about/About';
import {HamburguerMenu} from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTapsNavigators = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </>
  );
};
