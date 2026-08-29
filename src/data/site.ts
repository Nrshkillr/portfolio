export const siteConfig = {
  name: "NARESH",
  fullName: "Naresh",
  title: "Full-Stack Developer · Software Developer · Creative Technologist · Website Builder",
  tagline: "I build modern digital experiences and practical software that solve real problems.",
  description: "Full-stack developer focused on building modern web applications, intelligent systems, and practical digital products.",
  heroHeading: "BUILDING DIGITAL EXPERIENCES THAT MATTER.",
  heroSub: "Full-stack developer focused on building modern web applications, intelligent systems, and practical digital products.",
  email: "naresh@example.com",
  location: "Chennai, India",
  availability: "Open for opportunities",
  url: "https://naresh.dev",
  ogImage: "/profile.png",
  profileImage: "profile.png", // public/profile.png (also profile.jpg fallback available)
  links: {
    github: "https://github.com/Nrshkillr/",
    linkedin: "",
    twitter: "",
    email: "nrshkillr@gmail.com",
  },
  stats: [
    { value: "3+", label: "Years Learning & Building", numeric: 3 },
    { value: "20+", label: "Projects & Experiments", numeric: 20 },
    { value: "10+", label: "Technologies", numeric: 10 },
    { value: "∞", label: "Ideas & Counting", numeric: 999 },
  ],
  currentlyBuilding: {
    name: "Innoventory 2.0",
    description: "Next version of inventory system with AI enhancements and advanced analytics.",
    status: "Building" as const, // Building | Experimenting | Learning
  },
  education: [
    {
      degree: "M.Sc. Computer Science",
      school: "Dr. Ambedkar Government Arts College, Chennai",
      year: "2024 – 2026",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Dr. Ambedkar Government Arts College, Chennai",
      year: "2021 – 2024",
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
