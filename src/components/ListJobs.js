import React, { Component } from 'react';
import jobService from '../services/jobService';
import JobItem from '../components/JobItem';

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
          <tr>
            <th>Job</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Location</th>
          </tr>

          {!loading && jobs.map((job, key) => {
            return (
              <JobItem
                id={job._id}
                key={key}
                job={job}
              />
            )
          })}

        </table>
        {loading && <div>loading...</div>}
      </div>
    )
  }

}

export default ListJobs;