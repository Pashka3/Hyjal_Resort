import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import local_data from '../services-data';
import { useState } from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        {' '}
        <img
          src={local_data.logo}
          className="d-inline-block align-top"
          alt="Hyjalt Resort"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto NavLink">
          <Nav.Link
            href="/"
            className={activeLink === 'Home' ? 'active nav-link' : 'nav-link'}
            onClick={() => onUpdateActiveLink('Home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/Rooms"
            className={activeLink === 'Rooms' ? 'active nav-link' : 'nav-link'}
            onClick={() => onUpdateActiveLink('Rooms')}
          >
            Rooms
          </Nav.Link>
          <Nav.Link
            href="/Contact"
            className={
              activeLink === 'Contact' ? 'active nav-link' : 'nav-link'
            }
            onClick={() => onUpdateActiveLink('Contact')}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
