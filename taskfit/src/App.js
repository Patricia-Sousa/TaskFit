import './App.css';
import Logotipo from './logo.png'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pages');
  }

  return (
    <div className="Application">
      <div className="Area"> 
        <div className="Logo">
          <img src={Logotipo} className="AppLogo" alt=""></img>
        </div>
        <div className="Area-2">
          <p>TaskFit</p>
            <Button onClick={handleClick} variant="outline-info" className="Botao-1">Criar Conta</Button>
            <Button variant="outline-info">Login</Button> 
        </div>   
      </div>
    </div>
  );
}

export default App;
