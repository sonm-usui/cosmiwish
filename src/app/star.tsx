import React from 'react';

const Star = ({ x, y }: any) => {
  return (
    <img style={{
      height: "200px",
      width: "200px",
      position: 'absolute',
      left: x,
      top: y,
    }} src='ringed_planet.svg' />
  );
};

export default Star;