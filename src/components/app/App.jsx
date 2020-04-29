import React, { Component } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.module.css';
import Header from '../header/Header';
import LandingPage from '../landingPage/LandingPage';
import Signup from '../signup/Signup';
import Login from '../login/Login';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

class App extends Component {
  state = { auth: false };

  async componentDidMount() {
    console.log('Called componentDidMount');

    try {
      await axios.get('http://localhost:3000/api/users/isAuthenticated');
      this.setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }
  setAuth = (auth) => {
    this.setState({ auth });
  };

  render() {
    return (
      <div className='root'>
        <Router>
          <Header auth={this.state.auth} />
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login setAuth={this.setAuth} />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
