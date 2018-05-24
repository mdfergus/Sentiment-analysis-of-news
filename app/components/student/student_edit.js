import React from 'react';
import { Link } from 'react-router-dom';

const StudentEdit = props => {
  const info = props.info;

  return (
    <div>
      <div>
        <form>
          <div className="row">
            <div className="one column" />
            <p className="three columns">Student first name:</p>
            <input type="text" name="firstname" className="five columns" />
          </div>
          <div className="row">
            <div className="one column" />
            <p className="three columns">Student last name:</p>
            <input type="text" name="lastname" className="five columns" />
          </div>
          <div className="row">
            <div className="one column" />
            <p className="three columns">GPA:</p>
            <input type="text" name="gpa" className="five columns" />
          </div>
          <div className="row">
            <div className="one column" />
            <p className="three columns">Image URL:</p>
            <input type="text" name="imageUrl" className="five columns" />
          </div>
          <div className="row">
            <p className="three column" />
            <button className="three columns">Submit Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentEdit;
