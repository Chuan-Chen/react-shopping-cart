import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './globalStyles';
import store from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
          <Provider store = {store}>
            <BrowserRouter>
              <GlobalStyle/>
              <App/>
            </BrowserRouter> 
          </Provider>
        </React.StrictMode>
);
