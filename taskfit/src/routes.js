import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pagina from './componentes/pagina';

function App(){
    return (
        <Router>
            <Route path="/componentes/pagina" component={Pagina} />
            <Link path="/componentes/pagina"></Link>
        </Router>
    );
}

export default App;