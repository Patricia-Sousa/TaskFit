import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pagina from './componentes/pagina';

function App(){
    return (
        <Router>
            <Route path="pagina" component={Pagina} />
        </Router>
    );
}

export default App;