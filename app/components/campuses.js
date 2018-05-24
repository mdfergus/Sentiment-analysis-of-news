import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CampusCard from './campus/campus_card';

export default class Campuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [null]
    };
  }

  componentDidMount = async () => {
    const res = await axios.get('/api/campuses');
    this.setState({ campuses: res.data });
  };

  render() {
    if (this.state.campuses[0] === null) {
      return <h3>Loading schools....</h3>;
    } else {
      const campusesArray = this.state.campuses;
      return (
        <div className="row">
          <div className="one column" />
          <h1 className="eleven columns">All Current Schools</h1>
          <div className="rowSchool">
            {campusesArray.map(school => (
              <CampusCard info={school} key={school.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}
