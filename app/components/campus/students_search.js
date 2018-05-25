import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StudentCard from '../student/student_card';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [null]
    };
  }

  componentDidMount = async () => {
    const res = await axios.get('/api/students');
    this.setState({ students: res.data });
  };

  render() {
    if (this.state.students[0] === null) {
      return <h3>Loading students....</h3>;
    }

    const campusId = this.props.info.id;
    const studentsArray = this.state.students.filter(
      student => student.campusId === campusId
    );

    if (studentsArray.length === 0) {
      return <h3>No students enrolled in this campus</h3>;
    } else {
      return (
        <div>
          <div className="row">
            <div className="six columns" />
            <h1 className="nine columns">All Currently Enrolled Students</h1>
          </div>
          <div className="flex-container">
            {studentsArray.map(student => {
              if (student.campusId === campusId) {
                return <StudentCard info={student} key={student.id} />;
              }
            })}
          </div>
        </div>
      );
    }
  }
}
