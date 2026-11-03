import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { HeroFloatingIcons } from '../components/home/HeroFloatingIcons';
import { HeroSubtleCurves } from '../components/home/HeroSubtleCurves';
import { ModularServicesExplorer } from '../components/home/ModularServicesExplorer';
import { FsmVsAdvisorComparison } from '../components/home/FsmVsAdvisorComparison';
import { DualPathCards } from '../components/home/DualPathCards';
import { HomePricingSection } from '../components/home/HomePricingSection';
import { ClientLogoMarquee } from '../components/home/ClientLogoMarquee';
import { WhyBetter } from '../components/home/WhyBetter';
import { BottomCornerScrollShowcase } from '../components/home/BottomCornerScrollShowcase';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1 - Hero (Final Master Implementation) */}
      <section className="hero-final-section">
        {/* Elegant, Seamless Vector Silk Wave Layer at the Bottom */}
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
            {/* Deep Silk Flow Layer */}
            <path
              d="M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow1)"
            />
            {/* Sheen Highlight Fold */}
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow2)"
            />
            {/* Silky Edge Sheen Line */}
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65"
              stroke="url(#silkSheen)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Delicate Golden Orbital Curves & Tiny Gliding Sparkles (Behind Icons) */}
        <HeroSubtleCurves />

        <div className="hero-final-container">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-final-content">
            <div className="hero-final-eyebrow">
              <span className="eyebrow-text">✦ LEAD GENERATION AGENCY</span>
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
          </div>

          {/* Right Column: Freely Floating Symbols (No Square Containers, Independent Motions) */}
          <div className="hero-final-showcase">
            <HeroFloatingIcons />
          </div>
        </div>
      </section>

      {/* LOWER LUXURY SILK WRAPPER - Continuous Uninterrupted Background Canvas */}
      <div className="home-lower-silk-wrapper">
        {/* SECTION 2 - 4 Modular Ways We Bring You Revenue (FSM, Advisors, Core Digital, Influencers) */}
        <ModularServicesExplorer />

        {/* SECTION 3 - FSM vs. Advisor Comparison (Inside Your Team vs. Outside in the Market) */}
        <FsmVsAdvisorComparison />

        {/* SECTION 4 - Dual Paths (Grow My Business vs. Earn as an Advisor) */}
        <DualPathCards />

        {/* SECTION 5: Why S-Bloom is Best Out of All Digital Marketing Agencies */}
        <WhyBetter />

        {/* SECTION 6 - Simple Plans. Real Business Growth (Pricing) */}
        <HomePricingSection />

        {/* SECTION 7 - Trusted Clients Logo Cloud (3 Alternating Scrolling Lines) */}
        <ClientLogoMarquee />

        {/* SECTION 8 - Final CTA */}
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

      {/* Interactive Bottom-Right Corner Scroll Pipeline: Camera ➔ Reel ➔ Post ➔ Ad ➔ Website ➔ Video */}
      <BottomCornerScrollShowcase />
    </div>
  );
};

export default HomePage;
