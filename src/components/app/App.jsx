import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Header from '../header/Header';
import LandingPage from '../landingPage/LandingPage';
import Signup from '../signup/Signup';
import Login from '../login/Login';
import Profile from '../profile/Profile';

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

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthentication();
  });

  const checkAuthentication = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/users/isAuthenticated', { withCredentials: true });
      if (res?.data?.sucess) {
        setAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuth = (auth) => {
    setAuth(auth);
  };

  return (
    <div>
      <Router>
        <Header auth={auth} setAuth={handleAuth} />

        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/login'>
            <Login setAuth={handleAuth} />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
