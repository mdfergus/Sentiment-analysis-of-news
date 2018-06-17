import React from 'react';

const Card = props => {
  const { info } = props;
  const magnitude = parseFloat(Math.round(info.magnitude * 100) / 100).toFixed(
    2
  );
  const emotion = parseFloat(Math.round(info.emotion * 100) / 100).toFixed(2);
  return (
    <div className="row">
      <div className="col m12">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title">{info.title}</span>
            <div className="row thin">
              <div className="col m6">
                <p>Positivity (negativity): </p>
              </div>
              <div className="col m3 pull-m2">
                <p>{emotion}%</p>
              </div>
            </div>
            <div className="row thin">
              <div className="col m6">
                <p>Emotional level: </p>
              </div>
              <div className="col m3 pull-m2">
                <p>{magnitude}%</p>
              </div>
            </div>
          </div>
          <div className="card-action cardLink">
            <a href="#">Show me this article</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
