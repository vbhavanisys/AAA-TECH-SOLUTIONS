import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, PhoneCall } from 'lucide-react';
import { companyInfo } from '../../../data/company';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <span className="final-cta-tag">Let's Build Together</span>
            <h2 className="final-cta-title">Have a project or training requirement in mind?</h2>
            <p className="final-cta-desc">
              Let's discuss how AAA Tech Solutions can help turn your technical objectives into a practical, resilient digital solution.
            </p>

            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Our Team
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                Explore Services
              </Link>
            </div>

            <div className="final-cta-direct">
              <div className="direct-contact-item">
                <Mail size={15} className="direct-icon" aria-hidden="true" />
                <span>Direct inquiries: <strong>{companyInfo.contact.email}</strong></span>
              </div>
              <div className="direct-contact-item">
                <PhoneCall size={15} className="direct-icon" aria-hidden="true" />
                <span>{companyInfo.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
