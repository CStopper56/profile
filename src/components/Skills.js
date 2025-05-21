import React from 'react';
import PropTypes from 'prop-types';
// Import your images
import figmaIcon from './assets/img/skill/figma.png';
import xdIcon from './assets/img/skill/xd.png';
import sketchIcon from './assets/img/skill/sketch.png';
import reactIcon from './assets/img/skill/react.png';
import wordpressIcon from './assets/img/skill/wordpress.png';

const SkillCard = ({ title, percentage, imageSrc, delay }) => {
  return (
    <div className="tz-skills1-card wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="tz-skills1-card__content">
        <h5 className="tz-skills1-card__title tz-text-white-neutral-3">
          {title}
        </h5>
        <h3 className="tz-skills1-card__percentage d-flex align-items-center justify-content-center">
          <span className="tz-cn">{percentage}</span>%
        </h3>
      </div>
      <div className="tz-skills1-card__logo">
        <img 
          src={imageSrc} 
          alt={`${title} icon`} 
          loading="lazy"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { id: 1, title: 'Figma', percentage: 95, imageSrc: figmaIcon, delay: 1 },
    { id: 2, title: 'Adobe XD', percentage: 92, imageSrc: xdIcon, delay: 2 },
    { id: 3, title: 'Sketch', percentage: 80, imageSrc: sketchIcon, delay: 1 },
    { id: 4, title: 'React', percentage: 97, imageSrc: reactIcon, delay: 2 },
    { id: 5, title: 'Wordpress', percentage: 98, imageSrc: wordpressIcon, delay: 3 }
  ];
  return (
    <section id="skills" className="tz-skills1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top wow fadeInUp">
          <div className="tz-chip tz-text-s">
            <i className="ph ph-pen-nib-straight"></i>Skills
          </div>
          <div className="tz-section-title">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              My Skills
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                & Tools
              </p>
            </div>
          </div>
        </div>

        <div className="tz-skills1__wrapper">
          {skillsData.map(skill => (
            <SkillCard 
              key={skill.id}
              title={skill.title}
              percentage={skill.percentage}
              imageSrc={skill.imageSrc}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;