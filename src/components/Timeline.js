// src/components/Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div className="tz-timeline">
      <div className="tz-timeline-left">
        <span className="tz-timeline-left__role1 tz-text-m tz-text-white-neutral-2">
          Front-end Developer
        </span>
        <div className="tz-timeline-left__line"></div>
        <span className="tz-timeline-left__year tz-text-m tz-text-secondary">2025</span>
        <div className="tz-timeline-left__line"></div>
        <span className="tz-timeline-left__role2 tz-text-m tz-text-white-neutral-2">
          Products Designer
        </span>
      </div>
      <div className="tz-timeline-right">
        <a className="tz-timeline-right__scroll tz-text-m tz-text-white-neutral-2" href="#">
          Scroll Down
        </a>
        <div className="tz-timeline-right__line"></div>
        <span className="tz-timeline-right__year tz-text-secondary">2025</span>
        <div className="tz-timeline-right__line"></div>
        <a className="tz-timeline-right__hire tz-text-m tz-text-white-neutral-2" href="#contact">
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Timeline;