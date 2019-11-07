import React, { Component } from 'react';
import Button from '../components/Button';
import ListJobs from '../components/ListJobs';
import '../css/LandingPage.css';

class LandingPage extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div className='wrapper'>
        <div className='content'>
          <h1>IRON JOBS</h1>
          <div className='list-jobs'>
            <ListJobs />
          </div>

        <div className='landing-buttons'>
          <div className='center'>
              <Button
                name='register'
              />
              <Button
                name='login'
              />
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;