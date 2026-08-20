import React, { useState } from "react";
import { FaEnvelope, FaUniversity, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");

    const formData = new FormData(event.target);
    
    // PASTE YOUR WEB3FORMS ACCESS KEY HERE
    formData.append("access_key", "b30a8bdf-2a61-4d65-b2d3-cdee154b101d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setResult("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-main-card">
        
        {/* Header Section */}
        <div className="contact-header">
          <span className="contact-pill-badge">
            <FaEnvelope /> Get In Touch
          </span>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Any questions or remarks? Just write us a message and our agricultural advisory team will get back to you!
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message or inquiry here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <FaPaperPlane /> {isSubmitting ? "Sending..." : "Submit Message"}
          </button>

          {result && <p className="form-status">{result}</p>}
        </form>

        {/* Contact Information Cards */}
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon-wrapper">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>creativecruisedyd@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <FaUniversity />
            </div>
            <h3>Department</h3>
            <p>Design Your Degree</p>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <h3>Visit Us</h3>
            <p>IOT Zakura<br />University of Kashmir</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;