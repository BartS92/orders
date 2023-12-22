import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './styles.css';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App/> }/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

