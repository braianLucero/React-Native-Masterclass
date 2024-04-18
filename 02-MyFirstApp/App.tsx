import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screen/CounterScreen';
import {PaperProvider} from 'react-native-paper';
// import {HelloWorldScreen} from './src/presentation/screen/HelloWorldScreen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="braian lucero " /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
