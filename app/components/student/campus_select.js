import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampusCard from '../campus/campus_card';
import axios from 'axios';

export default class CampusSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: {}
    };
  }

  componentDidMount = async () => {
    const res = await axios.get(`/api/campuses`);
    this.setState({ campuses: res.data });
  };

  render = () => {
    const info = this.props.info;
    if (this.state.campuses[0] === undefined) {
      return <h3>Page Loading...</h3>;
    } else {
      return (
        <div>
          <h2 />
          <div className="row">
            <div className="one column" />
            <h3 className="eleven columns">
              This Student is Registered to: {info.name}
            </h3>
          </div>
          <div className="row">
            <div className="one column" />
            <CampusCard info={info} />
            <form className="row">
              <div className="one column" />
              <select
                type="select"
                label="Multiple Select"
                className="five columns"
              >
                {this.state.campuses.map(campus => (
                  <option value={campus.name} key={campus.id}>
                    {campus.name}
                  </option>
                ))}
              </select>
              <button className="three columns">Change Student's Campus</button>
            </form>
          </div>
        </div>
      );
    }
  };
}
