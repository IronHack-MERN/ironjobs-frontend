import React, { Component } from 'react';
import '../../css/JobCard.css';

const ApplyList = (props) => {

  const { _id, userId } = props.apply;

  // if(props.apply.jobId){
  //   const { description } = props.apply.jobId;
  // }
  const { title, company, typePosition, salary } = props.apply.jobId;

  return (
    <div className="card-job">
      <div className='box'>
        <div className='card-content'>
          <h3>{company}</h3>
        </div>
        <div className='card-working-day'>
          {title}
        </div>
        <div className='card-location'>
          {typePosition}
          </div>
          <div className='card-location'>
          {salary}
          </div>
        <div className='card-date'>
          18/11/2019
        </div>
      </div>
    </div>
  );
}

export default ApplyList;