import React from 'react';
import Button from '../Button';
import icongeo from '../../img/icon-geo.png';
import applyService from '../../services/applyService';

const jobsDetail = props => {
  // eslint-disable-next-line react/prop-types
  const {
    _id,
    title,
    company,
    description,
    isOffered,
    location,
    requeriments,
    salary,
    specialty,
    typePosition,
  } = props.location.props.job;

  const handleAddApply = () => {
    applyService.addNewApply(_id, props);
  };

  return (
    <div className=" contenido contenido-principal">
      <div className="card">
        <div className="container">
          <p className="dateposted"></p>
        </div>
        <div>
          <h1>{title}</h1>
          <h2> {company} </h2>
          <p className="location-center">
            <img className="img-location" src={icongeo} alt="icon-location" /> {location}
          </p>
        </div>

        <div></div>

        <article className="job-card-body">
          <div className="section">
            <div className="job-description">
              <p className="p-justify">
                <strong>{title}</strong> <br />
                {description}
              </p>

              <p className="p-justify">
                <strong>Is offered</strong> <br />
                {isOffered}
              </p>

              <p className="p-justify">
                <strong>Requeriments</strong>
                <br />
                {requeriments}
              </p>

              <p className="p-justify">
                <strong>Description</strong> <br />
                {description}
              </p>

              <p className="p-justify">
                <strong>Specialty</strong> <br />
                {specialty}
              </p>

              <p className="p-justify">
                <strong>Type Position</strong> <br />
                {typePosition}
              </p>
            </div>
          </div>

          <div className="resumen">
            <h4 className="section__title">Resumen</h4>
            <ul>
              <li>
                <strong>Job:</strong> {title}{' '}
              </li>
              <li>
                <strong>Company:</strong> {company}{' '}
              </li>
              <li>
                <strong>Salary:</strong> {salary}
              </li>
              <li>
                <strong>Specialty: </strong>
                {specialty}{' '}
              </li>
            </ul>
          </div>
        </article>
        <Button myProp={handleAddApply}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default jobsDetail;
