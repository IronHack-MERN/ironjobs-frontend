import React, { Component } from 'react';

const ApplyList = props => {
  const { _id, userId } = props.apply;
  const { title, company, typePosition, salary } = props.apply.jobId;

  return (
    <div className="row contenido contenido-principal">
      <div className="four columns">
        <h5>{company}</h5>
      </div>
      <div className="four columns">
        {title}
        <p>
        {typePosition}
        </p>
      </div>
      <div className="card-location"></div>
      <div className="card-location">{salary}</div>
      <div className="card-date">18/11/2019</div>
    </div>
  );
};

export default ApplyList;
