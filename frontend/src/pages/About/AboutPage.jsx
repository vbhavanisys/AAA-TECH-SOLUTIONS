import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, Users, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-view">
      {/* About Page Hero */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag section-tag-dark">🏛️ About AAA Tech Solutions</span>
            <h1 className="about-hero-title">
              Engineering reliable software systems and cultivating industry-ready engineers.
            </h1>
            <p className="about-hero-lead">
              We bridge the space between enterprise software delivery and career-defining technical learning. Founded on principles of engineering clarity, maintainability, and honest craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section about-mission-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card card">
              <div className="mv-icon-wrapper">
                <Target size={26} className="mv-icon" aria-hidden="true" />
              </div>
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-desc">
                To build dependable, scalable software solutions that solve tangible business challenges, while empowering aspiring and experienced engineers through rigorous, real-world industry training.
              </p>
            </div>

            <div className="mv-card card">
              <div className="mv-icon-wrapper">
                <Compass size={26} className="mv-icon" aria-hidden="true" />
              </div>
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-desc">
                To be the most trusted technology engineering and talent development partner, recognized for technical integrity, transparent execution, and sustained client impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section about-values-section section-muted">
        <div className="container">
          <SectionHeader
            tag="⭐ Guiding Principles"
            title="Our Core Operating Values"
            subtitle="These values govern how we write code, structure client engagements, and mentor learners."
          />

          <div className="values-grid">
            <div className="value-card card">
              <div className="value-number">01</div>
              <h3 className="value-title">Engineering Rigor</h3>
              <p className="value-desc">
                We prioritize solid architecture, type safety, test coverage, and maintainability over temporary quick-fixes or hype-driven technology choices.
              </p>
            </div>

            <div className="value-card card">
              <div className="value-number">02</div>
              <h3 className="value-title">Transparent Partnership</h3>
              <p className="value-desc">
                Clear communication, predictable sprint cycles, and comprehensive code handoffs ensure our clients and students have full visibility into our process.
              </p>
            </div>

            <div className="value-card card">
              <div className="value-number">03</div>
              <h3 className="value-title">Practical Outcomes</h3>
              <p className="value-desc">
                Every project and course curriculum is benchmarked against real business utility and production standards, never theoretical toy exercises.
              </p>
            </div>

            <div className="value-card card">
              <div className="value-number">04</div>
              <h3 className="value-title">Continuous Mentorship</h3>
              <p className="value-desc">
                We believe in continuous skill advancement. Our engineering leads actively mentor our teams and cohorts to maintain high technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Discipline & Standards */}
      <section className="section about-standards-section">
        <div className="container">
          <div className="standards-layout">
            <div className="standards-info">
              <SectionHeader
                tag="🛡️ Technical Standards"
                title="How We Maintain Engineering Consistency"
                align="left"
              />
              <p className="standards-text">
                Whether deploying cloud infrastructure or teaching frontend architecture, we enforce verified engineering benchmarks across every deliverable.
              </p>
              <ul className="standards-checklist">
                <li className="standards-item">
                  <CheckCircle2 size={18} className="standards-check" />
                  <span><strong>Modular Architecture:</strong> Decoupled layers for maintainability and seamless team collaboration.</span>
                </li>
                <li className="standards-item">
                  <CheckCircle2 size={18} className="standards-check" />
                  <span><strong>Security by Design:</strong> Adherence to OWASP standards, role-based access control, and encrypted data layers.</span>
                </li>
                <li className="standards-item">
                  <CheckCircle2 size={18} className="standards-check" />
                  <span><strong>Accessible & Responsive UI:</strong> WCAG 2.1 compliant design systems engineered for all device form factors.</span>
                </li>
                <li className="standards-item">
                  <CheckCircle2 size={18} className="standards-check" />
                  <span><strong>Automated Testing & CI/CD:</strong> Consistent integration pipelines ensuring zero regressions in production.</span>
                </li>
              </ul>
            </div>

            <div className="standards-callout-card card">
              <ShieldCheck size={40} className="callout-icon" />
              <h3 className="callout-title">Commitment to Quality</h3>
              <p className="callout-desc">
                We never ship code we aren't proud to support. Our engineering practices ensure longevity, clear ownership, and scalable growth for your product.
              </p>
              <div className="callout-actions">
                <Link to="/contact" className="btn btn-primary btn-sm">
                  <span>Talk to Our Engineering Team</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Final CTA */}
      <FinalCTA />
    </div>
  );
}
