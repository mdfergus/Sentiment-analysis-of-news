import React from 'react';
import { Link } from 'react-router-dom';

const StudentShow = props => {
  const info = props.info;

  return (
    <div>
      <div>
        <img src={info.imageUrl} />
        <div>
          <h1>
            {info.firstName} {info.lastName}
          </h1>
          <p>Email: {info.email}</p>
          <p>GPA: {info.gpa}</p>
        </div>
      </div>
      <div>
        <Link to={`/students/edit/${info.id}`}>
          <h4>Edit Student</h4>
        </Link>
        <Link to={`/students/delete/${info.id}`}>
          <h4>Delete Student</h4>
        </Link>
      </div>
    </div>
  );
};

export default StudentShow;
