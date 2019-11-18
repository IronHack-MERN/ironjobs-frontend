import React, { Component } from 'react';
import '../css/MyProfile.css';
import { Link } from 'react-router-dom';
import itemsProfile from '../data/items-profile.json';


class MyProfile extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div className='content'>
        <div className="">
          {
            itemsProfile.map((oneItem, index) => {
              return (
                <div key={`${oneItem.view}-${index}`}>
                  <h3> 
                    <Link to={`/private/${oneItem.view}`} >
                      {oneItem.view}
                    </Link>
                  </h3>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default MyProfile;