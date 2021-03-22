import React from 'react';
import { Text } from 'react-native';
import Style from '../Sytle';

export default (props) => {
  return (
    <>
      <Text style={Style.textStyle}>{props.A}</Text>
      <Text style={Style.textStyle}>{props.B}</Text>
    </>
  );
};
