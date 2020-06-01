import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router history={createBrowserHistory()}>
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
