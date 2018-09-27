import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route
       } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Vendors from './components/Vendors.js';
import Talent from './components/Talent.js';
import Agent from './components/Agent.js';
import Resources from './components/Resources.js';
import Faq from './components/Faq.js';
import Guidebook from './components/Guidebook.js';
import Page from './components/Page.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="pages">
            <Route exact path="/" component={Home} />
            <Route path="/vendors" component={Vendors} />
            <Route path="/pages/:id" component={Page} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
