import React, { Component } from 'react';

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
      selectInputSpecialty: 'Web development'
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Job</label>
          <input type="text" name="job" value={this.state.job} onChange={(e) => this.handleChange(e)} />

          <label>Company</label>
          <input type="text" name="company" value={this.state.company} onChange={(e) => this.handleChange(e)} />

          <label> Description</label>
          <textarea name="textAreaDescription" value={this.state.textAreaDescription} onChange={e => this.handleChange(e)} />

          <label> Requeriments</label>
          <textarea name="textAreaRequeriments" value={this.state.textAreaRequeriments} onChange={e => this.handleChange(e)} />

          <label>Location</label>
          <input type="text" name="job" value={this.state.job} onChange={(e) => this.handleChange(e)} />

          <label>Type</label>
          <select name="selectInputType" value={this.state.selectInputType} onChange={e => this.handleChange(e)} >
            <option value={this.state.selectInputType}>{this.state.selectInputType}</option>
            <option value="Internship">Internship</option>
            <option value="Job">Job</option>
            <option value="Freelance">Freelance</option>
            <option value="Project">Project</option>
          </select>

          <label>Specialty</label>
          <select name="selectInputSpecialty" value={this.state.selectInputSpecialty} onChange={e => this.handleChange(e)} >
            <option value={this.state.selectInputSpecialty}>{this.state.selectInputSpecialty}</option>
            <option value="Web development" selected>Web development</option>
            <option value="UX - UI Design">UX - UI Design</option>
            <option value="Data analytics">Data analytics</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormAddJob;