import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers, ShieldCheck, Mail, Calendar, Sparkles } from 'lucide-react';
import './PlaceholderPage.css';

const routeDetails = {
  '/services': {
    title: 'Technology Services & Solutions',
    tag: 'Enterprise Offerings',
    description: 'Explore our complete suite of custom software engineering, cloud architecture, mobile development, and UI/UX design systems.',
    assignedRole: 'Services & Solutions Team'
  },
  '/courses': {
    title: 'Professional Engineering Courses',
    tag: 'Technical Curriculum',
    description: 'Industry-aligned cohort programs and technical certifications designed for modern software development careers.',
    assignedRole: 'Courses & Curriculum Team'
  },
  '/projects': {
    title: 'Client Works & Selected Projects',
    tag: 'Case Studies',
    description: 'Detailed technical case studies showcasing system architecture, business impact, and production deployments.',
    assignedRole: 'Portfolio & Case Studies Team'
  },
  '/careers': {
    title: 'Careers at AAA Tech Solutions',
    tag: 'Join Our Team',
    description: 'Open opportunities for software engineers, cloud architects, technical instructors, and UI/UX designers.',
    assignedRole: 'Careers & Recruitment Team'
  },
  '/blog': {
    title: 'Engineering Insights & Tech News',
    tag: 'Knowledge Base',
    description: 'In-depth articles, architectural patterns, and industry commentary written by our engineering team.',
    assignedRole: 'Content & Editorial Team'
  },
  '/contact': {
    title: 'Contact & Technical Consultation',
    tag: 'Direct Inquiries',
    description: 'Get in touch with our team to discuss project requirements, technical consulting, or enterprise training.',
    assignedRole: 'Client Engagements Team'
  },
  '/enrollment': {
    title: 'Course Enrollment & Admissions',
    tag: 'Application Portal',
    description: 'Register for upcoming cohort batches, verify admission requirements, and connect with academic advisors.',
    assignedRole: 'Enrollment & Admissions Team'
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    tag: 'Legal & Compliance',
    description: 'How AAA Tech Solutions collects, protects, and handles personal and client operational data.',
    assignedRole: 'Legal & Compliance'
  },
  '/terms': {
    title: 'Terms of Service',
    tag: 'Legal & Agreement',
    description: 'Standard operational terms, code intellectual property conditions, and service level guidelines.',
    assignedRole: 'Legal & Compliance'
  }
};

export default function PlaceholderPage() {
  const location = useLocation();
  const info = routeDetails[location.pathname] || {
    title: 'AAA Tech Solutions',
    tag: 'Page Overview',
    description: 'Dedicated portal section for AAA Tech Solutions.',
    assignedRole: 'Frontend Engineering'
  };

  return (
    <div className="placeholder-view">
      <section className="placeholder-hero">
        <div className="container">
          <div className="placeholder-content">
            <span className="section-tag">{info.tag}</span>
            <h1 className="placeholder-title">{info.title}</h1>
            <p className="placeholder-desc">{info.description}</p>
          </div>
        </div>
      </section>

      <section className="section placeholder-body-section">
        <div className="container container-narrow">
          <div className="placeholder-card card">
            <div className="placeholder-card-header">
              <Layers size={24} className="placeholder-icon" aria-hidden="true" />
              <div>
                <h3 className="placeholder-card-title">Frontend Preview & Integration Ready</h3>
                <p className="placeholder-card-sub">Assigned Module: <strong>{info.assignedRole}</strong></p>
              </div>
            </div>

            <p className="placeholder-body-text">
              This module's layout and route are configured within the unified navigation and design system. Other team members can seamlessly link full databases, backend APIs, or administrative controls into this view.
            </p>

            <div className="placeholder-action-row">
              <Link to="/" className="btn btn-outline btn-sm">
                <ArrowLeft size={14} aria-hidden="true" />
                Back to Home Page
              </Link>
              <Link to="/about" className="btn btn-secondary btn-sm">
                About Our Company
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
