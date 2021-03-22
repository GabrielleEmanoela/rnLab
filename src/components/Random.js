import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default (number) => {
  console.warn(number);
  const verification = number.max - number.min + 1;
  const total = parseInt(Math.random() * verification) + number.min;
  return <Text style={Style.textStyle}>Select number {total}</Text>;
};
