import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default (number) => {
  console.warn(number);
  return (
    <Text style={Style.textStyle}>
      Select number {Math.random((number.min += number.max))}
    </Text>
  );
};
