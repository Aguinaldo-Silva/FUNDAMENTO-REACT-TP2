// Exercise16.js
import React from "react";

const ListaProdutos = () => {
  return (
    <div className="lista">
      {produtos.map((produtos, index) => (
      <CartaoProduto
        key={index}
        nome={produtos.nome}
        descricao={produtos.descricao}
        preco={produtos.preco}
        imagem={produtos.imagem}
      />))}
    </div>
  )
}

export default ListaProdutos;

const produtos = [ 
 {
nome: "Tênis de Corrida", 
descricao: "Tênis confortável para corridas diárias.", 
preco: "R$ 299,90", 
imagem: "https://via.placeholder.com/150" 
 },
 { 
nome: "Camisa de Ciclismo", 
descricao: "Camisa respirável para ciclistas.", 
preco: "R$ 129,90", 
imagem: "https://via.placeholder.com/150" 
}, 
{ 
nome: "Boné Esportivo", 
descricao: "Boné ajustável para proteção solar.", 
preco: "R$ 59,90", 
imagem: "https://via.placeholder.com/150" 
}
];

const CartaoProduto = ({nome, descricao, preco, imagem}) => {
  return (
    <div className="cartao">
      <img src={imagem}/>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p className="preco">{preco}</p>
    </div>
  )
}


