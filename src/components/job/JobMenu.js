import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListJobs from '../ListJobs';

class JobMenu extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {
    console.log('*****PASO POR JOB MENU OK ******');

    return (
      <div>
        <h1> _ </h1>
        <Link
          to={{
            pathname: '/private/job/post',
            props: {
              
            }
          }}>
          Post a job offer
          </Link>
        <ListJobs />
      </div>
    );
  }
}

export default JobMenu;