import React from 'react';

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className = ''
}) {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`}>
      {tag && (
        <span className={`section-tag ${isDark ? 'section-tag-dark' : ''}`}>
          {tag}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
