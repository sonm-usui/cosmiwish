import React from 'react';

const Star = ({ x, y }: any) => {
  return (
    <div
      style={{
        width: '0px',
        height: '0px',
        borderLeft: '2px solid transparent',
        borderRight: '2px solid transparent',
        borderBottom: '2px solid white',
        position: 'absolute',
        left: x,
        top: y,
      }}
    ></div>
  );
};

export default Star;