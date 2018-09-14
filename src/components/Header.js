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
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Nav">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Image height='30' src={ logo } />
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <FormGroup>
              <FormControl id='search' name='search' />
            </FormGroup>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;
