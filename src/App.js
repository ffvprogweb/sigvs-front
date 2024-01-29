import "./App.css";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <ConsultaCatalogo> Catálogo de Produtos </ConsultaCatalogo>
      <Footer />
    </div>
  );
}
export default App;
