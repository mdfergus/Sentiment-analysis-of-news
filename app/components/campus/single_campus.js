import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CampusCard from './campus_card';
import StudentsSearch from './students_search';

export default class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/campuses/${id}`);
    this.setState({ campus: res.data });
  }

  render() {
    const campus = this.state.campus;
    if (campus.id === undefined) {
      return <h3>Loading campus...</h3>;
    } else {
      return (
        <div id="single-todo">
          <CampusCard info={campus} />
          <StudentsSearch info={campus} />
          <Link to="/campuses">Back</Link>
        </div>
      );
    }
  }
}
