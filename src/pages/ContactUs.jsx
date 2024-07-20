import React from 'react';
import "../styles/ContactUs.css";

const ContactUs = () => (
  <div className="shop-container">
    <h1 className="shop-heading">Contact Us</h1>
    <p className="shop-description">
      We would love to hear from you! Reach out to us for any inquiries or support.
    </p>
    <form className="contact-form">
      <label htmlFor="name" className="form-label">Name:</label>
      <input type="text" id="name" name="name" className="form-input" />

      <label htmlFor="email" className="form-label">Email:</label>
      <input type="email" id="email" name="email" className="form-input" />

      <label htmlFor="message" className="form-label">Message:</label>
      <textarea id="message" name="message" className="form-textarea"></textarea>

      <button type="submit" className="form-button">Send Message</button>
    </form>
  </div>
);

export default ContactUs;
