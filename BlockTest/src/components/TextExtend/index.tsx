import React from 'react';

export default ({ title, text }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>{title}</h1>
    <p style={{ color: '#CCC' }}>{text}</p>
  </div>
);