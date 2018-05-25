import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class StudentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newId: '',
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 2.5,
      status: 'unsubmitted three columns',
      validate: 'no-error three columns'
    };
  }

  // The below form validation is reeaaally ugly code, given more time I'd modulize this
  // but given the time constraints I will not be able to do so

  handleChange = event => {
    const validate = 'no-error three columns';
    const value = event.target.value;
    if (
      (event.target.name === 'imageUrl' &&
        value.length > 3 &&
        !value.includes('.') &&
        !value.includes('/')) ||
      value.includes(' ')
    ) {
      this.setState({
        [event.target.name]: event.target.value,
        validate: 'error three columns'
      });
    } else if (
      (event.target.name === 'firstName' && value.length === 0) ||
      (event.target.name === 'lastName' && value.length === 0) ||
      (event.target.name === 'email' &&
        (!value.includes('.') || !value.includes('@') || value.length < 5))
    ) {
      this.setState({
        [event.target.name]: event.target.value,
        validate: 'error three columns'
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        validate
      });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (
      this.state.validate !== 'error three columns' &&
      this.state.imageUrl.length > 3
    ) {
      const res = await axios.post('/api/students', this.state);
      this.setState({
        status: 'submitted three columns',
        newId: res.data.id
      });
    }
  };

  render() {
    if (this.state.status === 'submitted three columns') {
      return <Redirect to={`/students/show/${this.state.newId}`} />;
    } else {
      return (
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Student first name:</p>
                <input
                  type="text"
                  name="firstName"
                  className="five columns"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Student last name:</p>
                <input
                  type="text"
                  name="lastName"
                  className="five columns"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Email:</p>
                <input
                  type="text"
                  name="email"
                  className="five columns"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">GPA:</p>
                <input
                  type="text"
                  name="gpa"
                  className="five columns"
                  value={this.state.gpa}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Image URL:</p>
                <input
                  type="text"
                  name="imageUrl"
                  className="five columns"
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <button type="submit" className="three columns">
                  Submit Changes
                </button>
                <div className="one column" />
                <p className={this.state.status}>Changes Submitted!</p>
                <div className="one column" />
                <p className={this.state.validate}>
                  There is an error in your submission
                </p>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
