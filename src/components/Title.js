import React from 'react';
import data from '../services-data';

export default function Title({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="section-logo">
        <img src={data.minilogo} />
      </div>
    </div>
  );
}
