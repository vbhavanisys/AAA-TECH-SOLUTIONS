import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import './LegalPages.css';

export default function TermsPage() {
  return (
    <div className="legal-page-view">
      <section className="legal-hero-section">
        <div className="container container-narrow">
          <span className="section-tag">Terms & Agreement</span>
          <h1 className="legal-hero-title">Terms & Conditions</h1>
          <p className="legal-effective-date">Effective Date: January 1, 2026 &bull; Version 1.2</p>
        </div>
      </section>

      <section className="section legal-body-section">
        <div className="container container-narrow">
          <div className="legal-content-card card">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing the website, services, or training programs operated by AAA Tech Solutions Ltd., you agree to be bound by these Terms and Conditions and all applicable engineering and legal standards.
            </p>

            <h2>2. Intellectual Property & Code Ownership</h2>
            <p>
              Unless otherwise specified in a formal Master Services Agreement (MSA), all custom software source code, database architectures, and engineering deliverables created under bespoke client contracts belong exclusively to the client upon milestone payment completion.
            </p>
            <p>
              Course curricula, lab environments, and educational materials provided within the AAA Tech Solutions Academy are proprietary to AAA Tech Solutions Ltd. and licensed solely for enrolled individual educational use.
            </p>

            <h2>3. Academy Enrollment & Cohort Policies</h2>
            <p>
              Enrolled students agree to adhere to academic integrity guidelines, including individual completion of capstone assignments and respectful collaboration during live code review sessions.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              AAA Tech Solutions provides engineering consultation and educational content with professional diligence. In no event shall AAA Tech Solutions be liable for indirect or consequential damages arising from website unavailability or external service disruptions.
            </p>

            <h2>5. Governing Jurisdiction</h2>
            <p>
              These Terms shall be governed and interpreted in accordance with corporate laws governing technology commercial contracts.
            </p>

            <div className="legal-back-row">
              <Link to="/" className="btn btn-outline btn-sm">
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
