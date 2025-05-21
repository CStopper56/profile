import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ isOpen, onClick }) => {
  return (
    <div 
      className={`tz-body-overlay tz-body-overlay--right ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      style={{
        display: isOpen ? 'block' : 'none'
      }}
      aria-hidden={!isOpen}
    />
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Overlay;