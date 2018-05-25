import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentShow = props => {
  const info = props.info;
  const deleteStudent = props.deleteStudent;
  return (
    <div>
      <div className="row">
        <div className="one column" />
        <img src={info.imageUrl} className="five columns" />
        <div className="one column" />
        <div className="five columns">
          <h1>
            {info.firstName} {info.lastName}
          </h1>
          <p>Email: {info.email}</p>
          <p>GPA: {info.gpa}</p>
        </div>
      </div>
      <div className="row">
        <div className="one column" />
        <Link to={`/students/edit/${info.id}`} className="three columns">
          <button type="button">Edit Student</button>
        </Link>
        <button
          type="submit"
          className="three columns"
          onClick={() => deleteStudent()}
        >
          Delete Student
        </button>
      </div>
    </div>
  );
};

export default StudentShow;
