import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, BookOpen, Tag } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';
import Reveal from '../../components/common/Reveal/Reveal';
import { blogPosts } from '../../data/blog';
import './BlogPage.css';

const categories = ["All Articles", "Python", "Java", "Data Analyst", "AI & ML", "AWS", "Placement Tips"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredPosts = blogPosts.filter((p) => {
    return activeCategory === "All Articles" || p.category === activeCategory;
  });

  return (
    <div className="blog-page-view">
      {/* Hero */}
      <section className="blog-hero-section">
        <div className="container">
          <Reveal className="blog-hero-content">
            <span className="section-tag section-tag-dark">📖 Learning Resources & Career Tips</span>
            <h1 className="blog-hero-title">
              Practical guidance to help you learn faster and get placed.
            </h1>
            <p className="blog-hero-lead">
              Tips, tutorials, and career advice from the AAA Tech Solutions training team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="section blog-listing-section">
        <div className="container">
          <div className="blog-categories-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Reveal className="blog-cards-grid stagger-children">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card card">
                <div className="blog-meta-top">
                  <span className="blog-category-badge">{post.category}</span>
                  <div className="blog-time-meta">
                    <Clock size={12} aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="blog-card-title">
                  <a href={`#${post.id}`} onClick={(e) => e.preventDefault()}>{post.title}</a>
                </h2>

                <p className="blog-card-summary">{post.summary}</p>

                <div className="blog-tags-row">
                  {post.tags.map((t, idx) => (
                    <span key={idx} className="blog-tag-pill">{t}</span>
                  ))}
                </div>

                <div className="blog-card-footer">
                  <div className="blog-author-meta">
                    <span className="author-name">{post.author}</span>
                    <span className="post-date">&bull; {post.date}</span>
                  </div>

                  <a href={`#${post.id}`} onClick={(e) => e.preventDefault()} className="btn-link read-article-link">
                    <span>Read Article</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
