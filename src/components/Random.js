import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default (number) => {
  console.warn(number);
  const { min, max } = number;
  const verification = max - min + 1;
  const total = parseInt(Math.random() * verification) + min;
  return <Text style={Style.textStyle}>Select number {total}</Text>;
};
