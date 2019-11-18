import React, { Component } from 'react';
import LandingPage from './LandingPage';

class Logout extends Component {
  constructor() {
    super();
    this.bye = "Come back soon!!!";
}

  render() {
    return (
      <div>
       <h1>{this.bye}</h1>
       <LandingPage />
      </div>
    );
  }
}

export default Logout;