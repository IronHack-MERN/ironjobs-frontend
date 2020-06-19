import React from 'react';
import { Link } from 'react-router-dom';
import iconjob from '../../img/job-icon.png';

const JobCard = props => {
  const { _id, title, company, description, location } = props.job;
  return (
    <div className="contenido contenido-principal">
      <div className="row">
        <div className="two columns img-padre">
          <img src={iconjob} className='img-hijo' alt="logo" />
        </div>
        <div className="eight columns value">
          <h2>
            {/* <a href='/XXXXX' className='job-title'>{title} </a> */}
            <Link
              to={{
                pathname: `/private/jobs/${_id}`,
                props: {
                  job: props.job,
                },
              }}
            >
              {title}
            </Link>
          </h2>
          <h5>{company}</h5>
          <p className="value-description">{description}</p>
        </div>
        <div className="two columns">
          <h5 className="value-heading">{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
