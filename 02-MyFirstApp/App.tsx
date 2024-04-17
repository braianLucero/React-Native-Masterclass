import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screen/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HelloWorldScreen />
    </SafeAreaView>
  );
};
