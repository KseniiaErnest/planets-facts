import React from 'react';

const ButtonsBox = ({ overviewColorBtn, internalColorBtn, geologyColorBtn, handleButton, className }) => (
  <div className={className}>
    <button style={{ backgroundColor: overviewColorBtn }} onClick={() => handleButton('overview')}>
      <span>01</span>OVERVIEW
    </button>
    <button style={{ backgroundColor: internalColorBtn }} onClick={() => handleButton('internal')}>
      <span>02</span>INTERNAL STRUCTURE
    </button>
    <button style={{ backgroundColor: geologyColorBtn }} onClick={() => handleButton('geology')}>
      <span>03</span>SURFACE GEOLOGY
    </button>
  </div>
);

export default ButtonsBox;
