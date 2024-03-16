import './App.css';
//import Logotipo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Botao from './componentes/components'

function App() {
  return (
    <div className="Application">
      <div className="pagina"> 
        <p>TaskFit é uma aplicação <br></br> para Tarefas</p>
          <Button onClick={Botao} variant="outline-info" className="Botao-1">Criar Conta</Button>
          <Button variant="outline-info">Login</Button>    
      </div>
    </div>
  );
}

export default App;
