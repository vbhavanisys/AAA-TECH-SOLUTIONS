import React from 'react';
import { Globe, Users, ShieldCheck, Award, MessageSquare, Target } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: Globe,
    title: "100% Online & Flexible",
    desc: "Learn from anywhere with live interactive classes, recorded sessions, and self-paced practical labs.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Active Engineer Mentors",
    desc: "Taught by practicing software engineers who manage production environments and review real code.",
    color: "cyan"
  },
  {
    icon: ShieldCheck,
    title: "MSME Registered Enterprise",
    desc: "Government certified enterprise with strict adherence to industry delivery standards.",
    color: "gold"
  },
  {
    icon: Award,
    title: "Industry Credential",
    desc: "Earn verified course completion certificates and build high-impact GitHub portfolio repositories.",
    color: "green"
  },
  {
    icon: MessageSquare,
    title: "Direct WhatsApp Support",
    desc: "Fast doubt-clearing and personalized mentoring through direct trainer access and cohort groups.",
    color: "blue"
  },
  {
    icon: Target,
    title: "Interview & Career Prep",
    desc: "Comprehensive mock technical interviews, resume engineering, and practical problem-solving drills.",
    color: "cyan"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section section-muted" id="why" aria-label="Why Choose AAA Tech Solutions">
      <div className="container">
        <SectionHeader
          tag="🏆 The AAA Advantage"
          title="Why Organizations & Learners Choose Us"
          subtitle="We make quality software delivery and career-defining technical education accessible, practical, and dependable."
        />

        <div className="why-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="why-card card">
                <div className={`why-icon-box icon-${item.color}`}>
                  <Icon size={26} className="why-icon" aria-hidden="true" />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
