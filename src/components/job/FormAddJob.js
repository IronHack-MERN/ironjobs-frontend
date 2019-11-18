import React, { Component } from 'react';
import '../../css/FormAddJob.css';

class FormAddJob extends Component {

  constructor() {
    super();
    this.state = {
      job: '',
      company: '',
      textAreaDescription: '',
      textAreaRequeriments: '',
      location: '',
      selectInputType: 'Job',
      selectInputSpecialty: 'Web Development',
      value: 'coconut'
    }
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.addTheJob(this.state);
    console.log(this.state)
    this.setState({
      job: '',
      company: '',
      textAreaDescription: ' ... ',
      textAreaRequeriments: ' ... ',
      location: '',
      selectInputType: '',
      selectInputSpecialty: 'Web development'
    })
  }

  render() {
    return (
      <div job-post-section>
        <form className='job-post-form' onSubmit={this.handleSubmit}>
          <label>Job</label>
          <input type="text" name="job" value={this.state.job} onChange={(e) => this.handleChange(e)} /> <br />

          <label>Company</label>
          <input type="text" name="company" value={this.state.company} onChange={(e) => this.handleChange(e)} /> <br />

          <label> Description</label> <br />
          <textarea name="textAreaDescription" value={this.state.textAreaDescription} onChange={e => this.handleChange(e)} /> <br />

          <label> Requeriments</label>
          <textarea name="textAreaRequeriments" value={this.state.textAreaRequeriments} onChange={e => this.handleChange(e)} />

          <div>
            <label>Location</label>
            <input type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />

            <label>Type</label>
            <select name="selectInputType" value={this.state.selectInputType} onChange={e => this.handleChange(e)} >
              <option value="Internship">Internship defaultValue</option>
              <option value="Job">Job</option>
              <option value="Freelance">Freelance</option>
              <option value="Project">Project</option>
            </select> <br/>

            <label>Specialty</label>
            <select name="selectInputSpecialty" value={this.state.selectInputSpecialty} onChange={e => this.handleChange(e)} >
              <option value="Web development">Web development</option>
              <option value="UX - UI Design">UX - UI Design</option>
              <option value="Data analytics">Data analytics</option>
            </select>
          </div>

          <div className='submit-form'>
            <input type="submit" value="Add Job" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddJob;