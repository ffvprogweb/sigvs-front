import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { listaDeProdutos } from "../ProdutoServico";
import { useNavigate } from "react-router-dom";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listaDeProdutos()
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function cadastrarProduto() {
    navigator("/cad-produto");
  }
  function atualizaProduto(id) {
    navigator(`/edit-produto/${id}`);
  }

  return (
    <div className="container">
      <h5 className="text-center">Consulta Catalogo </h5>
      <button className="btn btn-primary mb-2" onClick={cadastrarProduto}>
        Cadastrar Produto
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Custo</th>
            <th>Quant</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.categoria}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidadeNoEstoque}</td>
              <td>
                <button
                  className="btn btn-info "
                  onClick={() => atualizaProduto(produto.id)}
                >
                  Atualiza
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ConsultaCatalogo;
