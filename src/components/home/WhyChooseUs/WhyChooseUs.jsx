import React from 'react';
import { ShieldCheck, Laptop, GitPullRequest, Headphones } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { companyInfo } from '../../../data/company';
import './WhyChooseUs.css';

const iconList = [
  ShieldCheck,
  Laptop,
  GitPullRequest,
  Headphones
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section" aria-label="Why Choose AAA Tech Solutions">
      <div className="container">
        <SectionHeader
          tag="Why AAA Tech Solutions"
          title="Engineered for Reliability, Designed for Growth"
          subtitle="We distinguish our work through grounded engineering methodologies, transparent partnerships, and practical outcomes."
        />

        <div className="why-grid">
          {companyInfo.differentiators.map((diff, index) => {
            const Icon = iconList[index % iconList.length];

            return (
              <div key={diff.id} className="why-card">
                <div className="why-icon-box">
                  <Icon size={24} className="why-icon" aria-hidden="true" />
                </div>
                <h3 className="why-title">{diff.title}</h3>
                <p className="why-desc">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
