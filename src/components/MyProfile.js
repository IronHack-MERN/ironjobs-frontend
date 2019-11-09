import React, { Component } from 'react';
import '../css/MyProfile.css';

class MyProfile extends Component {
  render() {
    const { username } = this.props.user;

    return (
      <div className='content'>
        Mi usuario: <strong>{username}</strong>
        <div className="">
          <aside>
            <ul>
              <li><a href="#" className="w3-bar-item w3-button" >Personal Information</a></li>
              <li><a href="#" className="w3-bar-item w3-button">Studies</a></li>
              <li><a href="#" className="w3-bar-item w3-button">Experience</a></li>
              <li><a href="#" className="w3-bar-item w3-button">Languages</a></li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default MyProfile;