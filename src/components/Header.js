import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar,
         NavItem,
         Nav,
         NavDropdown,
         MenuItem,
         FormGroup,
         FormControl
       } from 'react-bootstrap';
import logo from './assets/netflix-logo-small.png';
import './assets/style/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Nav">
        <Navbar className='topbar'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><Image height='30' src={ logo } /></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <FormGroup className='has-feedback'>
              <FormControl id='search' name='search' placeholder='Search Partners' />
              <span className='pull-left glyphicon glyphicon-search form-control-feedback'></span>
            </FormGroup>
          </Nav>
        </Navbar>
        <Navbar className='router'>
          <Nav>
            <NavItem eventKey={1} href='/vendors'>Vendors</NavItem>
            <NavItem eventKey={2} href='/talent'>Talent</NavItem>
            <NavItem eventKey={3} href='/agent'>Agent</NavItem>
            <NavItem eventKey={4} href='/resources'>Resources</NavItem>
            <NavItem eventKey={5} href='/faq'>FAQ</NavItem>
            <NavItem eventKey={6} href='/guidebook'>Best Practices/Guidebook</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;
