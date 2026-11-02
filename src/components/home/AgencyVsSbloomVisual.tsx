import React from 'react';
import { Link } from 'react-router';
import { X, Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './AgencyVsSbloomVisual.css';

export const AgencyVsSbloomVisual: React.FC = () => {
  const comparisons = [
    {
      feature: 'Primary Goal',
      agency: 'Vanity views, likes & follower counts',
      sbloom: 'Real paying customers & closed revenue',
    },
    {
      feature: 'Channels Deployed',
      agency: 'Generic social posts & untracked boost ads',
      sbloom: 'In-person field sales + Affiliates + Google Maps + Video',
    },
    {
      feature: 'Contract Terms',
      agency: '6 to 12 month locked-in retainers',
      sbloom: 'Modular freedom: Choose 1 service or combine all 4',
    },
    {
      feature: 'Lead Attribution',
      agency: 'Vague metrics: "Brand awareness & reach"',
      sbloom: '100% transparent lead & consultation tracking',
    },
    {
      feature: 'Team Execution',
      agency: 'Junior interns recycling canned templates',
      sbloom: 'Battle-tested field coaching & senior strategists',
    },
  ];

  return (
    <section className="contrast-section" id="why-sbloom">
      <div className="container contrast-container">
        {/* Header */}
        <div className="contrast-header">
          <ScrollReveal delay={0}>
            <div className="contrast-eyebrow-wrap">
              <span className="contrast-eyebrow-line" />
              <span className="contrast-eyebrow">✦ SHARP CONTRAST</span>
              <span className="contrast-eyebrow-line" />
            </div>
            <h2 className="contrast-title">
              Why Businesses Switch from <br />
              <span className="contrast-title-serif">Typical Marketing Agencies.</span>
            </h2>
            <p className="contrast-desc">
              Most agencies sell you views. We build your customer acquisition pipeline.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Side-by-Side Comparison Card */}
        <ScrollReveal delay={120}>
          <div className="contrast-card">
            {/* Header Columns */}
            <div className="contrast-row-head">
              <div className="cell-feature">What You Get</div>
              <div className="cell-agency">
                <span className="badge-agency">❌ Typical Digital Agency</span>
              </div>
              <div className="cell-sbloom">
                <span className="badge-sbloom">✓ sBLOOM Revenue Partner</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="contrast-rows-body">
              {comparisons.map((row, idx) => (
                <div key={idx} className="contrast-data-row">
                  <div className="cell-feature font-bold">{row.feature}</div>
                  
                  <div className="cell-agency">
                    <div className="cell-icon-wrap negative">
                      <X size={15} />
                    </div>
                    <span>{row.agency}</span>
                  </div>

                  <div className="cell-sbloom">
                    <div className="cell-icon-wrap positive">
                      <Check size={15} />
                    </div>
                    <strong>{row.sbloom}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar: Action */}
            <div className="contrast-footer-bar">
              <div className="contrast-footer-text">
                <Zap size={18} className="contrast-zap-icon" />
                <span>Stop paying for vanity reach. Start acquiring paying customers.</span>
              </div>
              <Link to="/contact" className="btn-contrast-cta">
                <span>Book 15-Min Revenue Audit</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AgencyVsSbloomVisual;

