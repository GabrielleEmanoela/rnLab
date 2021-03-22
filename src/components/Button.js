import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  function start() {
    console.warn('Start!');
  }

  return (
    <>
      <Button title="Start #01" onPress={start} />
      <Button
        title="Start #02"
        onPress={function () {
          console.warn('Start 2!');
        }}
      />
      <Button
        title="Start #03"
        onPress={() => {
          console.warn('Start 3!');
        }}
      />
    </>
  );
};
