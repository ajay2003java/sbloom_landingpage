import React from 'react';
import { Link } from 'react-router';
import { Building2, Handshake, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './DualPathCards.css';

export const DualPathCards: React.FC = () => {
  return (
    <section className="dual-path-section">
      {/* Background Soft Glow Effect */}
      <div className="dual-path-ambient-glow" aria-hidden="true" />

      {/* Subtle Flowing Golden & Champagne Background Curves */}
      <div className="dual-path-curves-layer" aria-hidden="true">
        <svg
          className="dual-path-curves-svg"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dpWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2D0B6" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#EDE0CA" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E2D0B6" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id="dpWave2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFCDAE" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#EAD8BD" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E2D0B6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M-40,160 C320,80 800,280 1480,140"
            stroke="url(#dpWave1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M-40,240 C380,160 840,360 1480,220"
            stroke="url(#dpWave2)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M-40,740 C440,640 920,810 1480,690"
            stroke="url(#dpWave1)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative Sparkles Layer */}
      <div className="dual-path-sparkles-layer" aria-hidden="true">
        <span className="dual-path-sparkle-star dp-sparkle-top-left-main">✦</span>
        <span className="dual-path-sparkle-dot dp-sparkle-top-left-dot" />
        <span className="dual-path-sparkle-star dp-sparkle-right-main">✦</span>
        <span className="dual-path-sparkle-dot dp-sparkle-right-dot" />
      </div>

      <div className="dual-path-container">
        {/* Top Centered Header Section */}
        <ScrollReveal delay={0}>
          <div className="dual-path-header">
            <h2 className="dual-path-title">
              How can <span className="title-highlight-gold">sBLOOM</span> help you today?
            </h2>
            <p className="dual-path-subtitle">
              Whether you need more paying clients for your business or want to earn commissions through referrals.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Path Choice Cards Grid */}
        <div className="dual-path-grid">
          {/* Card 1: sBLOOM for Business */}
          <ScrollReveal delay={100} className="dual-path-reveal-wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="dual-path-card dual-path-card-business">
              <div className="dual-path-card-body">
                {/* Header: Icon + Title & Tagline */}
                <div className="dual-path-card-header">
                  <div className="dual-path-icon-box dual-path-icon-business">
                    <Building2 size={20} strokeWidth={2} />
                  </div>
                  <div className="dual-path-header-text">
                    <h3 className="dual-path-card-title">I Need More Revenue</h3>
                    <p className="dual-path-card-tagline">For clinics, schools & professional firms</p>
                  </div>
                </div>

                {/* Headline */}
                <h4 className="dual-path-card-headline">
                  Fill your pipeline with paying customers.
                </h4>

                {/* Divider Line */}
                <hr className="dual-path-card-divider" />

                {/* Feature Points */}
                <ul className="dual-path-feature-list">
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-business" />
                    <span className="dual-path-feature-text">Internal Field Sales (FSM) team training</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-business" />
                    <span className="dual-path-feature-text">Warm referrals from our Affiliate network</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-business" />
                    <span className="dual-path-feature-text">High-converting website & Google Maps Top 3</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button */}
              <Link to="/contact" className="dual-path-card-btn">
                <span>Grow My Revenue →</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Affiliate Marketing */}
          <ScrollReveal delay={200} className="dual-path-reveal-wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="dual-path-card dual-path-card-creative">
              <div className="dual-path-card-body">
                {/* Header: Icon + Title & Subtitle */}
                <div className="dual-path-card-header">
                  <div className="dual-path-icon-box dual-path-icon-creative">
                    <Handshake size={20} strokeWidth={2} />
                  </div>
                  <div className="dual-path-header-text">
                    <h3 className="dual-path-card-title">Affiliate Marketing</h3>
                    <p className="dual-path-card-tagline">For doctors, educators & community connectors</p>
                  </div>
                </div>

                {/* Main Headline */}
                <h4 className="dual-path-card-headline">
                  Earn commissions for your introductions.
                </h4>

                {/* Divider Line */}
                <hr className="dual-path-card-divider" />

                {/* Feature Points */}
                <ul className="dual-path-feature-list">
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-creative" />
                    <span className="dual-path-feature-text">Generous commissions for verified client leads</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-creative" />
                    <span className="dual-path-feature-text">No technical pitching required—just warm intros</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <CheckCircle2 size={19} strokeWidth={1.8} className="dual-path-check-icon-creative" />
                    <span className="dual-path-feature-text">Dedicated Provider Portal & automated tracking</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button */}
              <a 
                href="https://sbloom.ottobon.in/provider" 
                className="dual-path-card-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Join Affiliate Program →</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DualPathCards;
