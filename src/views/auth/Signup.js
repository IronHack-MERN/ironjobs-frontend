import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {  
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // ****** POR QUÉ NO FUNCIONAAA??
  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const { username, password } = this.state;
  //   this.props.handleSignup({
  //     username,
  //     password,
  //   })
  // }

  handleFormSubmit = (event) => {
    // para evitar que el botón haga submit
    event.preventDefault();
    authService.signup(this.state)
    this.setState({
      username: '',
      password: '',
    });

  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Welcome to the Iron Jobs</h1><br />
        <h3>To register we need you to enter your email and password</h3> <br />
        <form onSubmit={this.handleFormSubmit}><br />
          <label htmlFor='username'>Username:</label> <br />
          <input
            id='username'
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder='username'
          />

          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange} 
            placeholder='password' 
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;