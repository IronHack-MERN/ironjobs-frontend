import React, { Component } from 'react';
import iconjob from '../../img/icon-job.png';

const JobCard = (props) => {

  const { title, company,description, location, } = props.job;
 console.log(props.job);
    return (
      <div className="card-job">
        <div className='box'>
          <div className='card-img'>
            <img src={iconjob} className="App-logo" alt="logo" />
          </div>
          <div className='card-content'> 
            <h2>
                <a href='/XXXXX' className='job-title'>{title} </a>
            </h2>
            <h3>{company}</h3>
            <p>
            {description}
            </p>
          </div>
          <div className='card-working-day'>
            Jornada completa
          </div>
        <div className='card-location'>{location}</div>
        <div className='card-date'>18/11/2019</div>
        </div>
      </div>
    );
  }

export default JobCard;