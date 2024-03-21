import './App.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pages');
  }

  return (
    <div className="Application">
      <div className="area"> 
        <p>TaskFit é uma aplicação <br></br> para Tarefas</p>
          <Button onClick={handleClick} variant="outline-info" className="Botao-1">Criar Conta</Button>
          <Button variant="outline-info">Login</Button>    
      </div>
    </div>
  );
}

export default App;
