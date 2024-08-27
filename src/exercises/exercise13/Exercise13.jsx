// Exercise13.js
import React from "react";

const GaleriaImagens = () => {

  const imagens = [ 
  { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' }, 
  { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' }, 
  { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' } 
  ];
  return (
    <div className="cards13">
 
    
        {imagens.map((Item) => (
      <div className="imagens">
           <img src={Item.url} />
            <div className="legenda">{Item.legenda}</div>
      </div>
        ))}
     
    </div>
  );
};

export default GaleriaImagens;
