import React, { Component } from 'react';
import ButtonBackToHome from '../components/ButtonBackToHome';

class NotFound extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h1 style={{ color: '#000', fontSize: 30 }}>404!</h1>
        <h2>Ups the page you are looking for does not exist</h2>
        <ButtonBackToHome />
      </div>
    );
  }
}

export default NotFound;