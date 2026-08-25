import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import './ReviewsSection.css';

const initialReviews = [
  {
    id: 1,
    name: "Priya S.",
    date: "June 2025",
    stars: 5,
    course: "Full-Stack Software Engineering",
    text: "The practical training was transformative! The engineering mentor explained full-stack architectures clearly with real examples and code reviews. Got placed within 2 months of completing the cohort. Highly recommend AAA Tech Solutions!",
    avatarBg: "linear-gradient(135deg, #1565C0, #00B4D8)"
  },
  {
    id: 2,
    name: "Rahul M.",
    date: "May 2025",
    stars: 5,
    course: "Cloud Infrastructure & DevOps",
    text: "Took the Cloud & DevOps mastery track. The hands-on labs with AWS and Docker are industry-level. The trainer's mentoring and WhatsApp group support made doubt clearing seamless. Exceptional value!",
    avatarBg: "linear-gradient(135deg, #F9A825, #F57F17)"
  },
  {
    id: 3,
    name: "Kavitha R.",
    date: "April 2025",
    stars: 5,
    course: "Data Engineering & Analytics",
    text: "The data pipelines and SQL course was excellent. 100% online, flexible schedule, and the mock technical interview sessions really helped me crack my first engineering role. Thank you AAA Tech!",
    avatarBg: "linear-gradient(135deg, #00B4D8, #0D2157)"
  },
  {
    id: 4,
    name: "Arjun T.",
    date: "March 2025",
    stars: 5,
    course: "UI/UX & Design Systems",
    text: "Hands-on, component-driven design systems curriculum with React and Figma. The mentor was patient, knowledgeable, and gave deep feedback on real production portfolio pieces.",
    avatarBg: "linear-gradient(135deg, #25D366, #128C7E)"
  }
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('aaa_reviews');
      return saved ? JSON.parse(saved) : initialReviews;
    } catch {
      return initialReviews;
    }
  });

  const [formName, setFormName] = useState('');
  const [formCourse, setFormCourse] = useState('');
  const [formStars, setFormStars] = useState(5);
  const [formText, setFormText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const newReview = {
      id: Date.now(),
      name: formName.trim(),
      date: "Just now",
      stars: formStars,
      course: formCourse.trim() || "Technology Program",
      text: formText.trim(),
      avatarBg: "linear-gradient(135deg, #1565C0, #00B4D8)"
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('aaa_reviews', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }

    setFormName('');
    setFormCourse('');
    setFormText('');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section className="section reviews-section" id="reviews" aria-label="Student and Client Reviews">
      <div className="container">
        <SectionHeader
          tag="💬 Student & Learner Feedback"
          title="What Our Learners Say"
          subtitle="Real experiences from engineers and professionals who transformed their skills with AAA Tech Solutions."
        />

        <div className="reviews-layout-grid">
          {/* Left Column: Reviews List & Metrics */}
          <div className="reviews-list-col">
            <div className="reviews-score-card">
              <div className="score-box">
                <div className="score-number">{reviews.length}</div>
                <div className="score-label">Verified Reviews</div>
              </div>
              <div className="score-divider"></div>
              <div className="score-box">
                <div className="score-rating">
                  <span>5.0</span>
                  <div className="stars-mini">★★★★★</div>
                </div>
                <div className="score-label">Average Satisfaction</div>
              </div>
            </div>

            <div className="reviews-scroll-container">
              {reviews.map((rev) => (
                <div key={rev.id} className="review-item-card card">
                  <div className="review-header">
                    <div className="review-avatar" style={{ background: rev.avatarBg }}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="review-author">{rev.name}</div>
                      <div className="review-date">{rev.date}</div>
                    </div>
                  </div>

                  <div className="review-stars-row">
                    {Array.from({ length: rev.stars }).map((_, sIdx) => (
                      <Star key={sIdx} size={15} className="star-filled" />
                    ))}
                  </div>

                  <p className="review-body-text">"{rev.text}"</p>

                  <span className="review-course-badge">{rev.course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Review Submission Form */}
          <div className="review-form-col">
            <div className="review-form-card card">
              <h3 className="review-form-title">✍️ Leave a Review</h3>
              <p className="review-form-sub">Share your feedback about your learning or project experience with AAA Tech Solutions.</p>

              {formSubmitted ? (
                <div className="review-success-state">
                  <CheckCircle2 size={36} className="review-success-icon" />
                  <h4>Thank You!</h4>
                  <p>Your review has been posted successfully and added to our student feedback.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="review-form">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Course or Service Taken</label>
                    <input
                      type="text"
                      placeholder="e.g. Full-Stack Software Engineering"
                      value={formCourse}
                      onChange={(e) => setFormCourse(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Rating</label>
                    <div className="star-rating-selector">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          className={`star-select-btn ${starVal <= formStars ? 'selected' : ''}`}
                          onClick={() => setFormStars(starVal)}
                          aria-label={`Rate ${starVal} stars`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="rating-text-label">{formStars} out of 5</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Feedback / Review</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Share your experience..."
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-review-btn">
                    <span>Post Review</span>
                    <Send size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
