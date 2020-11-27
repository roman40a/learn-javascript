import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();

store.subsribe(rerenderEntireTree);