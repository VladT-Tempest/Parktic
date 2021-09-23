import "./App.css";

import Header from './components/Header'
import Registro from './components/Registro'
import Reloj from './components/Reloj'

const App = () => {
  //const saludo = "Hola esta es mi primera linea en react";

  return (
    <div>
      <Header/>
      <Registro/>
      <Reloj/>
    </div>
  );
}

export default App;
