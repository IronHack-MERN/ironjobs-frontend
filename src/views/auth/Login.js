import React, { Component } from 'react';
import { withAuth } from '../../Context/AuthContext';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({
      username,
      password,
    });
  };

  render() {
    const { username, password } = this.state;
    console.log('login: ', this.props);
    return (
      <div className="contenido-principal contenido">
        <form onSubmit={this.handleFormSubmit}>
          <p>
            <label htmlFor="username">Username:</label>
            <input
              className="u-full-width"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="username"
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              className="u-full-width"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="password"
            />
          </p>
          <p>
            <input 
              className="button-primary u-full-width"
              type="submit" value="Login" 
            />
          </p>
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
