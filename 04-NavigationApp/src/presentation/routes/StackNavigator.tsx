import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/home/HomeScreen';
import {ProductsScreen} from '../screen/products/ProductsScreen';
import {SettingsScreen} from '../screen/settings/SettingsScreen';
import {ProductScreen} from '../screen/products/ProductScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
