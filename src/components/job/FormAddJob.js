import React, { Component } from 'react';
import jobService from '../../services/jobService';

class FormAddJob extends Component {
  state = {
    title: '',
    company: '',
    description: '',
    requeriments: '',
    location: '',
    typePosition: 'Job',
    specialty: 'Web Development',
    salary: '35.000 - 40.000',
  };

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    jobService.addNewJob(this.state);

    // eslint-disable-next-line react/prop-types
    // this.props.addTheJob(this.state);
    console.log('el state en handleFormSubmit es: ', this.state);

    this.setState({
      title: '',
      company: '',
      description: '',
      requeriments: '',
      location: '',
      typePosition: '',
      specialty: '',
      salary: '',
    });
  };

  render() {
    return (
      <div>
      
        <form className="contenido contenido-principal" onSubmit={this.handleFormSubmit}>
          <h2>Create new job</h2>
          <label>Job</label>
          <input
            className="u-full-width"
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />{' '}
          <br />
          <label>Company</label>
          <input
            className="u-full-width"
            type="text"
            name="company"
            value={this.state.company}
            onChange={e => this.handleChange(e)}
          />{' '}
          <br />
          <label> Description</label> <br />
          <textarea
            className="u-full-width"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />{' '}
          <br />
          <label> Requeriments</label>
          <textarea
            className="u-full-width"
            name="requeriments"
            value={this.state.requeriments}
            onChange={e => this.handleChange(e)}
          />
          <div>
            <label>Location</label>
            <input
              className="u-full-width"
              type="text"
              name="location"
              value={this.state.location}
              onChange={e => this.handleChange(e)}
            />
            <label>Type</label>
            <select
              className="u-full-width"
              name="selectInputType"
              value={this.state.selectInputType}
              onChange={e => this.handleChange(e)}
            >
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
              <option value="Freelance">Freelance</option>
              <option value="Project">Project</option>
            </select>{' '}
            <br />
            <label>Specialty</label>
            <select
              className="u-full-width"
              name="selectInputSpecialty"
              value={this.state.selectInputSpecialty}
              onChange={e => this.handleChange(e)}
            >
              <option value="Web development">Web development</option>
              <option value="UX - UI Design">UX - UI Design</option>
              <option value="Data analytics">Data analytics</option>
            </select>
            <label>Salary</label>
            <select
              className="u-full-width"
              name="salary"
              value={this.state.salary}
              onChange={e => this.handleChange(e)}
            >
              <option value="20.000 - 25.000">20.000 - 25.000</option>
              <option value="25.000 - 30.000">25.000 - 30.000</option>
              <option value="30.000 - 35.000">30.000 - 35.000</option>
              <option value="35.000 - 40.000">35.000 - 40.000</option>
              <option value="40.000 - 50.000">40.000 - 50.000</option>
            </select>
          </div>
          <div className="submit-form">
            <input 
              className="button-primary u-full-width" 
              type="submit" value="Add Job"
              />
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddJob;
