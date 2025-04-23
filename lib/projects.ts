export interface Project {
  id: number
  title: string
  description: string
  details: string
  image: string
  tags: string[]
  year: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Infinity Mobile Banking",
    description: "Led development of CBE's flagship mobile banking application and web platform.",
    details: "Providing comprehensive banking services to millions of customers through an innovative and secure platform.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600",
    tags: ["Banking", "Mobile App"],
    year: "2023",
    technologies: ["React.js", "Fabric", "TypeScript", "API", "CI/CD", "Next.js", "Tailwind CSS", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Secure Archive System",
    description: "Enterprise document management system for foreign banks.",
    details: "Developed a secure document archiving system implementing robust security measures and efficient document management.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1600",
    tags: ["Enterprise", "Security"],
    year: "2023",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Authentication", "Strapi", "Nginx"]
  },
  {
    id: 3,
    title: "Solomon Mulugeta Law",
    description: "Professional law firm website showcasing legal services.",
    details: "Designed and developed a modern website for Solomon Mulugeta & Associates law firm.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600",
    tags: ["Web Design", "Legal"],
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Cross-platform personal finance management app.",
    details: "Mobile application helping users track and manage their personal finances effectively.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600",
    tags: ["Mobile", "Finance"],
    year: "2024",
    technologies: ["Flutter", "Dart", "Firebase", "Google Play Console", "App Store Connect"]
  },
  {
    id: 5,
    title: "Happy House Sitters",
    description: "Australia's leading house and pet sitting platform.",
    details: "Connecting homeowners with trusted sitters since 1999.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600",
    tags: ["Platform", "Service"],
    year: "2023",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 6,
    title: "Onboarding System",
    description: "Automated employee onboarding workflow system.",
    details: "Streamlined onboarding process using Telegram bot and workflow automation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    tags: ["Automation", "Workflow"],
    year: "2023",
    technologies: ["Node.js", "Telegram Bot API", "Make.com", "Google Sheets", "Zapier"]
  }
] 