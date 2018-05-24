import React from 'react';
import { Link } from 'react-router-dom';

const StudentShow = props => {
  const info = props.info;

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
          <h4>Edit Student</h4>
        </Link>
        <Link to={`/students/delete/${info.id}`} className="three columns">
          <h4>Delete Student</h4>
        </Link>
      </div>
    </div>
  );
};

export default StudentShow;
