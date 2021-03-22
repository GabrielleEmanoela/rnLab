import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainComponent from './components/IndirectCommunication/MainComponent';
//import BiggerNumber from './components/BiggerNumber';
//import X, { Comp1, Comp2 } from './components/Multi';
//import Primeiro from './components/First_comp';
//import Random from './components/Random';
//import Title from './components/Title';
//import Button from './components/Button';
//import Counter from './components/Counter';
//import FatherComponent from './components/DirectCommunication/FatherComponent';

export default () => (
  <View style={style.App}>
    <MainComponent />
    {/*<FatherComponent />
     <Counter init={400} />
    <Button />
    <Title Principal=" Cadastro " Secundario="Tela de cadastro produto" />
    <Random max={1000} min={0} />
    <Primeiro />
    <X />
    <Comp1 />
  <Comp2 / */}
  </View>
);
const style = StyleSheet.create({
  App: {
    backgroundColor: '#fff',
    flexGrow: 1,
    /*  flex: 1/Flex significa que ele pode ocupar a tela inteira*/
    justifyContent: 'center', //Significa que no eixo da coluna ele vai pro centro
    alignItems: 'center', // Signica que na linha ele vai pro centro.
    padding: 20,
  },
});
