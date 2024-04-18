import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export const PrimaryBotton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [style.button, pressed && style.buttonPress]}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text style={{color: 'white'}}>{label}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: '#000',
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonPress: {
    backgroundColor: 'darkblue',
  },
});
