import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../components/StatusCarrinho';
import Item from './Item';

const promotionslist = [
  {
      id: 1,
      nome: "Hambúrguer",
      descricao: "Pão, bife de hambúrguer 90g, salada e batata.",
      preco: 8.5,
      categoria_id: 1,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/09\/x-burguer-600x409.png",
      linkUrl:"#"
    },
    {
      id: 2,
      nome: "X-Búrguer",
      descricao: "Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.",
      preco: 10.5,
      categoria_id: 1,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/09\/x-burguer-600x409.png",
      linkUrl:"#"
    },
    {
      id: 3,
      nome: "X-Salada",
      descricao: "Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.",
      preco: 12.5,
      categoria_id: 1,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/09\/x-salada-1.jpg",
      linkUrl:"#"
    },
    {
      id: 4,
      nome: "X-Tudo",
      descricao: "Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.",
      preco: 14.5,
      categoria_id: 1,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/09\/x-tudo.jpg",
      linkUrl:"#"
    },
    {
      id: 5,
      nome: "Coca cola 350ml",
      descricao: "",
      preco: 5.5,
      categoria_id: 2,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/10\/latas.jpg",
      linkUrl:"#"
    },
    {
      id: 6,
      nome: "Coca cola 600ml",
      descricao: "",
      preco: 7.5,
      categoria_id: 2,
      imageUri:"https:\/\/loja.barracadoze.com.br\/wp-content\/uploads\/sites\/5\/2020\/10\/m_37351512688138.png",
      linkUrl:"#"
    }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
    <StatusCarrinho total={total} />
    <FlatList
      data={promotionslist}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}