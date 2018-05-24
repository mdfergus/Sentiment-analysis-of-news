import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = props => {
  const info = props.info;

  return (
    <div className="grow row school" key={info.id}>
      <div className="column">
        <Link to={`/campuses/${info.id}`}>
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

export default CampusCard;
