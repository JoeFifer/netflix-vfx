import React, { Component } from 'react';
import * as contentful from 'contentful';
  
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      path: '',
      title: '',
      content: ''
    }
    this.getPage();
  }

  setTitle(value) {
    this.setState({title: value});
  }

  setContent(value) {
    this.setState({content: value});
  }

  handlePath() {
    var path = this.props.match.url.split("/");
    this.setState({path: path[2]});
  }

  createClient() {
    this.client = contentful.createClient({
      space: 'e9i84yemkk8j',
      accessToken: 'eff34a2474d3ed15f2f965f225a987bb833ed061659c419ca943b46a7b9f4223'
    });
  }

  getPage() {
    console.log("here");
    this.createClient();
    var that = this;
    this.client.getEntries({
      contentType: 'page',
      'fields.title': 'Talent'
    }).then(entries => {
      console.log("!!!",entries);
    });
  }

  render() {
    return (
      <h3></h3>
    );
  }
}

export default Page;
