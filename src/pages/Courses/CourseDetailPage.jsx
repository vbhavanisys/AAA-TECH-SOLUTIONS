import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, Calendar, CheckCircle2, ArrowRight, BookOpen, Layers, ShieldCheck, AlertCircle, MessageSquare } from 'lucide-react';
import { coursesData } from '../../data/courses';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import './CourseDetailPage.css';

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id) || coursesData[0];

  const waCourseUrl = `https://wa.me/917358533721?text=Hi%20AAA%20Tech%20Solutions%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20program.`;

  return (
    <div className="course-detail-view">
      {/* Breadcrumb Navigation */}
      <div className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/courses" className="breadcrumb-link">Courses</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Course Detail Hero */}
      <section className="course-detail-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-main">
              <span className="section-tag section-tag-dark">{course.category}</span>
              <h1 className="course-detail-h1">{course.title}</h1>
              <p className="course-detail-summary">{course.overview || course.shortDescription}</p>

              <div className="course-meta-tags-row">
                <span className="badge badge-accent">
                  <Clock size={13} aria-hidden="true" />
                  {course.duration}
                </span>
                <span className="badge badge-neutral">
                  <BarChart size={13} aria-hidden="true" />
                  {course.level}
                </span>
                <span className="badge badge-success">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  {course.mode}
                </span>
              </div>
            </div>

            {/* Quick Action Side Card */}
            <div className="course-sidebar-card card">
              <div className="sidebar-fee-header">
                <span className="sidebar-fee-label">Tuition Fee</span>
                <div className="sidebar-fee-value">{course.fees}</div>
              </div>

              <div className="sidebar-details-list">
                <div className="sidebar-detail-item">
                  <Clock size={16} className="sidebar-item-icon" />
                  <div>
                    <div className="sidebar-item-title">Duration</div>
                    <div className="sidebar-item-sub">{course.duration}</div>
                  </div>
                </div>

                <div className="sidebar-detail-item">
                  <Calendar size={16} className="sidebar-item-icon" />
                  <div>
                    <div className="sidebar-item-title">Schedule</div>
                    <div className="sidebar-item-sub">{course.schedule}</div>
                  </div>
                </div>

                <div className="sidebar-detail-item">
                  <ShieldCheck size={16} className="sidebar-item-icon" />
                  <div>
                    <div className="sidebar-item-title">Certificate</div>
                    <div className="sidebar-item-sub">Verified Industry Credential</div>
                  </div>
                </div>
              </div>

              <div className="sidebar-actions-group">
                <Link to={`/enrollment?course=${course.id}`} className="btn btn-primary btn-lg sidebar-enroll-btn">
                  <span>Enroll in this Cohort</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href={waCourseUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg sidebar-wa-btn">
                  <MessageSquare size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <p className="sidebar-guarantee">
                ⭐ Mentored by active engineers. Limited batch size for focused guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Syllabus Section */}
      <section className="section course-body-section">
        <div className="container">
          <div className="course-body-layout">
            <div className="course-content-column">
              {/* Learning Outcomes */}
              {course.learningOutcomes && (
                <div className="course-section-block">
                  <h2 className="block-title">Key Learning Outcomes</h2>
                  <div className="outcomes-grid">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="outcome-item">
                        <CheckCircle2 size={18} className="outcome-icon" aria-hidden="true" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comprehensive Syllabus */}
              {course.syllabus && (
                <div className="course-section-block">
                  <h2 className="block-title">Curriculum & Module Breakdown</h2>
                  <div className="syllabus-modules-list">
                    {course.syllabus.map((mod, idx) => (
                      <div key={idx} className="syllabus-module-card card">
                        <div className="module-header">
                          <span className="module-number">{mod.module}</span>
                          <h3 className="module-title">{mod.title}</h3>
                        </div>
                        <ul className="module-topics-list">
                          {mod.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="module-topic-item">
                              <span className="topic-bullet"></span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Eligibility & Prerequisites */}
              {course.eligibility && (
                <div className="course-section-block">
                  <h2 className="block-title">Eligibility & Prerequisites</h2>
                  <div className="eligibility-box">
                    <AlertCircle size={20} className="eligibility-icon" aria-hidden="true" />
                    <div>
                      <p className="eligibility-text">{course.eligibility}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies Covered */}
              <div className="course-section-block">
                <h2 className="block-title">Tools & Technologies Covered</h2>
                <div className="tech-pills-row">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="course-tech-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to courses link */}
            <div className="course-nav-bottom">
              <Link to="/courses" className="btn btn-outline btn-sm">
                <ArrowLeft size={14} aria-hidden="true" />
                <span>Back to All Courses</span>
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
