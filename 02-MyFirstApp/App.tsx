import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import {HelloWorldScreen} from './src/presentation/screen/HelloWorldScreen';
// import {CounterScreen} from './src/presentation/screen/CounterScreen';
// import {CounterM3Screen} from './src/presentation/screen/CounterM3Screen';
// import {BoxObjectModelScreen} from './src/presentation/screen/BoxObjectModelScreen';
// import {DimentionsScreen} from './src/presentation/screen/DimentionsScreen';
// import {PositionScreen} from './src/presentation/screen/PositionScreen';
// import {FlexScreen} from './src/presentation/screen/FlexScreen';
// import {FlexDirecctionScreen} from '../02-MyFirstApp/src/presentation/screen/FlexDirecctionScreen';
import {HomeWorkScreen} from './src/presentation/screen/HomeWorkScreen';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="braian lucero " /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimentionsScreen/> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirecctionScreen /> */}
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
