import React from 'react';
import { Link } from 'react-router';
import { 
  Users2, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  Coins, 
  BookOpen, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './FsmVsAdvisorComparison.css';

export const FsmVsAdvisorComparison: React.FC = () => {
  return (
    <section className="fsm-adv-section" aria-label="In-Person Lead Generation Comparison">
      <div className="container">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="fsm-adv-header">
            <div className="fsm-adv-eyebrow-wrap">
              <span className="fsm-adv-eyebrow-line" aria-hidden="true" />
              <span className="fsm-adv-eyebrow">✦ ON-THE-GROUND REVENUE CHANNELS</span>
              <span className="fsm-adv-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="fsm-adv-title">
              In-Person Leads: Inside Your Team & Outside in the Community
            </h2>
            <p className="fsm-adv-subtitle">
              We activate both sides of real-world business growth. Understand how our internal Field Sales support and external Affiliate Marketing network work together to bring you revenue.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Comparison Cards Grid */}
        <div className="fsm-adv-grid">
          {/* Card 1: Internal FSM */}
          <ScrollReveal delay={100}>
            <div className="fsm-adv-card card-fsm">
              <div className="fsm-card-badge-wrap">
                <span className="fsm-badge-pill badge-internal">INTERNAL TEAM SUPPORT</span>
                <span className="fsm-badge-number">01</span>
              </div>

              <div className="fsm-card-header">
                <div className="fsm-icon-wrap icon-fsm">
                  <Users2 size={26} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="fsm-card-name">Field Sales Marketing (FSM)</h3>
                  <p className="fsm-card-sub">Your Internal Staff, Enabled to Close</p>
                </div>
              </div>

              <p className="fsm-card-description">
                We embed with your existing sales and front-desk team. We equip them with pitch decks, objection scripts, and target outreach routines so they actively generate leads from the field.
              </p>

              <hr className="fsm-card-divider" />

              <div className="fsm-points-list">
                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <BookOpen size={17} />
                  </div>
                  <div>
                    <span className="point-title">Product Knowledge: Deep & Technical</span>
                    <p className="point-desc">Your staff is trained extensively on your exact procedures, courses, USPs, and compliance guidelines.</p>
                  </div>
                </div>

                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <Award size={17} />
                  </div>
                  <div>
                    <span className="point-title">How They Generate Leads: Active Pitching</span>
                    <p className="point-desc">Direct institutional visits, clinic liaisoning, local seminar activations, and face-to-face consultation conversion.</p>
                  </div>
                </div>

                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <Coins size={17} />
                  </div>
                  <div>
                    <span className="point-title">Commission Model: Performance Incentives</span>
                    <p className="point-desc">Staff receives structured incentives and commissions for hitting on-ground lead and enrollment targets.</p>
                  </div>
                </div>
              </div>

              <div className="fsm-card-footer">
                <Link to="/contact?service=fsm" className="btn-fsm-link">
                  <span>Inquire for FSM Training</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: External Advisor */}
          <ScrollReveal delay={200}>
            <div className="fsm-adv-card card-advisor">
              <div className="fsm-card-badge-wrap">
                <span className="fsm-badge-pill badge-external">EXTERNAL REFERRAL NETWORK</span>
                <span className="fsm-badge-number">02</span>
              </div>

              <div className="fsm-card-header">
                <div className="fsm-icon-wrap icon-advisor">
                  <Handshake size={26} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="fsm-card-name">Affiliate Marketing</h3>
                  <p className="fsm-card-sub">Trusted People & Partners Sending You Clients</p>
                </div>
              </div>

              <p className="fsm-card-description">
                A curated affiliate network of respected doctors, educators, executives, and community leaders who refer warm clients from their personal and professional networks for a commission.
              </p>

              <hr className="fsm-card-divider" />

              <div className="fsm-points-list">
                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <Sparkles size={17} />
                  </div>
                  <div>
                    <span className="point-title">Product Knowledge: Trust & Relationship First</span>
                    <p className="point-desc">Affiliates don’t need technical product mastery—they leverage their personal credibility to make warm introductions.</p>
                  </div>
                </div>

                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <Award size={17} />
                  </div>
                  <div>
                    <span className="point-title">How They Generate Leads: Warm Referrals</span>
                    <p className="point-desc">Recommending your business to peers, family, and colleagues who are already actively seeking your exact expertise.</p>
                  </div>
                </div>

                <div className="fsm-point-item">
                  <div className="point-icon-box">
                    <Coins size={17} />
                  </div>
                  <div>
                    <span className="point-title">Commission Model: Direct Per-Lead Payout</span>
                    <p className="point-desc">Affiliates earn a clear, rewarding commission for every verified paying customer they introduce via our Provider Portal.</p>
                  </div>
                </div>
              </div>

              <div className="fsm-card-footer">
                <a 
                  href="https://sbloom.ottobon.in/provider" 
                  className="btn-fsm-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Join Affiliate Program & Earn Commission</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FsmVsAdvisorComparison;

