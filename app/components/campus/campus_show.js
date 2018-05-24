import React from 'react';
import { Link } from 'react-router-dom';

const CampusShow = props => {
  const info = props.info;

  return (
    <div>
      <div className="row">
        <div className="two columns" />
        <img src={info.imageUrl} className="six columns" />
        <div className="four columns">
          <h1>{info.name}</h1>
          <p>{info.description}</p>
          <p>{info.address}</p>
        </div>
      </div>
    </div>
  );
};

export default CampusShow;
