import { version } from '@babel/core';
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import _if from './components/if';
import UserLogin from './components/UserLogin';
//import Origin from './Relationship/Origin';
//import ConditionalRendering from './components/ConditionalRendering';
//import DiferenciarDispositivos from './components/DifferentiateDevice';
//import MainComponent from './components/IndirectCommunication/MainComponent';
//import Version from './Version';

//import BiggerNumber from './components/BiggerNumber';
//import X, { Comp1, Comp2 } from './components/Multi';
//import Primeiro from './components/First_comp';
//import Random from './components/Random';
//import Title from './components/Title';
//import Button from './components/Button';
//import Counter from './components/Counter';
//import FatherComponent from './components/DirectCommunication/FatherComponent';

export default () => (
  <SafeAreaView style={style.App}>
    <UserLogin usuario={{ nome: 'Gabi', email: 'biela.a' }} />
    {/*   <Origin>
      <Version nome="Start" sobrenome="Corre" />
    </Origin>

   <ConditionalRendering />
    <DiferenciarDispositivos />
  <MainComponent />
    <FatherComponent />
     <Counter init={400} />
    <Button />
    <Title Principal=" Cadastro " Secundario="Tela de cadastro produto" />
    <Random max={1000} min={0} />
    <Primeiro />
    <X />
    <Comp1 />
  <Comp2 / */}
  </SafeAreaView>
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
