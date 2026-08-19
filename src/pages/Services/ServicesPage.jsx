import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, Cloud, Layout, Smartphone, Cpu, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import { servicesData } from '../../data/services';
import './ServicesPage.css';

const iconMap = {
  Globe,
  Code2,
  Cloud,
  Layout,
  Smartphone,
  Cpu
};

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="services-page-view">
      {/* Services Hero */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-content">
            <span className="section-tag">Enterprise Technology Services</span>
            <h1 className="services-hero-title">
              Software engineering and cloud architecture built around business objectives.
            </h1>
            <p className="services-hero-lead">
              From enterprise software modernization to cloud-native platforms, we build resilient, secure, and scalable digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-detailed-grid">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.iconName] || Code2;

              return (
                <div key={service.id} id={service.id} className="service-detail-card card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon-box">
                      <IconComponent size={26} className="service-detail-icon" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="service-detail-title">{service.title}</h2>
                      <span className="service-category-badge">Enterprise Capability</span>
                    </div>
                  </div>

                  <p className="service-detail-desc">{service.shortDescription}</p>

                  <div className="service-deliverables">
                    <h3 className="deliverables-heading">Core Deliverables & Capabilities:</h3>
                    <ul className="deliverables-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="deliverable-item">
                          <CheckCircle size={16} className="deliverable-check" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-footer">
                    <Link to="/contact" className="btn btn-primary btn-sm">
                      Request Technical Proposal
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & SLA Guarantee */}
      <section className="section section-muted services-sla-section">
        <div className="container">
          <div className="sla-card">
            <div className="sla-icon-wrapper">
              <ShieldCheck size={32} className="sla-icon" />
            </div>
            <div className="sla-content">
              <h2 className="sla-title">Our Engineering & Delivery Commitments</h2>
              <p className="sla-desc">
                Every client engagement includes comprehensive architectural documentation, complete source code ownership, automated test suites, and structured knowledge transfer sessions for your internal teams.
              </p>
            </div>
            <div className="sla-action">
              <Link to="/contact" className="btn btn-secondary">
                Talk to a Principal Architect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
