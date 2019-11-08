import React, { Component } from 'react';
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
        <h1>Últimas ofertas publicadas</h1>

        <table className="table-jobs">
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Salary</th>
              <th>Location</th>
            </tr>
          </thead>
          {!loading && jobs.map((job, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.salary}</td>
                  <td>{job.location}</td>
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