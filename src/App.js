import React from 'react';
import Nav from './Nav';
import {Switch, Redirect} from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
        <Nav />
        <Switch>
          <Routes />
          <Redirect to="/dogs" />
        </Switch>
    </div>
  );
}

export default App;
