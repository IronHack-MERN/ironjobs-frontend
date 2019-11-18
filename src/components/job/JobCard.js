import React from 'react';
import { Link } from 'react-router-dom';
import iconjob from '../../img/icon-job.png';
import '../../css/JobCard.css';

const JobCard = (props) => {

  const { _id, title, company,description, location, } = props.job;
    return (
      <div className="card-job">
        <div className='box'>
          <div className='card-img'>
            <img src={iconjob} className="App-logo" alt="logo" />
          </div>
          <div className='card-content'> 
            <h2>
                {/* <a href='/XXXXX' className='job-title'>{title} </a> */}
                <Link 
                  to = {{
                    pathname: `/private/jobs/${_id}`,
                    props:{
                      job: props.job
                    }
                  }} 
                >
                  {title}
                </Link>
            </h2>
            <h3>{company}</h3>
            <p>
            {description}
            </p>
          </div>
          <div className='card-working-day'>
            Full time
          </div>
        <div className='card-location'>{location}</div>
        <div className='card-date'>18/11/2019</div>
        </div>
      </div>
    );
  }

export default JobCard;