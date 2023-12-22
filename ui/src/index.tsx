import React from 'react';
import App from './components/app/App';
import './styles.css';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById('root')!);
root.render(<App />);


