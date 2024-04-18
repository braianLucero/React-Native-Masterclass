import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onPress && onLongPress()}
      style={({pressed}) => [style.btn, pressed && style.btnEfect]}>
      <Text style={style.text}>{label}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2f31',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '300',
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  btn: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnEfect: {
    backgroundColor: '#4746AB',
  },
});
