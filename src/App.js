import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Logout from './views/Logout'
import Signup from './views/auth/Signup';
import { withAuth } from './Context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import LandingPage from './views/LandingPage';
import MyProfile from './components/MyProfile';
import MyProfileDetail from './components/MyProfileDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hola: 'hola',
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={LandingPage} />
          
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/register" component={Signup} />

          <PrivateRoute exact path="/logout" component={Logout} />
          
          <PrivateRoute exact path="/private" component={PrivateView} />
          <PrivateRoute exact path='/private/:id' component={MyProfileDetail} />

        </Router>
      </>
    );
  }
}

export default withAuth(App);
