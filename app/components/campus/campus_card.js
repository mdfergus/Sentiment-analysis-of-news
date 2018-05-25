import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = props => {
  const info = props.info;
  console.log(info);
  if (!info.id) {
    return (
      <div className="row">
        <div className="one column" />
        <h3 className="seven columns">Student not currently enrolled</h3>
      </div>
    );
  } else {
    return (
      <div className="row" key={info.id}>
        <div className="one column" />
        <div className="five columns">
          <Link to={`/campuses/${info.id}`}>
            <h3>{info.name}</h3>
          </Link>
          <p className="bold">Address: {info.address}</p>
          <p>{info.description}</p>
        </div>
        <div className="five columns">
          <img src={info.imageUrl} />
        </div>
      </div>
    );
  }
};

export default CampusCard;
