import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../components/StatusCarrinho';
import Item from './Item';

 

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
    <StatusCarrinho total={total} />
    <FlatList
      data={cardapio}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}