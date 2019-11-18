import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonBackToHome extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <Link
          className='button is-info'
          to='/'
        >
          Back to home
  </Link>
      </div>
    );
  }
}

export default ButtonBackToHome;