import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { coursesData } from '../../../data/courses';
import './CoursesPreview.css';

export default function CoursesPreview() {
  return (
    <section className="section courses-preview-section" id="courses-preview" aria-label="Featured Courses">
      <div className="container">
        <SectionHeader
          tag="Industry-Focused Learning"
          title="Practical Engineering Programs for Real-World Careers"
          subtitle="Designed and mentored by practicing software engineers. Gain hands-on experience building production-grade software."
        />

        <div className="courses-grid">
          {coursesData.map((course) => (
            <div key={course.id} className="course-card card">
              <div className="course-card-header">
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
                <h3 className="course-title">{course.title}</h3>
              </div>

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
                <Link to={course.enrollmentUrl} className="btn btn-primary btn-sm course-btn-enroll">
                  Enroll Now
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-bottom-row">
          <Link to="/courses" className="btn btn-outline btn-lg">
            View All Courses & Learning Tracks
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
