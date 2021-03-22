import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Style from '../Sytle';

import SecondaryComponent from './SecondaryComponent';

export default (props) => {
  const [texto, setTexto] = useState('');
  const [num, setNum] = useState(0);

  function exibirValor(num, Texto) {
    setNum(num);
  }

  return (
    <>
      <Text style={Style.textStyle}>
        {texto}
        {num}
      </Text>
      <SecondaryComponent min={1} max={70} funcao={exibirValor} />
    </>
  );
};
