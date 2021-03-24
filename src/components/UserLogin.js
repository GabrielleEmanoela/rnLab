//passando objeto por parametro

import React from 'react';
import { Text } from 'react-native';
import _if from './if';
import Style from './Sytle';

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <>
      <_if teste={usuario && usuario.nome && usuario.email}>
        <Text style={Style.textStyle}>Usuario Logado </Text>
        <Text style={Style.textStyle}>
          {usuario.nome} - {usuario.email}
        </Text>
      </_if>
    </>
  );
};
