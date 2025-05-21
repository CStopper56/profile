import React from 'react';
import portfolio1 from './assets/img/portfolio/POR.png';
import portfolio2 from './assets/img/portfolio/hdb.png';
import portfolio3 from './assets/img/portfolio/imin.png';
import portfolio4 from './assets/img/portfolio/PORTFO-4.png';
import portfolio5 from './assets/img/portfolio/PORTFO-5.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Web Design",
      projectName: "Colmac",
      image: portfolio1,
      link: "colmac.in",
      size: "small"
    },
    {
      id: 2,
      title: "API - DESIGN -DEVELOPMENT",
      projectName: "Teck Care",
      image: portfolio2,
      link: "https://github.com/CStopper56/health-dashboard",
      size: "small"
    },
    {
      id: 3,
      title: "Web Development",
      projectName: "IMMENSE",
      image: portfolio3,
      link: "https://www.imin.co.in/",
      size: "large"
    },
    {
      id: 4,
      title: "Website",
      projectName: "Shangri-La Bungalows",
      image: portfolio4,
      link: "https://shangrilaimperial.com/",
      size: "small"
    },
    {
      id: 5,
      title: "Website",
      projectName: "RISHI ARCHITECT",
      image: portfolio5,
      link: "https://rishiarchitect.com/",
      size: "small"
    }
  ];

  const PortfolioCard = ({ item }) => {
    const cardClass = item.size === "large" 
      ? "tz-portfolio1-card tz-portfolio1-card--large wow fadeInUp" 
      : "tz-portfolio1-card wow fadeInUp";
    
    const imageClass = item.size === "large" 
      ? "tz-portfolio1-card__mask2" 
      : "tz-portfolio1-card__mask1";

    return (
      <div className={item.size === "large" ? "col-12" : "col-sm-6"}>
        <div className={cardClass}>
          <a 
            className="tz-portfolio1-card__link"  target='_blank' rel="noopener noreferrer"
            href={item.link}
            aria-label={`View ${item.projectName} project`}
          >
            <div className="tz-portfolio1-card__arrow">
              <i className="ph ph-arrow-up-right" aria-hidden="true"></i>
            </div>
            <img 
              className={imageClass} 
              src={item.image} 
              alt={`${item.projectName} - ${item.title}`}
              loading="lazy"
            />
            <div className="tz-portfolio1-card__content">
              <span className="tz-portfolio1-card__title tz-text-s tz-text-white-neutral-2">
                {item.title}
              </span>
              <h4 className="tz-portfolio1-card__subtitle tz-text-white">
                {item.projectName}
              </h4>
            </div>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="portfolio" 
      className="tz-portfolio1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40"
      aria-labelledby="portfolio-heading"
    >
      <div className="tz-custom-container">
        <div className="tz-section-top">
          <div className="tz-chip tz-text-s wow fadeInUp">
            <i className="ph ph-layout" aria-hidden="true"></i>
            <span>Portfolio</span>
          </div>
          <div className="tz-section-title wow fadeInUp">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              My Recent
            </h4>
            <div className="tz-section-title__highlight tz-display-4 wow fadeInUp">
              <span className="tz-section-title__line" aria-hidden="true"></span>
              <p 
                className="tz-section-title__pt2 tz-text-secondary"
                id="portfolio-heading"
              >
                Works
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {portfolioItems.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;