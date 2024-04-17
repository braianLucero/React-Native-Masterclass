import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={style.constainer}>
      <Text numberOfLines={1} style={style.title}>
        Hello ,{name}{' '}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
