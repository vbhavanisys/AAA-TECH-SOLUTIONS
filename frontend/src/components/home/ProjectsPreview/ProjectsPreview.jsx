import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Award, FolderGit2 } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { projectsData } from '../../../data/projects';
import './ProjectsPreview.css';

export default function ProjectsPreview() {
  return (
    <section className="section projects-preview-section" id="projects-preview" aria-label="Selected Projects">
      <div className="container">
        <SectionHeader
          tag="🚀 Selected Deliverables"
          title="Proven Software Architectures Across Industries"
          subtitle="Explore a selection of mission-critical systems and digital platforms engineered by our team."
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-card-header">
                <div className="project-sector-badge">
                  <FolderGit2 size={13} aria-hidden="true" />
                  <span>{project.courseTrack}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-desc">{project.shortDescription}</p>

              <div className="project-metric-pill">
                <Award size={14} className="metric-trend-icon" aria-hidden="true" />
                <span>{project.outcome}</span>
              </div>

              <div className="project-tags-list">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <Link to={project.link} className="btn-link project-link">
                  <span>View Project Details</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-bottom-cta">
          <Link to="/projects" className="btn btn-secondary btn-lg">
            <span>View All Selected Works</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
