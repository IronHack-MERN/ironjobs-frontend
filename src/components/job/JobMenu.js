import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListJobs from '../ListJobs';

class JobMenu extends Component {
  constructor() {
    super();
    this.state = {
      job: '',
      company: '',
      textAreaDescription: '',
      textAreaRequeriments: '',
      location: '',
      selectInputType: 'Job',
      selectInputSpecialty: 'Web development'
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div className=''>
        {/* <div className='button'>
          <Link
            to={{
              pathname: '/private/job/post',
            }}>
            Post a job offer
          </Link>
        </div> */}

        <ListJobs />
      </div>
    );
  }
}

export default JobMenu;