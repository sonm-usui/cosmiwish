'use client'
import React, { useEffect, useState } from 'react';
import { start } from 'repl';

const Star = ({ x, y, star }: any) => {

  const Stars = [
    {
      name: 'Star X1',
      image: 'star.svg',
      size: '150px'
    },
    {
      name: 'Star X2',
      image: 'star_x2.svg',
      size: '150px'
    },
    {
      name: 'Star X3',
      image: 'star_x3.svg',
      size: '70px'
    },
    {
      name: 'Moon',
      image: 'moon.svg',
      size: '50px'
    },
    {
      name: 'Planet',
      image: 'planet.svg',
      size: '60px'
    },
    {
      name: 'Ringed Planet',
      image: 'ringed_planet.svg',
      size: '100px'
    },
  ]

  const [currentStar, setCurrentStar] = useState<any>({})

  useEffect( () => {
       const data = Stars?.find( (res: any) => res.name === star.star_type);
       setCurrentStar(data);
  }, [])
  return (
    <img style={{
      height: currentStar?.size,
      width: currentStar?.size,
      position: 'absolute',
      left: x,
      top: y,
    }} src={currentStar?.image} />
  );
};

export default Star;