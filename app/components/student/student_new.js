import React from 'react';
import { Link } from 'react-router-dom';

const StudentNew = () => {
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
          <br />
          <button type="submit" value="Submit">
            Submit New Student
          </button>
        </form>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};

export default StudentNew;
