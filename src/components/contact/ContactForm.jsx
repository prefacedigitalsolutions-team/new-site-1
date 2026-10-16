import { useState } from "react";
import { sendMessage } from "./contactApi";
import "./ContactForm.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      setFormData(initialFormData);

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error:
          err?.text ||
          err?.message ||
          "Unable to send your message. Please try again.",
      });
    }
  };

  return (
    <section className="pro-contact">
      <div className="pro-contact-container">

        {/* Header */}
        <header className="pro-contact-header">
          <div className="pro-contact-eyebrow">
            <span />
            CONTACT OUR TEAM
          </div>

          <h1>
            Let's start a <span>conversation.</span>
          </h1>

          <p>
            Have a corporate gifting requirement or a new idea?
            Tell us what you have in mind, and let's create
            something meaningful together.
          </p>
        </header>

        {/* Main Content */}
        <div className="pro-contact-grid">

          {/* Form */}
          <div className="pro-form-panel">
            <div className="pro-form-heading">
              <div>
                <span className="pro-section-label">
                  SEND AN ENQUIRY
                </span>

                <h2>How can we help you?</h2>

                <p>
                  Share your details and our team will be in touch.
                </p>
              </div>

              <div className="pro-heading-symbol" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6.5h16v11H4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m5 7.5 7 5.5 7-5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="pro-contact-form">
              <div className="pro-field-row">
                <div className="pro-field">
                  <label htmlFor="pro-name">
                    Full name <span>*</span>
                  </label>

                  <input
                    id="pro-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    maxLength={100}
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="pro-field">
                  <label htmlFor="pro-email">
                    Business email <span>*</span>
                  </label>

                  <input
                    id="pro-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    maxLength={254}
                    required
                    disabled={status.submitting}
                  />
                </div>
              </div>

              <div className="pro-field">
                <label htmlFor="pro-phone">
                  Phone number <span>*</span>
                </label>

                <input
                  id="pro-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  maxLength={20}
                  required
                  disabled={status.submitting}
                />
              </div>

              <div className="pro-field">
                <label htmlFor="pro-message">
                  Your message <span>*</span>
                </label>

                <textarea
                  id="pro-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  maxLength={3000}
                  required
                  disabled={status.submitting}
                />

                <div className="pro-field-bottom">
                  <span>
                    Please share a few details about your enquiry.
                  </span>

                  <span>{formData.message.length}/3000</span>
                </div>
              </div>

              {status.success && (
                <div className="pro-alert pro-alert-success" role="status">
                  <span className="pro-alert-icon">✓</span>

                  <div>
                    <strong>Thank you for your enquiry.</strong>
                    <p>
                      Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="pro-alert pro-alert-error" role="alert">
                  <span className="pro-alert-icon">!</span>

                  <div>
                    <strong>Message could not be sent.</strong>
                    <p>{status.error}</p>
                  </div>
                </div>
              )}

              <button
                className="pro-submit-button"
                type="submit"
                disabled={status.submitting}
              >
                {status.submitting
                  ? "Sending enquiry..."
                  : "Submit enquiry"}

                {!status.submitting && (
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {status.submitting && (
                  <span className="pro-spinner" />
                )}
              </button>

              <p className="pro-form-note">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <aside className="pro-info-panel">
            <div className="pro-info-content">
              <span className="pro-section-label">
                Corporate Gifts Branding
              </span>

              <h2>
                Thoughtful gifts.
                <br />
                Meaningful connections.
              </h2>

              <p className="pro-info-description">
                We help businesses strengthen relationships through
                carefully curated cCorporate Gifts Branding.
                Let's make every gesture count.
              </p>

              <div className="pro-gold-line" />

              <div className="pro-info-list">
                <a
                  href="mailto:corporategiftsbranding@gmail.com"
                  className="pro-info-item"
                >
                  <span className="pro-info-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>

                  <span className="pro-info-text">
                    <span className="pro-info-label">
                      EMAIL ADDRESS
                    </span>

                    <span className="pro-info-value">
                      corporategiftsbranding@gmail.com
                    </span>
                  </span>

                  <span className="pro-info-arrow">↗</span>
                </a>

                <a
                  href="tel:+917827797247"
                  className="pro-info-item"
                >
                  <span className="pro-info-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="pro-info-text">
                    <span className="pro-info-label">
                      PHONE NUMBER
                    </span>

                    <span className="pro-info-value">
                      +91 78277 97247
                    </span>
                  </span>

                  <span className="pro-info-arrow">↗</span>
                </a>

                <div className="pro-info-item pro-location-item">
                  <span className="pro-info-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>

                  <span className="pro-info-text">
                    <span className="pro-info-label">
                      OFFICE LOCATION
                    </span>

                    <span className="pro-info-value">
                      Dwarka, New Delhi
                      <br />
                      Delhi – 110075, India
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pro-info-footer">
              <span className="pro-footer-rule" />

              <p>
                Built on trust. <span>Driven by relationships.</span>
              </p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="pro-contact-footer">
          <span>Corporate Gifts Branding</span>
          <span>Professional service. Personal attention.</span>
        </footer>
      </div>
    </section>
  );
}

export default ContactForm;