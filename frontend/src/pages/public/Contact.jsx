import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-container">
            <div className="contact-header">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                Have questions about our School Event Planner? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              {/* Contact Information */}
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h2 className="contact-info-title">Get in Touch</h2>
                  <p className="contact-info-description">
                    Reach out to us using the information below or fill out the form 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="contact-info-items">
                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-info-item-title">Email</h3>
                      <p className="contact-info-item-text">support@schooleventplanner.com</p>
                      <p className="contact-info-item-subtext">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-info-item-title">Phone</h3>
                      <p className="contact-info-item-text">+1 (555) 123-4567</p>
                      <p className="contact-info-item-subtext">Monday-Friday, 9am-6pm EST</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-info-item-title">Address</h3>
                      <p className="contact-info-item-text">
                        123 Education Street<br />
                        Learning City, LC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="contact-faq">
                  <h3 className="contact-faq-title">Frequently Asked Questions</h3>
                  <div className="contact-faq-items">
                    <div className="contact-faq-item">
                      <Link to="/faq" className="contact-faq-link">
                        How do I create an event?
                      </Link>
                    </div>
                    <div className="contact-faq-item">
                      <Link to="/faq" className="contact-faq-link">
                        Can I invite parents to events?
                      </Link>
                    </div>
                    <div className="contact-faq-item">
                      <Link to="/faq" className="contact-faq-link">
                        Is there a mobile app available?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send us a Message</h2>
                  <p className="contact-form-description">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <div className="form-error">{formErrors.name}</div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${formErrors.email ? 'form-input-error' : ''}`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <div className="form-error">{formErrors.email}</div>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${formErrors.subject ? 'form-input-error' : ''}`}
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                    />
                    {formErrors.subject && (
                      <div className="form-error">{formErrors.subject}</div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input ${formErrors.message ? 'form-input-error' : ''}`}
                      placeholder="Tell us more about your inquiry..."
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <div className="form-error">{formErrors.message}</div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-button ${isSubmitting ? 'submit-button-loading' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {/* Privacy Note */}
                  <div className="privacy-note">
                    <p>
                      By submitting this form, you agree to our{' '}
                      <Link to="/privacy" className="privacy-link">
                        Privacy Policy
                      </Link>
                      . We'll never share your information with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;