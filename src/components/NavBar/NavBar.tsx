import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import label from '../../assets/label.jpeg';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant='dark'>
          <Navbar.Brand href="#home">
              <img
                src={label}
                height="35px"
                className="d-inline-block align-top "
                alt="logo"
              />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
          </Navbar.Collapse>
          <Navbar.Text className='navbar__phone-number'>
            <a href="tel:+79211822238">+7 (921) 182-22-38</a>
            </Navbar.Text>
        </Navbar>
      </div>
    )
  }

  private scrollUp() {
    window.scrollTo(null, 0);
  }
}
