import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ListJobs from '../components/ListJobs';
// import itemsProfile from '../data/items-profile.json';
import imageprofile from '../img/helen_profile.jpeg';

class MyProfile extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="contenido contenido-principal">
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
        <div className="row">
          <div className="two columns">
            <img className="img-profile" src={imageprofile} alt="iron-beer-logo" />
          </div>
          <div className="six columns">
            <h1>Sophia Helena</h1>
          </div>
          <div className="four columns">
            <p className="title">FullStack developer student</p>
            <p>Iron Hack</p>
          </div>
        </div>
        <div className="resumen-profile">
          Orci iaculis morbi proin est sed risus imperdiet nam varius, mi primis condimentum phasellus ac conubia
          facilisi duis curabitur, ornare luctus turpis venenatis commodo mus nibh parturient. Sociis lectus metus
          inceptos taciti platea integer quis fermentum egestas et, euismod vivamus at vitae dictumst pretium potenti
          lacus class ante eleifend, etiam convallis litora mauris rhoncus sollicitudin augue velit cursus. Malesuada
          tempus ad purus tempor vestibulum cum mattis vel, montes fringilla fames quisque tristique nascetur porta
          sagittis, nullam nisi dignissim magnis maecenas urna hac. Penatibus neque dui blandit aliquam auctor facilisis
          odio suscipit ultrices, aliquet nunc sodales pharetra nostra tortor diam elementum.
        </div>
        <input 
              className="button-primary u-full-width"
              type="submit" value="Update" 
            />
      </div>
    );
  }
}

export default MyProfile;
