import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import Style from './Sytle';

export default (props) => {
  //let number = props.init;
  const [number, setNumber] = useState(props.init);

  const inc = () => setNumber(number + 1);
  console.warn(number);
  const dec = () => setNumber(number - 1);
  console.warn(number);

  return (
    <>
      <Text>{number}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};

//UseState =Ganjos é uma nova forma de definir
//e atualizar (mutar) o estado “interno ”de um componente.
