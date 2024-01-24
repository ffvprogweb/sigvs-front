import { useEffect } from "react";

function MensagemLog() {
  // Método de montagem
  useEffect(() => {
    console.log("Componente montado e pronto para ser renderizado.");
  }, [ ]);
  return <p>Componente de mensagem</p>;
}
export default MensagemLog;
