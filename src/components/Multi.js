import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default function Comp() {
  return <Text style={Style.textStyle}>Com #Oficial</Text>;
}
function Comp1() {
  return <Text style={Style.textStyle}>Comp #01</Text>;
}
function Comp2() {
  return <Text style={Style.textStyle}>Comp #02</Text>;
}

export { Comp1, Comp, Comp2 };
