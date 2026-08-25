import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, PhoneCall, MessageSquare } from 'lucide-react';
import { companyInfo } from '../../../data/company';
import './FinalCTA.css';

export default function FinalCTA() {
  const waUrl = "https://wa.me/917358533721?text=Hi%2C%20I%27m%20interested%20in%20joining%20AAA%20Tech%20Solutions.%20Please%20share%20details.";

  return (
    <section className="section final-cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <span className="final-cta-tag">✨ Let's Build Together</span>
            <h2 className="final-cta-title">Ready to Transform Your Skills or Enterprise Software?</h2>
            <p className="final-cta-desc">
              Whether you need dependable custom software engineering or career-advancing tech cohort training, our team is ready to assist.
            </p>

            <div className="final-cta-actions">
              <Link to="/enrollment" className="btn btn-primary btn-lg">
                <span>Enroll in a Course</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <span>Schedule Consultation</span>
              </Link>
            </div>

            <div className="final-cta-direct">
              <a href={`mailto:${companyInfo.contact.email}`} className="direct-contact-item direct-contact-link">
                <Mail size={15} className="direct-icon" aria-hidden="true" />
                <span>Email: <strong>{companyInfo.contact.email}</strong></span>
              </a>
              <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="direct-contact-item direct-contact-link">
                <PhoneCall size={15} className="direct-icon" aria-hidden="true" />
                <span>Phone: <strong>{companyInfo.contact.phone}</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
