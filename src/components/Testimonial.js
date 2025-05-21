import React, { useEffect, useRef, useState } from 'react';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: "Rachel Morgan",
      location: "New York, USA – October 2024",
      text: "Jigar revamped our company’s outdated website into a sleek, mobile-first platform. He was detail-oriented, communicative, and delivered before the deadline. Our bounce rate dropped by 25% within a month!"
    },
    {
      name: "Emily Davis",
      location: "Chicago, USA – January 2024",
      text: "Jigar understood our branding and user needs perfectly. His UI/UX design for our internal analytics dashboard made it visually clean and intuitive. We’ve had great feedback from our team."
    },
    {
      name: "Nikhil Sharma",
      location: "Bangalore, India – August 2021",
      text: "We hired Jigar for our dairy tracking mobile app, and his work on backend optimization and UI really helped us improve speed and efficiency. We saw a 30% performance boost. Super satisfied!"
    },
    {
      name: "Rajiv Mehta",
      location: "Ahmedabad, India – June 2022",
      text: "I consulted Jigar to optimize an education portal. His advice on tech stack migration and session handling solved long-standing issues. His clarity and approach made all the difference."
    },
    {
      name: "Priya Desai",
      location: "India – November 2024",
      text: "Jigar helped us integrate AWS Lambda and S3 for our SaaS product. He worked seamlessly with our remote team and delivered scalable architecture that lowered our hosting costs."
    },
    {
      name: "Marc Dupuis",
      location: "USA – April 2024",
      text: "Great experience working with Jigar. His full-stack knowledge (React + Spring Boot) helped us launch a customer portal in under 3 weeks. His responsiveness and clarity stood out."
    },
    {
      name: "Team Lead – Quality Technologies",
      location: "India – May 2021",
      text: "Jigar played a key role in our product optimization project. He showed great initiative and built scalable modules using Spring MVC and Angular. His testing practices improved code reliability significantly."
    },
    {
      name: "Project Manager – Enterprise Web Platform",
      location: "India – June 2023",
      text: "Jigar was instrumental in our microservice revamp project. His React and Java integration, combined with automated CI/CD, led to a 40% faster release cycle. Great team player and very reliable!"
    },
    {
      name: "Ankita Shah",
      location: "India - February 2023",
      text: "Jigar transformed our web presence into a modern, responsive design. Our team appreciated his clean code and agile approach. Our leads increased by 20% post-launch!"
    }
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    text: ''
  });

  useEffect(() => {
    // Initialize Swiper when component mounts
    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.tz-testimonial1__next',
        prevEl: '.tz-testimonial1__prev',
      },
    });

    // Clean up Swiper instance when component unmounts
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, [reviews]); // Add reviews to dependency array to reinitialize when reviews change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.location && newReview.text) {
      // Validate word count (approximately)
      const wordCount = newReview.text.trim().split(/\s+/).length;
      if (wordCount > 30) {
        alert('Please limit your review to 30 words');
        return;
      }

      setReviews([...reviews, newReview]);
      setNewReview({
        name: '',
        location: '',
        text: ''
      });
      setShowReviewForm(false);
    }
  };

  return (
    <section id="testimonial" className="tz-testimonial1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top">
          <div className="tz-chip tz-text-s wow fadeInUp">
            <i className="ph ph-chat-centered-text"></i>Testimonial
          </div>
          
          <div className="tz-section-title wow fadeInUp">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              Here's What
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                my Clients Say
              </p>
            </div>
          </div>
        </div>


        <div className="text-center mb-4 wow fadeInUp">
          <button 
            className="tz-button tz-button--effect tz-button--style2 tz-text-l wow fadeInUp" 
            onClick={() => setShowReviewForm(true)}
          >
            <span><i className="ph ph-plus-circle me-2"></i> Add Your Review</span>   
          </button>
        </div>
        <div className="swiper tz-testimonial1__slider wow fadeInUp" ref={swiperRef}>
          <div className="swiper-wrapper">
            {reviews.map((review, index) => (
              <div className="swiper-slide" key={index}>
                <div className="tz-testimonial1-card">
                  <div className="tz-testimonial1-card__header">
                  
                    <div className="tz-testimonial1-card__info">
                      <h4 className="tz-testimonial1-card__name">{review.name}</h4>
                      <p className="tz-testimonial1-card__meta tz-text-s m-0">{review.location}</p>
                    </div>
                  </div>
                  <p className="tz-testimonial1-card__text tz-text-l">
                    {review.text}
                  </p>
                  <div className="tz-testimonial1-card__footer">
                    <div className="tz-testimonial1-card__quote-icon">
                      <i className="ph-fill ph-quotes"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tz-testimonial1__toggle">
            <button className="tz-testimonial1__prev">
              <i className="ph ph-caret-left"></i>
            </button>
            <div className="swiper-pagination"></div>
            <button className="tz-testimonial1__next">
              <i className="ph ph-caret-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="tz-modal-overlay">
          <div className="tz-modal-content">
            <div className="tz-modal-header">
              <h3>Add Your Review</h3>
              <button 
                className="tz-modal-close" 
                onClick={() => setShowReviewForm(false)}
              >
                <i className="ph ph-x"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="tz-modal-body">
              <div className="tz-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="tz-form-group">
                <label htmlFor="location">Location & Date (e.g., "USA - June 2023")</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newReview.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="tz-form-group">
                <label htmlFor="text">Your Review (max 30 words)</label>
                <textarea
                  id="text"
                  name="text"
                  value={newReview.text}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
                <small className="tz-text-s">Word count: {newReview.text.trim() ? newReview.text.trim().split(/\s+/).length : 0}/30</small>
              </div>
              <div className="tz-modal-footer">
                <button type="button" className="tz-button tz-button--effect tz-text-l w-100" onClick={() => setShowReviewForm(false)}>
                  <span>   Cancel</span>
               
                </button>
                <button type="submit" className="tz-button tz-button--effect tz-button--style1 tz-text-l w-100">
                  <span>Submit Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add some CSS for the modal */}
      <style jsx>{`
        .tz-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.94);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .tz-modal-content {
          background-color:rgb(15, 15, 15);
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          color: white;
        }
        
        .tz-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .tz-modal-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .tz-form-group {
          margin-bottom: 1rem;
        }
        
        .tz-form-group label {
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .tz-form-group input,
        .tz-form-group textarea {
          width: 100%;
          padding: 0.5rem;
          background-color:rgb(82, 82, 82);
          border: 1px solid #3A3A4E;
          border-radius: 4px;
          color: white;
        }
        
        .tz-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;