import React from 'react';
import { View, StyleSheet } from 'react-native';

import X, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/First_comp';

export default () => (
  <View style={style.App}>
    <Primeiro />
    <X />
    <Comp1 />
    <Comp2 />
  </View>
);
const style = StyleSheet.create({
  App: {
    backgroundColor: '#0fff',
    flexGrow: 1,
    /*  flex: 1/Flex significa que ele pode ocupar a tela inteira*/
    justifyContent: 'center', //Significa que no eixo da coluna ele vai pro centro
    alignItems: 'center', // Signica que na linha ele vai pro centro.
  },
});
