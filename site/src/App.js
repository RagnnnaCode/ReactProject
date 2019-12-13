import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
    <div className="App">
        <div>
       <Route exact path="/Home" render={FirstPage}/>
        </div>
    </div>
    </Switch>
  );
}

export default App;
