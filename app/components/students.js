import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StudentCard from './student/student_card';

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
    } else {
      const studentsArray = this.state.students;
      return (
        <div>
          <div>
            <h1>All Currently Enrolled Students</h1>
            {/* <Link to="/students/new/"> */}
            <h4>Add Student</h4>
            {/* </Link> */}
          </div>
          <div className="flex-container">
            {studentsArray.map(student => (
              <StudentCard info={student} key={student.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}
