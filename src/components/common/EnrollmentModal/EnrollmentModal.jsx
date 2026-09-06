import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, MessageSquare, Loader2, ArrowRight } from 'lucide-react';
import { useEnrollmentModal } from '../../../context/EnrollmentContext';
import { coursesData } from '../../../data/courses';
import { companyInfo } from '../../../data/company';
import './EnrollmentModal.css';

const planOptions = [
  { value: "live-cohort", label: "Live Cohort (Lectures + Labs + Mentorship)" },
  { value: "self-paced", label: "Self-Paced Track + Project Code Reviews" },
  { value: "1-on-1-mentorship", label: "Fast-Track 1-on-1 Mentorship" },
  { value: "weekend-batch", label: "Weekend Executive Batch" }
];

export default function EnrollmentModal() {
  const { isEnrollmentOpen, selectedCourseId, closeEnrollmentModal } = useEnrollmentModal();
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    courseId: '',
    plan: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (isEnrollmentOpen) {
      setFormData(prev => ({
      ...prev,
        courseId: selectedCourseId || ''
      }));
      setFormErrors({});
      setSubmitted(false);
      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
      }, 100);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isEnrollmentOpen, selectedCourseId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isEnrollmentOpen &&!isSubmitting) {
        closeEnrollmentModal();
      }
    };
    if (isEnrollmentOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnrollmentOpen, isSubmitting, closeEnrollmentModal]);

  if (!isEnrollmentOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your mobile number.';
    } else if (cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.courseId) {
      errors.courseId = 'Please select the course you are interested in.';
    }
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
      // FIXED DA BHAVANI - BACKEND KU CORRECT NAME ANUPPROM DA
      const response = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.courseId,
          plan: formData.plan,
          message: formData.message
        })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Failed to enroll');
      }
      setRefId(result.refId || `AAA-ENR-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('aaa_enrollments') || '[]');
        existing.push({
          refId: result.refId,
        ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('aaa_enrollments', JSON.stringify(existing));
      } catch (err) {
        console.warn(err);
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Enrollment failed: ' + error.message + '. Check backend running on port 5000!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget &&!isSubmitting) {
      closeEnrollmentModal();
    }
  };

  const selectedCourseName = coursesData.find(c => c.id === formData.courseId)?.title || 'General Course Track';
  const waNumber = companyInfo.contact.whatsapp || '917358533721';
  const waMessage = encodeURIComponent(
    `🎓 *New Enrollment Enquiry — AAA Tech Solutions*\n\n` +
    `👤 *Name:* ${formData.fullName.trim() || 'Prospective Student'}\n` +
    `📱 *Mobile:* ${formData.phone.trim() || 'Not provided'}\n` +
    `✉️ *Email:* ${formData.email.trim() || 'Not provided'}\n` +
    `📚 *Course:* ${selectedCourseName}\n` +
    `📋 *Preferred Plan:* ${formData.plan || 'Standard Cohort'}\n` +
    `💬 *Notes:* ${formData.message.trim() || 'Interested in syllabus, fees, and next batch schedule.'}`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div
      className="enrollment-modal-backdrop"
      onClick={handleBackdropClick}
      aria-hidden={!isEnrollmentOpen}
    >
      <div
        className="enrollment-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-modal-title"
        ref={modalRef}
      >
        <div className="enrollment-modal-header">
          <div className="modal-title-wrap">
            <h2 id="enrollment-modal-title" className="enrollment-modal-title">
              <span className="modal-title-icon">🎓</span>
              <span>Enroll Now</span>
            </h2>
            <p className="enrollment-modal-subtitle">
              Apply for cohort learning with direct engineer mentorship.
            </p>
          </div>
          <button
            type="button"
            className="enrollment-modal-close-btn"
            onClick={closeEnrollmentModal}
            aria-label="Close enrollment dialog"
            disabled={isSubmitting}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="enrollment-modal-body">
          {submitted? (
            <div className="enrollment-success-view">
              <div className="success-icon-badge">
                <CheckCircle2 size={48} className="success-check" />
              </div>
              <h3 className="success-heading">Enrollment Application Received!</h3>
              <p className="success-message">
                Thank you for applying, <strong>{formData.fullName}</strong>. Our admissions and engineering team will review your profile and reach out within 24 hours.
              </p>
              <div className="enrollment-ref-card">
                <span className="ref-label">Application Reference ID</span>
                <span className="ref-number">{refId}</span>
              </div>
              <div className="success-actions-row">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-lg modal-wa-btn"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>Connect with Us on WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-lg modal-close-action-btn"
                  onClick={closeEnrollmentModal}
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enrollment-modal-form" noValidate>
              <div className={`modal-form-group ${formErrors.fullName? 'has-error' : ''}`}>
                <label htmlFor="modal-full-name" className="modal-form-label">
                  Full Name <span className="req-asterisk">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="modal-full-name"
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="modal-form-input"
                  disabled={isSubmitting}
                  autoComplete="name"
                />
                {formErrors.fullName && (
                  <span className="modal-field-error" role="alert">{formErrors.fullName}</span>
                )}
              </div>

              <div className={`modal-form-group ${formErrors.phone? 'has-error' : ''}`}>
                <label htmlFor="modal-phone" className="modal-form-label">
                  Mobile Number <span className="req-asterisk">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="modal-form-input"
                  disabled={isSubmitting}
                  autoComplete="tel"
                />
                {formErrors.phone && (
                  <span className="modal-field-error" role="alert">{formErrors.phone}</span>
                )}
              </div>

              <div className={`modal-form-group ${formErrors.email? 'has-error' : ''}`}>
                <label htmlFor="modal-email" className="modal-form-label">
                  Email Address <span className="req-asterisk">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="modal-form-input"
                  disabled={isSubmitting}
                  autoComplete="email"
                />
                {formErrors.email && (
                  <span className="modal-field-error" role="alert">{formErrors.email}</span>
                )}
              </div>

              <div className={`modal-form-group ${formErrors.courseId? 'has-error' : ''}`}>
                <label htmlFor="modal-course" className="modal-form-label">
                  Course Interested In <span className="req-asterisk">*</span>
                </label>
                <select
                  id="modal-course"
                  name="courseId"
                  value={formData.courseId}
                  onChange={handleInputChange}
                  className="modal-form-select"
                  disabled={isSubmitting}
                >
                  <option value="">-- Select Course --</option>
                  {coursesData.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.duration})
                    </option>
                  ))}
                </select>
                {formErrors.courseId && (
                  <span className="modal-field-error" role="alert">{formErrors.courseId}</span>
                )}
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-plan" className="modal-form-label">
                  Preferred Plan
                </label>
                <select
                  id="modal-plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="modal-form-select"
                  disabled={isSubmitting}
                >
                  <option value="">-- Select Plan --</option>
                  {planOptions.map((opt) => (
                    <option key={opt.value} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-message" className="modal-form-label">
                  Message / Enquiry <span className="optional-tag">(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows="3"
                  placeholder="Any questions or specific requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="modal-form-input modal-form-textarea"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg modal-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting? (
                  <>
                    <Loader2 size={18} className="spinner-icon" aria-hidden="true" />
                    <span>Submitting Enrollment...</span>
                  </>
                ) : (
                  <>
                    <span>✅ Submit Enrollment</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa btn-lg modal-wa-btn"
              >
                <MessageSquare size={17} aria-hidden="true" />
                <span>💬 Or Enquire Directly on WhatsApp</span>
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}