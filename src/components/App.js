import React from 'react';
import Header from './Header';
import AppContent from './AppContent';
import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import FacturesContent from './Factures';
import AddReclamation from './AddReclamation';
import WelcomeContent from './WelcomeContent';
import ReclamationContent from './Reclamation';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Router>
              <AppContent />
              <Routes>
              <Route exact path="/Facture" element={<FacturesContent/>}/>
              <Route exact path="/addReclamation" element={<AddReclamation/>}/>
              <Route exact path="/Reclamation" element={<ReclamationContent/>}/>
              <Route exact path="/Welcome" element={<WelcomeContent/>}/>
              <Route exact path="/Login" element={<LoginForm/>}/>




              </Routes>
            </Router>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
