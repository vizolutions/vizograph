// All text shown on the website lives in this file.
// Edit the words here — the layout components read from it.

export const site = {
  name: "Vizograph Solutions",
  description:
    "Vizograph Solutions transforms complex data into visually engaging and insightful narratives: tailored data visualization, interactive dashboards and advanced AI analytics.",
  url: "https://www.vizograph.com",
  email: "info@vizograph.com",
  foundedYear: 2021,
  tagline: "Transforming data into meaningful insights since 2017.",
};

/** Third-party tracking IDs used in app/layout.tsx. */
export const analytics = {
  googleAnalyticsId: "G-1LYZDHWJJH",
  metaPixelId: "2307774726698321",
};

/** Sections of the one-page site, in order. Drives the nav and the anchors. */
export const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const navLinks = sections.map((section) => ({
  label: section.label,
  href: `#${section.id}`,
}));

export const hero = {
  eyebrow: "Data visualization studio",
  heading: ["Data", "is", "beautiful"],
  subheading: "Transforming data into meaningful insights",
  primaryCta: { label: "What we do", href: "#services" },
  secondaryCta: { label: "See our work", href: "#work" },
};

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

export const services = {
  eyebrow: "Services",
  heading: "What we do",
  subheading: "We transform complex data into visually engaging and insightful narratives.",
  items: [
    {
      icon: "chart",
      title: "Tailored Data Visualization",
      text: "We provide custom data visualization solutions to help you understand your data better.",
    },
    {
      icon: "dashboard",
      title: "Interactive Dashboards",
      text: "We create dynamic and interactive dashboards to help you make data-driven decisions effectively.",
    },
    {
      icon: "ai",
      title: "Advanced AI Analytics",
      text: "We leverage advanced AI techniques to uncover hidden patterns and trends in your data.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  slug: string;
  name: string;
  caption: string;
  intro: string;
  description: string;
  /** Set when the project lives elsewhere: the card links straight out. */
  external?: string;
  /** Where the card points, for projects with their own page on the web. */
  link?: string;
  details: { label?: string; value: string }[];
};

export const projects = {
  eyebrow: "Projects",
  heading: "Things we have built",
  subheading: "Products and open-source libraries used by developers and agencies every day.",
  items: [
    {
      slug: "vizantra",
      name: "Vizantra",
      caption: "Client reporting platform",
      intro: "Our product for SEO and PPC agencies",
      description:
        "Vizantra connects a client's GA4, Search Console, Google Ads and Meta Ads once, then turns that live data into dashboards, branded reports and client portals, delivered on a schedule.",
      external: "https://vizantra.com",
      details: [
        { label: "Type", value: "Product" },
        { label: "For", value: "SEO and PPC agencies" },
      ],
    },
    {
      slug: "apex-charts",
      name: "ApexCharts",
      caption: "A JavaScript chart library",
      intro: "Making visualizations easy for developers",
      description:
        "ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages.",
      link: "https://apexcharts.com",
      details: [{ value: "Open Source" }, { label: "Category", value: "Developer Tools" }],
    },
    {
      slug: "apex-editor",
      name: "Apex Editor",
      caption: "Online graph maker",
      intro: "Graph Maker",
      description:
        "Beautiful, interactive, and insightful data visualizations using online graph maker.",
      link: "https://editor.apexcharts.com/c/new",
      details: [{ label: "Category", value: "Design Tools" }],
    },
    {
      slug: "apex-sankey",
      name: "Apex Sankey",
      caption: "Sankey diagrams",
      intro: "JavaScript Sankey Charts",
      description: "A JavaScript library to create beautiful sankey charts on the web.",
      link: "https://apexcharts.com/apexsankey",
      details: [{ value: "Open-source" }, { label: "Category", value: "Developer Tools" }],
    },
    {
      slug: "apex-tree",
      name: "Apex Tree",
      caption: "Organizational charts",
      intro: "Organizational Chart Library",
      description:
        "A library to create customizable organizational charts to illustrate hierarchical structure of a company, highlighting its roles and relationships.",
      link: "https://apexcharts.com/apextree",
      details: [{ value: "Open-source" }, { label: "Category", value: "Developer Tools" }],
    },
    {
      slug: "apex-maps",
      name: "ApexMaps",
      caption: "Map visualization library",
      intro: "Put your data on a map, geography included",
      description:
        "Choropleths, bubbles, markers and routes over 26 built-in geometry packs, so you are never the one finding, converting, or hosting boundary files.",
      link: "https://apexcharts.com/apexmaps",
      details: [{ label: "Category", value: "Developer Tools" }],
    },
  ] satisfies Project[],
};

/* -------------------------------------------------------------------------- */
/*  About and team                                                            */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About",
  heading: "Discover the story of our journey",
  subheading: "A small team that has been making data readable on the web since 2017.",
  timeline: [
    {
      date: "July 2017",
      title: "Our Humble Beginnings",
      text: "We published ApexCharts.js and its surrounding libraries which quickly became one of the most popular solutions for building charts on the web.",
    },
    {
      date: "March 2021",
      title: "A Firm is Born",
      text: "Vizograph Solutions was officially launched, offering specialized data visualization services.",
    },
    {
      date: "October 2022",
      title: "Transition to Full Service",
      text: "In addition to data visualization, we began incorporating AI to generate more profound insights from your data.",
    },
  ],
};

export const team = {
  eyebrow: "Team",
  heading: "The people behind it",
  subheading: "Meet the team behind Vizograph Solutions.",
  members: [
    { name: "Juned Chhipa", role: "Founder", image: "/images/team/juned2.jpg" },
    { name: "Yamin Lawar", role: "Engineering Manager", image: "/images/team/yamin.jpg" },
    { name: "Bhaumik Panchal", role: "Lead Fullstack Engineer", image: "/images/team/bhaumik.jpg" },
    { name: "Hamza Shaikh", role: "AI/ML Engineer", image: "/images/team/hamza.jpeg" },
    { name: "Hunain Chhipa", role: "Fullstack Engineer", image: "/images/team/hunain.jpeg" },
    { name: "Zaeem Kadri", role: "Frontend Developer", image: "/images/team/zaeem.jpg" },
    { name: "Naushadhusain Kadri", role: "Human Resource", image: "/images/team/naushad.jpg" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  emailLabel: "Email us at",
  addressLabel: "Address",
  /** Shown on the page, one line each. */
  address: [
    "Shop No. 33, Senior Complex, S. No. 389",
    "Opp. Beral Market, Danilimda",
    "Ahmedabad, Gujarat 380028, India",
  ],
  /** Same address in parts, for search engines (structured data). */
  addressParts: {
    street: "Shop No. 33, Senior Complex, S. No. 389, Opp. Beral Market",
    locality: "Danilimda, Ahmedabad",
    region: "Gujarat",
    postalCode: "380028",
    country: "IN",
  },
};

/** The glow-lit panel that closes the page. */
export const closingBand = {
  heading: "Have data worth looking at?",
  text: "Send us what you are working with and we will come back with how we would visualize it.",
  cta: { label: "Start a conversation", href: "#contact" },
};
