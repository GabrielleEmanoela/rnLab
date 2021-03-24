import React from 'react ';
import { Text, Platform } from 'react-native';
import Style from './Sytle';

export default (props) => {
  if (Platform.OS === 'android') {
    return <Text style={Style.textStyle}>Android </Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Style.textStyle}> iOs </Text>;
  }
  return <Text style={Style.textStyle}> Dispositivo não reconhecido.</Text>;
};
