import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { WOW } from 'wowjs';
import { Swiper, Autoplay, Pagination, Navigation } from 'swiper';
import 'wowjs/css/libs/animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Combined CSS imports
import './style.css';
import './App.css';
import './components/assets/css/animate.css';
import './components/assets/css/icon.css';
import './components/assets/css/style.css';
import './components/assets/css/phospos.css';
import './components/assets/css/swiper.css';


// Components
import Preloader from './components/Preloader';
import Sidebar from './components/Sidebar';
import MenuToggle from './components/MenuToggle';
import MenuSidebar from './components/MenuSidebar';
import Overlay from './components/Overlay';
import Menu from './components/Menu';
import Timeline from './components/Timeline';
import MainWrapper from './components/MainWrapper';
import Banner from './components/Banner';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainWrapperRef = useRef(null);

  // Initialize effects
  useEffect(() => {
    new WOW().init();
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setIsScrolling(true);
    window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    window.history.pushState(null, null, `#${sectionId}`);
    
    setTimeout(() => {
      setIsScrolling(false);
      setActiveSection(sectionId);
    }, 1000);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          if (section.id !== activeSection) setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isScrolling]);

  // Initial hash handling
  useEffect(() => {
    if (window.location.hash) {
      handleSectionChange(window.location.hash.substring(1));
    }
  }, [handleSectionChange]);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <HelmetProvider>
      <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>

        {loading && <Preloader />}

        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
        <MenuSidebar isOpen={isMenuOpen} onClose={toggleMenu} activeSection={activeSection} onSectionChange={handleSectionChange} />
        <Menu activeSection={activeSection} onSectionChange={handleSectionChange} />

        <MainWrapper ref={mainWrapperRef}>
          <Timeline onScrollTop={handleScrollTop} />
          <Banner id="home" />
          <About id="about" />
          <Resume id="resume" />
          <Services id="services" />
          <Skills id="skills" />
          <Portfolio id="portfolio" />
          <Pricing id="pricing" />
          <Testimonial id="testimonial" />
          <Contact id="contact" />
        </MainWrapper>

        <button id="back-top" className="back-top" onClick={handleScrollTop} aria-label="Scroll to top">
          <i className="ph ph-arrow-up"></i>
        </button>
      </div>
    </HelmetProvider>
  );
};

export default App;

