import React, { Component } from 'react';
import iconjob from '../../img/icon-job.png';

const jobsDetail = (props) => {
  const { _id, company, description, isOffered, location, requeriments, salary, specialty, title, typePosition } = props.location.props.job.job;

  return(
    <div className='container'>
    <div className="job-card">
      <header className="header-job-card">
        <div className="">
          <p className="dateposted">
            Oferta publicada
            <span className="published">** 5/11/2019 ** </span>
          </p>
        </div>
        <hgroup className="hgroup-job-card">
          <h1>{title}</h1>
          <h2> {company} </h2>
          <picture>
            <img src={iconjob} alt='iron-beer-logo' />
          </picture>
        </hgroup>
        <p className="job-item-location">{location}</p>
        <div className="circle-badge circle-badge--full_time">Parcial</div>
      </header>

      <article className="job-card-body">
        <div className="section">
          <div className="job-description">
            <p>
              <strong>{title}</strong> <br />
              {description}
              </p>

            <p><strong>Is offered</strong>
              <ul>
                <li>{isOffered} </li>
              </ul>
            </p>

            <p><strong>Requeriments</strong>
              <ul>
                <li>{requeriments} </li>
              </ul>
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
          <button>APPLY</button>
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