import React from 'react';
import { Link } from 'react-router-dom';

const StudentEdit = props => {
  const info = props.info;

  return (
    <div>
      <div>
        <form>
          <div className="row">
            <br />
            Student first name:<br />
            <input type="text" name="firstname" />
          </div>
          <div className="row">
            <br />
            Student last name:<br />
            <input type="text" name="lastname" />
          </div>
          <div className="row">
            <br />
            GPA:<br />
            <input type="text" name="gpa" />
          </div>
          <div className="row">
            <br />
            Image URL:<br />
            <input type="text" name="imageUrl" />
          </div>
          <br />
          <button>Submit Changes</button>
        </form>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};

export default StudentEdit;
