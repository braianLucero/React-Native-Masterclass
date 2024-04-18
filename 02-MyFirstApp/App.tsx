import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import {HelloWorldScreen} from './src/presentation/screen/HelloWorldScreen';
// import {CounterScreen} from './src/presentation/screen/CounterScreen';
import {CounterM3Screen} from './src/presentation/screen/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="braian lucero " /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
