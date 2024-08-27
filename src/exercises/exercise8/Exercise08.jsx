// Exercise08.js
import React from "react";

const Exercise08 = () => {
  return (
    <div>
      <h1>Exercise08</h1>
      <p>total dos itens no carrinho: R${total.toFixed(2)}</p>
    </div>
  );
};

export default Exercise08;

const itens = [ 
{ nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
{ nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
{ nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];

const calcularTotalItens = (itens) => {
  return itens.reduce((total, item) =>{
    return total + item.quantidade * item.precoUnitario 
  }, 0)
  
}

const total = calcularTotalItens(itens);

console.log(total)