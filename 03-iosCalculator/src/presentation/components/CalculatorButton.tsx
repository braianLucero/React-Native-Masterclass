import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, style} from '../../config/theme/app-them';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blacktext?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blacktext = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...style.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...style.buttonText,
          color: blacktext ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
