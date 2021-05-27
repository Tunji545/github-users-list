import React from 'react';
import Card from './Card';
import dataJson from './dataJson';

const CardList = (props) => (
  <div>
    {dataJson.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

export default CardList;
