import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, X, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import Reveal from '../../components/common/Reveal/Reveal';
import { careersData } from '../../data/careers';
import './CareersPage.css';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSent, setApplicationSent] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', notes: '' });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplicationSent(true);
  };

  return (
    <div className="careers-page-view">
      {/* Hero */}
      <section className="careers-hero-section">
        <div className="container">
          <Reveal className="careers-hero-content">
            <span className="section-tag section-tag-dark">🎓 Internship Opportunities</span>
            <h1 className="careers-hero-title">
              Gain real experience with our online internship programs.
            </h1>
            <p className="careers-hero-lead">
              Work on practical tasks and real project work across our technical courses, with dedicated support and certification on completion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="section section-muted careers-culture-section">
        <div className="container">
          <SectionHeader
            tag="⭐ Why Intern With Us"
            title="What Our Internship Program Offers"
            subtitle="A practical, supported way to apply what you're learning to real project work."
          />

          <Reveal className="grid-3 stagger-children">
            <div className="culture-card card">
              <h3 className="culture-title">Practical, Hands-On Work</h3>
              <p className="culture-desc">
                Real practical tasks and project work, not just theory — so you leave with something concrete to show.
              </p>
            </div>
            <div className="culture-card card">
              <h3 className="culture-title">Mentorship & Guidance</h3>
              <p className="culture-desc">
                Ongoing project completion support from our training team throughout your internship.
              </p>
            </div>
            <div className="culture-card card">
              <h3 className="culture-title">Certification on Completion</h3>
              <p className="culture-desc">
                Receive both an Internship Certificate and a Project Completion Certificate once you finish.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Internship Tracks List */}
      <section className="section careers-jobs-section">
        <div className="container">
          <SectionHeader
            tag="🚀 Internship Tracks"
            title="Available Internship Tracks"
            subtitle="Choose an internship track aligned with the technical course you're pursuing."
          />

          <Reveal className="jobs-list-container stagger-children">
            {careersData.map((job) => (
              <div key={job.id} className="job-card card">
                <div className="job-card-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta-row">
                      <span className="job-meta-pill"><Briefcase size={13} /> {job.department}</span>
                      <span className="job-meta-pill"><MapPin size={13} /> {job.location}</span>
                      <span className="job-meta-pill"><Clock size={13} /> {job.type} ({job.experience})</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => { setSelectedJob(job); setApplicationSent(false); }}
                  >
                    <span>Apply for Internship</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements-block">
                  <h4 className="req-heading">What You'll Need:</h4>
                  <ul className="req-list">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="req-item">
                        <CheckCircle2 size={14} className="req-check" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Application Drawer / Modal */}
      {selectedJob && (
        <div className="job-modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="job-modal-content card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-tag">{selectedJob.department}</span>
                <h3 className="modal-job-title">{selectedJob.title}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedJob(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {!applicationSent ? (
              <form onSubmit={handleApplySubmit} className="job-apply-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn / GitHub / Portfolio URL (optional)</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    value={applicant.portfolio}
                    onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Cover Note / Relevant Experience</label>
                  <textarea
                    rows="3"
                    placeholder="Briefly tell us about your background and why you're interested..."
                    value={applicant.notes}
                    onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-job-btn">
                  <span>Submit Application</span>
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            ) : (
              <div className="job-apply-success">
                <CheckCircle2 size={44} className="confirm-icon" />
                <h3>Application Received</h3>
                <p>Thank you for applying for the <strong>{selectedJob.title}</strong>. Our training team will review your application and reach out within 3 business days.</p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedJob(null)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
