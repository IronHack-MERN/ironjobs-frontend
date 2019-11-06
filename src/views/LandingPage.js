import React, { Component } from 'react';
import Button from '../components/Button';

class LandingPage extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {

    return (
      <div>
        <h1>IRON JOBS</h1>
        <div className='list-jobs'>
          <table className="table-jobs">
            <tr>
              <th>Date</th>
              <th>Job</th>
              <th>Type</th>
              <th>Salary</th>
            </tr>
            <tr>
              <td>02/11/2019</td>
              <td>Web developer</td>
              <td>Web</td>
              <td>28.000</td>
            </tr>
            <tr>
              <td>02/11/2019</td>
              <td>Web developer</td>
              <td>Web</td>
              <td>28.000</td>
            </tr>
            <tr>
              <td>02/11/2019</td>
              <td>Web developer</td>
              <td>Web</td>
              <td>28.000</td>
            </tr>
            <tr>
              <td>02/11/2019</td>
              <td>Web developer</td>
              <td>Web</td>
              <td>28.000</td>
            </tr>
            <tr>
              <td>02/11/2019</td>
              <td>Web developer</td>
              <td>Web</td>
              <td>28.000</td>
            </tr>
          </table>
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