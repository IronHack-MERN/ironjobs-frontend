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

  addJobHandler = () => {
    console.log('******* AGREGAR EL JOB A LA BD  *****');
  }

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
              addTheJob: this.addJobHandler
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