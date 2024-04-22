import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyle} from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  return (
    <View style={globalStyle.container}>
      <Text>Product Screen</Text>

      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
