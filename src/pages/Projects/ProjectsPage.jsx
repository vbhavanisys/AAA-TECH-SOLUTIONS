import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, TrendingUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import { projectsData } from '../../data/projects';
import './ProjectsPage.css';

const sectors = ["All Sectors", "Logistics & Fleet Operations", "Financial Services", "Healthcare & MedTech"];

export default function ProjectsPage() {
  const [activeSector, setActiveSector] = useState("All Sectors");

  const filteredProjects = projectsData.filter((p) => {
    return activeSector === "All Sectors" || p.clientSector === activeSector;
  });

  return (
    <div className="projects-page-view">
      {/* Hero */}
      <section className="projects-hero-section">
        <div className="container">
          <div className="projects-hero-content">
            <span className="section-tag section-tag-dark">🚀 Case Studies & Deliverables</span>
            <h1 className="projects-hero-title">
              Mission-critical software architectures engineered for scale.
            </h1>
            <p className="projects-hero-lead">
              Explore how AAA Tech Solutions partners with organizations across regulated and high-traffic sectors to deliver durable technology platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects List */}
      <section className="section projects-list-section">
        <div className="container">
          <div className="projects-filter-bar">
            {sectors.map((sec) => (
              <button
                key={sec}
                type="button"
                className={`sector-filter-btn ${activeSector === sec ? 'active' : ''}`}
                onClick={() => setActiveSector(sec)}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className="projects-detailed-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-detail-card card">
                <div className="project-card-top-bar">
                  <div className="project-sector-tag">
                    <FolderGit2 size={14} aria-hidden="true" />
                    <span>{project.clientSector}</span>
                  </div>
                  <div className="project-metric-highlight">
                    <TrendingUp size={14} className="metric-icon" aria-hidden="true" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                <h2 className="project-detail-heading">{project.title}</h2>
                <p className="project-detail-lead">{project.shortDescription}</p>

                <div className="project-architecture-block">
                  <h3 className="arch-heading">Architecture & Technology Stack:</h3>
                  <div className="project-tech-badges">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-detail-actions">
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    <span>Discuss a Similar Project</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Final CTA */}
      <FinalCTA />
    </div>
  );
}
