import React from 'react';
import { Link } from 'react-router-dom';

const CampusShow = props => {
  const info = props.info;
  const deleteCampus = props.deleteCampus;

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
      <div className="row">
        <div className="one column" />
        <Link to={`/campuses/edit/${info.id}`} className="three columns">
          <button type="button">Edit Campus</button>
        </Link>
        <button
          type="submit"
          className="three columns"
          onClick={() => deleteCampus()}
        >
          Delete Campus
        </button>
      </div>
    </div>
  );
};

export default CampusShow;
