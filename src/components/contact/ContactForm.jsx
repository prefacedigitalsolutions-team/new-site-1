import { useState } from "react";
import { sendMessage } from "./contactApi";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      success: false,
      error: null,
    });

    try {
      await sendMessage(formData);

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          success: false,
        }));
      }, 5000);
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.text || err.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="about-clean-container">
      <div className="liquid-blob blob-1"></div>
      <div className="liquid-blob blob-2"></div>

      <div className="contact-split-wrapper">

        <div className="contact-card-box">
          <div className="card-header-tabs">
            <span className="tab-title active">Contact Us</span>
            <span className="tab-title muted">Get in Touch</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hey@vino.costa"
                required
              />
            </div>

            <div className="input-group">
              <label>Phone No</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="3"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting
                ? "Sending Message..."
                : "Send Message"}
            </button>

            {status.success && (
              <p className="form-feedback success">
                Message sent successfully! We will get back to you soon.
              </p>
            )}

            {status.error && (
              <p className="form-feedback error">
                {status.error}
              </p>
            )}

          </form>

          <div className="social-icons-row">
            <div className="s-icon google">G</div>
            <div className="s-icon apple"></div>
            <div className="s-icon twitter">𝕏</div>
            <div className="s-icon discord">💬</div>
          </div>
        </div>

        <div className="contact-info-card">

          <div className="info-header">
            <h3>Let's Build Together</h3>

            <p>
              We are always open to discussing new projects,
              creative ideas, or opportunities to be part of
              your visions.
            </p>
          </div>

          <div className="info-details-list">

            <div className="info-item">
              <span className="info-icon">🏢</span>
              <div>
                <span className="info-label">Company Name</span>
                <h4 className="info-value">
                  VinoCosta Technologies Inc.
                </h4>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <span className="info-label">
                  Corporate Address
                </span>

                <p className="info-value">
                  Level 4, Cyber Boulevard, Tech Park,
                  Sector 62, New Delhi, India
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <span className="info-label">
                  Email Support
                </span>

                <p className="info-value">
                  support@vinocosta.com
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <span className="info-label">
                  Mobile Number
                </span>

                <p className="info-value">
                  +91 (11) 4567-8900 / +91 98765 43210
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <span className="info-label">
                  Working Hours
                </span>

                <p className="info-value">
                  Monday – Friday: 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

          </div>

          <div className="info-badge-footer">
            <span className="pulse-dot"></span>
            Secure & Certified Enterprise Support
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactForm;