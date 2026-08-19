import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import './LegalPages.css';

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page-view">
      <section className="legal-hero-section">
        <div className="container container-narrow">
          <span className="section-tag">Compliance & Governance</span>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-effective-date">Effective Date: January 1, 2026 &bull; Version 1.2</p>
        </div>
      </section>

      <section className="section legal-body-section">
        <div className="container container-narrow">
          <div className="legal-content-card card">
            <h2>1. Introduction</h2>
            <p>
              AAA Tech Solutions ("Company", "we", "our", or "us") is committed to safeguarding your personal and technical data. This Privacy Policy outlines how we collect, store, utilize, and protect information gathered through our official website, client portal, and educational services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We only collect data necessary to provide engineering services and academy instruction:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, professional email address, telephone number, and company name when submitting inquiries or enrollment applications.</li>
              <li><strong>Academic & Technical Background:</strong> Education history, programming experience, and resume submissions for training cohorts and employment applications.</li>
              <li><strong>Technical Metadata:</strong> Standard anonymized access logs, browser headers, and system telemetry used solely for security auditing and performance optimization.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>Information collected is utilized exclusively for:</p>
            <ul>
              <li>Fulfilling technical consultation requests and issuing service proposals.</li>
              <li>Processing academy admissions, batch scheduling, and issuing graduation credentials.</li>
              <li>Ensuring security compliance, safeguarding our network infrastructure against unauthorized access.</li>
            </ul>

            <h2>4. Data Confidentiality & Non-Disclosure</h2>
            <p>
              AAA Tech Solutions strictly enforces confidentiality for all client architectures, codebase assets, and student submissions. We do not sell, rent, or monetize personal data to third parties.
            </p>

            <h2>5. Contact Data Privacy Officer</h2>
            <p>
              For inquiries regarding personal data retention, deletion, or privacy compliance, contact our team at: <br />
              <a href="mailto:privacy@aaatechsolutions.com" className="legal-link">privacy@aaatechsolutions.com</a>
            </p>

            <div className="legal-back-row">
              <Link to="/" className="btn btn-outline btn-sm">
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
