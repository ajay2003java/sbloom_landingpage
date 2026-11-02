export interface ServicePillar {
  num: string;
  title: string;
  subtitle: string;
  deliverables: string[];
}

export interface ModularServiceItem {
  id: 'fsm' | 'advisors' | 'digital' | 'influencers';
  num: string;
  name: string;
  shortLabel: string;
  category: string;
  environment: 'In-Person' | 'Digital';
  source: 'Internal' | 'External';
  tagline: string;
  forWho: string;
  howWeHelp: {
    title: string;
    description: string;
  }[];
  revenueImpact: string;
  deliverables: string[];
}

export const MODULAR_SERVICES: ModularServiceItem[] = [
  {
    id: 'fsm',
    num: '01',
    name: 'Field Sales Marketing (FSM)',
    shortLabel: 'Field Sales (FSM)',
    category: 'In-Person · Internal Team Support',
    environment: 'In-Person',
    source: 'Internal',
    tagline: 'We help your internal sales team close more deals on the ground.',
    forWho: 'Businesses that already have sales staff or field representatives, but aren’t getting enough closed deals.',
    howWeHelp: [
      {
        title: 'Field Pitching & Objection Handling',
        description: 'We train your internal team with battle-tested pitch decks, clear presentation scripts, and confidence in handling tough client questions.'
      },
      {
        title: 'Daily Outreach & Target Planning',
        description: 'We build structured daily outreach schedules, target account lists, and clear field execution playbooks for your reps.'
      },
      {
        title: 'Performance Commission Incentives',
        description: 'We set up transparent commission and incentive models so your staff is self-motivated to go out and close more business.'
      }
    ],
    revenueImpact: 'Your existing sales staff stops waiting for inquiries and actively brings in paying clients every single week.',
    deliverables: [
      'Sales Team Field Training & Pitch Coaching',
      'Daily Outreach Playbooks & Territory Targets',
      'Objection Handling & Closing Scripts',
      'Commission & Performance Incentive Structure'
    ]
  },
  {
    id: 'advisors',
    num: '02',
    name: 'Advisor & Affiliate Network',
    shortLabel: 'Advisor Network',
    category: 'In-Person · External Referral System',
    environment: 'In-Person',
    source: 'External',
    tagline: 'Trusted community leaders who send you customers for a commission.',
    forWho: 'Businesses that want high-trust word-of-mouth referrals without hiring a massive full-time sales army.',
    howWeHelp: [
      {
        title: 'Recruiting Local Connectors',
        description: 'We connect you with trusted professionals (doctors, teachers, community leaders, executives) who interact with your target audience daily.'
      },
      {
        title: 'Zero Technical Burden for Advisors',
        description: 'Advisors do not need to memorize technical product details—they simply make warm introductions based on their existing trust.'
      },
      {
        title: 'Automated Commission Management',
        description: 'We track who brought each lead and handle transparent commission payouts for every paying client they introduce.'
      }
    ],
    revenueImpact: 'You get warm, high-intent clients who are already pre-sold because someone they respect personally recommended you.',
    deliverables: [
      'Advisor Recruitment & Onboarding',
      'Warm Introduction & Referral Workflows',
      'Lead Attribution & Tracking System',
      'Commission Payout & Incentive Management'
    ]
  },
  {
    id: 'digital',
    num: '03',
    name: 'Core Digital Presence (Website, Google & Social)',
    shortLabel: 'Website & Google',
    category: 'Digital · Internal Conversion Assets',
    environment: 'Digital',
    source: 'Internal',
    tagline: 'Turn people searching for your services into paying customers.',
    forWho: 'Businesses losing customers because their online presence looks outdated or doesn’t show up when people search for them.',
    howWeHelp: [
      {
        title: 'High-Conversion Website',
        description: 'Not a slow, bloated brochure. A clean, rapid website engineered for one goal: getting visitors to call, WhatsApp, or book a consultation immediately.'
      },
      {
        title: 'Google Business Profile (Map Pack Top 3)',
        description: 'We optimize and manage your Google profile to rank in the Top 3 on Google Maps when locals search for your services.'
      },
      {
        title: 'Active Social Media Authority',
        description: 'Credible, consistent profiles that showcase patient/student proof, address doubts, and validate your reputation before they call.'
      }
    ],
    revenueImpact: 'Whenever someone searches for what you do, they find you first, trust your reputation, and contact your business right away.',
    deliverables: [
      'Conversion-Optimized High-Speed Website',
      'Google Business Profile (GBP) Local SEO & Reviews',
      'Social Media Profiles & Trust Nurturing',
      'Direct WhatsApp & Call Lead Funnels'
    ]
  },
  {
    id: 'influencers',
    num: '04',
    name: 'Influencer Partnerships',
    shortLabel: 'Influencer Reach',
    category: 'Digital · External Creator Amplification',
    environment: 'Digital',
    source: 'External',
    tagline: 'Trusted voices telling their followers to choose your business.',
    forWho: 'Businesses that want immediate local recognition and a rapid influx of warm inquiries.',
    howWeHelp: [
      {
        title: 'Matching Respected Voices',
        description: 'No generic internet entertainers. We partner you with respected local and domain creators whom your audience genuinely trusts.'
      },
      {
        title: 'Authentic Educational Stories',
        description: 'We script real, educational recommendations and behind-the-scenes walkthroughs—not cheesy scripted advertisements.'
      },
      {
        title: 'Direct Inbound Lead Routing',
        description: 'Every post or video guides interested viewers directly into your consultation link, registration form, or WhatsApp desk.'
      }
    ],
    revenueImpact: 'Thousands of pre-warmed followers hear about your business from someone they already trust, creating an immediate surge in inquiries.',
    deliverables: [
      'Creator Vetting & Partnership Negotiation',
      'Educational Video Scripting & Storytelling',
      'Campaign Tracking & Link Attribution',
      'Direct Consultation Booking Funnels'
    ]
  }
];

export interface IndustryProofBadge {
  label: string;
  iconName: string;
}

export interface IndustryConfig {
  id: 'healthcare' | 'education' | 'consulting';
  title: string;
  tagline: string;
  landingHeadline: string;
  landingDescription: string;
  cardHeadline?: string;
  cardDescription?: string;
  proofBadges: IndustryProofBadge[];
  imageUrl: string;
  landingImageUrl: string;
  quote: string;
  possibilitiesSection?: {
    eyebrow: string;
    headline: string;
    description: string;
    possibilities: {
      num: string;
      title: string;
      description: string;
    }[];
  };
}

export interface TailoredStrategyConfig {
  industryId: 'healthcare' | 'education' | 'consulting';
  entityType: 'expert' | 'institution';
  badge: string;
  headline: string;
  description: string;
  checklist: string[];
  organicTag: string;
  imageUrl: string;
  possibilitiesSection?: {
    eyebrow: string;
    headline: string;
    description: string;
    possibilities: {
      num: string;
      title: string;
      description: string;
    }[];
  };
}

export interface PartnerWorkflowStep {
  step: string;
  owner: string;
  description: string;
}

export interface PartnerRole {
  title: string;
  iconName: string;
  description: string;
}

// Approved BUILD · CREATE · PROMOTE Framework
export const SERVICE_PILLARS: ServicePillar[] = [
  {
    num: '01',
    title: 'GET FOUND',
    subtitle: 'Help people find your business online and understand what you offer.',
    deliverables: [
      'SEO & Search Visibility',
      'Google Business Profile',
      'Website',
      'Social Media Profiles'
    ]
  },
  {
    num: '02',
    title: 'TELL YOUR STORY',
    subtitle: 'Create clear content that helps people understand your business and remember you.',
    deliverables: [
      'Content Ideas & Planning',
      'Social Media Content',
      'Videos & Explainer Content',
      'Ad Creatives'
    ]
  },
  {
    num: '03',
    title: 'REACH THE RIGHT PEOPLE',
    subtitle: 'Get your business in front of the right people through online advertising and partnerships.',
    deliverables: [
      'Meta Ads',
      'Google Ads',
      'Influencer Partnerships'
    ]
  }
];

// Industries Configuration (Screen 01, 02, 03)
export const INDUSTRIES_DATA: Record<string, IndustryConfig> = {
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'Build Patient Trust & Strengthen Your Practice',
    landingHeadline: 'Healthcare',
    landingDescription: 'We help healthcare professionals and organizations build trust, tell their story, and reach the right people.',
    cardHeadline: 'Build Trust. Share Your Expertise.',
    cardDescription: 'Create content that helps patients understand your services and get to know your practice.',
    proofBadges: [
      { label: 'Patients', iconName: 'Heart' },
      { label: 'Procedures', iconName: 'FileText' },
      { label: 'Awareness', iconName: 'Users' },
      { label: 'Trust', iconName: 'ShieldCheck' }
    ],
    imageUrl: '/industry-healthcare.jpg',
    landingImageUrl: '/industry-healthcare-hero.jpg',
    quote: 'Every medical breakthrough begins with trust. We help you share clinical mastery with warmth and authority.'
  },
  education: {
    id: 'education',
    title: 'Education',
    tagline: 'Attract Students & Showcase Academic Excellence',
    landingHeadline: 'Education',
    landingDescription: 'We help schools, universities, and educators showcase what they offer, connect with the right audiences, and build trust.',
    cardHeadline: 'Showcase What Makes Your Institution Special.',
    cardDescription: 'Highlight your programs, faculty, campus, and learning experience to connect with students and families.',
    proofBadges: [
      { label: 'Learners', iconName: 'GraduationCap' },
      { label: 'Curricula', iconName: 'BookOpen' },
      { label: 'Reputation', iconName: 'Award' },
      { label: 'Outcomes', iconName: 'TrendingUp' }
    ],
    imageUrl: '/industry-education.jpg',
    landingImageUrl: '/edu_landing_image.png',
    quote: 'Knowledge is transformative only when it is understood. We help educators inspire a global audience.',
    possibilitiesSection: {
      eyebrow: 'EDUCATION STORIES',
      headline: 'Your education story has something worth sharing.',
      description: 'From programs and educators to student experiences and campus life, we help you communicate what makes your education brand worth choosing.',
      possibilities: [
        {
          num: '01',
          title: 'Programs & Courses',
          description: 'Make your courses and programs easier for prospective students and learners to understand.'
        },
        {
          num: '02',
          title: 'Educator & Faculty Profiles',
          description: 'Introduce the educators and experts who make your institution and programs distinctive.'
        },
        {
          num: '03',
          title: 'Student Stories',
          description: 'Share student experiences, achievements, and journeys in a clear and authentic way.'
        },
        {
          num: '04',
          title: 'Campus & Community',
          description: 'Show the people, places, events, and experiences that bring your education community to life.'
        },
        {
          num: '05',
          title: 'Admissions & Awareness',
          description: 'Communicate admissions information, important dates, programs, and opportunities clearly.'
        },
        {
          num: '06',
          title: 'Academic Stories & Achievements',
          description: 'Share research, academic achievements, events, milestones, and the work happening across your institution.'
        }
      ]
    }
  },
  consulting: {
    id: 'consulting',
    title: 'Consulting',
    tagline: 'Reach the Right Clients & Build Trust',
    landingHeadline: 'Consulting',
    landingDescription: 'We help consultants and advisory firms clearly communicate what they know, showcase their expertise, and reach the right people.',
    cardHeadline: 'Share Your Expertise. Build Your Presence.',
    cardDescription: 'Turn your knowledge, insights, and services into content that helps potential clients understand your value.',
    proofBadges: [
      { label: 'Expertise', iconName: 'Briefcase' },
      { label: 'Insights', iconName: 'Target' },
      { label: 'Visibility', iconName: 'ShieldCheck' },
      { label: 'Growth', iconName: 'TrendingUp' }
    ],
    imageUrl: '/industry-consulting.jpg',
    landingImageUrl: '/const2_image.png',
    quote: 'Consulting excellence is built on differentiated insights. We turn strategic methodologies into market authority.'
  }
};

// All 6 Tailored Strategy Matrix Combinations (Screen 05)
export const TAILORED_STRATEGIES: Record<string, TailoredStrategyConfig> = {
  'healthcare-expert': {
    industryId: 'healthcare',
    entityType: 'expert',
    badge: 'HEALTHCARE | EXPERT',
    headline: 'Your Expertise.\nA Wider Reach.',
    description: 'We help doctors, specialists, and healthcare experts turn their knowledge into clear content and reach the people looking for it.',
    checklist: [
      'Doctor & Specialist Branding',
      'Patient Education Content',
      'Clinical Explainer Videos',
      'Healthcare Social Media Content',
      'Healthcare Advertising',
      'Expert Articles & Healthcare Content'
    ],
    organicTag: 'Your Knowledge. More Impact.',
    imageUrl: '/doc_expert.png',
    possibilitiesSection: {
      eyebrow: 'HEALTHCARE CONTENT',
      headline: 'Your expertise has stories worth sharing.',
      description: 'Turn complex healthcare topics into clear, useful content people can understand.',
      possibilities: [
        {
          num: '01',
          title: 'PATIENT EDUCATION',
          description: 'Make healthcare topics easier to understand.'
        },
        {
          num: '02',
          title: 'PROCEDURE & TREATMENT EXPLAINERS',
          description: 'Explain procedures and treatments clearly.'
        },
        {
          num: '03',
          title: 'DOCTOR & SPECIALIST STORIES',
          description: 'Introduce the people behind your expertise.'
        },
        {
          num: '04',
          title: 'PRACTICE & EXPERT CONTENT',
          description: 'Share your work, ideas, experience, and perspective.'
        }
      ]
    }
  },
  'healthcare-institution': {
    industryId: 'healthcare',
    entityType: 'institution',
    badge: 'HEALTHCARE | ORGANIZATION',
    headline: 'Your Organization.\nClearly Seen. Clearly Understood.',
    description: 'We help hospitals, clinics, and healthcare organizations showcase their services, people, and facilities — and help the right audiences find them.',
    checklist: [
      'Hospital & Department Branding',
      'Doctor & Specialist Profiles',
      'Healthcare Awareness & Advertising',
      'Google Business Profile & Local Search',
      'Healthcare Websites & Appointment Journeys',
      'Community & Institutional Content'
    ],
    organicTag: 'Scale Care. Inspire Trust.',
    imageUrl: '/healthcare_inst.png',
    possibilitiesSection: {
      eyebrow: 'HEALTHCARE STORIES',
      headline: 'Your organization has stories worth telling.',
      description: 'From services and specialists to facilities and community initiatives, we help you communicate what matters.',
      possibilities: [
        {
          num: '01',
          title: 'SERVICES & SPECIALTIES',
          description: 'Help people understand what your organization offers.'
        },
        {
          num: '02',
          title: 'DOCTORS & EXPERTS',
          description: 'Introduce the people behind your care.'
        },
        {
          num: '03',
          title: 'PATIENT EDUCATION',
          description: 'Make important healthcare information easier to understand.'
        },
        {
          num: '04',
          title: 'FACILITIES & COMMUNITY',
          description: 'Show your environment, achievements, and role in the community.'
        }
      ]
    }
  },
  'education-expert': {
    industryId: 'education',
    entityType: 'expert',
    badge: 'EDUCATION | EXPERT',
    headline: 'Share What You Know.\nReach More Learners.',
    description: 'We help educators, authors, coaches, and subject experts turn what they know into clear content, useful learning experiences, and a stronger online presence.',
    checklist: [
      'Expert & Educator Branding',
      'Turning Your Knowledge Into Content',
      'Short Lessons & Explainer Videos',
      'LinkedIn, Newsletter & Social Content',
      'Masterclasses & Online Course Launches',
      'Speaking, Interviews & Expert Content'
    ],
    organicTag: 'Ideas That Teach. Voices That Guide.',
    imageUrl: '/edu_expert.png',
    possibilitiesSection: {
      eyebrow: 'EDUCATION CONTENT',
      headline: 'Your knowledge has stories worth sharing.',
      description: 'Turn what you know into content, learning experiences, and ideas people can understand, remember, and learn from.',
      possibilities: [
        {
          num: '01',
          title: 'EXPERT CONTENT',
          description: 'Turn your knowledge into useful articles, posts, newsletters, and other content.'
        },
        {
          num: '02',
          title: 'LESSONS & EXPLAINERS',
          description: 'Break down difficult ideas into clear lessons and explainer videos.'
        },
        {
          num: '03',
          title: 'COURSES & MASTERCLASSES',
          description: 'Turn your expertise into structured learning experiences.'
        },
        {
          num: '04',
          title: 'SPEAKING & EXPERT STORIES',
          description: 'Share your ideas through talks, interviews, presentations, and expert content.'
        }
      ]
    }
  },
  'education-institution': {
    industryId: 'education',
    entityType: 'institution',
    badge: 'EDUCATION | ORGANIZATION',
    headline: 'Your Organization.\nClearly Seen. Clearly Understood.',
    description: 'We help schools, universities, and education organizations showcase their programs, people, and campus — and help the right audiences find them.',
    checklist: [
      'Program & Course Content',
      'Faculty & Expert Profiles',
      'Campus & Student Experience Content',
      'Admissions & Open Day Campaigns',
      'Education Websites & Search',
      'Academic, Alumni & Community Stories'
    ],
    organicTag: 'Brighter Minds. Stronger Future.',
    imageUrl: '/institute_image.png',
    possibilitiesSection: {
      eyebrow: 'EDUCATION STORIES',
      headline: 'Show what makes your organization worth choosing.',
      description: 'From programs and faculty to campus life and student experiences, we help you communicate what matters.',
      possibilities: [
        {
          num: '01',
          title: 'PROGRAMS & COURSES',
          description: 'Make what you offer easier to understand.'
        },
        {
          num: '02',
          title: 'FACULTY & EXPERTS',
          description: 'Introduce the people behind your organization.'
        },
        {
          num: '03',
          title: 'CAMPUS & STUDENT LIFE',
          description: 'Show the experience beyond the classroom.'
        },
        {
          num: '04',
          title: 'ACADEMIC & COMMUNITY STORIES',
          description: 'Share achievements, events, research, and milestones.'
        }
      ]
    }
  },
  'consulting-expert': {
    industryId: 'consulting',
    entityType: 'expert',
    badge: 'CONSULTING | EXPERT',
    headline: 'Share What You Know.\nReach the Right People.',
    description: 'We help consultants, advisors, and independent experts clearly communicate what they know, showcase their work, and reach the right people.',
    checklist: [
      'Consultant & Expert Branding',
      'Expert Articles & Insights',
      'Video & Expert Content',
      'LinkedIn & Social Content',
      'Websites & Search Visibility',
      'Presentations, Reports & Whitepapers'
    ],
    organicTag: 'Clear Expertise. Stronger Reach.',
    imageUrl: '/consulent_image.png'
  },
  'consulting-institution': {
    industryId: 'consulting',
    entityType: 'institution',
    badge: 'CONSULTING | INSTITUTION',
    headline: 'Showcase What You Do.\nReach the Right People.',
    description: 'We help consulting firms clearly explain what they do, showcase their expertise, and make their work easier for the right people to find.',
    checklist: [
      'Consultant & Firm Branding',
      'Case Studies & Client Stories',
      'Expert & Team Videos',
      'LinkedIn & Social Content',
      'Websites & Search Visibility',
      'Reports, Presentations & Industry Content'
    ],
    organicTag: 'Clear Expertise. Better Reach.',
    imageUrl: '/const_inst.png'
  }
};

// Creative Workspace / Partner Gig Information (Screen 06)
export const PARTNER_WORKFLOW_STEPS: PartnerWorkflowStep[] = [
  {
    step: '01',
    owner: 'sBLOOM',
    description: 'We secure the client, align the strategic scope, and generate the brief, production script, or editorial blog topic.'
  },
  {
    step: '02',
    owner: 'PARTNER',
    description: 'You claim the gig and execute the technical work (video editing, sound design, shooting, or brand graphics) with total creative focus.'
  },
  {
    step: '03',
    owner: 'sBLOOM',
    description: 'We handle quality control, final multi-channel deployment, client management, revisions, and ensure prompt payments.'
  }
];

export const PARTNER_ROLES: PartnerRole[] = [
  {
    title: 'Video Editors',
    iconName: 'Video',
    description: 'Short-form reel specialists, long-form documentary cutters, and rhythm-driven storytellers.'
  },
  {
    title: 'Videographers',
    iconName: 'Camera',
    description: 'On-site cinema directors and lighting experts capturing authentic doctor & executive interviews.'
  },
  {
    title: 'Designers',
    iconName: 'Palette',
    description: 'Brand identity architects, UI designers, and carousel graphic specialists.'
  },
  {
    title: 'Content Writers',
    iconName: 'FileText',
    description: 'Editorial researchers, medical copywriters, and executive thought-leadership ghostwriters.'
  },
  {
    title: 'Creative Executors',
    iconName: 'Wand2',
    description: 'Motion graphic artists, sound engineers, and creative producers managing deliverables.'
  }
];
