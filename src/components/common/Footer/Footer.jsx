import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Award, ShieldCheck } from 'lucide-react';
import BrandLogo from '../BrandLogo/BrandLogo';
import { companyInfo } from '../../../data/company';
import './Footer.css';

// Vector social icons
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root" aria-label="Site Footer">
      <div className="container footer-main">
        {/* Brand & Mission Column */}
        <div className="footer-col footer-col-brand">
          <BrandLogo variant="dark" />
          <p className="footer-brand-desc">
            {companyInfo.shortDescription}
          </p>

          <div className="footer-msme-badge">
            <ShieldCheck size={16} className="msme-icon" />
            <span>MSME / Udyam Registered Enterprise</span>
          </div>

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" aria-hidden="true" />
              <a
                href={companyInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                title="View AAA Tech Solutions in Google Maps"
              >
                {companyInfo.contact.address}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
              <a href={`mailto:${companyInfo.contact.email}`} className="footer-contact-link">
                {companyInfo.contact.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
              <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="footer-contact-link">
                {companyInfo.contact.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} className="footer-contact-icon" aria-hidden="true" />
              <span>{companyInfo.contact.hours}</span>
            </div>
          </div>
        </div>

        {/* Services Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            {companyInfo.footerLinks.services.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Courses & Training</h4>
          <ul className="footer-links">
            {companyInfo.footerLinks.courses.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Resources Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            {companyInfo.footerLinks.company.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            &copy; {currentYear} <span>AAA Tech Solutions</span>. All rights reserved. | 100% Online & Enterprise Solutions
          </div>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <span className="footer-bottom-divider" aria-hidden="true">&bull;</span>
            <Link to="/terms" className="footer-bottom-link">Terms & Conditions</Link>
          </div>

          <div className="footer-social-links" aria-label="Social media channels">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
