import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Signin} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
