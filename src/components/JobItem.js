import React, { Component } from 'react';

class JobItem extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { job, id, key } = this.props;

    return (
      <div>
          <tr>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.salary}</td>
            <td>{job.location}</td>
          </tr>
       
      </div>
    );
  }
}

export default JobItem;