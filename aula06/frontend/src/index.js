import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './App';
import GitCard from './components/GitCard'
Importando o login que foi criado, e fizemos a chamada
logo a baixo na parte onde tem a lista de todos os objetos
que tem que ser renderizado*/
import Login from './pages/Login'


ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
