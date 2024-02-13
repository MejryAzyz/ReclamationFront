import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            cin: "",
            tel: "",
            adresse: "",
            onLogin: props.onLogin,
            onRegister: props.onRegister
            
        };
    };

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    };

    onSubmitLogin = (e) => {
      e.preventDefault();

        this.state.onLogin(e, this.state.login, this.state.password)

    
};



    onSubmitRegister = (e) => {
        this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password, this.state.cin, this.state.tel, this.state.adresse);
    };

    render() {
        return (
        <div className="row justify-content-center">
            <div className="col-4">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <button className={classNames("nav-link", this.state.active === "login" ? "active" : "")} id="tab-login"
                  onClick={() => this.setState({active: "login"})}>Login</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={classNames("nav-link", this.state.active === "register" ? "active" : "")} id="tab-register"
                  onClick={() => this.setState({active: "register"})}>Register</button>
              </li>
            </ul>

            <div className="tab-content">
              <div className={classNames("tab-pane", "fade", this.state.active === "login" ? "show active" : "")} id="pills-login" >
                <form onSubmit={this.onSubmitLogin}>

                  <div className="form-outline mb-4">
                    <input type="login" id="loginName" name= "login" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="loginName">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="loginPassword" name="password" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                </form>

              </div>
              <div className={classNames("tab-pane", "fade", this.state.active === "register" ? "show active" : "")} id="pills-register" >
                <form onSubmit={this.onSubmitRegister}>

                  <div className="form-outline mb-4">
                    <input type="text" id="firstName" name="firstName" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="firstName">First name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="lastName" name="lastName" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="lastName">Last name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="login" name="login" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="login">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="registerPassword" name="password" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="cin" name="cin" className="form-control" onChange={this.onChangeHandler}/>
                    <label className="form-label" htmlFor="cin">cin</label>
                  </div>
                  <div className="form-outline mb-4">
    <input type="text" id="tel" name="tel" className="form-control" onChange={this.onChangeHandler}/>
    <label className="form-label" htmlFor="tel">Tel</label>
</div>
<div className="form-outline mb-4">
    <input type="text" id="adresse" name="adresse" className="form-control" onChange={this.onChangeHandler}/>
    <label className="form-label" htmlFor="adresse">Adresse</label>
</div>


                 

                  

                  <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                </form>

              </div>
            </div>
            </div>
        </div>
        
        );
    };

}