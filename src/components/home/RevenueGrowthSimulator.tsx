import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Store, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Sparkles,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './RevenueGrowthSimulator.css';

interface IndustryProfile {
  id: string;
  name: string;
  icon: React.ReactNode;
  recommendedChannels: Array<{
    name: string;
    type: string;
    why: string;
  }>;
  estimatedPipeline: string;
  fastestWin: string;
  timeline: string;
  idealFor: string;
}

const INDUSTRIES: IndustryProfile[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: <Building2 size={18} />,
    recommendedChannels: [
      { name: 'Google Maps Top 3', type: 'Digital', why: 'Locals searching "best clinic near me" book within 24h.' },
      { name: 'Affiliate Doctor Network', type: 'Referral', why: 'General physicians refer specialist patient cases for commission.' },
      { name: 'Field Sales Outreach', type: 'In-Person', why: 'Corporate wellness camp tie-ups with nearby offices.' },
    ],
    estimatedPipeline: '45 - 80 New Patients / Mo',
    fastestWin: 'Google Maps Local Pack Rank #1–3',
    timeline: 'First inquiries in 7–14 days',
    idealFor: 'Dental, Eye Care, Multi-specialty & Diagnostic Centers',
  },
  {
    id: 'education',
    name: 'Schools & Higher Ed',
    icon: <GraduationCap size={18} />,
    recommendedChannels: [
      { name: 'Affiliate Educator Network', type: 'Referral', why: 'Respected teachers & counselors recommend your academy.' },
      { name: 'Influencer Reach', type: 'Digital', why: 'Parent/student campus walkthrough video reels.' },
      { name: 'Field Admissions Team', type: 'In-Person', why: 'Trained staff pitching directly at school hubs & fairs.' },
    ],
    estimatedPipeline: '60 - 150 Inquiries / Season',
    fastestWin: 'Educator Referral Desk + Campus Video',
    timeline: 'Active pipeline in 10 days',
    idealFor: 'K-12 Schools, Coaching Institutes, Colleges & Tech Academies',
  },
  {
    id: 'b2b',
    name: 'B2B & High-Ticket',
    icon: <Briefcase size={18} />,
    recommendedChannels: [
      { name: 'Field Sales Marketing (FSM)', type: 'In-Person', why: 'Equipped reps visiting commercial hubs with tailored pitch decks.' },
      { name: 'Executive Affiliate Connectors', type: 'Referral', why: 'Senior directors introducing warm corporate contacts.' },
      { name: 'High-Conversion Web', type: 'Digital', why: 'Fast case study proof funnel with direct booking desk.' },
    ],
    estimatedPipeline: '8 - 20 Qualified Contracts / Mo',
    fastestWin: 'Direct FSM Territory Outreach Playbook',
    timeline: 'First presentations in 5 days',
    idealFor: 'Consulting, Industrial Supply, Software & Corporate Services',
  },
  {
    id: 'retail',
    name: 'Retail, Fitness & Wellness',
    icon: <Store size={18} />,
    recommendedChannels: [
      { name: 'Local Influencer Reach', type: 'Digital', why: 'Authentic creator visits showing the real customer experience.' },
      { name: 'Google Maps Optimization', type: 'Digital', why: 'Capture footfall searches within a 5km radius.' },
      { name: 'Partner Affiliate Discounts', type: 'Referral', why: 'Nearby businesses cross-recommending each other.' },
    ],
    estimatedPipeline: '120 - 250 Walk-ins / Mo',
    fastestWin: 'Creator Walkthrough Reel + Google Reviews Pack',
    timeline: 'Immediate buzz within 48h',
    idealFor: 'Gyms, Spas, Salons, Boutique Retail & Fine Dining',
  },
];

export const RevenueGrowthSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('healthcare');
  const activeProfile = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  return (
    <section className="rev-sim-section" id="revenue-simulator">
      <div className="container rev-sim-container">
        {/* Header */}
        <div className="rev-sim-header">
          <ScrollReveal delay={0}>
            <div className="rev-sim-eyebrow-wrap">
              <span className="rev-sim-eyebrow-line" />
              <span className="rev-sim-eyebrow">✦ INTERACTIVE REVENUE SIMULATOR</span>
              <span className="rev-sim-eyebrow-line" />
            </div>
            <h2 className="rev-sim-title">
              See Your Tailored <span className="rev-sim-accent">Revenue Pipeline.</span>
            </h2>
            <p className="rev-sim-sub">
              No guesswork. Pick your business type to see the exact channel combination that brings qualified, paying clients.
            </p>
          </ScrollReveal>
        </div>

        {/* Industry Selector Tabs */}
        <div className="rev-sim-tabs-wrap">
          <div className="rev-sim-tabs" role="tablist">
            {INDUSTRIES.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(ind.id)}
                  className={`rev-sim-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-btn-icon">{ind.icon}</span>
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Pipeline Simulator Cockpit */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="rev-sim-cockpit-card"
          >
            {/* Top Bar Indicator */}
            <div className="sim-top-bar">
              <div className="sim-top-left">
                <span className="sim-live-pulse" />
                <span className="sim-live-label">RECOMMENDED STRATEGY FOR:</span>
                <span className="sim-industry-badge">{activeProfile.name}</span>
              </div>
              <span className="sim-ideal-for">Best for {activeProfile.idealFor}</span>
            </div>

            {/* 2-Column Main Display */}
            <div className="sim-cockpit-grid">
              {/* Left Column: Recommended Channel Stack */}
              <div className="sim-col-channels">
                <div className="sim-col-label">
                  <Target size={14} className="sim-lbl-icon" />
                  <span>YOUR RECOMMENDED REVENUE CHANNELS (PICK 1 OR COMBINE):</span>
                </div>

                <div className="sim-channels-list">
                  {activeProfile.recommendedChannels.map((ch, idx) => (
                    <div key={idx} className="sim-ch-item">
                      <div className="sim-ch-num">0{idx + 1}</div>
                      <div className="sim-ch-content">
                        <div className="sim-ch-head">
                          <h4 className="sim-ch-name">{ch.name}</h4>
                          <span className={`sim-ch-pill ${ch.type.toLowerCase()}`}>{ch.type}</span>
                        </div>
                        <p className="sim-ch-why">{ch.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Projected Impact + 1-Tap Booking */}
              <div className="sim-col-action">
                <div className="sim-impact-box">
                  <div className="sim-impact-header">
                    <TrendingUp size={20} className="sim-impact-icon" />
                    <span>PROJECTED PIPELINE CAPACITY</span>
                  </div>
                  <div className="sim-impact-number">{activeProfile.estimatedPipeline}</div>
                  
                  <div className="sim-stats-mini-row">
                    <div className="sim-mini-stat">
                      <span className="stat-label">Fastest Win</span>
                      <span className="stat-val">{activeProfile.fastestWin}</span>
                    </div>
                    <div className="sim-mini-stat">
                      <span className="stat-label">Initial Traction</span>
                      <span className="stat-val">{activeProfile.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Instant Appointment Callout */}
                <div className="sim-action-box">
                  <div className="sim-action-text">
                    <h4 className="sim-action-title">Want this pipeline running for your business?</h4>
                    <p className="sim-action-desc">
                      Book a free 15-minute revenue audit. We’ll show you available local search volume and connector partners in your area.
                    </p>
                  </div>
                  <Link to="/contact" className="sim-action-btn">
                    <Calendar size={16} />
                    <span>Book 15-Min Strategy Session</span>
                    <ArrowRight size={16} />
                  </Link>
                  <div className="sim-trust-pills">
                    <span>✓ 100% Free Audit</span>
                    <span>•</span>
                    <span>✓ No Obligation</span>
                    <span>•</span>
                    <span>✓ Zero Fluff</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RevenueGrowthSimulator;

