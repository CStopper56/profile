// src/components/Sidebar.js
import React from 'react';
import sidebarImg from './assets/img/sidebar/sidebar.png';
import { PhFacebookLogo, PhXLogo, PhInstagramLogo, PhLinkedinLogo } from "phosphor-react"; // Correct icon imports

const Sidebar = () => {
  return (
    <div className="tz-sidebar">
      <div className="tz-sidebar1">
        <div className="tz-sidebar1__thumb tz-bg-black-neutral-2">
          <div className="tz-sidebar1__img-wrapper">
          <img src={sidebarImg} alt="sidebar-img" />
            <a className="tz-sidebar1__badge tz-button tz-button--effect tz-button--style1 tz-text-m" href="#contact">
              <span>Hire Me!</span>
            </a>
            <div className="tz-sidebar1__social">
              <a href="https://www.facebook.com/jimit56/"target="_blank" className="tz-sidebar1__social-link"><i className="ph ph-facebook-logo"></i></a>
              <a href="https://github.com/CStopper56" target="_blank" className="tz-sidebar1__social-link"><i className="ph ph-github-logo"></i></a>
              <a href="https://www.instagram.com/jim_my_26_5/" target="_blank" className="tz-sidebar1__social-link"><i className="ph ph-instagram-logo"></i></a>
              <a href="https://www.linkedin.com/in/jigarkumar1703/" target="_blank"  className="tz-sidebar1__social-link"><i className="ph ph-linkedin-logo"></i></a>
            </div>
          </div>
          <div className="tz-sidebar1-content text-center">
            <p className="tz-sidebar1-content__subtitle tz-text-l tz-text-white-neutral-2">
              Howdy! I'm Jigarkumar
            </p>
            <h3 className="tz-sidebar1-content__title tz-text-white">
              I am Full Stack Developer
            </h3>
            <div className="tz-sidebar1-content__footer">
              <a className="tz-button tz-button--effect tz-button--style1 tz-text-l w-100" href="#contact">
                <span>Contact Us</span>
              </a>
              <a className="tz-button tz-button--effect tz-text-l w-100"
                href="./assets/jigar_resume.pdf" download="jigar_resume.pdf">
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
