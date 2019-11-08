import React, { Component } from 'react';
import LandingPage from './LandingPage';

class Logout extends Component {
  constructor() {
    super();
    this.saludo = "Vuelve cuando quieras";
}

  render() {
    console.log('********************* INICIO PROPS *********************');
    console.log(this.props);
    console.log('********************* FIN PROPS *********************');
    return (
      <div>
       <h1>{this.saludo}</h1>
      
       <LandingPage />
      </div>
    );
  }
}

export default Logout;