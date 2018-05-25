import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampusCard from '../campus/campus_card';
import axios from 'axios';

export default class CampusSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      currentCampus: {},
      selectedCampusId: '1'
    };
  }

  componentDidMount = async () => {
    const res = await axios.get(`/api/campuses`);
    this.setState({ campuses: res.data, currentCampus: this.props.info });
  };

  handleChange = event => {
    this.setState({
      selectedCampusId: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const campusId = this.state.selectedCampusId;
    const studentId = this.props.studentId;

    const newCampus = this.state.campuses.filter(ele => ele.id == campusId)[0];
    await axios.put(`/api/students/${this.props.studentId}`, {
      campusId,
      studentId
    });
    this.setState({
      currentCampus: newCampus
    });
  };

  render = () => {
    const info = this.state.currentCampus;
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
          </div>
          <form className="row" onSubmit={this.handleSubmit}>
            <div className="one column" />
            <select
              type="select"
              label="Multiple Select"
              className="five columns"
              onChange={this.handleChange}
            >
              {this.state.campuses.map(campus => (
                <option value={campus.id} key={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
            <button type="submit" className="four columns">
              Change Student's Campus
            </button>
          </form>
        </div>
      );
    }
  };
}
