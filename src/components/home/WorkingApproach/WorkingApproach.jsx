import React from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { companyInfo } from '../../../data/company';
import './WorkingApproach.css';

export default function WorkingApproach() {
  return (
    <section className="section working-approach-section" aria-label="Our Working Approach">
      <div className="container">
        <SectionHeader
          tag="Methodology"
          title="Our Structured Engineering & Delivery Process"
          subtitle="From initial discovery to post-launch maintenance, we execute projects with systematic discipline and transparent milestones."
        />

        <div className="approach-steps-container">
          <div className="approach-grid">
            {companyInfo.workingApproach.map((step, idx) => (
              <div key={idx} className="approach-card">
                <div className="step-number-wrapper">
                  <span className="step-number">{step.step}</span>
                  <div className="step-line" aria-hidden="true"></div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
