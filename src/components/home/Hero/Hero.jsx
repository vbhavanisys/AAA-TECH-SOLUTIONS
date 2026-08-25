import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck, Terminal, Layers, Cpu, Award, CheckCircle2 } from 'lucide-react';
import BrandLogo from '../../common/BrandLogo/BrandLogo';
import { companyInfo } from '../../../data/company';
import './Hero.css';

export default function Hero() {
  const waUrl = "https://wa.me/917358533721?text=Hi%2C%20I%27m%20interested%20in%20AAA%20Tech%20Solutions%20services%20and%20courses.";

  return (
    <section className="hero-section" aria-label="Introduction">
      {/* Background Canvas & Particle Effects */}
      <div className="hero-canvas" aria-hidden="true">
        <div className="hero-grid-lines"></div>
        <div className="hero-particles">
          <div className="hp hp1"></div>
          <div className="hp hp2"></div>
          <div className="hp hp3"></div>
          <div className="hp hp4"></div>
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-badges-wrapper">
            <div className="msme-badge">
              <ShieldCheck size={14} />
              <span>MSME / Udyam Registered Enterprise</span>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>Online Learning & Enterprise Software</span>
            </div>
          </div>

          <h1 className="hero-title">
            Engineering Dependable <span className="shimmer-text">Tech Solutions</span> & Empowering Careers
          </h1>

          <p className="hero-subtitle">
            AAA Tech Solutions delivers practical software engineering, cloud architecture, and industry-focused professional programs designed around real-world business needs.
          </p>

          <div className="hero-cta-group">
            <Link to="/services" className="btn btn-primary btn-lg">
              <span>🚀 Explore Services</span>
            </Link>
            <Link to="/courses" className="btn btn-outline-white btn-lg">
              <span>🎓 Explore Courses</span>
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
              <MessageSquare size={17} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Metrics Counter Row */}
          <div className="hero-stats-row">
            <div className="hs-item">
              <div className="hs-number">20+</div>
              <div className="hs-label">Course Tracks</div>
            </div>
            <div className="hs-item">
              <div className="hs-number">100%</div>
              <div className="hs-label">Online & Flexible</div>
            </div>
            <div className="hs-item">
              <div className="hs-number">MSME</div>
              <div className="hs-label">Govt. Certified</div>
            </div>
            <div className="hs-item">
              <div className="hs-number">99.9%</div>
              <div className="hs-label">Reliable SLA</div>
            </div>
          </div>
        </div>

        {/* Right Visual Column with Orbital Tech Composition */}
        <div className="hero-visual" aria-hidden="true">
          <div className="orbital-system-wrap">
            <div className="orbit orbit-outer"></div>
            <div className="orbit orbit-inner"></div>

            <div className="hero-center-logo-wrap">
              <div className="hero-center-inner">
                <div className="hero-logo-large">
                  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg-mark">
                    <rect width="60" height="60" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5" />
                    <path d="M14 42L24 18L34 42H29L24 29.5L19 42H14Z" fill="#FFFFFF" />
                    <path d="M26 42L34.5 23.5L43 42H39L34.5 31.5L30 42H26Z" fill="#00B4D8" />
                    <path d="M37 42L43.5 28.5L50 42H47L43.5 35L40 42H37Z" fill="#1E88E5" />
                  </svg>
                  <div className="hero-logo-name">AAA TECH</div>
                  <div className="hero-logo-sub">SOLUTIONS</div>
                </div>
              </div>
            </div>

            {/* Overlaid Floating Credential Badges */}
            <div className="float-badge fb-top">
              <ShieldCheck size={16} className="fb-icon fb-icon-cyan" />
              <div>
                <div className="fb-title">Production Grade</div>
                <div className="fb-sub">WCAG & ISO Standards</div>
              </div>
            </div>

            <div className="float-badge fb-bottom">
              <Terminal size={16} className="fb-icon fb-icon-gold" />
              <div>
                <div className="fb-title">Active Engineers</div>
                <div className="fb-sub">Practitioner Mentors</div>
              </div>
            </div>

            <div className="float-badge fb-left">
              <Layers size={16} className="fb-icon fb-icon-blue" />
              <div>
                <div className="fb-title">Full Lifecycle</div>
                <div className="fb-sub">Design to Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
