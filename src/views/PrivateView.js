import React from 'react';
import {withAuth} from '../Context/AuthContext';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyProfile from '../components/MyProfile';

const PrivateView = ({ user }) => {
  return (
    <div>
      Welcome {user.username}
      <Header />
      <NavBar />
      <MyProfile 
        user = {user}
      />
    </div>
  );
};

export default withAuth(PrivateView);