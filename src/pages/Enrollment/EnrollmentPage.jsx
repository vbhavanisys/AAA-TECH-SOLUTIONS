import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Clock, User, Mail, Phone, GraduationCap, MessageSquare, AlertCircle } from 'lucide-react';
import { coursesData } from '../../data/courses';
import './EnrollmentPage.css';

export default function EnrollmentPage() {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get('course') || coursesData[0].id;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: initialCourse,
    qualification: 'Bachelor\'s Degree (Computer Science / Tech)',
    goals: '',
    agreeTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const paramCourse = searchParams.get('course');
    if (paramCourse) {
      setFormData(prev => ({ ...prev, courseId: paramCourse }));
    }
  }, [searchParams]);

  const selectedCourseObj = coursesData.find(c => c.id === formData.courseId) || coursesData[0];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Please provide a valid email address.';
    if (!formData.phone.trim()) errors.phone = 'Please provide a contact phone number.';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to the enrollment terms.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Generate local reference code for admissions tracking
    const generatedId = `AAA-ENR-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="enrollment-page-view">
      {/* Header */}
      <section className="enrollment-hero-section">
        <div className="container">
          <div className="enrollment-hero-content">
            <span className="section-tag">Cohort Application & Registration</span>
            <h1 className="enrollment-hero-title">
              {submitted ? 'Enrollment Application Received' : 'Apply for AAA Tech Solutions Academy'}
            </h1>
            <p className="enrollment-hero-lead">
              {submitted
                ? 'Thank you for applying. Our admissions team has logged your submission and will review your technical profile.'
                : 'Complete the application below to secure your seat in our upcoming engineering cohort.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section enrollment-form-section">
        <div className="container">
          {!submitted ? (
            <div className="enrollment-layout-grid">
              {/* Left Column: Form */}
              <div className="enrollment-form-container card">
                <h2 className="form-section-title">Candidate Details</h2>
                <p className="form-section-desc">Please provide accurate contact and educational details.</p>

                <form onSubmit={handleSubmit} className="enrollment-form" noValidate>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Legal Name <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User size={16} className="input-icon" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
                        required
                      />
                    </div>
                    {formErrors.fullName && <span className="error-text">{formErrors.fullName}</span>}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <div className="input-with-icon">
                        <Mail size={16} className="input-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@example.com"
                          className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="req">*</span>
                      </label>
                      <div className="input-with-icon">
                        <Phone size={16} className="input-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className={`form-input ${formErrors.phone ? 'input-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="form-group">
                    <label htmlFor="courseId" className="form-label">
                      Select Program Track <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <BookOpen size={16} className="input-icon" />
                      <select
                        id="courseId"
                        name="courseId"
                        value={formData.courseId}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        {coursesData.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.title} — {c.duration} ({c.level})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="form-group">
                    <label htmlFor="qualification" className="form-label">
                      Highest Level of Education / Experience
                    </label>
                    <div className="input-with-icon">
                      <GraduationCap size={16} className="input-icon" />
                      <select
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        <option value="Bachelor's Degree (Computer Science / Tech)">Bachelor's Degree (CS / STEM)</option>
                        <option value="Bachelor's Degree (Other Discipline)">Bachelor's Degree (Other)</option>
                        <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                        <option value="Associate Degree / Diploma">Associate Degree / Diploma</option>
                        <option value="Self-Taught / Industry Working Professional">Working Industry Professional</option>
                      </select>
                    </div>
                  </div>

                  {/* Learning Goals */}
                  <div className="form-group">
                    <label htmlFor="goals" className="form-label">
                      Learning Objectives or Project Background (Optional)
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows="3"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your career goals or current software background..."
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  {/* Terms */}
                  <div className="form-group-checkbox">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                      />
                      <span>I agree to the <Link to="/terms-and-conditions" target="_blank">Academy Enrollment Guidelines</Link> and <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>.</span>
                    </label>
                    {formErrors.agreeTerms && <span className="error-text">{formErrors.agreeTerms}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-enroll-btn">
                    Submit Enrollment Application
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </form>
              </div>

              {/* Right Column: Selected Course Summary */}
              <div className="enrollment-summary-sidebar">
                <div className="selected-summary-card card">
                  <span className="summary-tag">Selected Program Track</span>
                  <h3 className="summary-title">{selectedCourseObj.title}</h3>
                  <p className="summary-desc">{selectedCourseObj.shortDescription}</p>

                  <div className="summary-meta-list">
                    <div className="summary-meta-item">
                      <Clock size={15} className="summary-meta-icon" />
                      <span>Duration: <strong>{selectedCourseObj.duration}</strong></span>
                    </div>
                    <div className="summary-meta-item">
                      <CheckCircle2 size={15} className="summary-meta-icon" />
                      <span>Schedule: <strong>{selectedCourseObj.schedule}</strong></span>
                    </div>
                    <div className="summary-meta-item">
                      <ShieldCheck size={15} className="summary-meta-icon" />
                      <span>Tuition: <strong>{selectedCourseObj.fees}</strong></span>
                    </div>
                  </div>

                  <div className="summary-tags-row">
                    {selectedCourseObj.tags.map((t, idx) => (
                      <span key={idx} className="summary-tag-pill">{t}</span>
                    ))}
                  </div>

                  <div className="summary-note">
                    <AlertCircle size={15} className="summary-note-icon" />
                    <p>Applications are reviewed on a rolling basis. No payment is required until interview confirmation.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Confirmation State */
            <div className="enrollment-confirmation-container">
              <div className="confirmation-card card">
                <div className="confirmation-icon-box">
                  <CheckCircle2 size={48} className="confirm-icon" />
                </div>
                <span className="confirmation-tag">Application Submitted Successfully</span>
                <h2 className="confirm-title">Registration Acknowledgment</h2>
                <p className="confirm-desc">
                  Your application for <strong>{selectedCourseObj.title}</strong> has been registered with the AAA Tech Solutions Admissions Office.
                </p>

                <div className="confirmation-ref-box">
                  <span className="ref-label">Application Reference ID</span>
                  <span className="ref-code">{refId}</span>
                </div>

                <div className="confirm-details-grid">
                  <div className="confirm-detail-box">
                    <span className="detail-label">Candidate</span>
                    <span className="detail-value">{formData.fullName}</span>
                  </div>
                  <div className="confirm-detail-box">
                    <span className="detail-label">Notification Email</span>
                    <span className="detail-value">{formData.email}</span>
                  </div>
                  <div className="confirm-detail-box">
                    <span className="detail-label">Program Duration</span>
                    <span className="detail-value">{selectedCourseObj.duration}</span>
                  </div>
                  <div className="confirm-detail-box">
                    <span className="detail-label">Admissions Review</span>
                    <span className="detail-value">Within 1–2 Business Days</span>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <Link to="/" className="btn btn-primary">
                    Return to Home
                  </Link>
                  <Link to="/courses" className="btn btn-outline">
                    Explore Other Programs
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
