import React from 'react';
import Button from '../Button';
import icongeo from '../../img/icon-geo.png';
import '../../css/JobDetail.css';
import applyService from '../../services/applyService';

const jobsDetail = (props) => {

  // eslint-disable-next-line react/prop-types
  const { _id, title, company, description, isOffered, location, requeriments, salary, specialty, typePosition } = props.location.props.job;

  const handleAddApply = () => {
    applyService.addNewApply(_id, props);
  }

  return (
    <div className='wrapper-job-card'>
      <div className="card">
        <div className="container">
          <p className="dateposted">
            Published:
              <span className="published">5/11/2019</span>
            <Button className='apply-button'
              myProp={handleAddApply}
            >
              Apply
            </Button>
          </p>
        </div>

        <div>
          <h1>{title}</h1>
          <h2> {company} </h2>
        </div>

        <div>
          <p className="job-item-location"><span><img src={icongeo} alt='icon-location' /></span> {location} - Full time</p>
          <div className="circle-badge circle-badge--full_time"></div>
        </div>

        <article className="job-card-body">
          <div className="section">
            <div className="job-description">
              <p className='p-justify'>
                <strong>{title}</strong> <br />
                {description}
              </p>

              <p className='p-justify'><strong>Is offered</strong> <br />
                {isOffered}
              </p>

              <p className='p-justify'><strong>Requeriments</strong><br />
                {requeriments}
              </p>

              <p className='p-justify'>
                <strong>Description</strong> <br />
                {description}
              </p>

              <p className='p-justify'>
                <strong>Specialty</strong> <br />
                {specialty}
              </p>

              <p className='p-justify'>
                <strong>Type Position</strong> <br />
                {typePosition}
              </p>
            </div>
          </div>

          <div className="resumen">
            <h4 className="section__title">Resumen</h4>
            <ul>
              <li><strong>Job:</strong> {title} </li>
              <li><strong>Company:</strong> {company} </li>
              <li><strong>Salary:</strong> {salary}</li>
              <li><strong>Specialty: </strong>{specialty} </li>
            </ul>

          </div>
        </article>

      </div>


    </div>
  )
}

export default jobsDetail;