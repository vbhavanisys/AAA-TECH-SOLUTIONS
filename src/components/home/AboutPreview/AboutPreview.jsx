import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, GraduationCap, Target, Shield, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section className="section about-preview-section" aria-label="About AAA Tech Solutions">
      <div className="container">
        <div className="about-preview-grid">
          {/* Left Column: Narrative */}
          <div className="about-preview-content">
            <SectionHeader
              tag="🏢 About AAA Tech Solutions"
              title="Building dependable software and cultivating modern engineering talent."
              align="left"
              className="about-preview-header"
            />

            <p className="about-preview-lead">
              AAA Tech Solutions operates at the intersection of production software delivery and industry-aligned technical education.
            </p>

            <p className="about-preview-text">
              We partner with organizations to design, develop, and maintain high-impact digital systems. Simultaneously, we bridge the industry skills gap through immersive programs led by working practitioners who teach real-world architectures, code quality, and engineering workflows.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>100% Online, Flexible & Mentor-Guided Learning</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>MSME & Govt. Registered Enterprise Standards</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} className="highlight-check" />
                <span>Proven Full-Stack & Cloud Production Delivery</span>
              </div>
            </div>

            <div className="about-cta-wrapper">
              <Link to="/about" className="btn btn-secondary btn-lg">
                <span>Learn More About Us</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Operational Pillars */}
          <div className="about-pillars-grid">
            <div className="pillar-card card">
              <div className="pillar-icon-box icon-tech">
                <Code size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Software Engineering</h3>
              <p className="pillar-desc">
                Architecting scalable web applications, robust backends, and cloud infrastructure with meticulous attention to performance and security.
              </p>
            </div>

            <div className="pillar-card card">
              <div className="pillar-icon-box icon-academy">
                <GraduationCap size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Technical Education</h3>
              <p className="pillar-desc">
                Practical, cohort-based curriculum designed around modern industry tooling, collaborative version control, and real codebase contributions.
              </p>
            </div>

            <div className="pillar-card card">
              <div className="pillar-icon-box icon-exec">
                <Target size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Pragmatic Execution</h3>
              <p className="pillar-desc">
                Selecting the right technologies for your specific business requirements rather than adopting unnecessary complexity.
              </p>
            </div>

            <div className="pillar-card card">
              <div className="pillar-icon-box icon-shield">
                <Shield size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Standards & Quality</h3>
              <p className="pillar-desc">
                Adhering to strict code standards, automated testing, clear documentation handoffs, and sustainable architectural practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
