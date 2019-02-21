import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super()

    this.state = {
      useremail: "",
      userpass: ""
    }
  }

  login = () => {
    const email = this.state.useremail;
    const password = this.state.userpass;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    }).then(function (success) {
      console.log(success);
      console.log("Login success");      
    });
  }

  get = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
  }

  logout = () => {
    firebase.auth().signOut().then(function (success) {
      console.log("Logout success");
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Login</h4>
          <form>
            Email: <input type="text" name="useremail" onChange={event => this.setState({ useremail: event.target.value })} />
            <br />
            Password: <input type="password" name="userpass" autoComplete="userpass" onChange={event => this.setState({ userpass: event.target.value })} />
          </form>
          <br />
          <button onClick={this.login}>Login</button>
          <br />
          <button onClick={this.get}>Get user</button>
          <br />
          <button onClick={this.logout}>Logout</button>
        </header>
      </div>
    );
  }
}

export default App;
