import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left: Text & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Enterprise Solutions & Professional Tech Programs</span>
          </div>

          <h1 className="hero-title">
            Technology built around your business.
          </h1>

          <p className="hero-subtitle">
            AAA Tech Solutions delivers practical technology solutions and industry-focused learning designed around real-world needs.
          </p>

          <div className="hero-cta-group">
            <Link to="/services" className="btn btn-primary btn-lg">
              Explore Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/courses" className="btn btn-outline btn-lg">
              Explore Courses
            </Link>
          </div>

          {/* Value Verification Highlights */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="hero-feature-icon" />
              <span>Engineered for Production</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="hero-feature-icon" />
              <span>Curriculum by Active Engineers</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="hero-feature-icon" />
              <span>Full Lifecycle Support</span>
            </div>
          </div>
        </div>

        {/* Right: Restrained Technical Composition */}
        <div className="hero-visual" aria-hidden="true">
          <div className="tech-card-wrapper">
            {/* Main System Architecture Panel */}
            <div className="tech-system-panel">
              <div className="panel-header">
                <div className="panel-controls">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="panel-title">aaa-core-infrastructure.config</div>
                <div className="panel-status">
                  <span className="status-indicator"></span>
                  <span>Operational</span>
                </div>
              </div>

              <div className="panel-body">
                <div className="code-snippet">
                  <span className="code-keyword">export const</span> <span className="code-def">enterpriseStack</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;architecture: <span className="code-string">"Modular Microservices"</span>,
                  <br />
                  &nbsp;&nbsp;cloudProvider: <span className="code-string">"Multi-Cloud AWS/GCP"</span>,
                  <br />
                  &nbsp;&nbsp;uptimeSLA: <span className="code-string">"99.98%"</span>,
                  <br />
                  &nbsp;&nbsp;ciCdPipeline: <span className="code-boolean">true</span>,
                  <br />
                  &nbsp;&nbsp;security: [<span className="code-string">"Zero-Trust"</span>, <span className="code-string">"End-to-End Encryption"</span>]
                  <br />
                  {'}'};
                </div>

                <div className="tech-metrics-grid">
                  <div className="metric-box">
                    <div className="metric-label">Engineering Discipline</div>
                    <div className="metric-value">Production Grade</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-label">Delivery Milestones</div>
                    <div className="metric-value">Predictable & Transparent</div>
                  </div>
                </div>

                <div className="tech-tags-list">
                  <span className="tech-tag"><Layers size={13} /> Custom Software</span>
                  <span className="tech-tag"><Cpu size={13} /> Cloud Infra</span>
                  <span className="tech-tag"><Terminal size={13} /> Tech Training</span>
                </div>
              </div>
            </div>

            {/* Overlaid Secondary Security Card */}
            <div className="floating-metric-badge">
              <ShieldCheck size={20} className="shield-icon" />
              <div>
                <div className="badge-metric-title">Standards & Quality</div>
                <div className="badge-metric-sub">ISO & WCAG 2.1 Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
