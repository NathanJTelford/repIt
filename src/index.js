import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import Nav from '../src/nav';

ReactDOM.render(
  <div className='App'>
    <HashRouter>
      <Nav/>
      <Routes/>
    </HashRouter>
  </div>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
