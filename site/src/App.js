import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import { Switch, Route } from 'react-router-dom';
import Services from './Components/ServicesPage/Services';
import About from './Components/AboutPage/About';
import Work from './Components/WorkPage/Work';
import Contacts from './Components/ContactsPage/Contacts';


function App() {
  return (
    <Switch>
      <div className="App">
        <div>
          <Route exact path="/" render={FirstPage} />
          <Route exact path="/Services" render={Services} />
          <Route exact path="/About" render={About} />
          <Route exact path="/Work" render={Work} />
          <Route exact path="/Contacts" render={Contacts} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
