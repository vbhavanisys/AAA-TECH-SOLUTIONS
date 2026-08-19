import React from 'react';
import { Link } from 'react-router-dom';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'default', className = '' }) {
  const isDark = variant === 'dark' || variant === 'footer';

  return (
    <Link to="/" className={`brand-logo ${isDark ? 'brand-logo-dark' : ''} ${className}`} aria-label="AAA Tech Solutions Home">
      <div className="brand-icon-wrapper">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-mark-svg">
          <rect width="40" height="40" rx="8" className="brand-mark-bg" />
          {/* Three synchronized ascending geometric chevron bars representing AAA */}
          <path d="M10 28L17 12L24 28H20.5L17 19.5L13.5 28H10Z" className="brand-mark-chevron-1" />
          <path d="M18 28L23.5 15.5L29 28H26.5L23.5 21L20.5 28H18Z" className="brand-mark-chevron-2" />
          <path d="M25.5 28L29.5 19L33.5 28H31.5L29.5 23.5L27.5 28H25.5Z" className="brand-mark-chevron-3" />
        </svg>
      </div>
      <div className="brand-text-wrapper">
        <span className="brand-name">AAA TECH</span>
        <span className="brand-subtext">SOLUTIONS</span>
      </div>
    </Link>
  );
}
