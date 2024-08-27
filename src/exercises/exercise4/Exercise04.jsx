import React from "react";
import "./exercise4.css";
const Exercise04 = () => {
  return (
    <div>
      <h1>Exercise04</h1>

      <div className="container-formulario">
        <h2>Cadastro de Produtos</h2>
        <form>
          <div className="grupo-formulario">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              type="text"
              id="nome"
              placeholder="Informe o nome do produto"
            />
          </div>

          <div className="linha-formulario">
            <div className="grupo-formulario">
              <label htmlFor="preco-venda">Preço de venda</label>
              <input
                type="text"
                id="preco-venda"
                placeholder="Informe o preço de venda"
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="preco-custo">Preço de custo</label>
              <input
                type="text"
                id="preco-custo"
                placeholder="Informe o preço de custo"
              />
            </div>
          </div>
          <div className="linha-formulario">
            <div className="grupo-formulario">
              <label htmlFor="fornecedor">Fornecedor</label>
              <select id="fornecedor">
                <option value="" disabled selected>
                  Selecione um fornecedor
                </option>
              </select>
            </div>
            <div className="grupo-formulario">
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria">
                <option value="" disabled selected>
                  Selecione uma categoria
                </option>
              </select>
            </div>
          </div>
          <div className="grupo-formulario">
            <label htmlFor="descricao">Descrição do Produto</label>
            <textarea
              id="descricao"
              placeholder="Informe a descrição do produto"
            ></textarea>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise04;
