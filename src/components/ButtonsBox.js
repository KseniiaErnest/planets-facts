import React from 'react';

const ButtonsBox = ({ overviewColorBtn, internalColorBtn, geologyColorBtn, handleButton, className, overviewText, internalText, geologyText }) => (
  <div className={className}>
    <button style={{ backgroundColor: overviewColorBtn }} onClick={() => handleButton('overview')}>
      <span>01</span>{overviewText}
    </button>
    <button style={{ backgroundColor: internalColorBtn }} onClick={() => handleButton('internal')}>
      <span>02</span>{internalText}
    </button>
    <button style={{ backgroundColor: geologyColorBtn }} onClick={() => handleButton('geology')}>
      <span>03</span>{geologyText}
    </button>
  </div>
);

export default ButtonsBox;

// style={{ backgroundColor: overviewColorBtn }}
// style={{ backgroundColor: internalColorBtn }}
// style={{ backgroundColor: geologyColorBtn }}
