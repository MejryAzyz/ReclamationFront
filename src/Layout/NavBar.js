import React from 'react';
import Buttons from '../components/Buttons';
import Buttono from '../components/buttono';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = ({ login, logout, isAuthenticated }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/Welcome">Your Brand Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Facture">Home</Nav.Link>
              <Nav.Link as={Link} to="/Reclamation">Link</Nav.Link>
              <Nav.Link as={Link} to="/addReclamation">Link</Nav.Link>
              {/* Add your additional navigation items here */}
            </Nav>
          )}
        </Navbar.Collapse>
        {!isAuthenticated && ( <Buttons login={login} logout={logout} />)}
        {isAuthenticated && (<Buttono logout={logout} />)}
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
