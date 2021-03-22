import React from 'react';
import { Button } from 'react-native';

export default (prop) => {
  function gerarNum(min, max) {
    const fator = max - min + 1;

    return parseInt(Math.random() * fator) + min;
  }

  return (
    <Button
      title="Start"
      onPress={function () {
        const n = gerarNum(prop.min, prop.max);

        prop.funcao(n);
      }}
    />
  );
};
