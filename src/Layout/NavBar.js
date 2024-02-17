import React from 'react';
import Buttons from '../components/Buttons';
import Buttono from '../components/buttono';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import image from '../images/image.png';


const NavBar = ({ login, logout, isAuthenticated }) => {
  const role =localStorage.getItem('role');

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#222', color: 'white' }}>
      <Container className="fluid">
        <Navbar.Brand as={Link} to="/Welcome" style={{ color: 'white' }}><img src={image}style={{ height: '70px', width: 'auto' }}alt="SONEDE"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Facture" style={{ color: 'white' }}>Mes Factures</Nav.Link>
              <Nav.Link as={Link} to="/Reclamation" style={{ color: 'white' }}>Mes Reclamtion</Nav.Link>
              <Nav.Link as={Link} to="/addReclamation"style={{ color: 'white' }}>Ajout Reclamation</Nav.Link>
              
              {role ==="1" && (
              <Nav.Link as={Link} to="/AdminUser"style={{ color: 'white' }}>Admin user</Nav.Link>
              )}
              {role ==="1" && (
              <Nav.Link as={Link} to="/AdminReclamation"style={{ color: 'white' }}>Admin Reclamation</Nav.Link>
                )}

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