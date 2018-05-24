import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampusUnit from '../campus/campus_unit';
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
          <h3>This Student is Registered to: {info.name}</h3>
          <div>
            <CampusUnit info={info} />
            <form>
              <select type="select" label="Multiple Select">
                {this.state.campuses.map(campus => (
                  <option value={campus.name} key={campus.id}>
                    {campus.name}
                  </option>
                ))}
              </select>
              <button>Change Student's Campus</button>
            </form>
          </div>
        </div>
      );
    }
  };
}
