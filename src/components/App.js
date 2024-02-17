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
import UsersContent from './AdminUser';
import AdminReclamationContent from './AdminReclamation';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/NavBar';

function App() {
  const newLogoSrc = 'image.png';

  return (
    <div className="App">
      <Header pageTitle="SONEDE" logoSrc={newLogoSrc} />
      <div>
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
              <Route exact path="/AdminUser" element={<UsersContent/>}/>
              <Route exact path="/AdminReclamation" element={<AdminReclamationContent/>}/>
              <Route exact path="/" element={<WelcomeContent/>}/>






              </Routes>
              <Footer/>
            </Router>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
