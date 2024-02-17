// AppContent.js
import * as React from 'react';
import { request, setAuthHeader, getAuthToken } from '../helpers/axios_helper';
import Buttons from './Buttons';
import LoginForm from './LoginForm';
import WelcomeContent from './WelcomeContent'
import AuthContent from './AuthContent';
import Factures from './Factures';
import AddReclamation from './AddReclamation';
import FacturesContent from './Factures';
import ReclamationContent from './Reclamation';
import NavBar from '../Layout/NavBar';
import { redirect, redirectDocument,  withRouter, useNavigate } from 'react-router-dom';


export default class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: Boolean(getAuthToken()) ,
            
        }
        

    };
    
  

    login = () => {
        
        this.setState({ componentToShow: "login" });
        
    };

    logout = () => {
        this.setState({ isAuthenticated: false });
        setAuthHeader(null);
        const redirectUrl = "/Welcome"; // Example
        window.location.replace(redirectUrl);

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
                    window.localStorage.setItem('role', response.data.role);

                    this.setState({isAuthenticated: true });
                   const redirectUrl = "/Facture"; 
                    window.location.replace(redirectUrl);

                }).catch(
                    (error) => {
                        setAuthHeader(null);
                       
                    }
                );
    };

    onRegister = (event, firstName, lastName, username, password, cin, tel, adresse) => {
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
                    this.setState({ isAuthenticated: true });
                    //const redirectUrl = "/Welcome"; 
                    //window.location.replace(redirectUrl);
                }).catch(
                    (error) => {
                        setAuthHeader(null);
                        this.setState({  isAuthenticated: false });
                       // const redirectUrl = "/Welcome"; // Example
                    //window.location.replace(redirectUrl);
                    }
                );
    };


    render() {
        return (
            <>
                <NavBar login={this.login} logout={this.logout} isAuthenticated={this.state.isAuthenticated} />
                
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
            </>
        );
    }
}

