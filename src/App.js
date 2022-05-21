import logo from './logo.svg';
import './App.css';
import Navbar from './components/root/layout/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import About from "./components/root/pages/About";
import Contact from "./components/root/pages/Contact";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Books from './components/root/pages/List';

function App() {
  return (
    <><Router>
      <div className="App">
      <Navbar />
        <Switch>
        <Route exact path="/" component={Books}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router><div>

      </div></>
);
}

export default App;