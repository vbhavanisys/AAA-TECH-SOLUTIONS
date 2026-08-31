import React from 'react';
import { Link } from 'react-router-dom';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'default', className = '' }) {
  const isDark = variant === 'dark' || variant === 'footer' || variant === 'navbar';

  return (
    <Link to="/" className={`brand-logo ${isDark ? 'brand-logo-dark' : ''} ${className}`} aria-label="AAA Tech Solutions Home">
      <div className="brand-icon-wrapper">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-mark-svg">
          <rect width="40" height="40" rx="10" className="brand-mark-bg" />
          <path d="M9 28L16 12L23 28H19.5L16 19.5L12.5 28H9Z" className="brand-mark-chevron-1" />
          <path d="M17.5 28L23 15.5L28.5 28H26L23 21L20 28H17.5Z" className="brand-mark-chevron-2" />
          <path d="M25 28L29 19L33 28H31L29 23.5L27 28H25Z" className="brand-mark-chevron-3" />
        </svg>
      </div>
      <div className="brand-text-wrapper">
        <span className="brand-name">AAA TECH</span>
        <span className="brand-subtext">SOLUTIONS</span>
      </div>
    </Link>
  );
}
