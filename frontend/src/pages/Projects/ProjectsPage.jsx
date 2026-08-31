import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import Reveal from '../../components/common/Reveal/Reveal';
import { projectsData } from '../../data/projects';
import './ProjectsPage.css';

const tracks = ["All Tracks", "Python", "Java", "Data Analyst", "AI & ML", "AWS", "Digital Marketing"];

export default function ProjectsPage() {
  const [activeTrack, setActiveTrack] = useState("All Tracks");

  const filteredProjects = projectsData.filter((p) => {
    return activeTrack === "All Tracks" || p.courseTrack === activeTrack;
  });

  return (
    <div className="projects-page-view">
      {/* Hero */}
      <section className="projects-hero-section">
        <div className="container">
          <Reveal className="projects-hero-content">
            <span className="section-tag section-tag-dark">🚀 Learner Project Showcase</span>
            <h1 className="projects-hero-title">
              Real, hands-on projects our learners build during training.
            </h1>
            <p className="projects-hero-lead">
              Every course at AAA Tech Solutions includes project-based learning with dedicated project support and a Project Completion Certificate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Projects List */}
      <section className="section projects-list-section">
        <div className="container">
          <div className="projects-filter-bar">
            {tracks.map((track) => (
              <button
                key={track}
                type="button"
                className={`sector-filter-btn ${activeTrack === track ? 'active' : ''}`}
                onClick={() => setActiveTrack(track)}
              >
                {track}
              </button>
            ))}
          </div>

          <Reveal className="projects-detailed-grid stagger-children">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-detail-card card">
                <div className="project-card-top-bar">
                  <div className="project-sector-tag">
                    <FolderGit2 size={14} aria-hidden="true" />
                    <span>{project.courseTrack}</span>
                  </div>
                  <div className="project-metric-highlight">
                    <Award size={14} className="metric-icon" aria-hidden="true" />
                    <span>{project.outcome}</span>
                  </div>
                </div>

                <h2 className="project-detail-heading">{project.title}</h2>
                <p className="project-detail-lead">{project.shortDescription}</p>

                <div className="project-architecture-block">
                  <h3 className="arch-heading">Tools & Technologies Used:</h3>
                  <div className="project-tech-badges">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-detail-actions">
                  <Link to={project.link} className="btn btn-primary btn-sm">
                    <span>Explore This Course</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reusable Final CTA */}
      <FinalCTA />
    </div>
  );
}
