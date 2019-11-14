import React, { Component } from 'react';
import '../css/MyProfile.css';
import { Link } from 'react-router-dom';
import itemsProfile from '../data/items-profile.json';


class MyProfile extends Component {
  render() {
    const { username } = this.props.user;

    return (
      <div className='content'>
        <div className="">
          {
            itemsProfile.map((oneItem, index) => {
              return (
                <div key={`${oneItem.view}-${index}`}>
                  <h3> 
                    {/* <Link className="list-group-item list-group-item-action" to={`/countries/${oneItem.name}`}>
                      {oneItem.name}
                    </Link> */}
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