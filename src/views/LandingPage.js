import React, { Component } from 'react';
import Button from '../components/Button';

import ListJobs from '../components/ListJobs';

class LandingPage extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div>
        <h1>IRON JOBS</h1>
        <div className='list-jobs'>
          <ListJobs />
        </div>

        <div className='landing-buttons'>
          <Button 
            name='register' 
            
          />
          <Button 
            name='login' 
             
          />
        </div>
      </div>
    )
  }
}

export default LandingPage;