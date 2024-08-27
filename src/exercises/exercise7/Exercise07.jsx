// Exercise07.js
import React from "react";

const Exercise07 = () => {
  return (
    <div>
      <h1>Exercise07</h1>
      <ul>
        {itensEmEstoque.map((produtos,index) =>(
            <li key={index}> {produtos.nome},  quantidade em estoque: {produtos.quantidadeEmEstoque} </li>
        ) )}
      </ul>
    </div>
  );
};

export default Exercise07;

const produtos = [ 
{ nome: "Laptop", quantidadeEmEstoque: 5 }, 
{ nome: "Tablet", quantidadeEmEstoque: 0 }, 
{ nome: "Smartphone", quantidadeEmEstoque: 3 } 
];

const verificarEstoque = (produtos) => {
  return produtos.filter((produtos) => produtos.quantidadeEmEstoque > 0)
}

let itensEmEstoque = verificarEstoque(produtos)