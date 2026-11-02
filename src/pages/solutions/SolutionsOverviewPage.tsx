import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  Search, 
  ShieldCheck, 
  Film, 
  Megaphone, 
  Target, 
  BarChart3,
  Users, 
  ArrowRight,
  ArrowLeft,
  Heart,
  PhoneCall,
  Award,
  Send,
  Volume2,
  VolumeX,
  UserCheck,
  type LucideIcon
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import './SolutionsPage.css';

interface SolutionsPageProps {
  initialSection?: string;
}

export type StageId = 'fsm' | 'advisors' | 'digital' | 'influencers';

interface StageData {
  id: StageId;
  num: string;
  label: string;
  shortLabel: string;
  category: string;
  tagline: string;
  titlePrimary: string;
  titleAccent: string;
  lead: string;
  ctaText: string;
  ctaLink: string;
  services: Array<{
    title: string;
    desc: string;
    icon: LucideIcon;
  }>;
}

const ALIAS_MAP: Record<string, number> = {
  fsm: 0,
  field: 0,
  'field-sales': 0,
  advisors: 1,
  advisor: 1,
  affiliate: 1,
  affiliates: 1,
  'affiliate-marketing': 1,
  digital: 2,
  build: 2,
  website: 2,
  gbp: 2,
  influencers: 3,
  influencer: 3,
  create: 3,
  promote: 3,
  grow: 0,
};

const STAGES: StageData[] = [
  {
    id: 'fsm',
    num: '01',
    label: 'FIELD SALES (FSM)',
    shortLabel: 'Field Sales',
    category: 'In-Person · Internal Team Support',
    tagline: 'Internal Feet-on-the-Street',
    titlePrimary: 'Train and equip your team to',
    titleAccent: 'close more on-ground deals.',
    lead: 'We embed with your internal sales and field staff, giving them pitch coaching, objection-handling scripts, and structured outreach routines to bring in paying clients.',
    ctaText: 'Inquire for Field Sales Support',
    ctaLink: '/contact?service=fsm',
    services: [
      {
        title: 'Sales Team Field Coaching',
        desc: 'Battle-tested pitch decks, live objection drills, and on-ground presentation coaching.',
        icon: Users,
      },
      {
        title: 'Outreach & Territory Playbooks',
        desc: 'Daily target mapping, structured visit schedules, and geographic follow-up routines.',
        icon: Target,
      },
      {
        title: 'Objection-Handling Scripts',
        desc: 'Proven answers to tough buyer doubts, pricing questions, and trust hurdles.',
        icon: ShieldCheck,
      },
      {
        title: 'Commission Incentive Structures',
        desc: 'Clear performance tier rewards designed to motivate your staff to close aggressively.',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'advisors',
    num: '02',
    label: 'AFFILIATE MARKETING',
    shortLabel: 'Affiliate Marketing',
    category: 'Referral & Commission System',
    tagline: 'External Warm Connectors & Affiliates',
    titlePrimary: 'Trusted community leaders sending you',
    titleAccent: 'warm paying clients.',
    lead: 'A curated network of respected doctors, educators, executives, and community connectors who introduce warm referrals from their network for a commission.',
    ctaText: 'Go to Affiliate Provider Portal',
    ctaLink: 'https://sbloom.ottobon.in/provider',
    services: [
      {
        title: 'Local Affiliate Recruitment',
        desc: 'Identify and onboard respected local authorities, doctors, professors, and professionals.',
        icon: UserCheck,
      },
      {
        title: 'Zero Technical Selling Burden',
        desc: 'Affiliates introduce warm leads based on personal trust; your team handles the closing.',
        icon: Heart,
      },
      {
        title: 'Automated Lead Attribution',
        desc: 'Transparent tracking via sbloom.ottobon.in/provider with real-time payout visibility.',
        icon: Search,
      },
      {
        title: 'Commission Payout Management',
        desc: 'Seamless, structured revenue-share disbursements that keep your affiliate partners loyal.',
        icon: Award,
      },
    ],
  },
  {
    id: 'digital',
    num: '03',
    label: 'WEBSITE & GOOGLE',
    shortLabel: 'Website & Google',
    category: 'Digital · Internal Conversion Assets',
    tagline: 'Inbound Local Dominance',
    titlePrimary: 'Turn people searching for you into',
    titleAccent: 'paying customers.',
    lead: 'A conversion-engineered website, Top 3 ranking on Google Maps (GBP), and active social media proof designed to capture every local search inquiry.',
    ctaText: 'Inquire for Website & Google Dominance',
    ctaLink: '/contact?service=digital',
    services: [
      {
        title: 'High-Conversion Website',
        desc: 'Fast, mobile-first design built specifically to drive phone calls and consultation bookings.',
        icon: Globe,
      },
      {
        title: 'Google Business Profile (Map Pack Top 3)',
        desc: 'Rank #1–3 on Google Maps when high-intent local buyers search for your services.',
        icon: MapPin,
      },
      {
        title: 'Active Social Media Authority',
        desc: 'Consistent proof, patient/student case studies, and answers to common buying doubts.',
        icon: ShieldCheck,
      },
      {
        title: 'Direct WhatsApp & Call Funnels',
        desc: 'Frictionless routing from search result directly to your intake desk or sales line.',
        icon: PhoneCall,
      },
    ],
  },
  {
    id: 'influencers',
    num: '04',
    label: 'INFLUENCER REACH',
    shortLabel: 'Influencer Reach',
    category: 'Digital · External Creator Amplification',
    tagline: 'Targeted Niche Creators',
    titlePrimary: 'Trusted domain voices telling their audience to',
    titleAccent: 'choose your business.',
    lead: 'Targeted domain and local creators sharing authentic recommendations and walkthroughs that direct pre-warmed followers straight to your consultation desk.',
    ctaText: 'Inquire for Influencer Partnerships',
    ctaLink: '/contact?service=influencers',
    services: [
      {
        title: 'Matching Respected Voices',
        desc: 'Curated niche domain creators whose audience matches your exact target customer profile.',
        icon: Megaphone,
      },
      {
        title: 'Authentic Educational Storytelling',
        desc: 'Real walkthroughs and experience reviews instead of scripted, unconvincing ad reads.',
        icon: Film,
      },
      {
        title: 'Campaign Tracking & Attribution',
        desc: 'Dedicated landing links, promo codes, and real-time inquiry attribution tracking.',
        icon: Target,
      },
      {
        title: 'Direct Consultation Booking Funnels',
        desc: 'Channel followers straight from video view to your booking or inquiry desk.',
        icon: Send,
      },
    ],
  },
];

export const SolutionsOverviewPage: React.FC<SolutionsPageProps> = ({ initialSection }) => {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeStage = STAGES[activeIdx];

  // Video State & Ref for Influencer Section (IMG_3694.mp4)
  const [isPromoteMuted, setIsPromoteMuted] = useState(true);
  const [isPromotePlaying, setIsPromotePlaying] = useState(true);
  const promoteVideoRef = useRef<HTMLVideoElement>(null);

  const togglePromoteMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (promoteVideoRef.current) {
      promoteVideoRef.current.muted = !promoteVideoRef.current.muted;
      setIsPromoteMuted(promoteVideoRef.current.muted);
    }
  };

  const togglePromotePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (promoteVideoRef.current) {
      if (promoteVideoRef.current.paused) {
        promoteVideoRef.current.play().catch(() => {});
        setIsPromotePlaying(true);
      } else {
        promoteVideoRef.current.pause();
        setIsPromotePlaying(false);
      }
    }
  };

  // Switch to a specific stage directly without scrolling
  const goToStage = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= STAGES.length) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);

    // Update URL hash smoothly
    const stageId = STAGES[newIdx].id;
    if (window.location.hash !== `#${stageId}`) {
      window.history.replaceState(null, '', `#${stageId}`);
    }
  };

  // Sync with URL hash or initialSection prop
  useEffect(() => {
    const raw = (initialSection || location.hash.replace('#', '')).toLowerCase();
    if (ALIAS_MAP[raw] !== undefined) {
      goToStage(ALIAS_MAP[raw]);
    } else {
      const foundIdx = STAGES.findIndex((s) => s.id === raw);
      if (foundIdx !== -1) {
        goToStage(foundIdx);
      }
    }
  }, [initialSection, location.hash]);

  // Smooth micro-transition between stages
  const pageVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 18 : -18,
      opacity: 0,
      scale: 0.99,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -18 : 18,
      opacity: 0,
      scale: 0.99,
      transition: {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div className="sol-page">
      {/* Background ambient warmth */}
      <div className="sol-bg-mesh" aria-hidden="true" />

      {/* =================================================================
         1. HERO INTRO — REVENUE FIRST
         ================================================================= */}
      <section className="sol-hero-intro">
        <div className="sol-container">
          <ScrollReveal delay={0}>
            <div className="sol-eyebrow-wrap">
              <span className="sol-eyebrow-line" />
              <span className="sol-eyebrow">360° HYBRID REVENUE MODEL</span>
              <span className="sol-eyebrow-line" />
            </div>
            <h1 className="sol-hero-title">
              Four distinct services built to{' '}
              <span className="sol-title-accent">generate more revenue.</span>
            </h1>
            <p className="sol-hero-desc">
              Not vanity likes or meaningless views. We bring real, paying customers to your business—in person and online. Choose any single service or combine all four.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =================================================================
         2. SOLUTIONS PRESENTATION SECTION (IN-PLACE, NO SCROLL HIJACKING)
         ================================================================= */}
      <div className="sol-presentation-wrap">
        <div className="sol-viewport">
          <div className="sol-container">
            {/* =============================================================
               3. PILL SWITCHER NAV (FIELD SALES, ADVISORS, WEBSITE, INFLUENCERS)
               ============================================================= */}
            <div className="sol-pill-nav-wrap">
              <div className="sol-pill-nav" role="tablist" aria-label="Revenue Services">
                {STAGES.map((stg, idx) => {
                  const isActive = activeIdx === idx;

                  return (
                    <button
                      key={stg.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`sol-pill-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => goToStage(idx)}
                    >
                      {isActive && (
                        <div className="sol-pill-sprout" aria-hidden="true">
                          <svg viewBox="0 0 34 26" fill="none" className="sol-sprout-svg">
                            <path
                              d="M10 22 C9 13 3 10 1 13 C-1 16 2 20 8 19 C10 19 10 21 10 22 Z"
                              fill="#4D9B77"
                            />
                            <path
                              d="M13 22 C13 10 18 3 26 4 C29 5 28 11 22 13 C17 15 14 18 13 22 Z"
                              fill="#66BC94"
                            />
                            <path
                              d="M11 22 C10 13 8 2 15 1 C19 1 19 6 16 12 C14 17 12 20 11 22 Z"
                              fill="#3B8160"
                            />
                          </svg>
                        </div>
                      )}
                      <span>{stg.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =============================================================
               4. THE PRESENTATION CARD
               ============================================================= */}
            <div className="sol-page-card-wrapper">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStage.id}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`sol-page-card sol-card-${activeStage.id}`}
                >
                  <div className="sol-card-top-bar" aria-hidden="true" />
                  
                  <div className="sol-card-grid">
                    {/* Left Column: Eyebrow badge, Headline, Lead, 4 Services */}
                    <div className="sol-card-content">
                      <div className="sol-card-badge-row">
                        <div className="sol-card-step-num">{activeStage.num}</div>
                        <span className="sol-card-tag">{activeStage.label}</span>
                        <span className="sol-badge-dash" />
                        <span className="sol-category-text">{activeStage.category}</span>
                      </div>
                      
                      <h2 className="sol-card-headline">
                        {activeStage.titlePrimary}{' '}
                        <span className="sol-card-headline-accent">{activeStage.titleAccent}</span>
                      </h2>
                      <p className="sol-card-lead">{activeStage.lead}</p>

                      <div className="sol-service-list">
                        {activeStage.services.map((svc, i) => {
                          const IconComp = svc.icon;
                          return (
                            <div key={i} className="sol-service-item">
                              <div className="sol-service-icon-box">
                                <IconComp size={16} strokeWidth={2.1} />
                              </div>
                              <div className="sol-service-text-wrap">
                                <h3 className="sol-service-title">{svc.title}</h3>
                                <p className="sol-service-desc">{svc.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {activeStage.ctaLink.startsWith('http') ? (
                        <a
                          href={activeStage.ctaLink}
                          className="sol-card-cta-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{activeStage.ctaText}</span>
                          <ArrowRight size={16} strokeWidth={2.4} />
                        </a>
                      ) : (
                        <Link to={activeStage.ctaLink} className="sol-card-cta-btn">
                          <span>{activeStage.ctaText}</span>
                          <ArrowRight size={16} strokeWidth={2.4} />
                        </Link>
                      )}
                    </div>

                    {/* Right Column: Tailored Pure CSS Visual Panels */}
                    <div className="sol-card-visual-wrap">
                      {/* SERVICE 01 — FIELD SALES (FSM) */}
                      {activeStage.id === 'fsm' && (
                        <div className="sol-mock-fsm">
                          <div className="sol-fsm-card">
                            <div className="sol-fsm-header">
                              <div className="sol-fsm-header-left">
                                <div className="sol-fsm-icon-badge">
                                  <Users size={16} />
                                </div>
                                <div>
                                  <div className="sol-fsm-title">Field Sales Pipeline</div>
                                  <div className="sol-fsm-subtitle">In-Person Ground Execution</div>
                                </div>
                              </div>
                              <span className="sol-fsm-status-tag">Daily Routine Active</span>
                            </div>

                            <div className="sol-fsm-kpi-row">
                              <div className="sol-fsm-kpi">
                                <span className="sol-kpi-val">48</span>
                                <span className="sol-kpi-lbl">Target Accounts</span>
                              </div>
                              <div className="sol-fsm-kpi">
                                <span className="sol-kpi-val">24</span>
                                <span className="sol-kpi-lbl">On-Site Pitches</span>
                              </div>
                              <div className="sol-fsm-kpi highlight">
                                <span className="sol-kpi-val">11</span>
                                <span className="sol-kpi-lbl">Deals Closed</span>
                                <span className="sol-kpi-trend">↑ 38%</span>
                              </div>
                            </div>

                            <div className="sol-fsm-playbook-box">
                              <div className="sol-fsm-playbook-head">
                                <ShieldCheck size={14} className="sol-fsm-gold-icon" />
                                <span>Equipped Sales Playbook</span>
                              </div>
                              <div className="sol-fsm-playbook-item">
                                <span className="sol-dot-bullet" />
                                <span>Objection: "Why switch from existing setup?" → Handled with ROI card</span>
                              </div>
                              <div className="sol-fsm-playbook-item">
                                <span className="sol-dot-bullet" />
                                <span>Territory map: 6 high-density visits per rep/day with instant logging</span>
                              </div>
                            </div>
                          </div>

                          {/* Floating Field-Ready Badge */}
                          <motion.div 
                            className="sol-float-rep-badge"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <div className="sol-rep-avatar-icon">
                              <Target size={15} />
                            </div>
                            <div>
                              <div className="sol-rep-name">Internal Team Coaching</div>
                              <div className="sol-rep-sub">Scripts · Objections · Performance Tiers</div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* SERVICE 02 — ADVISOR NETWORK */}
                      {activeStage.id === 'advisors' && (
                        <div className="sol-mock-advisors">
                          <div className="sol-adv-card">
                            <div className="sol-adv-header">
                              <div className="sol-adv-header-left">
                                <div className="sol-adv-icon-badge">
                                  <UserCheck size={16} />
                                </div>
                                <div>
                                  <div className="sol-adv-title">Warm Referral Attribution</div>
                                  <div className="sol-adv-subtitle">Community Connectors Desk</div>
                                </div>
                              </div>
                              <span className="sol-adv-status-tag">100% Warm Referrals</span>
                            </div>

                            <div className="sol-adv-referrals-list">
                              <div className="sol-adv-row">
                                <div className="sol-adv-avatar">DR</div>
                                <div className="sol-adv-info">
                                  <div className="sol-adv-name">Dr. R. Sharma <span className="sol-adv-role">(Senior Physician)</span></div>
                                  <div className="sol-adv-meta">4 Warm Patient Referrals</div>
                                </div>
                                <div className="sol-adv-status success">Attributed</div>
                              </div>

                              <div className="sol-adv-row">
                                <div className="sol-adv-avatar edu">ED</div>
                                <div className="sol-adv-info">
                                  <div className="sol-adv-name">Prof. Priya K. <span className="sol-adv-role">(Dean / Academic)</span></div>
                                  <div className="sol-adv-meta">8 Qualified Enrollments</div>
                                </div>
                                <div className="sol-adv-status success">Attributed</div>
                              </div>

                              <div className="sol-adv-row">
                                <div className="sol-adv-avatar biz">EX</div>
                                <div className="sol-adv-info">
                                  <div className="sol-adv-name">A. Sengupta <span className="sol-adv-role">(Industry Executive)</span></div>
                                  <div className="sol-adv-meta">2 Enterprise Introductions</div>
                                </div>
                                <div className="sol-adv-status pending">In Progress</div>
                              </div>
                            </div>

                            <div className="sol-adv-footer-bar">
                              <div className="sol-adv-metric">
                                <span className="sol-adv-m-lbl">Commission Model:</span>
                                <span className="sol-adv-m-val">Strictly on Closed Revenue</span>
                              </div>
                              <span className="sol-adv-zero-cold">Zero Cold Calling</span>
                            </div>
                          </div>

                          {/* Floating Trust Metric Badge */}
                          <motion.div 
                            className="sol-float-trust-badge"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                          >
                            <div className="sol-trust-star">★</div>
                            <div>
                              <div className="sol-trust-title">High-Trust Introductions</div>
                              <div className="sol-trust-desc">Connectors recommend · You close</div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* SERVICE 03 — WEBSITE & GOOGLE */}
                      {activeStage.id === 'digital' && (
                        <div className="sol-mock-build">
                          {/* Browser Window Card */}
                          <div className="sol-browser-card">
                            <div className="sol-browser-bar">
                              <div className="sol-dot-group">
                                <span className="sol-dot dot-red" />
                                <span className="sol-dot dot-yellow" />
                                <span className="sol-dot dot-green" />
                              </div>
                              <div className="sol-browser-nav">
                                <span className="nav-item active">Home</span>
                                <span className="nav-item">Services</span>
                                <span className="nav-item">Proof</span>
                                <span className="nav-item">Book Direct</span>
                              </div>
                            </div>
                            <div className="sol-browser-body">
                              <div className="sol-browser-left">
                                <h4 className="sol-browser-heading">Conversion-Ready Web</h4>
                                <div className="sol-wire-line w-85" />
                                <div className="sol-wire-line w-65" />
                                <div className="sol-wire-line w-45" />
                                <div className="sol-browser-btn-pill" />
                              </div>
                              <div className="sol-browser-preview-box" />
                            </div>
                          </div>

                          {/* Overlapping Floating Google Business Profile Card */}
                          <motion.div 
                            className="sol-float-gbp"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <div className="sol-gbp-header">
                              <div className="sol-google-icon-wrap">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.33 24 12 24z"/>
                                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.42l4.04-3.15z"/>
                                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                </svg>
                              </div>
                              <div>
                                <div className="sol-gbp-title">Google Maps Top 3</div>
                                <div className="sol-gbp-rating">
                                  <span className="sol-gbp-num">4.9</span>
                                  <span className="sol-gbp-stars">★★★★★</span>
                                  <span className="sol-gbp-reviews">(140+ reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="sol-gbp-row">
                              <MapPin size={13} className="sol-gbp-icon" />
                              <div className="sol-wire-line w-75" />
                            </div>
                            <div className="sol-gbp-row">
                              <Globe size={13} className="sol-gbp-icon" />
                              <div className="sol-wire-line w-55" />
                            </div>
                          </motion.div>

                          {/* Overlapping Floating Local Visibility Card */}
                          <motion.div 
                            className="sol-float-vis"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                          >
                            <div className="sol-vis-icon-wrap">
                              <BarChart3 size={18} strokeWidth={2.4} />
                            </div>
                            <div>
                              <div className="sol-vis-label">Local Search Inquiries</div>
                              <span className="sol-vis-arrow">↗ +145%</span>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* SERVICE 04 — INFLUENCER REACH */}
                      {activeStage.id === 'influencers' && (
                        <div className="sol-mock-promote sol-video-only-view">
                          <div 
                            className="sol-promote-video-box"
                            onClick={togglePromotePlay}
                            title={isPromotePlaying ? "Click to pause" : "Click to play"}
                            style={{ cursor: 'pointer' }}
                          >
                            <video
                              ref={promoteVideoRef}
                              src="/IMG_3694.mp4"
                              autoPlay
                              muted={isPromoteMuted}
                              loop
                              playsInline
                              className="sol-promote-video-element"
                            />

                            <div className="sol-video-top-overlay">
                              <div className="sol-video-live-badge">
                                <span className="sol-video-rec-dot" />
                                <span>CREATOR AMPLIFICATION</span>
                              </div>
                              <div className="sol-video-controls-group">
                                <button
                                  type="button"
                                  onClick={togglePromoteMute}
                                  className="sol-video-mini-btn"
                                  aria-label={isPromoteMuted ? "Unmute audio" : "Mute audio"}
                                  title={isPromoteMuted ? "Unmute" : "Mute"}
                                >
                                  {isPromoteMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                                </button>
                              </div>
                            </div>

                            <div className="sol-video-metrics-bar">
                              <div className="sol-video-stat">
                                <span className="sol-v-label">Target Audience</span>
                                <span className="sol-v-val">100% Niche Match</span>
                              </div>
                              <div className="sol-v-divider" />
                              <div className="sol-video-stat">
                                <span className="sol-v-label">Inquiry Funnel</span>
                                <span className="sol-v-val">Direct Consultation</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =============================================================
               5. PAGE CONTROLS BAR (PREV / NEXT & PAGE COUNTER)
               ============================================================= */}
            <div className="sol-page-controls-bar">
              <div className="sol-page-indicator">
                <span>Service <strong>{activeIdx + 1}</strong> of <strong>4</strong>:</span>
                <span className="sol-indicator-label">{activeStage.shortLabel}</span>
              </div>

              <div className="sol-page-arrows">
                <button
                  type="button"
                  className="sol-page-arrow-btn"
                  onClick={() => goToStage(activeIdx - 1)}
                  disabled={activeIdx === 0}
                  aria-label="Previous Service"
                >
                  <ArrowLeft size={15} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="sol-page-arrow-btn"
                  onClick={() => goToStage(activeIdx + 1)}
                  disabled={activeIdx === STAGES.length - 1}
                  aria-label="Next Service"
                >
                  <span>Next</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
         6. MODULAR FREEDOM SECTION — CHOOSE ANY 1 OR COMBINE ALL 4
         ================================================================= */}
      <section className="sol-modular-freedom-sec">
        <div className="sol-container">
          <ScrollReveal delay={0}>
            <div className="sol-modular-card">
              <div className="sol-modular-header">
                <div className="sol-eyebrow-wrap">
                  <span className="sol-eyebrow-line" />
                  <span className="sol-eyebrow">MODULAR FREEDOM</span>
                  <span className="sol-eyebrow-line" />
                </div>
                <h2 className="sol-modular-title">
                  Choose Any Single Service. <span className="sol-title-accent">Or Combine All 4.</span>
                </h2>
                <p className="sol-modular-desc">
                  You are never locked into an expensive, bloated marketing package. Take the exact channel your business needs today, and expand only when revenue justifies it.
                </p>
              </div>

              <div className="sol-modular-grid">
                <div className="sol-mod-box">
                  <div className="sol-mod-box-num">01</div>
                  <h3 className="sol-mod-box-title">Field Sales (FSM)</h3>
                  <span className="sol-mod-pill in-person">In-Person · Internal</span>
                  <p className="sol-mod-box-p">For businesses needing feet on the ground to pitch, overcome doubts, and sign customers directly.</p>
                  <Link to="/contact?service=fsm" className="sol-mod-link">
                    Inquire for FSM →
                  </Link>
                </div>

                <div className="sol-mod-box">
                  <div className="sol-mod-box-num">02</div>
                  <h3 className="sol-mod-box-title">Affiliate Marketing</h3>
                  <span className="sol-mod-pill in-person">Referral & Commission</span>
                  <p className="sol-mod-box-p">For organizations where credibility, prestige, and doctor/educator referrals drive high-ticket choices.</p>
                  <a 
                    href="https://sbloom.ottobon.in/provider" 
                    className="sol-mod-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Affiliate Provider Portal →
                  </a>
                </div>

                <div className="sol-mod-box">
                  <div className="sol-mod-box-num">03</div>
                  <h3 className="sol-mod-box-title">Website & Google</h3>
                  <span className="sol-mod-pill digital">Digital · Internal</span>
                  <p className="sol-mod-box-p">For capturing active, high-intent local searchers looking for your services on Google Maps right now.</p>
                  <Link to="/contact?service=digital" className="sol-mod-link">
                    Inquire Website & GBP →
                  </Link>
                </div>

                <div className="sol-mod-box">
                  <div className="sol-mod-box-num">04</div>
                  <h3 className="sol-mod-box-title">Influencer Reach</h3>
                  <span className="sol-mod-pill digital">Digital · External</span>
                  <p className="sol-mod-box-p">For fast audience trust through credible domain creators who recommend your business to their followers.</p>
                  <Link to="/contact?service=influencers" className="sol-mod-link">
                    Inquire Influencers →
                  </Link>
                </div>
              </div>

              <div className="sol-modular-cta-bar">
                <div className="sol-mod-cta-text">
                  <div className="sol-mod-cta-headline">Ready to solve your revenue bottlenecks?</div>
                  <div className="sol-mod-cta-sub">Let's find the exact combination that brings paying clients to your door.</div>
                </div>
                <Link to="/contact" className="sol-mod-cta-btn">
                  <span>Talk to sBLOOM</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SolutionsOverviewPage;
