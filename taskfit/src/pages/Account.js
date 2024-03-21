import React from 'react';
import './account.css';
import Button from 'react-bootstrap/Button';

function Account() {
    return (
        <div className="Application">
            <div className="titulo">
                <p>Taskfit Conta</p>
            </div>
            <p>Nome</p>
            <p>Email</p>
            <p>Password</p>
            <Button variant="outline-info">Criar</Button>
        </div>
    );
}

export default Account;