// Layout/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/factures">
          Your App Name
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/factures">
                Factures
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reclamations">
                Réclamations
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;