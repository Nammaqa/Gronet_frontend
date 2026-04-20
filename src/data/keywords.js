// src/data/keywords.js

// ── General ──────────────────────────────────────────────────────
export const TOPICS = [
  {
    category: "Development & Programming",
    items: ["Full-Stack Dev", "Mobile Apps", "Python & AI", "DevOps", "Cybersecurity", "Cloud Architecture"],
  },
  {
    category: "Design & Creativity",
    items: ["UI/UX Design", "Brand Strategy", "Motion Graphics", "Typography", "Product Design"],
  },
  {
    category: "Emerging Technologies",
    items: ["Web3 & Crypto", "Quantum Computing", "Generative AI", "Robotics", "VR/AR"],
  },
  {
    category: "Business & Management",
    items: ["Growth Hacking", "VC Funding", "Product Management", "Marketing Automation"],
  },
];

export const COURSES = [
  { id: 1, title: "Full-Stack Web Development", instructor: "John Doe", duration: "12 weeks", level: "Intermediate", tags: ["React", "Node.js", "MongoDB"] },
  { id: 2, title: "Advanced React Patterns", instructor: "Jane Smith", duration: "6 weeks", level: "Advanced", tags: ["React", "Design Patterns"] },
  { id: 3, title: "Introduction to Python for Data Science", instructor: "Mike Johnson", duration: "8 weeks", level: "Beginner", tags: ["Python", "Data Science"] },
  { id: 4, title: "UI/UX Design Fundamentals", instructor: "Sarah Wilson", duration: "10 weeks", level: "Beginner", tags: ["Design", "UI", "UX"] },
];

export const SEARCH_KEYWORDS = [
  "Web Development", "ReactJS", "Frontend", "Backend", "Full Stack",
  "JavaScript", "UI/UX Design", "Artificial Intelligence", "Machine Learning",
  "Data Science", "Cybersecurity", "Cloud Computing",
];

export const NAV_LINKS = ["Community", "nAcademy", "Articles", "Abyasa", "nCareer", "Hire From Us", "Reach Out"];

export const SHORTCUTS = ["My Groups", "Events", "Course Progress", "Saved Items"];

// ── Current User (shared across app) ────────────────────────────
export const CURRENT_USER = {
  name: "Felix Anderson",
  designation: "Senior Data Architect",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  status: "Active Member",
  profileViews: 0,
  comments: 0,
};

// ── Home Feed Posts ──────────────────────────────────────────────
export const FEED_POSTS = [
  {
    id: 1,
    isFeatured: false,
    author: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
      role: "Senior Cloud Architect",
    },
    title: "The Shift to Multi-Cloud: Lessons from 500 Migrations",
    content: "After analyzing over 500 cloud migration projects across various industries, we've identified key patterns that separate success from failure. The most critical factor isn't technical—it's organizational readiness and a unified data strategy across providers.",
    timestamp: "2 hours ago",
    tag: "@CLOUD ARCHITECTURE",
    engagement: { likes: 24, comments: 12 },
  },
  {
    id: 2,
    isFeatured: true,
    title: "Future of Decentralized Identity in Enterprise",
    author: {
      name: "Marcus Thorne",
      org: "Global Tech Council",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    },
    content: "As regulatory compliance requirements grow stricter, self-sovereign identity solutions are becoming essential for enterprise security frameworks. We explore how blockchain-based identity can coexist with legacy systems.",
    hashtags: ["#DigitalIdentity", "#Web3"],
    timestamp: "3 hours ago",
    engagement: { views: 234, comments: 45 },
  },
];

// ── Expert Connections (RightSidebar) ────────────────────────────
export const EXPERT_CONNECTIONS = [
  {
    name: "Elena Rodriguez",
    role: "Lead Researcher at AI Lab, Ex-DeepMind",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Cybersecurity Consultant for Fortune 100",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
  },
];

// ── My Gronetters Page ───────────────────────────────────────────
export const GRONETTERS_TABS = ["All Gronetters", "Pending", "Suggestions", "Following"];

export const GRONETTERS_INVITATIONS = [
  { id: 1, name: "Elena Rodriguez", role: "Lead Researcher at AI Lab", mutual: "12 mutual connections", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "David Chen", role: "Cybersecurity Consultant", mutual: "8 mutual connections", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Priya Nair", role: "Product Designer at Figma", mutual: "5 mutual connections", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
];

export const GRONETTERS_LIST = [
  { id: 1, name: "Sarah Chen", role: "AI Researcher", online: true, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Marcus Reid", role: "Full Stack Dev", online: true, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Priya Nair", role: "UX Designer", online: false, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
  { id: 4, name: "James Okafor", role: "Data Scientist", online: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { id: 5, name: "Lena Fischer", role: "Cloud Architect", online: false, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { id: 6, name: "Ravi Shankar", role: "DevOps Engineer", online: true, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
  { id: 7, name: "Amara Diallo", role: "Blockchain Dev", online: false, avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" },
  { id: 8, name: "Tom Nakamura", role: "ML Engineer", online: true, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
];

// ── Explore Page Data ────────────────────────────────────────────
export const EXPLORE_CARDS = [
  {
    id: 1,
    tag: "AI PROFESSIONAL DISCUSSION",
    tagColor: "bg-blue-100 text-blue-700",
    title: "The Ethical Implication of Generative Models in Enterprise Workflows",
    description: "As generative AI becomes embedded in enterprise systems, organizations must navigate complex ethical terrain around data privacy, bias, and accountability.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    author: { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    engagement: 142,
    size: "large",
  },
  {
    id: 2,
    tag: "PROFESSIONAL TIP",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Maximizing Deep Work in Asynchronous Teams",
    description: "Remote-first teams face unique challenges in maintaining focus. Here's how top performers structure their day to achieve deep work consistently.",
    image: null,
    author: { name: "Marcus Reid", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
    engagement: 89,
    size: "medium",
  },
  {
    id: 3,
    tag: "INDUSTRY INSIGHT",
    tagColor: "bg-green-100 text-green-700",
    title: "Why Neobanks are Pivoting to B2B Lending",
    description: "The consumer neobank market is saturating. Forward-thinking fintech players are now targeting SME lending as the next growth frontier.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    author: { name: "Priya Nair", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
    engagement: 217,
    size: "medium",
  },
];

// ── Create Post/Discussion Page Data ────────────────────────────
export const COMMUNITIES = ["AI Professionals", "Web Developers", "Data Scientists", "UX Designers"];
export const INDUSTRIES = ["Technology", "Finance", "Healthcare", "Education", "Marketing"];
export const POST_TAGS = ["#Leadership", "#AITrends", "#Networking"];
export const DISCUSSION_TAGS = ["#Innovation", "#TechTalks", "#FutureOfWork"];

// ── Article Detail Page Data ─────────────────────────────────────
export const ARTICLE = {
  title: "The Future of Algorithmic Networking: Beyond the Feed",
  author: {
    name: "Dr. Elias Thorne",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    meta: "Advanced Systems Group • 4 hours ago",
  },
  tags: ["#networking", "#algorithms", "#web3"],
  categories: ["Strategy", "Growth"],
  quote: "The next decade of professional exchange won't be defined by who you know, but by how accurately your expertise is indexed and surfaced.",
  paragraphs: [
    "For the past two decades, professional networking has been dominated by social graphs — systems that prioritize connections over competence. LinkedIn, Twitter, and their successors built empires on the premise that proximity to the right people was the key to professional advancement.",
    "But a new paradigm is emerging. Driven by advances in large language models, semantic search, and decentralized identity protocols, the next generation of professional platforms will surface expertise algorithmically — matching people not by who they know, but by what they know and how deeply they know it.",
    "This shift has profound implications for how we think about professional visibility, career development, and the very nature of networking itself. In an expertise-indexed world, the quality of your thinking — as expressed through writing, code, design, or data — becomes your primary professional asset.",
    "Early signals of this transition are already visible. Platforms like GitHub, Substack, and emerging Web3 credential systems are building the infrastructure for a more meritocratic professional internet — one where your work speaks louder than your connections.",
  ],
  engagement: { likes: 234, comments: 45, shares: 12 },
};

export const ARTICLE_COMMENTS = [
  {
    id: 1,
    name: "Sarah Miller",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    time: "2 hours ago",
    text: "This is a fascinating perspective on algorithmic networking. The idea of expertise indexing over social graphs is something I've been thinking about for a while.",
    likes: 12,
    replies: [
      {
        id: 11,
        name: "Dr. Elias Thorne",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        time: "1 hour ago",
        text: "Exactly, Sarah. The shift from social proximity to semantic relevance is the core thesis here.",
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Marcus Reid",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    time: "3 hours ago",
    text: "The Web3 angle is interesting but I wonder if decentralized identity systems are mature enough to support this kind of expertise graph at scale.",
    likes: 8,
    replies: [],
  },
];

// ── Profile Page Data ────────────────────────────────────────────
export const PROFILE_USER = {
  name: "Dr. Elias Thorne",
  subtitle: "Advanced Systems Group",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  tags: [
    { label: "Web Developer", color: "bg-blue-100 text-blue-700" },
    { label: "Zurich, CH", color: "bg-gray-100 text-gray-600" },
  ],
  about: "Leading architectural innovation in neural networks. Focused on the intersection of human cognitive patterns and silicon environments.",
  location: "Zurich, Switzerland",
  organization: "Advanced Systems Group",
};

export const PROFILE_TABS = ["All", "Posts", "Discussions"];

export const PROFILE_POSTS = [
  {
    id: 1,
    label: "Shared in Systems Research",
    title: "Beyond Binary: The Future of Cognitive Computing Architectures",
    description: "Exploring how next-generation neural architectures are blurring the line between biological cognition and machine intelligence, with implications for distributed systems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    likes: 142,
    comments: 38,
    time: "2h ago",
  },
  {
    id: 2,
    label: "Shared in Web Dev",
    title: "Rethinking State Management in Large-Scale React Applications",
    description: "A deep dive into modern patterns for managing complex state trees without sacrificing performance or developer experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    likes: 89,
    comments: 21,
    time: "1d ago",
  },
];
