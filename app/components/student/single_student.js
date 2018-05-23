import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentUnit from './student_unit';

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/students/${id}`);
    this.setState({ student: res.data });
  }

  render() {
    const student = this.state.student;
    if (student.id === undefined) {
      return <h3>Loading student...</h3>;
    } else {
      return (
        <div id="single-todo">
          <StudentUnit info={student} />
          <Link to="/students">Back</Link>
        </div>
      );
    }
  }
}
