import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/images/logo.png'

const containerStyle = {
  color:'white'
  // borderBottom: ' 1px solid #00acc1'
};

const navStyle = {
  backgroundColor: "#ff8a80",
  color:'#FFFFFF'
  // borderBottom: ' 1px solid #00acc1'
};

const dropStyle = {
  // backgroundColor: "#ffcdd2",
};

class Header extends Component {

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div style={containerStyle}>
        <Navbar style={navStyle}>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="80"
            height="50"
          />
          </Navbar.Brand>
          {authToken && (
            <Nav className="mr-auto" >
              <NavDropdown title="Payable" id="basic-nav-dropdown" >
                <NavDropdown.Item style={dropStyle} href="/createvendor">Vendor</NavDropdown.Item>
                <NavDropdown.Item style={dropStyle} href="/vendor">Vendor List</NavDropdown.Item>
                <NavDropdown.Item style={dropStyle} href="/createbill">Bill</NavDropdown.Item>
                <NavDropdown.Item style={dropStyle} href="/bill">Bill List</NavDropdown.Item>
                <NavDropdown.Item style={dropStyle} href="#action/3.3">Reports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropStyle} href="/searchbills">Search</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Receivable" id="basic-nav-dropdown">
                <NavDropdown.Item href="/createcustomer">Customer</NavDropdown.Item>
                <NavDropdown.Item href="/customer">Customer List</NavDropdown.Item>
                <NavDropdown.Item href="/createinvoice">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="/invoice">Invoice List</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Reports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/searchinvoices">Search</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                <NavDropdown.Item href="/chart">Charts</NavDropdown.Item>
                <NavDropdown.Item href="/report">Reports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/globalsearch">Search</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        <div className="flex flex-fixed">
          {authToken ? (
            <Button variant="light"
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/login`)
              }}
              >
              Logout
            </Button>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              Login
            </Link>
          )}
        </div>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header)
