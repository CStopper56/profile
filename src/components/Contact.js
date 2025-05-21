import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqapykda"); // Replace with your Formspree form ID

  return (
    <section id="contact" className="tz-contact1 tz-pt-lg-70 tz-pt-40 tz-pb-lg-70 tz-pb-40">
      <div className="tz-custom-container">
        <div className="tz-section-top">
          <div className="tz-chip tz-text-s wow fadeInUp">
            <i className="ph ph-paper-plane"></i>Contact
          </div>
          <div className="tz-section-title wow fadeInUp">
            <h4 className="tz-section-title__pt1 tz-display-4 tz-text-white-neutral-3">
              Get in
            </h4>
            <div className="tz-section-title__highlight tz-display-4">
              <span className="tz-section-title__line"></span>
              <p className="tz-section-title__pt2 tz-text-secondary">
                Touch
              </p>
            </div>
          </div>
        </div>

        <div className="tz-contact1-form">
          {state.succeeded ? (
            <div className="tz-success-message wow fadeInUp">
              <h3 className="tz-text-white-neutral-3">Thank you!</h3>
              <p className="tz-text-l">Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="row g-4" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Your email"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="number">Phone Number *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="number" 
                    name="phone"
                    placeholder="Your phone number"
                    required
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="budget">Your Budget *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="budget"
                    name="budget"
                    placeholder="Budget for your project"
                    required
                  />
                  <ValidationError 
                    prefix="Budget" 
                    field="budget"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    className="form-select" 
                    name="subject"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group wow fadeInUp">
                  <label className="tz-text-l" htmlFor="message">Message *</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-12">
                <button 
                  type="submit"
                  className="tz-button tz-button--effect tz-button--style2 tz-text-l wow fadeInUp"
                  disabled={state.submitting}
                >
                  <span>{state.submitting ? 'Sending...' : 'Submit Now'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;