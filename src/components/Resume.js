import React from 'react';

interface CareerItem {
  date: string;
  title: string;
  subtitle: string;
  type: 'experience' | 'education';
}

const Resume = () => {
  const careerItems: CareerItem[] = [
    {
      date: ' 2018 –  2021',
      title: 'Framer Designer & Developer',
      subtitle: 'Capillary Technologies',
      type: 'experience'
    },
    {
      date: ' 2022 –  2023',
      title: 'Full Stack Developer',
      subtitle: 'Procore Technologies',
      type: 'experience'
    },
    {
      date: '2014 - 2018',
      title: 'Bachelor Degree in Computer Engineering',
      subtitle: 'Gujarat Technological University – Ahmedabad, India',
      type: 'education'
    },
    {
      date: 'Expected May 2025',
      title: 'Master of Science in Computer Science',
      subtitle: 'Roosevelt University – Chicago, IL, USA',
      type: 'education'
    }
  ];

  const renderCareerItem = (item: CareerItem) => {
    const roleClass = item.type === 'experience' ? 'tz-resume1-career__role' : 'tz-resume1-career__degree';
    const companyClass = item.type === 'experience' ? 'tz-resume1-career__company' : 'tz-resume1-career__institution';
    
    return (
      <div className="tz-resume1-career__item tz-mb-lg-30 tz-mb-20" key={`${item.type}-${item.title}`}>
        <p className="tz-resume1-career__date tz-text-m">{item.date}</p>
        <h4 className={`${roleClass} tz-text-white-neutral-3`}>{item.title}</h4>
        <p className={`${companyClass} tz-text-l tz-text-white-neutral-2`}>{item.subtitle}</p>
      </div>
    );
  };

  return (
    <section id="resume" className="tz-resume1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top">
          <div className="tz-chip tz-text-s wow fadeInUp">
            <i className="ph ph-graduation-cap"></i>Resume
          </div>
          <div className="tz-section-title wow fadeInUp">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              My Education
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                & Experience
              </p>
            </div>
          </div>
        </div>

        <div className="tz-resume1-career">
          <div className="row g-4">
            <div className="col-md-6 wow fadeInLeft">
              <h3 className="tz-resume1-career__title tz-text-white-neutral-3">
                My Experience
              </h3>
              {careerItems
                .filter(item => item.type === 'experience')
                .map(renderCareerItem)}
            </div>
            <div className="col-md-6 wow fadeInRight">
              <h3 className="tz-resume1-career__title tz-text-white-neutral-3">
                My Education
              </h3>
              {careerItems
                .filter(item => item.type === 'education')
                .map(renderCareerItem)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;