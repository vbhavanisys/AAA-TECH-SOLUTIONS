import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building, MessageSquare, AlertCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Enterprise Software Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please provide a valid email.';
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief description of your inquiry.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="contact-page-view">
      {/* Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <span className="section-tag">Direct Inquiries & Consultation</span>
            <h1 className="contact-hero-title">
              Let's discuss your technical vision or corporate training roadmap.
            </h1>
            <p className="contact-hero-lead">
              Reach out to our engineering leads directly. We provide architectural assessments, technical proposals, and cohort onboarding guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info & Map placeholder */}
            <div className="contact-info-column">
              <div className="contact-details-card card">
                <h2 className="info-card-title">Corporate Headquarters</h2>
                <p className="info-card-sub">Direct channels for clients, partners, and learners.</p>

                <div className="info-items-list">
                  <div className="info-item">
                    <div className="info-icon-box">
                      <MapPin size={20} className="info-icon" />
                    </div>
                    <div>
                      <div className="info-label">Office Address</div>
                      <div className="info-value">{companyInfo.contact.address}</div>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">
                      <Mail size={20} className="info-icon" />
                    </div>
                    <div>
                      <div className="info-label">Inquiries & Proposals</div>
                      <a href={`mailto:${companyInfo.contact.email}`} className="info-link">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">
                      <Phone size={20} className="info-icon" />
                    </div>
                    <div>
                      <div className="info-label">Telephone</div>
                      <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="info-link">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">
                      <Clock size={20} className="info-icon" />
                    </div>
                    <div>
                      <div className="info-label">Operating Hours</div>
                      <div className="info-value">{companyInfo.contact.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="map-area-card card">
                <div className="map-card-header">
                  <Building size={18} className="map-header-icon" />
                  <span>Innovation District Campus</span>
                </div>
                <div className="map-mock-view">
                  <div className="map-pin-indicator">
                    <MapPin size={28} className="map-center-pin" />
                    <span className="map-pin-label">AAA Tech Solutions</span>
                  </div>
                  <div className="map-grid-lines" aria-hidden="true"></div>
                </div>
                <div className="map-card-footer">
                  <span>Visitor parking & technical laboratory access available.</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-column">
              <div className="contact-form-card card">
                {!submitted ? (
                  <>
                    <h2 className="form-card-title">Send a Message</h2>
                    <p className="form-card-sub">An engineering lead will respond within one business day.</p>

                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                      <div className="form-group">
                        <label htmlFor="contactName" className="form-label">
                          Full Name <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className={`form-input ${errors.name ? 'input-error' : ''}`}
                          required
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                      </div>

                      <div className="form-row-2">
                        <div className="form-group">
                          <label htmlFor="contactEmail" className="form-label">
                            Email Address <span className="req">*</span>
                          </label>
                          <input
                            type="email"
                            id="contactEmail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            required
                          />
                          {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactPhone" className="form-label">
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            id="contactPhone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inquiryType" className="form-label">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="form-input form-select"
                        >
                          <option value="Enterprise Software Development">Enterprise Software Development</option>
                          <option value="Cloud Infrastructure & DevOps Consulting">Cloud Infrastructure & DevOps</option>
                          <option value="Academy & Course Enrollment">Academy & Course Enrollment</option>
                          <option value="Corporate Training Workshops">Corporate Training Workshops</option>
                          <option value="General Technical Inquiry">General Technical Inquiry</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="contactMessage" className="form-label">
                          Project or Technical Details <span className="req">*</span>
                        </label>
                        <textarea
                          id="contactMessage"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your objectives, requirements, or timelines..."
                          className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                          required
                        ></textarea>
                        {errors.message && <span className="error-text">{errors.message}</span>}
                      </div>

                      <button type="submit" className="btn btn-primary btn-lg submit-contact-btn">
                        Submit Technical Inquiry
                        <Send size={16} aria-hidden="true" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="contact-submitted-state">
                    <div className="confirm-icon-wrapper">
                      <CheckCircle2 size={48} className="confirm-icon" />
                    </div>
                    <h2 className="confirm-heading">Inquiry Received</h2>
                    <p className="confirm-message">
                      Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.inquiryType}</strong> has been routed to our technical advisory team.
                    </p>
                    <p className="confirm-sub">
                      We will review your inquiry and follow up at <strong>{formData.email}</strong> within one business day.
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', inquiryType: 'Enterprise Software Development', message: '' });
                      }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
