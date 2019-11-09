import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleSignup({
      username,
      password,
    })
  }

  render() {
    const { username, password } = this.state;
    console.log(this.props)
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

export default withAuth(Signup);