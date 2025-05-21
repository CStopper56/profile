import React, { useState, useEffect } from 'react';
import { Plus, Minus, X } from 'phosphor-react';
import PropTypes from 'prop-types';

const MenuSidebar = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const menuItems = [
    {
      text: 'Home',
      link: '#home',
      submenu: []
    },
    {
      text: 'About',
      link: '#about',
      submenu: []
    },
    {
      text: 'Resume',
      link: '#resume',
      submenu: []
    },
    {
      text: 'Services',
      link: '#services',
      submenu: []
    },
    {
      text: 'Skills',
      link: '#skills',
      submenu: []
    },

    {
      text: 'Portfolio',
      link: '#portfolio',
      submenu: []
    },
    {
      text: 'Pricing',
      link: '#pricing',
      submenu: []
    },
    {
      text: 'Testimonial',
      link: '#testimonial',
      submenu: []
    },
    {
      text: 'Contact',
      link: '#contact',
      submenu: []
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = 'auto';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleDropdown = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  if (!isRendered) return null;

  return (
    <>
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside className={`menu-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="menu-sidebar__header">
          <h3 className="menu-sidebar__title">My Portfolio</h3>
        </div>

        <nav className="menu-sidebar__nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={item.submenu?.length ? 'has-dropdown' : ''}>
                <div className="menu-item-wrapper">
                  <a 
                    href={item.link}
                    className="menu-link"
                    onClick={(e) => {
                      if (item.submenu?.length) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        onClose();
                      }
                    }}
                  >
                    {item.text}
                  </a>
                  {item.submenu?.length > 0 && (
                    <button
                      className="menu-expand"
                      onClick={() => toggleDropdown(index)}
                      aria-label="Toggle submenu"
                    >
                      {expandedItems.includes(index) ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </button>
                  )}
                </div>
                {item.submenu?.length > 0 && (
                  <ul className={`submenu ${expandedItems.includes(index) ? 'active' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link} className="submenu-link">
                          {subItem.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-sidebar__footer">
          <p className="copyright">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

MenuSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MenuSidebar;