import React from 'react';

const About = () => {
  // Contact information data
  const contactInfo = [
    { label: 'Phone', value: '(224) 387-6552' },
    { label: 'Email', value: 'jigarpatel5858@gmail.com' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Skype', value: 'Hindi, English' }
  ];

  // Statistics data
  const stats = [
    { number: '45', description: ['Completed', 'Projects'] },
    { number: '35', suffix: '', description: ['Clients', 'Worldwide'] },
    { number: '4', suffix: '+', description: ['Years', 'Experiences'] }
  ];

  return (
    <section 
      id="about" 
      className="tz-about1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40"
      aria-labelledby="about-section-title"
    >
      <div className="tz-custom-container">
        {/* Section Header */}
        <header className="tz-section-top wow fadeInUp">
          <div className="tz-chip tz-text-s" aria-hidden="true">
            <i className="ph ph-user" aria-hidden="true"></i>About Me
          </div>
          <div className="tz-section-title">
            <h4 
              id="about-section-title"
              className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3"
            >
              About
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line" aria-hidden="true"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                Me
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <article>
          <h3 className="tz-about1__title tz-text-white-neutral-3 wow fadeInUp">
          Full Stack Developer with over  {' '}
            <span className="tz-text-secondary">4+ years </span> 
            of experience in designing, developing, and optimizing scalable web applications.
          </h3>
          <p className="tz-about1__subtitle tz-text-l tz-text-white-neutral-2 wow fadeInUp">
          Expert in Java 11, Spring Boot, React, Node.js, and AWS, with a strong track record in reducing latency and improving system performance.
          Proficient in both frontend and backend, as well as CI/CD, cloud orchestration (Azure, AWS), and automated testing.
          </p>
        </article>

        {/* Contact Information */}
        <div 
          className="tz-about1-contact tz-text-l tz-text-white-neutral-3 tz-pt-lg-60 tz-pt-30 tz-pb-lg-60 tz-pb-30 wow fadeInUp"
          aria-label="Contact information"
        >
          {contactInfo.map((item, index) => (
            <div key={index} className="tz-about1-contact__item">
              <span className="tz-about1-contact__label">{item.label}</span>
              <span className="tz-about1-contact__separator" aria-hidden="true">:</span>
              <span className="tz-about1-contact__value">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="tz-about1-counter wow fadeInUp" aria-label="Achievements">
          {stats.map((stat, index) => (
            <div key={index} className="tz-about1-counter__item">
              <span className="tz-about1-counter__number tz-display-4 d-flex align-items-center justify-content-center">
                <span className="tz-cn">{stat.number}</span>
                {stat.suffix && stat.suffix}
              </span>
              <p className="tz-about1-counter__desc">
                <span>{stat.description[0]}</span><br />
                <span>{stat.description[1]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);