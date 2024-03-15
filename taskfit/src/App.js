import './App.css';
//import Logotipo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link } from './routes';

function App() {
  return (
    <div className="Application">
      <div className="pagina"> 
        <p>TaskFit é uma aplicação <br></br> para Tarefas</p>
        <Link to=""><button>Criar Conta</button></Link>
        <button>Login</button>      
      </div>
    </div>
  );
}

export default App;
