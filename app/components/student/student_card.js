import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {}
    };
  }

  UNSAFE_componentWillMount = async () => {
    const campusId = this.props.info.campusId;
    const res = await axios.get(`/api/campuses/${campusId}`);
    this.setState({ campus: res.data });
  };

  render = () => {
    const info = this.props.info;
    const campus = this.state.campus;

    return (
      <div className="wrap">
        <div className="row" key={info.id}>
          <div className="one column" />
          <div className="eleven columns">
            <img src={info.imageUrl} />
          </div>
        </div>
        <div className="row">
          <div className="one column" />
          <div>
            <Link to={`/students/${info.id}`}>
              <h4 className="dont-wrap">
                {info.lastName}, {info.firstName}
              </h4>
            </Link>
            <Link to={`/campuses/${campus.id}`}>
              <h5>{campus.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    );
  };
}
