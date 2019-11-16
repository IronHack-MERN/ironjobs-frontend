import React, { Component } from 'react';
import ListJobs from '../ListJobs';

class JobMenu extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h1>JOB MENU</h1>
        <ListJobs />
      </div>
    );
  }
}

export default JobMenu;