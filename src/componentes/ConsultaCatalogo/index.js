import { useState, useEffect } from "react";
import "./styles.css";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const consulta = async () => {
      const resposta = await fetch("http://localhost:8080/api/v1/produtos");
      const dados = await resposta.json(); //retorna um array de objetos json
      //apresenta os dados na console como um string json
      console.log(JSON.stringify(dados));
      //carrega os dados na variavel produto
      setProdutos(dados);
    };
    consulta( );
  }, [ ]);
  return <div className="App">{JSON.stringify(produtos)} </div>;
};
export default ConsultaCatalogo;
