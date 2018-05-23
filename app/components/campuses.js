import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CampusUnit from './campus/campus_unit';

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
        <div>
          <h1>All Current Schools</h1>
          <div className="rowSchool">
            {campusesArray.map(school => (
              <CampusUnit info={school} key={school.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}
