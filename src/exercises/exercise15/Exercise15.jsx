// Exercise15.js
import React from "react";

const Exercise15 = () => {
  return (
    <div>
      <header className="cabeca">
        <h3>Meu portifolio</h3>
        <p>Desenvolvedor full stack</p>
      </header>
      <main>
        <div className="cards15">
      <div className="imagem15"><img src="https://img.freepik.com/fotos-gratis/conceito-de-pagina-inicial-com-barra-de-pesquisa_23-2150040212.jpg?size=626&ext=jpg" />
        <span>Projeto 1</span>
        <p> desenvolvi site para sistemas</p>
        </div>
          <div className="imagem15"><img src="https://img.freepik.com/fotos-gratis/conceito-de-pagina-inicial-com-barra-de-pesquisa_23-2150040212.jpg?size=626&ext=jpg" />
            <span>Projeto 2</span>
            <p> desenvolvi site para advogados</p>
            </div>
          <div className="imagem15"><img src="https://img.freepik.com/fotos-gratis/conceito-de-pagina-inicial-com-barra-de-pesquisa_23-2150040212.jpg?size=626&ext=jpg" />
            <span>Projeto 3</span>
            <p> desenvolvi site para négocios</p>
            </div>
          </div>
      </main>

    <footer className="fim">
      <ul>
        <li>Contatos</li>
        <li>email: Aguinaldo.ecio@gmail.com</li>
        <li>numero: 5199999999</li>
      </ul>
    </footer>

      
    </div>
  );
};

export default Exercise15;
