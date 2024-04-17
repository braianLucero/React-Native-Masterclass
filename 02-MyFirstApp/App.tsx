import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/presentation/screen/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screen/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Braian Lucero" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};
