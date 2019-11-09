import React, { Component } from 'react';
import { withAuth } from '../../Context/AuthContext';
import '../../css/Login.scss';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({
      username,
      password
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className='login'>
        <header></header>
        <h1> Welcome to the IronJobs</h1>
        <h3>Sign up and look for an offer that fits your knowledge</h3>
        <form className='login-form' onSubmit={this.handleFormSubmit}>
          <label htmlFor='username' >Username:</label>
          <input 
            type="text" 
            id='username'
            name="username" 
            value={username} 
            onChange={this.handleChange} 
            placeholder='username' />

          <label htmlFor='password' >Password:</label>
          <input type="password" 
            id='password'
            name="password" 
            value={password} 
            onChange={this.handleChange}
            placeholder='password' />

          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default withAuth(Login);