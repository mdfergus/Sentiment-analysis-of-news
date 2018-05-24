import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentShow from './student_show';
import CampusSelect from './campus_select';

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      campus: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/students/${id}`);
    const campus = await axios.get(`/api/campuses/${res.data.campusId}`);
    this.setState({ student: res.data, campus: campus.data });
    // /, campus: campus.data
  }

  render() {
    const student = this.state.student;
    const campus = this.state.campus;
    if (student.id === undefined) {
      return <h3>Loading student...</h3>;
    } else {
      return (
        <div className="row">
          <StudentShow info={student} />
          <CampusSelect info={campus} />
          <div className="one column" />
          <Link to="/students" className="three columns">
            <h1>Back</h1>
          </Link>
        </div>
      );
    }
  }
}
