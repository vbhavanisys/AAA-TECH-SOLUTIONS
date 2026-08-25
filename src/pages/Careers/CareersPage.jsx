import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, X, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
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
          <div className="careers-hero-content">
            <span className="section-tag section-tag-dark">💼 Engineering Careers</span>
            <h1 className="careers-hero-title">
              Work with craftsmen who care about code quality, architecture, and education.
            </h1>
            <p className="careers-hero-lead">
              Join an engineering team that solves difficult technical problems for enterprise clients while training the next generation of software professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Values & Culture Pillars */}
      <section className="section section-muted careers-culture-section">
        <div className="container">
          <SectionHeader
            tag="⭐ Why Join Our Team"
            title="Our Engineering Environment"
            subtitle="We foster an environment centered around high standards, continuous learning, and direct impact."
          />

          <div className="grid-3">
            <div className="culture-card card">
              <h3 className="culture-title">Engineering Autonomy</h3>
              <p className="culture-desc">
                We value disciplined engineering judgment over bureaucratic process. You have direct input on architectural decisions and tooling.
              </p>
            </div>
            <div className="culture-card card">
              <h3 className="culture-title">Dual Impact: Build & Teach</h3>
              <p className="culture-desc">
                Engage in both production client deliverables and academy mentorship, strengthening your technical leadership and industry profile.
              </p>
            </div>
            <div className="culture-card card">
              <h3 className="culture-title">Sustainable Cadence</h3>
              <p className="culture-desc">
                We believe great software is built through steady, predictable engineering sprints rather than frantic overtime and burnout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section careers-jobs-section">
        <div className="container">
          <SectionHeader
            tag="🚀 Open Positions"
            title="Current Engineering & Academy Roles"
            subtitle="Explore our active openings. If your experience matches our standard, we would love to connect."
          />

          <div className="jobs-list-container">
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
                    <span>Apply for Position</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements-block">
                  <h4 className="req-heading">Key Requirements:</h4>
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
          </div>
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
                  <label className="form-label">LinkedIn / GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    required
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
                    placeholder="Briefly highlight your engineering background..."
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
                <p>Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our engineering recruitment team will review your profile and reach out within 3 business days.</p>
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
