import React, { useState } from "react";

const AtualizarProduto = () => {
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidadeNoEstoque, setQuantidade] = useState("");
  const [custo, setCusto] = useState("");

  function manipulaDescricao(e) {
    setDescricao(e.target.value);
  }
  function manipulaCategoria(e) {
    setCategoria(e.target.value);
  }
  function manipulaQuantidade(e) {
    setQuantidade(e.target.value);
  }
  function manipulaCusto(e) {
    setCusto(e.target.value);
  }
  function saveOrUpdateProduto(e) {}
  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          <h2 className="text-center"> Atualizar Produto 2</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <div>
                  <label>Descrição</label>
                  <input
                    type="text"
                    placeholder="Entre com a descrição do produto"
                    value={descricao}
                    id="descricao"
                    className={"form-control"}
                    onChange={manipulaDescricao}
                  />
                </div>
              </div>

              <div className="form-group mb-2">
                <div>
                  <label>Categoria</label>
                  <input
                    type="text"
                    placeholder="Entre com a categoria do produto"
                    value={categoria}
                    id="categoria"
                    className={"form-control"}
                    onChange={manipulaCategoria}
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <div>
                  <label>Quantidade</label>
                  <input
                    type="text"
                    placeholder="Quantidade no estoque"
                    value={quantidadeNoEstoque}
                    id="quantidade"
                    className={"form-control"}
                    onChange={manipulaQuantidade}
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <div>
                  <label>Custo</label>
                  <input
                    type="text"
                    placeholder="Custo do produto"
                    value={custo}
                    id="custo"
                    className={"form-control"}
                    onChange={manipulaCusto}
                  />
                </div>
              </div>
              <button className="btn btn-success" onClick={saveOrUpdateProduto}>
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtualizarProduto;
