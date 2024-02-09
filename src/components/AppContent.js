import * as React from 'react';


import { request, setAuthHeader } from '../helpers/axios_helper';

import Buttons from './Buttons';
import LoginForm from './LoginForm';
import WelcomeContent from './WelcomeContent'
import AuthContent from './AuthContent';
import Factures from './Factures';
import AddReclamation from './AddReclamation';
import FacturesContent from './Factures';
import ReclamationContent from './Reclamation';

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };
    
    




    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                window.localStorage.setItem('cin', response.data.cin);
                this.setState({componentToShow: "Factures"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, firstName, lastName, username, password, cin, tel, adresse ) => {
        event.preventDefault();
        console.log("Registering with tel:", tel);
        request(
            "POST",
            "/register",
            {   
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password,
                cin: cin,
                tel: tel,
                adresse: adresse,
                }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "Factures"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };
    
  render() {
    return (
      <>
        <Buttons
          login={this.login}
          logout={this.logout}
        />
        {this.state.componentToShow === "Factures" && <ReclamationContent /> }
        {this.state.componentToShow === "welcome" && <WelcomeContent /> }
        {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}

      </>
    );
  };
}