import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { HeroRevenueCockpit } from '../components/home/HeroRevenueCockpit';
import { HeroSubtleCurves } from '../components/home/HeroSubtleCurves';
import { ModularServicesExplorer } from '../components/home/ModularServicesExplorer';
import { FsmVsAdvisorComparison } from '../components/home/FsmVsAdvisorComparison';
import { DualPathCards } from '../components/home/DualPathCards';
import { RevenueGrowthSimulator } from '../components/home/RevenueGrowthSimulator';
import { AgencyVsSbloomVisual } from '../components/home/AgencyVsSbloomVisual';
import { ClientLogoMarquee } from '../components/home/ClientLogoMarquee';
import { BottomCornerScrollShowcase } from '../components/home/BottomCornerScrollShowcase';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1 - Hero (High Graphical Cockpit & 1-Tap Appointment Booker) */}
      <section className="hero-final-section">
        {/* Seamless Vector Silk Wave Layer at the Bottom */}
        <div className="hero-bottom-silk-wrapper" aria-hidden="true">
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="hero-bottom-silk-svg"
          >
            <defs>
              <linearGradient id="silkFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5ECE0" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#EADBCC" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#F8F3EC" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#E6D5C3" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="silkFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EDE2D3" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FBF8F2" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#DFCDB8" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow1)"
            />
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow2)"
            />
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65"
              stroke="url(#silkSheen)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Delicate Golden Orbital Curves Behind Cockpit */}
        <HeroSubtleCurves />

        <div className="hero-final-container">
          {/* Left Column: Sharp Messaging & Direct CTAs */}
          <div className="hero-final-content">
            <div className="hero-final-eyebrow">
              <span className="eyebrow-text">✦ 360° HYBRID LEAD GENERATION</span>
              <span className="eyebrow-line" />
            </div>

            <h1 className="hero-final-title">
              We help you get<br />
              <span className="hero-mocha-gold">more revenue.</span>
            </h1>

            <p className="hero-final-desc">
              Not with vanity likes or meaningless views. We bring real, paying customers to your business—in person and online.
            </p>

            <div className="hero-final-buttons">
              <Link to="/contact" className="btn-final-primary">
                <span>Talk to sBLOOM</span>
                <svg className="btn-arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#services-explorer" className="btn-final-secondary">
                Explore 4 Services
              </a>
            </div>

            {/* Micro-Trust Proof Row (Zero Cognitive Load) */}
            <div className="hero-trust-chips-row">
              <div className="hero-trust-chip">
                <span className="hero-trust-star">★ 4.9</span>
                <span>Client Rating</span>
              </div>
              <span className="hero-trust-dot">•</span>
              <div className="hero-trust-chip">
                <span className="hero-trust-gold">100%</span>
                <span>Attributed Revenue</span>
              </div>
              <span className="hero-trust-dot">•</span>
              <div className="hero-trust-chip">
                <span className="hero-trust-green">Zero</span>
                <span>Locked Retainers</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Graphical Live Cockpit & 1-Tap Appointment Booker */}
          <div className="hero-final-showcase">
            <HeroRevenueCockpit />
          </div>
        </div>
      </section>

      {/* LOWER LUXURY SILK WRAPPER */}
      <div className="home-lower-silk-wrapper">
        {/* SECTION 2 - 4 Modular Ways We Bring You Revenue (FSM, Affiliate, Core Digital, Influencers) */}
        <ModularServicesExplorer />

        {/* SECTION 3 - FSM vs. Affiliate Comparison (Inside Your Team vs. Outside in the Market) */}
        <FsmVsAdvisorComparison />

        {/* SECTION 4 - Interactive Revenue Simulator & Industry Plan Matcher */}
        <RevenueGrowthSimulator />

        {/* SECTION 5 - Visual Contrast: Traditional Agency vs. sBLOOM Revenue Partner */}
        <AgencyVsSbloomVisual />

        {/* SECTION 6 - Dual Paths (Grow My Business vs. Earn as an Affiliate) */}
        <DualPathCards />

        {/* SECTION 7 - Trusted Clients Logo Cloud (3 Alternating Scrolling Lines) */}
        <ClientLogoMarquee />

        {/* SECTION 8 - Final High-Converting Appointment Callout */}
        <section className="home-final-cta-section">
          <div className="container">
            <ScrollReveal delay={0}>
              <h2 className="home-final-cta-title">Your business deserves more revenue. Let’s build your pipeline.</h2>
              <div className="home-final-cta-btn-wrap">
                <Link to="/contact" className="home-final-cta-btn">
                  <span>Talk to sBLOOM About Revenue</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* Interactive Bottom-Right Corner Scroll Pipeline */}
      <BottomCornerScrollShowcase />
    </div>
  );
};

export default HomePage;
