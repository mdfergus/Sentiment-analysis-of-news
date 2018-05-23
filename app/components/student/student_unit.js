import React from 'react';
import { Link } from 'react-router-dom';

const StudentUnit = props => {
  const info = props.info;

  return (
    <div className="student row" key={info.id}>
      <div className="column">
        <Link to={`/students/${info.id}`}>
          <h3>
            {info.lastName}, {info.firstName}
          </h3>
        </Link>
        <p>Email address: {info.email}</p>
        <p>Current GPA: {info.gpa}</p>
      </div>
      <div className="column">
        <img src={info.imageUrl} />
      </div>
    </div>
  );
};

export default StudentUnit;
