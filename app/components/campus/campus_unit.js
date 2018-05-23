import React from 'react';
import { Link } from 'react-router-dom';

const CampusUnit = props => {
  const info = props.info;

  return (
    <div className="row school" key={info.id}>
      <div className="column">
        <Link to={`/campus/${info.id}`}>
          <h3>{info.name}</h3>
        </Link>
        <p className="bold">Address: {info.address}</p>
        <p>{info.description}</p>
      </div>
      <div className="column">
        <img src={info.imageUrl} />
      </div>
    </div>
  );
};

export default CampusUnit;
