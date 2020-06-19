import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuth } from './Context/AuthContext';
import './index.css';

import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Logout from './views/Logout';
import Signup from './views/auth/Signup';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import LandingPage from './views/LandingPage';
import Header from './components/Header';
import JobMenu from './components/job/JobMenu';
import JobDetail from './components/job/JobDetail';
import FormAddJob from './components/job/FormAddJob';
import MyApplies from './components/apply/MyApplies';
// import NotFound from './views/NotFound';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="container">
        <Header />
          <Router>
            <Route exact path="/" component={LandingPage} />

            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/register" component={Signup} />

            <PrivateRoute exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/private" component={PrivateView} />

            <PrivateRoute exact path="/private/applies" component={MyApplies} />

            {/* Nav Bar */}
            <PrivateRoute exact path="/private/jobs" component={JobMenu} />
            <PrivateRoute exact path="/private/job/post" component={FormAddJob} />
            <PrivateRoute exact path="/private/jobs/:id" component={JobDetail} />

            {/* <Route component={NotFound} /> */}
          </Router>
        </div>
    );
  }
}

export default withAuth(App);
