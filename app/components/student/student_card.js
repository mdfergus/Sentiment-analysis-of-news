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
      <div className="shake student row" key={info.id}>
        <div className="column">
          <Link to={`/students/${info.id}`}>
            <h3>
              {info.lastName}, {info.firstName}
            </h3>
          </Link>
          <Link to={`/campuses/${campus.id}`}>
            <p>{campus.name}</p>
          </Link>
        </div>
        <div className="column">
          <img src={info.imageUrl} />
        </div>
      </div>
    );
  };
}
