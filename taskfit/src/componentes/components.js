import React from 'react';
import { useNavigate } from 'react-router-dom';

function Botao() {
    const navigate = useNavigate;
    function irParaConta(){
        navigate.push('/conta');
    }

    return (
        <button onClick={irParaConta}></button>
    );
}

export default Botao;