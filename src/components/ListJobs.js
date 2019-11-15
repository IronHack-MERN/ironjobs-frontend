import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/jobService';

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
        <table className="table-jobs">
          <thead>
            <tr>
              <td colspan="4">LATEST PUBLISHED OFFERS</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Salary</th>
              <th>Location</th>
            </tr>
          </thead>

          {!loading && jobs.map((job, index) => {
            return (            
              <tbody key={`${job._id}-${index}`}>
                <tr>
                <Link 
                  to = {{
                    pathname: `/private/jobs/${job._id}`,
                    props:{
                      job: {job}
                    }
                  }}
                >
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.salary}</td>
                  <td>{job.location}</td>
                  
                </Link>
                </tr>
              </tbody>
            )
          })}
        </table>

        {loading && <div>loading...</div>}
      </div>
    )
  }
}

export default ListJobs;