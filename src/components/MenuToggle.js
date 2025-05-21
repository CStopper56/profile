import React from 'react';
import { List, X } from 'phosphor-react';
import PropTypes from 'prop-types';

const MenuToggle = ({ onClick, isOpen }) => {
  return (
    <div className="tz-menu-toggle">
      <button 
        className={`tz-menu-toggle__icon tz-offcanvas-btn ${isOpen ? 'active' : ''}`}
        onClick={onClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>
    </div>
  );
};

MenuToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MenuToggle;