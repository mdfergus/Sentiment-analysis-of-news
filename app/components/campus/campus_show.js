import React from 'react';
import { Link } from 'react-router-dom';

const CampusShow = props => {
  const info = props.info;

  return (
    <div>
      <div>
        <img src={info.imageUrl} />
        <div>
          <h1>{info.name}</h1>
          <p>{info.description}</p>
        </div>
      </div>
      <div>
        <Link to={`/Campuses/edit/${info.id}`}>
          <h4>Edit Campus</h4>
        </Link>
        <Link to={`/Campuses/delete/${info.id}`}>
          <h4>Delete Campus</h4>
        </Link>
      </div>
    </div>
  );
};

export default CampusShow;
