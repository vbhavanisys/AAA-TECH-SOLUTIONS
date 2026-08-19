import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code2, Cloud, Layout, Smartphone, Cpu, ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { servicesData } from '../../../data/services';
import './ServicesPreview.css';

// Dynamic icon mapper
const iconMap = {
  Globe: Globe,
  Code2: Code2,
  Cloud: Cloud,
  Layout: Layout,
  Smartphone: Smartphone,
  Cpu: Cpu
};

export default function ServicesPreview() {
  return (
    <section className="section services-preview-section" id="services-preview" aria-label="Services Overview">
      <div className="container">
        <SectionHeader
          tag="Our Expertise"
          title="Enterprise Technology & Software Services"
          subtitle="We design, engineer, and deploy high-performance software systems tailored to your specific organizational workflows."
        />

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <div key={service.id} className="service-card card">
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    <IconComponent size={24} className="service-icon" aria-hidden="true" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-desc">{service.shortDescription}</p>

                {service.features && (
                  <ul className="service-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature-item">
                        <Check size={14} className="service-feature-check" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-card-footer">
                  <Link to={service.link} className="btn-link service-action-link">
                    <span>Learn More</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-bottom-cta">
          <p className="services-cta-text">
            Looking for a tailored architecture or specialized system integration?
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Schedule a Technical Consultation
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
