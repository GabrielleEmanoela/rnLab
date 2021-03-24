import React from 'react';
import { Text, View } from 'react-native';
import Style from './Sytle';

export default ({ num = 0 }) => {
  return (
    <View>
      {num % 2 === 0 ? (
        <Text style={Style.textStyle}>Par</Text>
      ) : (
        <Text style={Style.textStyle}>Impar</Text>
      )}{' '}
    </View>
  );
};
