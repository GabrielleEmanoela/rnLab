import React from 'react';
import { Text } from 'react-native';
import Style from './Sytle';

export default (props) => {
  return (
    <React.Fragment>
      <Text style={Style.textStyle}>{props.Principal}</Text>
      <Text>{props.Secundario}</Text>
    </React.Fragment>
  );
};
