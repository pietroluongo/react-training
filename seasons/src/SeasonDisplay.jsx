import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  return lat > 0 ? 'Winter' : 'Summer';
};

const SeasonDisplay = (props) => {
  const { lat, lng } = props;
  const season = getSeason(lat, new Date().getMonth());
  return (
    <div>
      Season Display
      <p>
        Lat:
        {lat}
      </p>
      <p>
        Long:
        {lng}
      </p>
      <p>Current season: {season}</p>
    </div>
  );
};

export default SeasonDisplay;
