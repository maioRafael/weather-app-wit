import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { WeatherContextProvider } from './store/weather-context';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <WeatherContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </WeatherContextProvider>
    </React.StrictMode>,
    document.getElementById('root')

);