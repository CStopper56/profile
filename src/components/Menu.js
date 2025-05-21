import React, { useEffect, useState } from 'react';

const Menu = ({ activeSection, onSectionChange }) => {
  const [scrolled, setScrolled] = useState(false);
  
  const menuItems = [
    { id: 'home', label: 'Home', icon: 'ph-house' },
    { id: 'about', label: 'About', icon: 'ph-user'},
    { id: 'resume', label: 'Resume', icon: 'ph-graduation-cap' },
    { id: 'services', label: 'Services', icon: 'ph-briefcase' },
    { id: 'skills', label: 'Skills', icon: 'ph-pen-nib-straight' },
    { id: 'portfolio', label: 'Portfolio', icon: 'ph-layout' },
    { id: 'pricing', label: 'Pricing', icon: 'ph-currency-circle-dollar' },
    { id: 'testimonial', label: 'Testimonial', icon: 'ph-chat-centered-text' },
    { id: 'contact', label: 'Contact', icon: 'ph-paper-plane' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    onSectionChange(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <nav className={`tz-menu ${scrolled ? 'scrolled' : ''}`}>
      <ul className="tz-menu__list" id="tz-onepage-nav">
        {menuItems.map((item) => (
          <li 
            className={`tz-menu__item ${activeSection === item.id ? 'active' : ''}`} 
            key={item.id}
          >
            <a 
              href={`#${item.id}`} 
              title={item.label}
              className={`tz-menu__link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, item.id)}
              aria-label={item.label}
              data-tooltip={item.label}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <i className={`ph ${item.icon}`}></i>
    
              <span className="tz-menu__highlight"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;