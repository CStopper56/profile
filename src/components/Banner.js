import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import company1 from './assets/img/banner/company_1.png';
import company2 from './assets/img/banner/company_2.png';
import company3 from './assets/img/banner/company_3.png';
import company4 from './assets/img/banner/company_4.png';
import company5 from './assets/img/banner/company_5.png';
import company6 from './assets/img/banner/company_6.png';
import company7 from './assets/img/banner/company_7.png';
import company8 from './assets/img/banner/company_8.png';


import { ReactComponent as ArrowImage } from './assets/img/banner/arrow.svg';
import roundImage from './assets/img/banner/round.png';

function Banner1({
  greeting = "HOWDY!",
  name = "Jigarkumar",
  title = "I'm a Full Stack ",
  highlight = "Developer",
  subtitle = "& Front-end Developer Based in Chicago, USA.",
  description = "I build responsive, scalable web applications with Java, React, Spring Boot, Node.js, and AWS — blending performance with design.",
  companies = [company1, company2, company3, company4, company5, company6, company7, company8],
}) {
  const swiperRef = useRef(null);

  return (
    <section id="home" className="tz-banner1 tz-pt-20 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top">
          <div className="tz-chip tz-text-s wow fadeInUp">
            <i className="ph ph-house"></i>Introduce
          </div>
        </div>

        <div className="tz-banner1__content">
          <p className="tz-banner1__subtitle tz-text-l tz-text-white-neutral-3 wow fadeInUp">
            {greeting}
            <span className="tz-text-primary"><i className="ph-fill ph-hand"></i></span>
            I'M {name.toUpperCase()}
          </p>

          <h1 className="tz-banner1__title tz-display-4 tz-text-white-neutral-3 wow fadeInUp">
            {title} <span className="tz-text-secondary">{highlight}</span> {subtitle}
          </h1>

          <p className="tz-banner1__desc tz-text-l tz-text-white-neutral-2 mt-3 wow fadeInUp">
            {description}
          </p>

          <div className="tz-banner1__actions wow fadeInUp">
            <a className="tz-button tz-button--effect tz-button--style1 tz-text-l" href="#contact">
              <span>Hire Me!</span>
            </a>
            <a className="tz-banner1__viewbtn tz-text-l tz-text-white text-decoration-underline" href="#portfolio">
              View My Works
            </a>
          </div>

          <ArrowImage className="tz-banner1__shape1" />

          <a className="tz-banner1__circle" href="#portfolio" aria-label="View portfolio">
            <img
              src={roundImage}
              alt="Portfolio thumbnail"
              className="tz-banner1__circle-img"
              loading="lazy" />
            <div className="tz-banner1__circle-thumb">
              <span className="tz-banner1__circle-icon">
                <i className="ph ph-arrow-down"></i>
              </span>
            </div>
          </a>

          <div className="tz-banner1__footer tz-mt-lg-60 tz-mt-30 overflow-hidden wow fadeInUp">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4} // Set specific number of slides to show
              loop={true}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              className="brand-carousel"
              breakpoints={{
                // Responsive breakpoints
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }}
            >
              {companies.map((company, index) => (
                <SwiperSlide key={`company-${index}`} className="d-flex align-items-center justify-content-center">
                  <img
                    src={company}
                    alt={`Company logo ${index + 1}`}
                    className="tz-banner1__footer-img img-fluid"
                    loading="lazy"
                    style={{ maxHeight: '40px', width: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

Banner1.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  companies: PropTypes.arrayOf(PropTypes.string),
};

export default Banner1;