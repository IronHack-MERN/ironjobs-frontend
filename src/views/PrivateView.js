import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import NavBar from '../components/NavBar';
import MyProfile from '../components/MyProfile';
import PrivateRoute from '../components/PrivateRoute';
import MyProfileDetail from '../components/MyProfileDetail';
import JobDetail from '../components/job/JobDetail';
import JobMenu from '../components/job/JobMenu';

const PrivateView = ({ user }) => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto'
      }}
    >
      <NavBar />

      <Router>
        <MyProfile
          user={user}
        />
        <PrivateRoute exact path='/private/:id' component={MyProfileDetail} />
        <PrivateRoute exact path="/private/menu-jobs/:id" component={JobDetail} />
      </Router>
    </div>
  );
};

export default withAuth(PrivateView);