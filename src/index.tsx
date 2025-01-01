import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './app';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter> {/* Wrap App with Router */}
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
