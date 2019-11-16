import React, { Component } from 'react';
import Button from '../Button';
import iconjob from '../../img/icon-job.png';
import icongeo from '../../img/icon-geo.png';
import '../../css/JobDetail.css';

const jobsDetail = (props) => {
  const { _id, company, description, isOffered, location, requeriments, salary, specialty, title, typePosition } = props.location.props.job.job;

  const handleAddApply = () => {
     console.log('estoy desde handleApply');
  }

  return (
    <div className='container'>
      <div className="job-card">
        <header className="header-job-card">
          <div className="">
            <p className="dateposted">
              Published: 
              <span className="published">5/11/2019</span>
            </p>
          </div>
          <hgroup className="hgroup-job-card">
            <h1>{title}</h1>
            <h2> {company} </h2>
            <picture>
              {/* <img src={iconjob} alt='iron-beer-logo' /> */}
            </picture>
          </hgroup>
          <p className="job-item-location"><span><img src={icongeo} /></span> {location}</p>
          <div className="circle-badge circle-badge--full_time">Parcial</div>
        </header>

        <article className="job-card-body">
          <div className="section">
            <div className="job-description">
              <p>
                <strong>{title}</strong> <br />
                {description}
              </p>

              <p><strong>Is offered</strong> <br/>
                {isOffered} 
              </p>

              <p><strong>Requeriments</strong><br/>
                {requeriments}
              </p>

              <p>
                <strong>Description</strong> <br />
                {description}
              </p>

              <p>
                <strong>Specialty</strong> <br />
                {specialty}
              </p>

              <p>
                <strong>Type Position</strong> <br />
                {typePosition}
              </p>
            </div>
          </div>
          <div className="section section--contact t-job-contact" id="how-join-section">
            <Button
              myProp={handleAddApply}
            >
              Apply
            </Button>
          </div>
          <div className="section">
            <h4 className="section__title">Resumen</h4>
            <dl>
              <dt>Job: </dt>
              <dd>{title} </dd>

              <dt>Company: </dt>
              <dd>{company} </dd>

              <dt>Specialty: </dt>
              <dd>{specialty} </dd>

              <dt>Salary: </dt>
              <dd> {salary} </dd>
            </dl>
          </div>
        </article>
      </div>
    </div>
  )
}

export default jobsDetail;