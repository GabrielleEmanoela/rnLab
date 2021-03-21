import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default (parametro) => {
  console.warn(parametro);
  return (
    <Text style={Style.textStyle}>
      O valor {parametro.max} é maior que o valor {parametro.min} !
    </Text>
  );
};
