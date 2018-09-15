import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Link
       } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Vendors from './components/Vendors.js';
import Talent from './components/Talent.js';
import Agent from './components/Agent.js';
import Resources from './components/Resources.js';
import Faq from './components/Faq.js';
import Guidebook from './components/Guidebook.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/vendors" component={Vendors} />
            <Route path="/talent" component={Talent} />
            <Route path="/agent" component={Agent} />
            <Route path="/resources" component={Resources} />
            <Route path="/faq" component={Faq} />
            <Route path="/guidebook" component={Guidebook} />
          </div>        
        </div>
      </Router>
    );
  }
}

export default App;
