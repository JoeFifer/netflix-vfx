import React, { Component } from 'react';
import * as contentful from 'contentful'
import './assets/style/vendors.css';
  
class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      client: null
    };
    this.getVendors();
  }

  setVendors(value) {
    this.setState({vendors: value});
  }

  createClient() {
    this.client = contentful.createClient({
      space: 'e9i84yemkk8j',
      accessToken: 'eff34a2474d3ed15f2f965f225a987bb833ed061659c419ca943b46a7b9f4223'
    });
  }

  getVendors() {
    this.createClient();
    var vendors = [];
    var that = this;
    this.client.getEntries({
      content_type: 'vendor'
    }).then(entries => {
      entries.items.forEach(entry => {
        if(entry.fields) {
            vendors.push(<div className="col-lg-3 col-md-2 col-sm-4 col-xs-8">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3>Photo</h3>
                </div>
                <div className="panel-content">
                  <h4>{ entry.fields.vendorName }</h4>
                  <p>{ entry.fields.description }</p>
                  <ul>
                    <li>Meta: <span>Data</span></li>
                    <li>Meta: <span>Data</span></li>
                    <li>Meta: <span>Data</span></li>
                    <li>Meta: <span>Data</span></li>
                  </ul>
                </div>
              </div>
            </div>);
        }
      });
      that.setVendors(vendors);
    });
  }

  render() {
    return (
      <div className="pageContent">
        <h3>Vendors</h3>
        <div className="vendors">
          <div className="row">
            { this.state.vendors }
          </div>
        </div>
      </div>
    );
  }
}

export default Vendors;
