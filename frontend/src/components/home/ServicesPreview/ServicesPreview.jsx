import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code2, Megaphone, Briefcase, Award, ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { servicesData } from '../../../data/services';
import './ServicesPreview.css';

const iconMap = {
  Globe: Globe,
  Code2: Code2,
  Megaphone: Megaphone,
  Briefcase: Briefcase,
  Award: Award
};

export default function ServicesPreview() {
  return (
    <section className="section services-preview-section section-muted" id="services-preview" aria-label="Services Overview">
      <div className="container">
        <SectionHeader
          tag="💼 Enterprise Capabilities"
          title="Custom Software & Cloud Engineering Services"
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
          <Link to="/contact" className="btn btn-secondary btn-lg">
            <span>Schedule a Technical Consultation</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
