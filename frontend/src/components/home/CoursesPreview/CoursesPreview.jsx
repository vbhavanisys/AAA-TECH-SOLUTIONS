import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight, CheckCircle, Code2, Cloud, Palette, Database } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { coursesData } from '../../../data/courses';
import { useEnrollmentModal } from '../../../context/EnrollmentContext';
import './CoursesPreview.css';

const courseCategories = ["All Programs", "Software Development", "Cloud & Infrastructure", "Design & Product", "Data & AI"];

const iconByCat = {
  "Software Development": Code2,
  "Cloud & Infrastructure": Cloud,
  "Design & Product": Palette,
  "Data & AI": Database
};

export default function CoursesPreview() {
  const [activeTab, setActiveTab] = useState("All Programs");
  const { openEnrollmentModal } = useEnrollmentModal();

  const filtered = activeTab === "All Programs"
    ? coursesData
    : coursesData.filter(c => c.category === activeTab);

  return (
    <section className="section courses-preview-section" id="courses-preview" aria-label="Featured Courses">
      <div className="container">
        <SectionHeader
          tag="📚 Industry-Focused Learning"
          title="Technical & Practical Career Programs"
          subtitle="Learn from active engineering practitioners. 100% online, hands-on architectures, and job-ready technical skills."
        />

        {/* Interactive Tabs Matching Reference */}
        <div className="courses-tabs-row" role="tablist" aria-label="Filter Courses by Category">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeTab === cat}
              className={`course-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filtered.map((course) => {
            const Icon = iconByCat[course.category] || Code2;

            return (
              <div key={course.id} className="course-card card">
                <div className="course-card-head">
                  <div className="course-icon-badge">
                    <Icon size={22} />
                  </div>
                  <div className="course-meta-pills">
                    <span className="badge badge-accent">
                      <Clock size={12} aria-hidden="true" />
                      {course.duration}
                    </span>
                    <span className="badge badge-neutral">
                      <BarChart size={12} aria-hidden="true" />
                      {course.level}
                    </span>
                  </div>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.shortDescription}</p>

                <div className="course-tags-wrapper">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="course-tag">{tag}</span>
                  ))}
                </div>

                <div className="course-mode-info">
                  <CheckCircle size={14} className="course-mode-icon" aria-hidden="true" />
                  <span>{course.mode}</span>
                </div>

                <div className="course-card-actions">
                  <Link to={course.link} className="btn btn-outline btn-sm course-btn-view">
                    View Curriculum
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => openEnrollmentModal(course.id, e.currentTarget)}
                    className="btn btn-primary btn-sm course-btn-enroll"
                    aria-haspopup="dialog"
                    aria-label={`Enroll in ${course.title}`}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="courses-bottom-row">
          <Link to="/courses" className="btn btn-outline btn-lg">
            <span>View Full Course Catalog & Fees</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
