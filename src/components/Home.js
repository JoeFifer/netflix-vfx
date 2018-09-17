import React, { Component } from 'react';
import { Navbar,
         NavItem,
         Nav,
         NavDropdown,
         MenuItem,
         FormGroup,
         FormControl
       } from 'react-bootstrap';
import './assets/style/Home.css';
  
class Home extends Component {
  render() {
    return (
      <div className="banner">
        <div className="title">
          <h1>Netflix VFX Partners</h1>
        </div>
        <div className="content">
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
          </div>
          <div className="regions">
            <span>Regions</span>
            <Navbar className="regions_nav">
              <Nav>
                <NavItem eventKey={0.1} href='/NorthAmerica'>North America</NavItem>
                <NavItem eventKey={0.2} href='/SouthAmerica'>South America</NavItem>
                <NavItem eventKey={0.3} href='/Europe'>Europe</NavItem>
                <NavItem eventKey={0.4} href='/EastAsia'>East Asia</NavItem>
                <NavItem eventKey={0.5} href='/Australia'>Australia</NavItem>
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
