import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users2, 
  Handshake, 
  Globe2, 
  Megaphone, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Target,
  Compass
} from 'lucide-react';
import { MODULAR_SERVICES, type ModularServiceItem } from '../../data/contentData';
import { ScrollReveal } from '../ScrollReveal';
import './ModularServicesExplorer.css';

export const ModularServicesExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('fsm');

  const activeService = MODULAR_SERVICES.find((s) => s.id === activeTab) || MODULAR_SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'fsm':
        return <Users2 size={20} strokeWidth={2} />;
      case 'advisors':
        return <Handshake size={20} strokeWidth={2} />;
      case 'digital':
        return <Globe2 size={20} strokeWidth={2} />;
      case 'influencers':
        return <Megaphone size={20} strokeWidth={2} />;
      default:
        return <Compass size={20} strokeWidth={2} />;
    }
  };

  return (
    <section className="mse-section" id="services-explorer" aria-label="Our 4 Revenue Services">
      <div className="container">
        {/* Header Section */}
        <ScrollReveal delay={0}>
          <div className="mse-header">
            <div className="mse-eyebrow-wrap">
              <span className="mse-eyebrow-line" aria-hidden="true" />
              <span className="mse-eyebrow">✦ 4 WAYS WE BRING YOU REVENUE</span>
              <span className="mse-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="mse-main-title">
              Choose the exact service your business needs.
            </h2>
            <p className="mse-subtitle">
              Every business has a different bottleneck. Pick any individual service below, or combine them to build your complete in-person and digital revenue engine.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Tab Navigation Selector */}
        <div className="mse-tabs-container">
          <div className="mse-tabs-track" role="tablist" aria-label="Select Revenue Service">
            {MODULAR_SERVICES.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`mse-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <span className="mse-tab-num">{service.num}</span>
                  <span className="mse-tab-icon">{getServiceIcon(service.id)}</span>
                  <span className="mse-tab-label">{service.shortLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="mse-tab-active-indicator"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase Card */}
        <div className="mse-card-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="mse-service-card"
            >
              <div className="mse-card-grid">
                {/* Left Column: Context, Who It's For, Revenue Impact & CTA */}
                <div className="mse-card-col-left">
                  <div className="mse-card-meta">
                    <span className="mse-meta-pill">
                      {activeService.environment} · {activeService.source}
                    </span>
                    <span className="mse-meta-category">{activeService.category}</span>
                  </div>

                  <h3 className="mse-card-title">{activeService.name}</h3>
                  <p className="mse-card-tagline">{activeService.tagline}</p>

                  {/* Who This Is For Box */}
                  <div className="mse-forwho-box">
                    <div className="mse-forwho-label">
                      <Target size={16} className="mse-forwho-icon" />
                      <span>WHO THIS IS FOR:</span>
                    </div>
                    <p className="mse-forwho-text">{activeService.forWho}</p>
                  </div>

                  {/* Revenue Result Highlight */}
                  <div className="mse-revenue-box">
                    <div className="mse-revenue-badge">
                      <TrendingUp size={16} />
                      <span>REVENUE IMPACT</span>
                    </div>
                    <p className="mse-revenue-text">{activeService.revenueImpact}</p>
                  </div>

                  <div className="mse-card-actions">
                    {activeService.id === 'advisors' ? (
                      <a
                        href="https://sbloom.ottobon.in/provider"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-final-primary mse-action-btn"
                      >
                        <span>Go to Affiliate Provider Portal</span>
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link
                        to={`/contact?service=${activeService.id}`}
                        className="btn-final-primary mse-action-btn"
                      >
                        <span>Inquire for {activeService.shortLabel}</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Column: Step-by-Step "How We Help" & Deliverables */}
                <div className="mse-card-col-right">
                  <div className="mse-help-header">
                    <span className="mse-help-eyebrow">THE SBLOOM ADVANTAGE</span>
                    <h4 className="mse-help-heading">Exactly How We Help You:</h4>
                  </div>

                  <div className="mse-help-steps">
                    {activeService.howWeHelp.map((step, idx) => (
                      <div key={idx} className="mse-help-step-item">
                        <div className="mse-step-badge">0{idx + 1}</div>
                        <div className="mse-step-content">
                          <h5 className="mse-step-title">{step.title}</h5>
                          <p className="mse-step-desc">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mse-deliverables-box">
                    <span className="mse-deliverables-label">WHAT'S INCLUDED:</span>
                    <div className="mse-deliverables-grid">
                      {activeService.deliverables.map((item, idx) => (
                        <div key={idx} className="mse-deliv-item">
                          <CheckCircle2 size={16} className="mse-deliv-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Banner: Complete Freedom of Choice */}
        <ScrollReveal delay={100}>
          <div className="mse-freedom-banner">
            <div className="mse-freedom-content">
              <div className="mse-freedom-icon-wrap">
                <Sparkles size={24} className="mse-freedom-icon" />
              </div>
              <div className="mse-freedom-text">
                <h4 className="mse-freedom-title">Choose 1 Service, or Combine All 4.</h4>
                <p className="mse-freedom-desc">
                  You don’t have to buy a rigid bundle. Start with what hurts most right now, or let us build a unified in-person and digital acquisition machine tailored to your exact budget and targets.
                </p>
              </div>
            </div>
            <div className="mse-freedom-cta">
              <Link to="/contact" className="btn-freedom-primary">
                <span>Talk to sBLOOM About Revenue</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModularServicesExplorer;

