import React, { Component } from 'react';
import '../css/MyProfile.css';
// import { Link } from 'react-router-dom';
// import ListJobs from '../components/ListJobs';
// import itemsProfile from '../data/items-profile.json';
import imageprofile from '../img/helen_profile.jpeg';


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
          <img src={imageprofile} alt='iron-beer-logo' />
          <h1>Sophia Helena</h1>
          <p className="title">FullStack developer student</p>
          <p>Iron Hack</p>
          <div className='resumen-profile'>
          Orci iaculis morbi proin est sed risus imperdiet nam varius, mi primis condimentum phasellus ac conubia facilisi duis curabitur, ornare luctus turpis venenatis commodo mus nibh parturient. Sociis lectus metus inceptos taciti platea integer quis fermentum egestas et, euismod vivamus at vitae dictumst pretium potenti lacus class ante eleifend, etiam convallis litora mauris rhoncus sollicitudin augue velit cursus. Malesuada tempus ad purus tempor vestibulum cum mattis vel, montes fringilla fames quisque tristique nascetur porta sagittis, nullam nisi dignissim magnis maecenas urna hac. Penatibus neque dui blandit aliquam auctor facilisis odio suscipit ultrices, aliquet nunc sodales pharetra nostra tortor diam elementum.
          </div>
          <p><button>Update</button></p>
        </div>

      </div>
    );
  }
}

export default MyProfile;