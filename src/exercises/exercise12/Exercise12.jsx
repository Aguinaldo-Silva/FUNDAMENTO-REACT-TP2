// Exercise12.js
import React from "react";



const ListaTarefa = () => {
  const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
  
  return (
    <div>
      <h1>Exercise12</h1>
      <ol>
        {tarefas.map((tarefa, index) => (
      <li key={index}> {tarefa}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListaTarefa;



