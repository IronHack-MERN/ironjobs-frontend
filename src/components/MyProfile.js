import React, { Component } from 'react';
import '../css/MyProfile.css';
import { Link } from 'react-router-dom';
import ListJobs from '../components/ListJobs';
import itemsProfile from '../data/items-profile.json';


class MyProfile extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div className='content'>
        {/* <div className="">
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
        </div> */}

        <div className="my-profile-card">
          <img src="/w3images/team2.jpg" alt='iron-beer-logo' />
          <h1>John Doe</h1>
          <p className="title">CEO  Founder, Example</p>
          <p>Harvard University</p>
          <div >
            {/* <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a> */}
          </div>
          <p><button>Update</button></p>
        </div>

      </div>
    );
  }
}

export default MyProfile;