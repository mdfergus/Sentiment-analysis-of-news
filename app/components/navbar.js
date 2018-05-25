import React from 'react';
import { Link } from 'react-router-dom';

const StudentUnit = props => {
  const info = props.info;

  return (
    <div className="row navbar">
      <div className="two columns"> . </div>
      <div className="ten columns flex-container-right">
        <img src="/logosm.png" />
        <div className="space-between">
          <Link to="/">
            <h5>Home</h5>
          </Link>
        </div>
        <div className="space-between">
          <Link to="/students">
            <h5>Students</h5>
          </Link>
        </div>
        <div className="space-between">
          <Link to="/campuses">
            <h5>Campuses</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentUnit;
