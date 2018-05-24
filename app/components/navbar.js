import React from 'react';
import { Link } from 'react-router-dom';

const StudentUnit = props => {
  const info = props.info;

  return (
    <div className="row">
      <div className="two columns"> . </div>
      <div className="three columns">
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div className="three columns">
        <Link to="/students">
          <h3>Students</h3>
        </Link>
      </div>
      <div className="three columns">
        <Link to="/campuses">
          <h3>Campuses</h3>
        </Link>
      </div>
    </div>
  );
};

export default StudentUnit;
