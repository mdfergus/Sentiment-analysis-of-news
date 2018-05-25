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
    } else if (!this.state.students.length) {
      console.log(this.state.students);
      return (
        <div>
          <div className="row">
            <div className="one column" />
            <h3 className="eleven columns">Sorry there are no students</h3>
          </div>
          <div className="row">
            <div className="one column" />
            <Link to="/students/new/" className="eleven columns">
              <button type="button" className="three columns">
                Add Student
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      const studentsArray = this.state.students;
      return (
        <div>
          <div>
            <div className="row">
              <div className="one column" />
              <h1 className="eleven columns">
                All Currently Enrolled Students
              </h1>
            </div>
            <div className="row">
              <div className="one column" />
              <Link to="/students/new/" className="eleven columns">
                <button type="button" className="three columns">
                  Add Student
                </button>
              </Link>
            </div>
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
