import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class CampusEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      address: '',
      description: '',
      imageUrl: '',
      status: 'unsubmitted three columns',
      validate: 'no-error three columns'
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/campuses/show/${id}`);
    this.setState({
      id,
      name: res.data.name,
      address: res.data.address,
      description: res.data.description,
      imageUrl: res.data.imageUrl
    });
  };

  handleChange = event => {
    const validate = 'no-error three columns';
    const value = event.target.value;
    if (
      event.target.name === 'imageUrl' &&
      ((value.length > 3 && !value.includes('.') && !value.includes('/')) ||
        value.includes(' '))
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
      await axios.put('/api/campuses', this.state);
      this.setState({
        status: 'submitted three columns'
      });
    }
  };

  render() {
    if (this.state.status === 'submitted three columns') {
      return <Redirect to={`/campuses/show/${this.state.id}`} />;
    } else {
      return (
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Campus name:</p>
                <input
                  type="text"
                  name="name"
                  className="five columns"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Address:</p>
                <input
                  type="text"
                  name="address"
                  className="five columns"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="one column" />
                <p className="three columns">Description:</p>
                <textarea
                  type="text"
                  rows="20"
                  name="description"
                  className="five columns"
                  value={this.state.description}
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
                <p className="three column" />
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
