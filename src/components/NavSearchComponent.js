import React from 'react';
import '../App.css';
import { Navbar } from 'reactstrap';
import { Component } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";

class NavSearch extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="dark" className="header">
          <div className="container">
            <MDBCol md="6">
                <form className="form-inline mt-4 mb-4">
                    
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" /><MDBIcon icon="search" /> 
                </form>
            </MDBCol>
          </div>
        </Navbar>
    
      </div>
    );
  }
}
export default NavSearch;
