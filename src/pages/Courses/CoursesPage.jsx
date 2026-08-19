import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, Calendar, Search, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import { coursesData } from '../../data/courses';
import './CoursesPage.css';

const categories = ["All Programs", "Software Development", "Cloud & Infrastructure", "Design & Product", "Data & AI"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === "All Programs" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="courses-page-view">
      {/* Courses Hero */}
      <section className="courses-hero-section">
        <div className="container">
          <div className="courses-hero-content">
            <span className="section-tag">Career-Advancing Curriculum</span>
            <h1 className="courses-hero-title">
              Industry-aligned engineering cohorts taught by practicing engineers.
            </h1>
            <p className="courses-hero-lead">
              Immersive, hands-on programs focused on production architectures, modern tooling, and collaborative software engineering workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="courses-filter-section">
        <div className="container">
          <div className="courses-controls-bar">
            <div className="category-pills-list" role="tablist" aria-label="Course Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="course-search-box">
              <Search size={16} className="search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search courses or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="course-search-input"
                aria-label="Search courses"
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="courses-listing-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course.id} className="course-listing-card card">
                  <div className="course-listing-header">
                    <div className="course-listing-meta">
                      <span className="badge badge-accent">
                        <Clock size={12} aria-hidden="true" />
                        {course.duration}
                      </span>
                      <span className="badge badge-neutral">
                        <BarChart size={12} aria-hidden="true" />
                        {course.level}
                      </span>
                      <span className="course-category-tag">{course.category}</span>
                    </div>

                    <h2 className="course-listing-title">
                      <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </h2>
                  </div>

                  <p className="course-listing-desc">{course.shortDescription}</p>

                  <div className="course-schedule-info">
                    <Calendar size={14} className="schedule-icon" aria-hidden="true" />
                    <span>{course.schedule}</span>
                  </div>

                  <div className="course-listing-tags">
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="course-listing-footer">
                    <div className="course-fee-info">
                      <span className="fee-label">Tuition</span>
                      <span className="fee-value">{course.fees.split(' ')[0]}</span>
                    </div>

                    <div className="course-listing-actions">
                      <Link to={`/courses/${course.id}`} className="btn btn-outline btn-sm">
                        View Curriculum
                      </Link>
                      <Link to={`/enrollment?course=${course.id}`} className="btn btn-primary btn-sm">
                        Enroll Now
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-courses-found">
                <p>No engineering courses match your selected filter criteria.</p>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => { setSelectedCategory("All Programs"); setSearchQuery(""); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Academy Methodology Banner */}
      <section className="section section-muted courses-features-section">
        <div className="container">
          <SectionHeader
            tag="The AAA Academy Standard"
            title="How Our Learning Model Delivers Career Outcomes"
            subtitle="Built to reflect actual engineering team workflows rather than superficial tutorial drills."
          />

          <div className="grid-3">
            <div className="academy-feature-card">
              <GraduationCap size={28} className="feature-icon" />
              <h3 className="feature-title">Active Engineer Mentorship</h3>
              <p className="feature-desc">
                Learn directly from engineering leads who manage production systems daily and review your code via GitHub Pull Requests.
              </p>
            </div>

            <div className="academy-feature-card">
              <CheckCircle size={28} className="feature-icon" />
              <h3 className="feature-title">Portfolio-Grade Capstones</h3>
              <p className="feature-desc">
                Build full-stack, distributed projects with database migrations, Docker configurations, and automated testing to demonstrate in interviews.
              </p>
            </div>

            <div className="academy-feature-card">
              <Calendar size={28} className="feature-icon" />
              <h3 className="feature-title">Flexible Evening & Weekend Batches</h3>
              <p className="feature-desc">
                Designed for working professionals and university graduates seeking structured, accelerated skill transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
