import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentShow from './student_show';
import CampusSelect from './campus_select';

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      campus: {},
      deleted: false
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/students/show/${id}`);

    if (res.data.campusId) {
      const campus = await axios.get(`/api/campuses/${res.data.campusId}`);
      this.setState({ student: res.data, campus: campus.data });
    } else {
      this.setState({ student: res.data });
    }
  }

  deleteStudent = async () => {
    const id = this.state.student.id;
    await axios.delete(`/api/students/${id}`);
    this.setState({ deleted: true });
  };

  render() {
    const student = this.state.student;
    const campus = this.state.campus;
    if (student.id === undefined) {
      return <h3>Loading student...</h3>;
    } else if (this.state.deleted === true) {
      return <Redirect to="/students" />;
    } else {
      return (
        <div className="row">
          <StudentShow info={student} deleteStudent={this.deleteStudent} />
          <CampusSelect info={campus} studentId={student.id} />
          <div className="one column" />
          <Link to="/students" className="three columns">
            <button type="button">Back</button>
          </Link>
        </div>
      );
    }
  }
}
