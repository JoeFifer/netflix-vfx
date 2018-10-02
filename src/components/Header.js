import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Navbar,
         NavItem,
         Nav,
         FormGroup,
         FormControl
       } from 'react-bootstrap';
import * as contentful from 'contentful';
import logo from './assets/netflix-logo-small.png';
import './assets/style/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      client: null
    };
    this.getLinks();
  }

  setLinks(value) {
    this.setState({links: value});
  }

  createClient() {
    this.client = contentful.createClient({
      space: 'e9i84yemkk8j',
      accessToken: 'eff34a2474d3ed15f2f965f225a987bb833ed061659c419ca943b46a7b9f4223'
    });
  }

  getLinks() {
    this.createClient();
    var links = [];
    var that = this;
    this.client.getEntries({
      content_type: 'page'
    }).then(entries => {
      var i = 0;
      entries.items.forEach(entry => {
        if(entry.fields) {
          var url = "/pages/"+entry.fields.title;
          links.push(<NavItem eventKey={{i}} href={url}>{entry.fields.title}</NavItem>);
          i++;
        }
      });
      that.setLinks(links);
    });
  }

  render() {
//    this.getLinks();
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
