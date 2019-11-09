import React from 'react';
import {withAuth} from '../Context/AuthContext';
import Header from '../components/Header';

const PrivateView = ({ user }) => {
  return (
    <div>
      Welcome {user.username}
      <Header />
    </div>
  );
};

export default withAuth(PrivateView);