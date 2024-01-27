import { useState, useEffect } from "react";
import "./styles.css";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json(); //retorna um array de objetos json
        //apresenta os dados na console como um string json
        console.log(JSON.stringify(dados));
        //carrega os dados na variavel produto
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
  if (erro)
    return (
      <>
        <h3>Consulta Catalogo </h3>
        <p>Erro na consulta: {erro}</p>
      </>
    );
  return (
    <div>
      <h3>Consulta Catalogo </h3>
      <table className="Catalogo">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Custo</th>
            <th>Quant</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidadeNoEstoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ConsultaCatalogo;
