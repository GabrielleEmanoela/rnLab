import React from 'react ';
import { Text } from 'react-native';
import Style from './Sytle';
import Product from './Product';
export default (props) => {
  return (
    <>
      <Text style={Style.textStyle}>List Product</Text>

      {Product.map((p) => {
        return (
          <Text key={p.id}>
            {p.id}) {p.nome} tem R$ {p.preco}
          </Text>
        );
      })}
    </>
  );
};
