import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Conta from './pages/Account';
import Login from './pages/Login';
import Taskfit from './pages/TaskFit';

function TaskFit() {
    return (
        <>
            <Router basename="/taskfit">
                <Switch>
                    <Route exact path="/" /> {/* Renders at /taskfit/ */}
                    <Route exact path="/conta" element={<Conta />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/taskfit" element={<Taskfit />} />
                </Switch>
            </Router>
        </>
    );
};

export default TaskFit;