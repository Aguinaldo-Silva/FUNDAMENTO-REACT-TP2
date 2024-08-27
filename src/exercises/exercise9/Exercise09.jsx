// Exercise09.js
import React from "react";

const Exercise09 = () => {
  return (
    <div>
      <h1>Exercise09</h1>
      <p>Content for Exercise09</p>
    </div>
  );
};

export default Exercise09;
const produtos = [ 
{ nome: "Laptop", categoria: "Eletrônicos" }, 
{ nome: "Camisa", categoria: "Roupas" }, 
{ nome: "Smartphone", categoria: "Eletrônicos" }, 
{ nome: "Calça", categoria: "Roupas" }, 
{ nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
];


function agruparPorCategoria(produtos){
  return produtos.reduce((acc, produto) => {
    const {categoria, nome} = produto;
    if(!acc[categoria]){
      acc[categoria] = []
    }
    acc[categoria].push(nome);
    return acc;
  }, {})
}

const categorias = agruparPorCategoria(produtos);
console.log(categorias)