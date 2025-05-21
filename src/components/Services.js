import React from 'react';

// Solution 1: Import as React components (recommended if using Create React App or Vite)
import { ReactComponent as BrandingIcon } from './assets/img/service/ser.svg';
import { ReactComponent as GraphicIcon } from './assets/img/service/ser2.svg';
import { ReactComponent as WebsiteIcon } from './assets/img/service/ser3.svg';
import { ReactComponent as WebDevIcon } from './assets/img/service/ser4.svg';

// Solution 2: Alternative import method (if Solution 1 doesn't work)
/*
import brandingIcon from './assets/img/service/ser.svg';
import graphicIcon from './assets/img/service/ser2.svg';
import websiteIcon from './assets/img/service/ser3.svg';
import webDevIcon from './assets/img/service/ser4.svg';
*/

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Branding Design",
      Icon: BrandingIcon, // Using React component
      // icon: brandingIcon, // Using if going with Solution 2
      items: [
        "Mobile & Web App",
        "Project Completed",
        "Brand strategy"
      ]
    },
    {
      id: 2,
      title: "Graphic Design",
      Icon: GraphicIcon,
      // icon: graphicIcon,
      items: [
        "Project Completed",
        "E-commerce functionality",
        "Mobile responsiveness"
      ]
    },
    {
      id: 3,
      title: "Website Design",
      Icon: WebsiteIcon,
      // icon: websiteIcon,
      items: [
        "Project Completed",
        "Mobile responsiveness",
        "E-commerce functionality"
      ]
    },
    {
      id: 4,
      title: "Web Development",
      Icon: WebDevIcon,
      // icon: webDevIcon,
      items: [
        "UI/UX Design",
        "Mobile & Web App",
        "Brand strategy"
      ]
    }
  ];

  return (
    <section id="services" className="tz-services1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top wow fadeInUp">
          <div className="tz-chip tz-text-s">
            <i className="ph ph-briefcase"></i>Services
          </div>
          <div className="tz-section-title">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              My Quality
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                Services
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6" key={service.id}>
              <div className="tz-services1-card wow fadeInUp">
                <div className="tz-services1-card__svg">
                  <div className="tz-services1-card__svg-shape">
                    {/* Solution 1: Using SVG as component */}
                    <service.Icon className="service-icon" />
                    
                    {/* Solution 2: Using img tag */}
                    {/* <img src={service.icon} alt={service.title} className="svg" /> */}
                    
                    {/* Solution 3: Fallback option */}
                    {/* <div dangerouslySetInnerHTML={{ __html: service.icon }} /> */}
                  </div>
                </div>
                <h4 className="tz-services1-card__title">
                  {service.title}
                </h4>
                <ul className="tz-services1-card__list tz-text-l">
                  {service.items.map((item, index) => (
                    <li className="tz-services1-card__item" key={index}>
                      <span className="tz-services1-card__icon">
                        <i className="ph ph-caret-double-right"></i>
                      </span>
                      <span className="tz-services1-card__text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add some debug styles to ensure SVGs are visible */}
    
    </section>
  );
};

export default Services;