import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, Megaphone, Briefcase, Award, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import Reveal from '../../components/common/Reveal/Reveal';
import { servicesData } from '../../data/services';
import './ServicesPage.css';

const iconMap = {
  Globe,
  Code2,
  Megaphone,
  Briefcase,
  Award
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
          <Reveal className="services-hero-content">
            <span className="section-tag section-tag-dark">🎓 Technical & Career Training Services</span>
            <h1 className="services-hero-title">
              Practical, affordable skill training designed for real careers.
            </h1>
            <p className="services-hero-lead">
              AAA Tech Solutions offers technical and non-technical courses with hands-on projects, internships, and placement support — delivered online in small batches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="section services-list-section">
        <div className="container">
          <Reveal className="services-detailed-grid stagger-children">
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
                      <span className="service-category-badge">Training Program</span>
                    </div>
                  </div>

                  <p className="service-detail-desc">{service.shortDescription}</p>

                  <div className="service-deliverables">
                    <h3 className="deliverables-heading">What's Included:</h3>
                    <ul className="deliverables-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="deliverable-item">
                          <CheckCircle2 size={16} className="deliverable-check" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-footer">
                    <Link to="/contact" className="btn btn-primary btn-sm">
                      <span>Get Course Details</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Standards & Commitments */}
      <section className="section section-muted services-sla-section">
        <div className="container">
          <Reveal className="sla-card card">
            <div className="sla-icon-wrapper">
              <ShieldCheck size={36} className="sla-icon" />
            </div>
            <div className="sla-content">
              <h2 className="sla-title">Our Training Commitments</h2>
              <p className="sla-desc">
                Every course includes practical, project-based learning, continued project support, and a Course Completion Certificate — with mock interview practice and placement guidance available after you finish.
              </p>
            </div>
            <div className="sla-action">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Talk to Our Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
