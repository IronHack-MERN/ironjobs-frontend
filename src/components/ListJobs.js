import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/jobService';
import JobCard from '../components/job/JobCard';

class ListJobs extends Component {
  state = {
    jobs: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const jobs = await jobService.getAllJobs();

      this.setState({
        jobs,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { jobs, loading } = this.state;
    return (
      <div className='wrapper'>

        {!loading && jobs.map((job, index) => {
          return (
            <div key={`${job._id}-${index}`}>
                <JobCard
                  job={job}
              />
            </div>
          )
        })}

        {loading && <div>loading...</div>}
      </div>
    )
  }
}

export default ListJobs;

