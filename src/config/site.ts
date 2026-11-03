export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItemData {
  number: string;
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  tag: string;
}

export interface ValueItemData {
  number: string;
  name: string;
  description: string;
  principle: string;
}

export const siteConfig = {
  name: "Different Elite Group",
  shortName: "DEG",
  tagline: "More Than an Agency. A Pathway to Your Future.",
  supportingStatement: "Believe in Your Potential. Build Your Future. Become Elite.",
  brandStatements: [
    "Different Ambition. Elite Standards. One Vision.",
    "Your Journey. Our Commitment.",
  ],
  purpose: "To support the player. Develop the person. Create the pathway. Shape the future.",
  quotes: {
    hero: "“Believe in Your Potential. Build Your Future. Become Elite.”",
    aboutMain: "“Every Player Has a Story. Every Journey Deserves a Pathway.”",
    aboutFeature1: "“We don’t believe in treating players as numbers. We believe in recognising the individual behind the talent.”",
    aboutFeature2: "“Every player matters. Every journey is different. Every ambition deserves the right support.”",
    mission: "“Building More Than Football Careers.”",
    services: "“Guidance for Every Stage of Your Journey.”",
    approach: "“Different Values. One Commitment.”",
    closing: "“To support the player. Develop the person. Create the pathway. Shape the future.”",
  },
  location: {
    country: "United Kingdom",
    scope: "Worldwide Operations",
  },
  contact: {
    email: "enquiries@differentelitegroup.com",
    phone: "+44 (0) 20 7946 0880",
    instagramHandle: "@differentelitegroup",
    instagramUrl: "https://instagram.com/differentelitegroup",
  },
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/differentelitegroup",
      handle: "@differentelitegroup",
    },
  ],
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  services: [
    {
      number: "01",
      id: "representation",
      title: "Player Representation, Career Management & Brand Management",
      shortDesc: "Strategic representation designed to protect player interests and guide trajectory across every career phase.",
      tag: "Career & Representation",
      points: [
        "Personalised career planning tailored to individual athletic goals",
        "Long-term development strategies with milestone reviews",
        "Guidance on football-related career decisions and progression",
        "Support exploring suitable club opportunities globally",
        "Assistance with contract discussions and negotiations, where appropriately authorised and licensed",
        "Ongoing proactive career guidance and open communication",
      ],
    },
    {
      number: "02",
      id: "development",
      title: "Player Development & Progression",
      shortDesc: "Holistic evaluation and continuous improvement of athletic, technical and mental capabilities.",
      tag: "Athletic Excellence",
      points: [
        "Identifying individual strengths and targeted development areas",
        "Establishing realistic, measurable development goals",
        "Technical, tactical and physical progression pathways",
        "Instilling professional standards and elite training habits",
        "Match preparation, consistent performance and recovery habits",
        "Access to specialised coaching, mentoring and development resources",
      ],
    },
    {
      number: "03",
      id: "pathways",
      title: "Club Opportunities & Career Pathways",
      shortDesc: "Building legitimate bridges to top academies, domestic clubs and international leagues.",
      tag: "Club Pathways",
      points: [
        "Identifying suitable club environments matching player profiles",
        "Exploring trials and assessments where available and legitimate",
        "Thorough preparation for competitive football opportunities",
        "Academy, youth, senior and professional ladder progression",
        "Cultivating direct relationships with clubs, sporting directors and scouts",
        "Guidance on high-level football expectations and competitive cultures",
      ],
    },
    {
      number: "04",
      id: "support",
      title: "Support On and Off the Pitch",
      shortDesc: "360-degree personal care ensuring the player thrives as a whole human being.",
      tag: "Player Wellbeing",
      points: [
        "Regular, candid communication and personal check-ins",
        "Consistent encouragement during challenging sporting periods and injuries",
        "Cultivating professionalism, emotional balance and accountability",
        "Nurturing confidence, self-worth and inner motivation",
        "Signposting to qualified wellbeing and medical professionals when needed",
        "Relocation, lifestyle adaptation and family support coordination",
      ],
    },
    {
      number: "05",
      id: "mentorship",
      title: "Mentorship & Personal Guidance",
      shortDesc: "Instilling elite athlete psychology, resilience and uncompromising mental toughness.",
      tag: "Mindset & Mentorship",
      points: [
        "Building steadfast confidence and enduring self-belief",
        "Developing a championship mentality suited for high-pressure environments",
        "Instilling a meticulous professional attitude on and off duty",
        "Fostering daily discipline and performance consistency",
        "Responding constructively and positively to setbacks and criticism",
        "Setting meaningful long-term personal and sporting milestones",
      ],
    },
    {
      number: "06",
      id: "branding",
      title: "Professional Branding & Player Exposure",
      shortDesc: "Elevating the player's personal profile with modern digital storytelling and media training.",
      tag: "Brand & Media",
      points: [
        "Professional social media strategy and digital etiquette guidance",
        "Bespoke football CVs and high-impact digital player dossiers",
        "Curated career portfolios showcasing athletic statistics and milestones",
        "Professional playing footage, tactical cutaways and highlight reels",
        "Authentic personal branding aligned with athlete core values",
        "Professional conduct, media training and reputation protection",
      ],
    },
    {
      number: "07",
      id: "planning",
      title: "Long-Term Career Planning",
      shortDesc: "Futureproofing the athlete's journey through education, financial wisdom and second-career planning.",
      tag: "Future & Heritage",
      points: [
        "Comprehensive multi-year career longevity planning",
        "Encouraging education, qualifications and personal development",
        "Financial awareness, budgeting fundamentals and wealth preservation guidance",
        "Structured career transition planning well before retirement",
        "Exploring life and enterprise opportunities after professional football",
        "Facilitating access to suitably qualified and regulated specialists where necessary",
      ],
    },
  ] as ServiceItemData[],

  values: [
    {
      number: "01",
      name: "TRUST",
      principle: "The Foundation",
      description:
        "We aim to build honest, transparent and lasting relationships. Players should feel confident that their interests are taken seriously at every turn.",
    },
    {
      number: "02",
      name: "COMMITMENT",
      principle: "Unwavering Dedication",
      description:
        "We want to demonstrate genuine dedication to the development, wellbeing and long-term ambitions of every player we represent.",
    },
    {
      number: "03",
      name: "INTEGRITY",
      principle: "Highest Standards",
      description:
        "We believe in doing things properly, communicating honestly and maintaining uncompromising professional standards across all dealings.",
    },
    {
      number: "04",
      name: "DEVELOPMENT",
      principle: "Continuous Growth",
      description:
        "We encourage continuous improvement, both as footballers on the pitch and as rounded, grounded individuals off it.",
    },
    {
      number: "05",
      name: "OPPORTUNITY",
      principle: "Clear Pathways",
      description:
        "We aim to identify and pursue meaningful pathways that support players’ ambitions without making unrealistic promises.",
    },
  ] as ValueItemData[],
};
