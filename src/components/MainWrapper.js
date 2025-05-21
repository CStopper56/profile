// src/components/MainWrapper.js
import React from 'react';

const MainWrapper = ({ children }) => {
  return (
    <div className="tz-main-wrapper">
      {children}
    </div>
  );
};

export default MainWrapper;