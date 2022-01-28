
import './App.css';
import Calculadora from './Componentes/Calculadora';

function App() {
  return (
    <div className="App">
      <div className='titulo'>
      <h1>Calculadora Simple con ReactJS</h1>
      </div>

      <div className='container'>

        <Calculadora />
      </div>

    </div>
  );
}

export default App;
